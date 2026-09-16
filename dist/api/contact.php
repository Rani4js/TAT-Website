<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: https://togetherat.in');
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

$databaseHost = getenv('TAT_DATABASE_HOST') ?: 'localhost';
$databaseName = getenv('TAT_DATABASE_NAME') ?: '';
$databaseUser = getenv('TAT_DATABASE_USER') ?: '';
$databasePassword = getenv('TAT_DATABASE_PASSWORD') ?: '';
$notificationEmail = getenv('TAT_NOTIFICATION_EMAIL') ?: 'support@togetherat.in';
$mailFrom = getenv('TAT_MAIL_FROM') ?: $notificationEmail;

if ($databaseName === '' || $databaseUser === '' || !filter_var($notificationEmail, FILTER_VALIDATE_EMAIL)) {
    error_log('Contact form server configuration is incomplete.');
    http_response_code(500);
    echo json_encode(['error' => 'The enquiry service is not configured']);
    exit;
}

$mailHeaderValue = static function (string $value): string {
    return str_replace(["\r", "\n"], '', $value);
};

$subject = 'New website enquiry: ' . $service;
$submittedAt = date('Y-m-d H:i:s');
$internalBody = implode("\n", [
    'A new enquiry was submitted on togetherat.in.',
    '',
    'Name: ' . $name,
    'Email: ' . $email,
    'Company: ' . ($company !== '' ? $company : 'Not provided'),
    'Service: ' . $service,
    'Submitted: ' . $submittedAt,
    '',
    'Project details:',
    $message,
]);
$userBody = implode("\n", [
    'Hi ' . $name . ',',
    '',
    'Thanks for contacting Together Advanced Technologies. We received your enquiry and will be in touch within 1–2 business days.',
    '',
    'Your submitted information:',
    'Service: ' . $service,
    'Company: ' . ($company !== '' ? $company : 'Not provided'),
    'Project details:',
    $message,
    '',
    'Together Advanced Technologies',
]);
$headers = implode("\r\n", [
    'From: ' . $mailHeaderValue($mailFrom),
    'Reply-To: ' . $mailHeaderValue($email),
    'Content-Type: text/plain; charset=UTF-8',
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
        'We received your enquiry',
        $userBody,
        str_replace('Reply-To: ' . $mailHeaderValue($email), 'Reply-To: ' . $mailHeaderValue($notificationEmail), $headers)
    );

    if (!$internalSent || !$userSent) {
        error_log('Contact form email delivery failed.');
        http_response_code(502);
        echo json_encode(['error' => 'Your enquiry was saved, but the confirmation email could not be sent']);
        exit;
    }

    echo json_encode(['success' => true]);
} catch (Throwable $error) {
    error_log($error->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Unable to process your enquiry']);
}
