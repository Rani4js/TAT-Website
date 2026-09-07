CREATE TABLE browser_information (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_agent TEXT NOT NULL,
    language VARCHAR(20) NULL,
    languages TEXT NULL,
    platform VARCHAR(100) NULL,
    timezone VARCHAR(100) NULL,
    screen_width SMALLINT UNSIGNED NULL,
    screen_height SMALLINT UNSIGNED NULL,
    pixel_ratio DECIMAL(5,2) NULL,
    viewport_width SMALLINT UNSIGNED NULL,
    viewport_height SMALLINT UNSIGNED NULL,
    hardware_concurrency TINYINT UNSIGNED NULL,
    max_touch_points TINYINT UNSIGNED NULL,
    consent_type VARCHAR(30) NOT NULL DEFAULT 'analytics',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
