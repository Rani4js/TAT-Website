import "./Home.css";
import TATLogo from "../assets/images/TAT.PNG";
import Hero from "../components/home/Hero/Hero";
import Orbit from "../components/home/OrbitServices/Orbit";
import Intro from "../components/home/Intro/Intro";
const services = [
  {
    number: "01",
    title: "Web Design",
    description:
      "Modern, responsive websites designed to create a strong digital presence for your business.",
    tech: "UI / UX · HTML · CSS · JavaScript",
  },
  {
    number: "02",
    title: "Email Marketing",
    description:
      "Personalized email experiences that connect your brand with the right audience.",
    tech: "SFMC · Automation · Campaigns",
  },
  {
    number: "03",
    title: "Salesforce",
    description:
      "Customer-focused Salesforce solutions that streamline marketing and business operations.",
    tech: "Marketing Cloud · Data Cloud · CRM",
  },
  {
    number: "04",
    title: "AEM Sites",
    description:
      "Enterprise-grade Adobe Experience Manager websites built for performance and scale.",
    tech: "AEM · Components · Content Authoring",
  },
  {
    number: "05",
    title: "React Applications",
    description:
      "Fast, scalable and interactive applications built with modern frontend technologies.",
    tech: "React · JavaScript · APIs",
  },
  {
    number: "06",
    title: "Data Cloud",
    description:
      "Connect, unify and activate customer data to create intelligent digital experiences.",
    tech: "Data Cloud · CDP · Customer Data",
  },
];

const Home = () => {
  return (
    <main className="home-page">
      {/* ================= HERO ================= */}
      <Hero />
      {/* ================= INTRO ================= */}
      {/* <Intro /> */}
      {/* ================= SERVICES ================= */}

      <section className="services-section">

        <div className="section-header">

          <div>
            <div className="section-number">
              WHAT WE DO
            </div>

            <h2>
              Technology.
              <span>Without limits.</span>
            </h2>
          </div>

          <p>
            From websites to enterprise platforms, we create technology
            solutions designed around your business.
          </p>

        </div>


        <div className="services-grid">

          {services.map((service) => (

            <article
              className="service-card"
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

              <div className="service-body">

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

      </section>


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


      {/* ================= CTA ================= */}

      <section className="home-cta">

        <div className="cta-grid"></div>

        <div className="cta-content">

          <div className="section-number">
            05 / LET'S BUILD
          </div>

          <h2>
            Ready to build
            <span>what's next?</span>
          </h2>

          <p>
            Tell us what you're building. Let's turn your idea into
            something exceptional.
          </p>

          <a href="/contact" className="cta-button">
            Get in touch
            <span>↗</span>
          </a>

        </div>

      </section>

    </main>
  );
};

export default Home;