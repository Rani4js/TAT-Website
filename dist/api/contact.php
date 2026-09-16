<?php
declare(strict_types=1);

$configFile = __DIR__ . '/config.php';
$config = is_file($configFile) ? require $configFile : [];
$config = is_array($config) ? $config : [];

$allowedOrigins = [
    'https://togetherat.in',
    'https://www.togetherat.in',
    'http://localhost:5173',
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$requestBody = json_decode(file_get_contents('php://input'), true);

if (!is_array($requestBody)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request']);
    exit;
}

$clean = static function ($value, int $limit): string {
    return trim(substr((string) $value, 0, $limit));
};

$name = $clean($requestBody['name'] ?? '', 120);
$email = $clean($requestBody['email'] ?? '', 254);
$company = $clean($requestBody['company'] ?? '', 160);
$service = $clean($requestBody['service'] ?? '', 120);
$message = $clean($requestBody['message'] ?? '', 5000);

if ($name === '' || $service === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['error' => 'Please provide a valid name, email, service and message']);
    exit;
}

$setting = static function (string $name, array $config, string $default = ''): string {
    if (isset($config[$name]) && $config[$name] !== '') {
        return (string) $config[$name];
    }

    $environmentValue = getenv($name);
    if ($environmentValue !== false && $environmentValue !== '') {
        return (string) $environmentValue;
    }

    // Apache SetEnv may be exposed through $_SERVER instead of getenv() on cPanel.
    $serverValue = $_SERVER[$name] ?? '';
    return $serverValue !== '' ? (string) $serverValue : $default;
};

$databaseHost = $setting('TAT_DATABASE_HOST', $config, 'localhost');
$databaseName = $setting('TAT_DATABASE_NAME', $config);
$databaseUser = $setting('TAT_DATABASE_USER', $config);
$databasePassword = $setting('TAT_DATABASE_PASSWORD', $config);
$notificationEmail = $setting('TAT_NOTIFICATION_EMAIL', $config, 'support@togetherat.in');
$mailFrom = $setting('TAT_MAIL_FROM', $config, $notificationEmail);
$logoUrl = $setting('TAT_LOGO_URL', $config, 'https://togetherat.in/favicon-512.png');

if (
    $databaseName === '' ||
    $databaseUser === '' ||
    !filter_var($notificationEmail, FILTER_VALIDATE_EMAIL) ||
    !filter_var($mailFrom, FILTER_VALIDATE_EMAIL) ||
    !filter_var($logoUrl, FILTER_VALIDATE_URL) ||
    !function_exists('mail')
) {
    error_log('Contact form server configuration is incomplete.');
    http_response_code(500);
    echo json_encode(['error' => 'The enquiry service is not configured on the server']);
    exit;
}

$mailHeaderValue = static function (string $value): string {
    return str_replace(["\r", "\n"], '', $value);
};
$html = static function (string $value): string {
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
};

$subject = 'New website enquiry: ' . $service;
$submittedAt = date('Y-m-d H:i:s');
$logo = $html($logoUrl);
$safeName = $html($name);
$safeEmail = $html($email);
$safeCompany = $html($company !== '' ? $company : 'Not provided');
$safeService = $html($service);
$safeMessage = nl2br($html($message));
$safeSubmittedAt = $html($submittedAt);
$details = <<<HTML
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-top:24px">
  <tr><td style="padding:12px 0;border-bottom:1px solid #e7e1d8;color:#6e746f;font-size:12px;text-transform:uppercase;letter-spacing:1px">Name</td><td style="padding:12px 0;border-bottom:1px solid #e7e1d8;color:#17251d;font-size:14px;text-align:right">{$safeName}</td></tr>
  <tr><td style="padding:12px 0;border-bottom:1px solid #e7e1d8;color:#6e746f;font-size:12px;text-transform:uppercase;letter-spacing:1px">Email</td><td style="padding:12px 0;border-bottom:1px solid #e7e1d8;color:#17251d;font-size:14px;text-align:right">{$safeEmail}</td></tr>
  <tr><td style="padding:12px 0;border-bottom:1px solid #e7e1d8;color:#6e746f;font-size:12px;text-transform:uppercase;letter-spacing:1px">Company</td><td style="padding:12px 0;border-bottom:1px solid #e7e1d8;color:#17251d;font-size:14px;text-align:right">{$safeCompany}</td></tr>
  <tr><td style="padding:12px 0;color:#6e746f;font-size:12px;text-transform:uppercase;letter-spacing:1px">Service</td><td style="padding:12px 0;color:#17251d;font-size:14px;text-align:right">{$safeService}</td></tr>
