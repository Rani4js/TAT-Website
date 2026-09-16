import { useState } from "react";
import "./Contact.css";

const initialForm = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-grid" />
        <div className="contact-hero-content">
          <span className="contact-eyebrow">LET&apos;S CONNECT</span>
          <h1>
            Tell us what
            <span>you&apos;re building.</span>
          </h1>
          <p>
            Have a challenge, an idea or a question? Share a few details and
            our team will get back to you.
          </p>
        </div>
        <div className="contact-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-details">
          <span className="contact-eyebrow">START A CONVERSATION</span>
          <h2>Good work starts with a <span>good question.</span></h2>
          <p>
            Whether you are launching something new or improving what already
            exists, we can help you find the next right move.
          </p>

          <div className="contact-detail-list">
            <div>
              <small>EMAIL</small>
              <a href="mailto:support@togetherat.in">support@togetherat.in</a>
            </div>
            <div>
              <small>LOCATION</small>
              <span>Remote / Worldwide</span>
            </div>
            <div>
              <small>RESPONSE TIME</small>
              <span>Usually within 1–2 business days</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-heading">
            <span>PROJECT DETAILS</span>
            <small>All fields marked * are required.</small>
          </div>

          <div className="contact-form-row">
            <label>
              Name *
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </label>
            <label>
              Email *
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@company.com"
              />
            </label>
          </div>

          <div className="contact-form-row">
            <label>
              Company
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Your company"
              />
            </label>
            <label>
              What can we help with? *
              <select name="service" value={form.service} onChange={handleChange} required>
                <option value="" disabled>Select a service</option>
                <option>Web Design</option>
                <option>Email Marketing</option>
                <option>Salesforce</option>
                <option>AEM Development</option>
                <option>React Apps</option>
                <option>Application Maintenance &amp; Support</option>
                <option>Technical Staffing &amp; Support</option>
              </select>
            </label>
          </div>

          <label>
            Tell us about your project *
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="What are you trying to achieve?"
            />
          </label>

          <button type="submit" className="contact-submit">
            {submitted ? "Message ready to send" : "Send enquiry"}
            <span aria-hidden="true">→</span>
          </button>

          {submitted && (
            <p className="contact-success" role="status">
              Thanks — your enquiry has been captured. We&apos;ll be in touch soon.
            </p>
          )}
        </form>
      </section>

      <section className="contact-next-steps">
        <div>
          <span className="contact-eyebrow">WHAT HAPPENS NEXT</span>
          <h2>A simple first step.<span>A useful conversation.</span></h2>
        </div>
        <div className="contact-next-steps-list">
          <article>
            <strong>01</strong>
            <div>
              <h3>We read the brief</h3>
              <p>We take time to understand the challenge, context and outcome you have in mind.</p>
            </div>
          </article>
          <article>
            <strong>02</strong>
            <div>
              <h3>We find the opportunity</h3>
              <p>We come back with focused questions and practical ideas for moving forward.</p>
            </div>
          </article>
          <article>
            <strong>03</strong>
            <div>
              <h3>We make a plan</h3>
              <p>If the fit is right, we shape the next step around your team, timeline and priorities.</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Contact;
