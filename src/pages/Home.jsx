import "./Home.css";
import TATLogo from "../assets/images/TAT.PNG";
import Hero from "../components/home/Hero/Hero";
import Orbit from "../components/home/OrbitServices/Orbit";
import Intro from "../components/home/Intro/Intro";
import service from "../components/home/ServicesInteractive/ServicesInteractive"


const services = [
  {
    number: "01",
    title: "Web Design",
    description:
      "Modern, responsive websites designed to create a strong digital presence for your business.",
    tech: "UI / UX • HTML • CSS • JavaScript",
    icon: "◎",
  },
  {
    number: "02",
    title: "Email Marketing",
    description:
      "Personalized email experiences that connect your brand with the right audience.",
    tech: "SFMC • Automation • Campaigns",
    icon: "✉",
  },
  {
    number: "03",
    title: "Salesforce",
    description:
      "Customer-focused Salesforce solutions that streamline marketing and business operations.",
    tech: "Marketing Cloud • Data Cloud • CRM",
    icon: "☁",
  },
  {
    number: "04",
    title: "AEM Sites",
    description:
      "Enterprise digital experiences built with Adobe Experience Manager.",
    tech: "AEM • Components • Content",
    icon: "▱",
  },
  {
    number: "05",
    title: "React Apps",
    description:
      "Fast, scalable React applications built for modern digital experiences.",
    tech: "React • JavaScript • APIs",
    icon: "⚛",
  },
  {
    number: "06",
    title: "Data Cloud",
    description:
      "Connected customer data solutions that turn information into actionable insights.",
    tech: "Data Cloud • CDP • Customer Data",
    icon: "◉",
  },
];

