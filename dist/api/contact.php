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

// --- Basic payload-size guard (before we even attempt to parse it) ---
$rawBody = file_get_contents('php://input');
const MAX_BODY_BYTES = 262144; // 256 KB is generous for this form
if ($rawBody === false || strlen($rawBody) > MAX_BODY_BYTES) {
    http_response_code(413);
    echo json_encode(['error' => 'Request body too large']);
    exit;
}

$requestBody = json_decode($rawBody, true);

if (json_last_error() !== JSON_ERROR_NONE || !is_array($requestBody)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request']);
    exit;
}

// --- Honeypot: hidden field that should always be empty for real users ---
// Add a hidden input named "website" to the form (positioned off-screen,
// not just type="hidden" — some bots skip those). Leave it out of the
// visible UI entirely. If it's filled in, silently "succeed" without doing
// any real work.
$honeypot = $requestBody['website'] ?? '';
if (is_string($honeypot) && trim($honeypot) !== '') {
    echo json_encode(['success' => true]);
    exit;
}

// Only accept scalar values from the client; anything else (array/object)
// becomes an empty string instead of tripping a type-conversion warning.
$scalarOrEmpty = static function ($value): string {
    return is_scalar($value) ? (string) $value : '';
};

$clean = static function ($value, int $limit): string {
    return trim(substr($value, 0, $limit));
};

$name = $clean($scalarOrEmpty($requestBody['name'] ?? ''), 120);
$email = $clean($scalarOrEmpty($requestBody['email'] ?? ''), 254);
$company = $clean($scalarOrEmpty($requestBody['company'] ?? ''), 160);
$service = $clean($scalarOrEmpty($requestBody['service'] ?? ''), 120);
$message = $clean($scalarOrEmpty($requestBody['message'] ?? ''), 5000);

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
// Filesystem path to the logo, NOT a URL. Point this at the actual file on
// disk (e.g. the same file your public site serves at /favicon-512.png).
// Adjust the default below to match your real server layout, or set
// TAT_LOGO_PATH in config.php / the environment.
$logoPath = $setting('TAT_LOGO_PATH', $config, __DIR__ . '/../public/favicon-512.png');

if (
    $databaseName === '' ||
    $databaseUser === '' ||
    !filter_var($notificationEmail, FILTER_VALIDATE_EMAIL) ||
    !filter_var($mailFrom, FILTER_VALIDATE_EMAIL) ||
    !function_exists('mail')
) {
    error_log('Contact form server configuration is incomplete.');
    http_response_code(500);
    echo json_encode(['error' => 'The enquiry service is not configured on the server']);
    exit;
}

// --- Embed the logo inline as a base64 data URI ---
// This is the actual fix for the earlier delivery failure: a remotely
// *hosted* <img src="https://..."> gets fetched/checked by spam filters at
// submission time, and that check was rejecting the internal (same-domain)
// notification outright. Reading the file straight off disk and inlining
// its bytes means the message never references an external resource, so
// there's nothing for that check to flag. If the file can't be read for
// any reason, we log it and fall back to sending with no logo rather than
// failing the whole enquiry over a missing image.
$logoDataUri = '';
if (is_file($logoPath) && is_readable($logoPath)) {
    $logoBytes = file_get_contents($logoPath);
    $mimeType = match (strtolower((string) pathinfo($logoPath, PATHINFO_EXTENSION))) {
        'png' => 'image/png',
        'jpg', 'jpeg' => 'image/jpeg',
        'gif' => 'image/gif',
        'webp' => 'image/webp',
        'svg' => 'image/svg+xml',
        default => '',
    };
    if ($logoBytes !== false && $mimeType !== '') {
        $logoDataUri = 'data:' . $mimeType . ';base64,' . base64_encode($logoBytes);
    } else {
        error_log('Contact form: logo file read but MIME type unrecognized: ' . $logoPath);
    }
} else {
    error_log('Contact form: logo file not found or unreadable at ' . $logoPath . ' — sending emails without a logo.');
}
$logoImgTag = $logoDataUri !== ''
    ? '<img src="' . $logoDataUri . '" alt="Together Advanced Technologies" width="150" style="display:inline-block;max-width:150px;height:auto">'
    : '<span style="color:#f7f4ef;font-size:18px;font-weight:bold;letter-spacing:1px">TOGETHER ADVANCED TECHNOLOGIES</span>';

