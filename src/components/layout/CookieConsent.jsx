import { useEffect, useRef, useState } from "react";
import "./CookieConsent.css";

const STORAGE_KEY = "tat-cookie-consent";
const BROWSER_INFO_COOKIE = "tat-browser-info";
const BROWSER_INFO_MAX_AGE = 60 * 60 * 24 * 180;
const BROWSER_INFO_API_URL = import.meta.env.VITE_BROWSER_INFO_API_URL;

const defaultPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const getBrowserInformation = () => ({
  userAgent: navigator.userAgent,
  language: navigator.language,
  languages: navigator.languages,
  platform: navigator.platform,
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  screen: {
    width: window.screen.width,
    height: window.screen.height,
    pixelRatio: window.devicePixelRatio,
  },
  viewport: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  hardwareConcurrency: navigator.hardwareConcurrency || null,
  maxTouchPoints: navigator.maxTouchPoints || 0,
});

const setBrowserInformationCookie = () => {
  const value = encodeURIComponent(JSON.stringify(getBrowserInformation()));
  document.cookie = `${BROWSER_INFO_COOKIE}=${value}; Max-Age=${BROWSER_INFO_MAX_AGE}; Path=/; SameSite=Lax`;
};

const removeBrowserInformationCookie = () => {
  document.cookie = `${BROWSER_INFO_COOKIE}=; Max-Age=0; Path=/; SameSite=Lax`;
};

const sendBrowserInformation = async () => {
  if (!BROWSER_INFO_API_URL) {
    return;
  }

  const response = await fetch(BROWSER_INFO_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      consent: "analytics",
      browser: getBrowserInformation(),
    }),
  });

  if (!response.ok) {
    throw new Error(`Browser information request failed: ${response.status}`);
  }
};

const CookieConsent = () => {
  const [preferences, setPreferences] = useState(() => {
    const savedConsent = window.localStorage.getItem(STORAGE_KEY);

    if (!savedConsent) {
      return null;
    }

    try {
      return { ...defaultPreferences, ...JSON.parse(savedConsent) };
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }
  });
  const [showSettings, setShowSettings] = useState(false);
  const [draftPreferences, setDraftPreferences] = useState(defaultPreferences);
  const browserInformationRequestInFlight = useRef(false);

  useEffect(() => {
    if (!preferences?.analytics || browserInformationRequestInFlight.current) {
      return;
    }

    setBrowserInformationCookie();
    browserInformationRequestInFlight.current = true;
    void sendBrowserInformation()
      .catch((error) => {
        browserInformationRequestInFlight.current = false;
        console.error("Unable to store browser information:", error);
      });
  }, [preferences]);

  const savePreferences = (nextPreferences) => {
    const savedPreferences = {
      ...defaultPreferences,
      ...nextPreferences,
      updatedAt: new Date().toISOString(),
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(savedPreferences));
    if (savedPreferences.analytics) {
      setBrowserInformationCookie();
    } else {
      removeBrowserInformationCookie();
    }
    setPreferences(savedPreferences);
    setShowSettings(false);
  };

  const acceptAll = () => savePreferences({
    necessary: true,
    analytics: true,
    marketing: true,
  });

  const declineOptional = () => savePreferences(defaultPreferences);

  const openSettings = () => {
    setDraftPreferences(preferences || defaultPreferences);
    setShowSettings(true);
  };

  if (preferences && !showSettings) {
    return null;
  }

  return (
    <>
      {!showSettings && (
        <aside className="cookie-consent" aria-label="Cookie consent">
          <div className="cookie-consent-content">
            <div className="cookie-consent-icon" aria-hidden="true">◌</div>
            <div>
              <strong>Your privacy matters.</strong>
              <p>
                We use cookies to improve your experience, understand how our
                website is used and provide relevant content.
              </p>
            </div>
          </div>

          <div className="cookie-consent-actions">
            <button className="cookie-consent-settings" type="button" onClick={openSettings}>
              Settings
            </button>
            <button className="cookie-consent-decline" type="button" onClick={declineOptional}>
              Decline
            </button>
            <button className="cookie-consent-accept" type="button" onClick={acceptAll}>
              Accept
            </button>
          </div>
        </aside>
      )}

      {showSettings && (
        <div className="cookie-consent-backdrop" role="presentation">
          <section
            className="cookie-consent-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
          >
            <div className="cookie-consent-dialog-header">
              <div>
                <span className="cookie-consent-kicker">Privacy controls</span>
                <h2 id="cookie-settings-title">Cookie preferences</h2>
              </div>
              <button
                className="cookie-consent-close"
                type="button"
                onClick={() => setShowSettings(false)}
                aria-label="Close cookie preferences"
              >
                ×
              </button>
            </div>

            <p className="cookie-consent-dialog-copy">
            Choose which optional cookies you allow. When analytics cookies
            are enabled, we store basic browser and device details in a
            first-party cookie to understand website usage. Necessary
            cookies keep the website working and cannot be disabled.
            </p>

            <label className="cookie-consent-option">
              <span>
                <strong>Necessary cookies</strong>
                <small>Required for core website functionality.</small>
              </span>
              <input type="checkbox" checked disabled aria-label="Necessary cookies enabled" />
            </label>

            <label className="cookie-consent-option">
              <span>
                <strong>Analytics cookies</strong>
                <small>
                  Store basic browser information to help us understand website usage.
                </small>
              </span>
              <input
                type="checkbox"
                checked={draftPreferences.analytics}
                onChange={(event) => setDraftPreferences({
                  ...draftPreferences,
                  analytics: event.target.checked,
                })}
              />
            </label>

            <label className="cookie-consent-option">
              <span>
                <strong>Marketing cookies</strong>
                <small>Support relevant content and campaign measurement.</small>
              </span>
              <input
                type="checkbox"
                checked={draftPreferences.marketing}
                onChange={(event) => setDraftPreferences({
                  ...draftPreferences,
                  marketing: event.target.checked,
                })}
              />
            </label>

            <div className="cookie-consent-dialog-actions">
              <button className="cookie-consent-decline" type="button" onClick={declineOptional}>
                Decline optional
              </button>
              <button className="cookie-consent-accept" type="button" onClick={() => savePreferences(draftPreferences)}>
                Save preferences
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
