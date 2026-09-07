import "./Legal.css";

const Privacy = () => (
  <main className="legal-page">
    <header className="legal-hero">
      <span className="legal-eyebrow">YOUR DATA, CLEARLY</span>
      <h1>Privacy <span>Policy.</span></h1>
      <span className="legal-updated">Last updated: September 2026</span>
    </header>
    <div className="legal-content">
      <section>
        <h2>Our commitment</h2>
        <p>
          Together Advanced Technologies respects your privacy. This policy
          explains what information we collect through this website, why we
          collect it and the choices available to you.
        </p>
      </section>
      <section>
        <h2>Information we collect</h2>
        <p>
          When you contact us or request a quote, we may receive your name,
          email address, service interests and the details you choose to share.
          With your consent, we may also collect basic browser and device
          information such as language, timezone, screen size and browser type.
        </p>
      </section>
      <section>
        <h2>How we use information</h2>
        <p>
          We use information to respond to enquiries, improve our website,
          understand how visitors use our digital experience and maintain
          website security. We do not sell your personal information.
        </p>
      </section>
      <section>
        <h2>Cookies and your choices</h2>
        <p>
          Our cookie banner lets you accept or decline optional analytics
          cookies. Necessary preferences are used to remember your consent
          choice. You can update your preferences by clearing your browser
          storage and revisiting the site.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          For privacy questions or requests, email{" "}
          <a href="mailto:support@togetherat.in">support@togetherat.in</a>.
        </p>
      </section>
    </div>
  </main>
);

export default Privacy;
