import "./Navbar.css";
import TATLogo from "../../../assets/images/TAT.PNG"
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { submitContactForm } from "../../../lib/contactSubmission";
function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const showQuote = pathname !== "/contact";
  const isCurrentPage = (pagePath) => pathname === pagePath;
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteSubmitting, setQuoteSubmitting] = useState(false);
  const [quoteSubmitError, setQuoteSubmitError] = useState("");
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleQuoteChange = (event) => {
    setQuoteForm({
      ...quoteForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleQuoteSubmit = (event) => {
    event.preventDefault();
    setQuoteSubmitting(true);
    setQuoteSubmitError("");
    submitContactForm(quoteForm)
      .then(() => {
        setQuoteSubmitted(true);
        setQuoteForm({
          name: "",
          email: "",
          service: "",
          message: "",
        });
      })
      .catch((error) => {
        setQuoteSubmitError(error.message);
      })
      .finally(() => {
        setQuoteSubmitting(false);
      });
  };

  const openQuote = () => {
    setMenuOpen(false);
    setQuoteSubmitted(false);
    setQuoteOpen(true);
  };

  return(
  <header className="w-full">
  <div className="navbar-container">

    {/* Logo */}
    <div className="navbar-logo">
      <img
        src={TATLogo}
        alt="Together Advanced Technologies"
      />
    </div>

    {/* Desktop Navigation */}
    <nav className="desktop-nav">
      <ul>
        {!isCurrentPage("/") && <li><a href="/">Home</a></li>}
        {!isCurrentPage("/about") && <li><a href="/about">About</a></li>}
        {!isCurrentPage("/services") && <li><a href="/services">Services</a></li>}
        {!isCurrentPage("/careers") && <li><a href="/careers">Careers</a></li>}
        {!isCurrentPage("/contact") && <li><a href="/contact">Contact</a></li>}
      </ul>
    </nav>

    {/* Desktop Let's Talk */}
    {showQuote && (
      <div className="quote-wrapper">
        <button className="get-quote-btn" type="button" onClick={openQuote}>
          <span>Let's Talk</span>

          <svg
            className="ribbon"
            viewBox="0 0 120 140"
            preserveAspectRatio="none"
          >
            <path d="M0 0 H120 V100 L60 140 L0 100 Z" />
          </svg>
        </button>
      </div>
    )}

    {/* Mobile hamburger */}
    <button
      className="mobile-menu-btn"
      type="button"
      aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={menuOpen}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? "✕" : "☰"}
    </button>

  </div>

  {/* Mobile menu */}
  {menuOpen && (
    <div className="mobile-menu">
      <ul>
        {!isCurrentPage("/") && <li><a href="/">Home</a></li>}
        {!isCurrentPage("/about") && <li><a href="/about">About</a></li>}
        {!isCurrentPage("/services") && <li><a href="/services">Services</a></li>}
        {!isCurrentPage("/careers") && <li><a href="/careers">Careers</a></li>}
        {!isCurrentPage("/contact") && <li><a href="/contact">Contact</a></li>}

        {showQuote && (
          <button className="mobile-quote-cta" type="button" onClick={openQuote}>
            Let's Talk
          </button>
        )}
      </ul>
    </div>
  )}

  {quoteOpen && (
    <div className="quote-modal-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) setQuoteOpen(false);
    }}>
      <section className="quote-modal" role="dialog" aria-modal="true" aria-labelledby="quote-modal-title">
        <div className="quote-modal-header">
          <div>
            <span className="quote-modal-eyebrow">START A CONVERSATION</span>
            <h2 id="quote-modal-title">Tell us what you&apos;re building.</h2>
          </div>
          <button className="quote-modal-close" type="button" onClick={() => setQuoteOpen(false)} aria-label="Close quote form">
            ×
          </button>
        </div>

        <form className="quote-modal-form" onSubmit={handleQuoteSubmit}>
          <label>
            Name *
            <input name="name" value={quoteForm.name} onChange={handleQuoteChange} required placeholder="Your name" />
          </label>
          <label>
            Email *
            <input type="email" name="email" value={quoteForm.email} onChange={handleQuoteChange} required placeholder="you@company.com" />
          </label>
          <label>
            Service *
            <select name="service" value={quoteForm.service} onChange={handleQuoteChange} required>
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
          <label>
            Project details *
            <textarea name="message" value={quoteForm.message} onChange={handleQuoteChange} required rows="4" placeholder="How can we help?" />
          </label>
          <button className="quote-modal-submit" type="submit" disabled={quoteSubmitting}>
            {quoteSubmitting ? "Sending..." : quoteSubmitted ? "Enquiry sent" : "Request a quote"}
            <span aria-hidden="true">→</span>
          </button>
          {quoteSubmitted && (
            <p className="quote-modal-success" role="status">
              Thanks — we&apos;ll be in touch soon.
            </p>
          )}
          {quoteSubmitError && (
            <p className="quote-modal-error" role="alert">{quoteSubmitError}</p>
          )}
        </form>
      </section>
    </div>
  )}
</header>
  )
}
export default Navbar;