// Strips CR/LF so no user-supplied value can smuggle extra mail headers
// (header injection) into the Subject line or the header block.
$mailHeaderValue = static function (string $value): string {
    return str_replace(["\r", "\n"], '', $value);
};
$html = static function (string $value): string {
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
};

$subject = $mailHeaderValue('New website enquiry: ' . $service);
$submittedAt = date('Y-m-d H:i:s');
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
  <div style="background:#163c27;padding:24px 28px;text-align:center">{$logoImgTag}</div>
  <div style="background:#fff;padding:32px 28px"><div style="color:#b27b3e;font-size:11px;letter-spacing:2px;text-transform:uppercase">New website enquiry</div><h1 style="margin:10px 0 6px;color:#163c27;font-size:26px">A new project conversation</h1><p style="margin:0;color:#6e746f;font-size:13px">Submitted {$safeSubmittedAt}</p>{$details}</div>
  <p style="margin:18px 0 0;text-align:center;color:#6e746f;font-size:11px">Together Advanced Technologies</p>
</div></body></html>
HTML;
$userBody = <<<HTML
<!doctype html><html><body style="margin:0;background:#f1eee8;font-family:Arial,Helvetica,sans-serif;color:#17251d">
<div style="max-width:640px;margin:0 auto;padding:28px 16px">
  <div style="background:#163c27;padding:24px 28px;text-align:center">{$logoImgTag}</div>
  <div style="background:#fff;padding:32px 28px"><div style="color:#b27b3e;font-size:11px;letter-spacing:2px;text-transform:uppercase">Thanks for reaching out</div><h1 style="margin:10px 0 14px;color:#163c27;font-size:26px">We received your enquiry</h1><p style="margin:0;color:#4d5b51;font-size:15px;line-height:1.7">Hi {$safeName},<br><br>Thanks for contacting Together Advanced Technologies. Our team will review your message and get back to you within 1–2 business days.</p>{$details}</div>
  <p style="margin:18px 0 0;text-align:center;color:#6e746f;font-size:11px">Together Advanced Technologies</p>
</div></body></html>
HTML;

// Each recipient gets its own header block, built independently.
$internalHeaders = implode("\r\n", [
    'From: ' . $mailHeaderValue($mailFrom),
    'Reply-To: ' . $mailHeaderValue($email),
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
]);
$userHeaders = implode("\r\n", [
    'From: ' . $mailHeaderValue($mailFrom),
    'Reply-To: ' . $mailHeaderValue($notificationEmail),
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

    error_clear_last();
    $internalSent = mail(
        $notificationEmail,
        $subject,
        $internalBody,
        $internalHeaders
    );
    $internalMailError = null;
    if (!$internalSent) {
        $internalMailError = error_get_last();
        error_log('Contact form: internal notification mail() failed to ' . $notificationEmail
            . ($internalMailError ? ' — ' . $internalMailError['message'] : ' (no PHP error captured; check the mail server/queue log)'));
    }

    error_clear_last();
    $userSent = mail(
        $email,
        'We received your enquiry | Together Advanced Technologies',
        $userBody,
        $userHeaders
    );
    $userMailError = null;
    if (!$userSent) {
        $userMailError = error_get_last();
        error_log('Contact form: user confirmation mail() failed to ' . $email
            . ($userMailError ? ' — ' . $userMailError['message'] : ' (no PHP error captured; check the mail server/queue log)'));
    }

    if (!$internalSent || !$userSent) {
        http_response_code(502);
        // --- TEMPORARY DEBUG BLOCK ---
        // Remove this once the embedded-logo fix is confirmed working —
        // it can leak server details to anyone hitting this endpoint.
        $debugDetails = [];
        if (!$internalSent) {
            $debugDetails['internal'] = $internalMailError['message'] ?? 'no PHP error captured';
        }
        if (!$userSent) {
            $debugDetails['user'] = $userMailError['message'] ?? 'no PHP error captured';
        }
        echo json_encode([
            'error' => 'Your enquiry was saved, but the email service is not enabled',
            'debug' => $debugDetails,
            'logo_embedded' => $logoDataUri !== '',
        ]);
        // --- END TEMPORARY DEBUG BLOCK ---
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