const Home = () => {
  return (
    <main className="home-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero-section">

        {/* Background grid */}
        <div className="hero-grid"></div>

        {/* Cosmic glow */}
        <div className="hero-glow"></div>

        <div className="hero-container">

          {/* LEFT CONTENT */}
          <div className="hero-content">

            <div className="hero-eyebrow">
              <span className="eyebrow-dot"></span>
              DIGITAL TECHNOLOGY PARTNER
            </div>

            <h1 className="hero-title">
              <span>Technology</span>

              <span className="hero-muted">
                That Moves
              </span>

              <span className="hero-gold">
                Your
              </span>

              <span className="hero-gold">
                Business.
              </span>
            </h1>

            <p className="hero-description">
              Together Advanced Technologies brings design,
              development, marketing, automation and customer
              data together under one technology ecosystem.
            </p>

            <div className="hero-actions">

              <a
                href="#services"
                className="hero-primary-btn"
              >
                Explore Services
                <span>↗</span>
              </a>

              <a
                href="/contact"
                className="hero-secondary-btn"
              >
                Start a Project
              </a>

            </div>

          </div>


          {/* RIGHT ORBIT */}
          <div className="hero-visual">

            <Orbit />

          </div>

        </div>


        {/* SCROLL INDICATOR */}
        <a
          href="#services"
          className="hero-scroll"
        >
          <span className="scroll-line"></span>

          <span>
            SCROLL TO EXPLORE
          </span>
        </a>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        id="services"
        className="services-section"
      >

        {/* Transition glow */}
        <div className="services-transition"></div>


        {/* Background grid */}
        <div className="services-grid"></div>


        {/* SECTION HEADER */}
        <div className="services-header">

          <div className="services-heading">

            <span className="services-eyebrow">
              WHAT WE DO
            </span>

            <h2>
              <span className="services-white">
                Technology.
              </span>

              <span className="services-gold">
                Without limits.
              </span>
            </h2>

          </div>


          <p className="services-intro">
            From websites to enterprise platforms,
            we create technology solutions designed
            around your business.
          </p>

        </div>


        {/* SERVICE CARDS */}
        <div className="services-columns">

          {services.map((service) => (

            <article
              className="service-column"
              key={service.number}
            >

              <div className="service-top">

                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-arrow">
                  ↗
                </span>

              </div>


              <div className="service-middle">

                <div className="service-icon">
                  {service.icon}
                </div>

              </div>


              <div className="service-bottom">

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <span className="service-tech">
                  {service.tech}
                </span>

              </div>

            </article>

          ))}

        </div>
             {/* ================= TECHNOLOGY ================= */}

      <section className="technology-section">

        <div className="section-number">
          03 / TECHNOLOGY ECOSYSTEM
        </div>

        <div className="technology-layout">

          <div className="technology-heading">

            <h2>
              One ecosystem.
              <span>Multiple possibilities.</span>
            </h2>

          </div>

          <div className="technology-copy">

            <p>
              Your technology stack should work as one connected system.
              We bring together modern frontend development, enterprise
              platforms, marketing automation and customer data.
            </p>

            <a href="/services" className="text-link">
              Explore our capabilities
              <span>→</span>
            </a>

          </div>

        </div>


        <div className="tech-marquee">

          <span>REACT</span>
          <span>AEM</span>
          <span>SALESFORCE</span>
          <span>DATA CLOUD</span>
          <span>JAVASCRIPT</span>
          <span>MARKETING CLOUD</span>

        </div>

      </section>


      {/* ================= PROCESS ================= */}

      <section className="process-section">

        <div className="section-number">
          04 / OUR PROCESS
        </div>

        <h2>
          From idea
          <span>to impact.</span>
        </h2>

        <div className="process-grid">

          <div className="process-item">

            <span>01</span>

            <h3>Discover</h3>

            <p>
              Understand your business, users and technology challenges.
            </p>

          </div>

          <div className="process-item">

            <span>02</span>

            <h3>Design</h3>

            <p>
              Create purposeful experiences and scalable technology
              architecture.
            </p>

          </div>

          <div className="process-item">

            <span>03</span>

            <h3>Build</h3>

            <p>
              Develop high-performance digital solutions using modern
              technologies.
            </p>

          </div>

          <div className="process-item">

            <span>04</span>

            <h3>Grow</h3>

            <p>
              Continuously optimize your digital ecosystem for growth.
            </p>

          </div>

        </div>

      </section>

{/* =====================================================
    CTA
===================================================== */}

<section className="home-cta">

    <div className="cta-grid"></div>

    <div className="cta-glow"></div>

    <div className="cta-content">

        <div className="section-number">
            05 / LET'S BUILD
        </div>

        <h2>
            Ready to build
            <span>what's next?</span>
        </h2>

        <p>
            Tell us what you're building. Let's turn your idea
            into something exceptional.
        </p>

        <a href="/contact" className="cta-button">
            Get in touch
            <span>↗</span>
        </a>

    </div>

</section>


{/* =====================================================
    FOOTER
===================================================== */}

<footer className="site-footer">

    <div className="footer-grid"></div>

    <div className="footer-glow"></div>

    <div className="footer-container">

        {/* TOP FOOTER */}

        <div className="footer-top">

            {/* BRAND */}

            <div className="footer-brand">

                <div className="footer-logo">
                    TAT
                </div>

                <p>
                    Together Advanced Technologies brings
                    design, development, marketing and data
                    together under one technology ecosystem.
                </p>

                <a
                    href="/contact"
                    className="footer-project-link"
                >
                    Start a project
                    <span>↗</span>
                </a>

            </div>


            {/* NAVIGATION */}

            <div className="footer-column">

                <span className="footer-label">
                    EXPLORE
                </span>

                <a href="/">Home</a>

                <a href="/services">Services</a>

                <a href="/about">About</a>

                <a href="/contact">Contact</a>

            </div>


            {/* SERVICES */}

            <div className="footer-column">

                <span className="footer-label">
                    CAPABILITIES
                </span>

                <a href="/services">
                    Web Design
                </a>

                <a href="/services">
                    Email Marketing
                </a>

                <a href="/services">
                    Salesforce
                </a>

                <a href="/services">
                    AEM Sites
                </a>

                <a href="/services">
                    React Apps
                </a>

                <a href="/services">
                    Data Cloud
                </a>

            </div>


            {/* TECHNOLOGY */}

            <div className="footer-column">

                <span className="footer-label">
                    TECHNOLOGY
                </span>

                <span>React</span>

                <span>JavaScript</span>

                <span>AEM</span>

                <span>Salesforce</span>

                <span>Marketing Cloud</span>

                <span>Data Cloud</span>

            </div>

        </div>


        {/* FOOTER DIVIDER */}

        <div className="footer-divider"></div>


        {/* BOTTOM FOOTER */}

        <div className="footer-bottom">

            <span>
                © 2026 Together Advanced Technologies
            </span>

            <div className="footer-bottom-links">

                <a href="/privacy">
                    Privacy
                </a>

                <a href="/terms">
                    Terms
                </a>

                <a href="/cookies">
                    Cookies
                </a>

            </div>

            <span className="footer-status">
                <span></span>
                DIGITAL TECHNOLOGY PARTNER
            </span>

        </div>

    </div>

</footer>


{/* =====================================================
    COOKIE BANNER
===================================================== */}

<div className="cookie-banner">

    <div className="cookie-content">

        <div className="cookie-icon">
            ◌
        </div>

        <div className="cookie-text">

            <strong>
                Your privacy matters.
            </strong>

            <p>
                We use cookies to improve your experience,
                understand how our website is used and
                provide relevant content.
            </p>

        </div>

    </div>


    <div className="cookie-actions">

        <button
            className="cookie-settings"
            type="button"
        >
            Settings
        </button>

        <button
            className="cookie-decline"
            type="button"
        >
            Decline
        </button>

        <button
            className="cookie-accept"
            type="button"
        >
            Accept
        </button>

    </div>

</div>
      
</section>
    </main>
  );
}

export default Home;