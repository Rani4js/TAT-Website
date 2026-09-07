import "./Legal.css";

const Terms = () => (
  <main className="legal-page">
    <header className="legal-hero">
      <span className="legal-eyebrow">THE WORKING AGREEMENT</span>
      <h1>Terms <span>of Use.</span></h1>
      <span className="legal-updated">Last updated: September 2026</span>
    </header>
    <div className="legal-content">
      <section>
        <h2>Using this website</h2>
        <p>
          This website is provided by Together Advanced Technologies for
          general information about our services, capabilities and team. By
          using it, you agree to use the site lawfully and respectfully.
        </p>
      </section>
      <section>
        <h2>Our content</h2>
        <p>
          Text, branding, graphics, design and other materials on this website
          belong to Together Advanced Technologies or its licensors. You may
          view the content for personal or business evaluation, but you may
          not copy, republish or commercially exploit it without permission.
        </p>
      </section>
      <section>
        <h2>Enquiries and proposals</h2>
        <p>
          Submitting an enquiry does not create a client relationship or
          guarantee that we will provide services. Any engagement, scope,
          timeline and fees will be governed by a separate written agreement.
        </p>
      </section>
      <section>
        <h2>Availability and liability</h2>
        <p>
          We aim to keep the website accurate and available, but content may
          change and the site is provided without a guarantee of uninterrupted
          access. To the extent permitted by law, we are not liable for losses
          arising from reliance on general website content.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href="mailto:support@togetherat.in">support@togetherat.in</a>.
        </p>
      </section>
    </div>
  </main>
);

export default Terms;
