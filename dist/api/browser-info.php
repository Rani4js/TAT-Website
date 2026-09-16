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

// Replace these placeholders in cPanel. Never put database credentials in React.
$databaseHost = 'localhost';
$databaseName = getenv('TAT_DATABASE_NAME') ?: ($_SERVER['TAT_DATABASE_NAME'] ?? '');
$databaseUser = getenv('TAT_DATABASE_USER') ?: ($_SERVER['TAT_DATABASE_USER'] ?? '');
$databasePassword = getenv('TAT_DATABASE_PASSWORD') ?: ($_SERVER['TAT_DATABASE_PASSWORD'] ?? '');

if ($databaseName === '' || $databaseUser === '') {
    error_log('Browser information server configuration is incomplete.');
    http_response_code(500);
    echo json_encode(['error' => 'The browser information service is not configured']);
    exit;
}

$requestBody = json_decode(file_get_contents('php://input'), true);

if (!is_array($requestBody) || ($requestBody['consent'] ?? '') !== 'analytics') {
    http_response_code(400);
    echo json_encode(['error' => 'Analytics consent is required']);
    exit;
}

$browser = $requestBody['browser'] ?? null;

if (!is_array($browser) || empty($browser['userAgent'])) {
    http_response_code(422);
    echo json_encode(['error' => 'Browser information is incomplete']);
    exit;
}

$screen = is_array($browser['screen'] ?? null) ? $browser['screen'] : [];
$viewport = is_array($browser['viewport'] ?? null) ? $browser['viewport'] : [];

$numberOrNull = static function ($value): ?int {
    return is_numeric($value) ? (int) $value : null;
};

$decimalOrNull = static function ($value): ?float {
    return is_numeric($value) ? (float) $value : null;
};

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
        'INSERT INTO browser_information (
            user_agent, language, languages, platform, timezone,
            screen_width, screen_height, pixel_ratio,
            viewport_width, viewport_height, hardware_concurrency,
            max_touch_points, consent_type
        ) VALUES (
            :user_agent, :language, :languages, :platform, :timezone,
            :screen_width, :screen_height, :pixel_ratio,
            :viewport_width, :viewport_height, :hardware_concurrency,
            :max_touch_points, :consent_type
        )'
    );

    $statement->execute([
        ':user_agent' => substr((string) $browser['userAgent'], 0, 2000),
        ':language' => substr((string) ($browser['language'] ?? ''), 0, 20) ?: null,
        ':languages' => json_encode($browser['languages'] ?? [], JSON_THROW_ON_ERROR),
        ':platform' => substr((string) ($browser['platform'] ?? ''), 0, 100) ?: null,
        ':timezone' => substr((string) ($browser['timezone'] ?? ''), 0, 100) ?: null,
        ':screen_width' => $numberOrNull($screen['width'] ?? null),
        ':screen_height' => $numberOrNull($screen['height'] ?? null),
        ':pixel_ratio' => $decimalOrNull($screen['pixelRatio'] ?? null),
        ':viewport_width' => $numberOrNull($viewport['width'] ?? null),
        ':viewport_height' => $numberOrNull($viewport['height'] ?? null),
        ':hardware_concurrency' => $numberOrNull($browser['hardwareConcurrency'] ?? null),
        ':max_touch_points' => $numberOrNull($browser['maxTouchPoints'] ?? null),
        ':consent_type' => 'analytics',
    ]);

    echo json_encode(['success' => true]);
} catch (Throwable $error) {
    error_log($error->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Unable to store browser information']);
}
