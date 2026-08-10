import "./Home.css";
import TATLogo from "../assets/images/TAT.PNG";
import Hero from "../components/home/Hero/Hero";
import Orbit from "../components/home/OrbitServices/Orbit";
import Intro from "../components/home/Intro/Intro";
import service from "../components/home/ServicesInteractive/ServicesInteractive";
import ServicesScroll from "../components/home/ServiceScroll/ServiceScroll";


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
       <ServicesScroll />
      
             {/* ================= TECHNOLOGY ================= */}

      <section className="technology-section">

        <div className="section-number">
          TECHNOLOGY ECOSYSTEM
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
          OUR PROCESS
        </div>

        <h2>
          From idea
          <span>to impact.</span>
        </h2>

        <div className="process-grid">

          <div className="process-item">

            <h3>Discover</h3>

            <p>
              Understand your business, users and technology challenges.
            </p>

          </div>

          <div className="process-item">


            <h3>Design</h3>

            <p>
              Create purposeful experiences and scalable technology
              architecture.
            </p>

          </div>

          <div className="process-item">

        

            <h3>Build</h3>

            <p>
              Develop high-performance digital solutions using modern
              technologies.
            </p>

          </div>

          <div className="process-item">

   

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
            
        </a>

    </div>

</section>






      

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
    </main>
  );
}

export default Home;