</table>
<div style="margin-top:24px;padding:18px;background:#f7f4ef;border-left:3px solid #d9a15b;color:#17251d;font-size:14px;line-height:1.7">
  <strong style="display:block;margin-bottom:8px;color:#163c27">Project details</strong>
  {$safeMessage}
</div>
HTML;
$internalBody = <<<HTML
<!doctype html><html><body style="margin:0;background:#f1eee8;font-family:Arial,Helvetica,sans-serif;color:#17251d">
<div style="max-width:640px;margin:0 auto;padding:28px 16px">
  <div style="background:#163c27;padding:24px 28px;text-align:center"><img src="{$logo}" alt="Together Advanced Technologies" width="150" style="display:inline-block;max-width:150px;height:auto"></div>
  <div style="background:#fff;padding:32px 28px"><div style="color:#b27b3e;font-size:11px;letter-spacing:2px;text-transform:uppercase">New website enquiry</div><h1 style="margin:10px 0 6px;color:#163c27;font-size:26px">A new project conversation</h1><p style="margin:0;color:#6e746f;font-size:13px">Submitted {$safeSubmittedAt}</p>{$details}</div>
  <p style="margin:18px 0 0;text-align:center;color:#6e746f;font-size:11px">Together Advanced Technologies</p>
</div></body></html>
HTML;
$userBody = <<<HTML
<!doctype html><html><body style="margin:0;background:#f1eee8;font-family:Arial,Helvetica,sans-serif;color:#17251d">
<div style="max-width:640px;margin:0 auto;padding:28px 16px">
  <div style="background:#163c27;padding:24px 28px;text-align:center"><img src="{$logo}" alt="Together Advanced Technologies" width="150" style="display:inline-block;max-width:150px;height:auto"></div>
  <div style="background:#fff;padding:32px 28px"><div style="color:#b27b3e;font-size:11px;letter-spacing:2px;text-transform:uppercase">Thanks for reaching out</div><h1 style="margin:10px 0 14px;color:#163c27;font-size:26px">We received your enquiry</h1><p style="margin:0;color:#4d5b51;font-size:15px;line-height:1.7">Hi {$safeName},<br><br>Thanks for contacting Together Advanced Technologies. Our team will review your message and get back to you within 1–2 business days.</p>{$details}</div>
  <p style="margin:18px 0 0;text-align:center;color:#6e746f;font-size:11px">Together Advanced Technologies</p>
</div></body></html>
HTML;
$headers = implode("\r\n", [
    'From: ' . $mailHeaderValue($mailFrom),
    'Reply-To: ' . $mailHeaderValue($email),
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
]);

try {
    $database = new PDO(
        "mysql:host={$databaseHost};dbname={$databaseName};charset=utf8mb4",
        $databaseUser,
        $databasePassword,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]
    );

    $statement = $database->prepare(
        'INSERT INTO contact_submissions
            (name, email, company, service, message)
         VALUES
            (:name, :email, :company, :service, :message)'
    );
    $statement->execute([
        ':name' => $name,
        ':email' => $email,
        ':company' => $company !== '' ? $company : null,
        ':service' => $service,
        ':message' => $message,
    ]);

    $internalSent = mail(
        $notificationEmail,
        $subject,
        $internalBody,
        $headers
    );
    $userSent = mail(
        $email,
        'We received your enquiry | Together Advanced Technologies',
        $userBody,
        str_replace('Reply-To: ' . $mailHeaderValue($email), 'Reply-To: ' . $mailHeaderValue($notificationEmail), $headers)
    );

    if (!$internalSent || !$userSent) {
        error_log('Contact form email delivery failed.');
        http_response_code(502);
        echo json_encode(['error' => 'Your enquiry was saved, but the email service is not enabled']);
        exit;
    }

    echo json_encode(['success' => true]);
} catch (PDOException $error) {
    error_log('Contact form database error: ' . $error->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'The enquiry database is not configured correctly']);
} catch (Throwable $error) {
    error_log($error->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Unable to process your enquiry']);
}
