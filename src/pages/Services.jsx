import "./Services.css";
import TATLogo from "../assets/images/TAT.PNG";

const services = [
  {
    number: "01",
    title: "Web Design",
    description: "Digital experiences that make your brand clear, memorable and easy to use. We shape the structure, content and interface together so every journey has a clear purpose.",
    details: "Strategy / UX / UI / Development",
  },
  {
    number: "02",
    title: "Email Marketing",
    description: "Connected campaigns that turn customer attention into lasting relationships. From audience planning to journeys and measurement, we help every message arrive with relevance.",
    details: "SFMC / Automation / Campaigns",
  },
  {
    number: "03",
    title: "Salesforce",
    description: "Customer-focused solutions that connect marketing, data and business operations. We turn complex platform capabilities into workflows your teams can understand, adopt and improve.",
    details: "Marketing Cloud / CRM / Automation",
  },
  {
    number: "04",
    title: "AEM Development",
    description: "Flexible enterprise content experiences built for scale and speed. We create reusable components, clear authoring patterns and a foundation ready for the next phase of growth.",
    details: "Components / Content / Personalization",
  },
  {
    number: "05",
    title: "React Apps",
    description: "Fast, scalable applications designed for modern digital products. Thoughtful interfaces, dependable APIs and maintainable code keep the product useful as requirements evolve.",
    details: "React / JavaScript / APIs",
  },
  {
    number: "06",
    title: "Application Maintenance & Support",
    description: "Reliable support for the applications your business depends on. We monitor, maintain and improve digital products so they stay secure, stable and useful.",
    details: "Monitoring / Updates / Improvements",
  },
  {
    number: "07",
    title: "Technical Staffing & Support",
    description: "Experienced technical specialists who extend your team when you need extra capacity, focused expertise or dependable day-to-day delivery support.",
    details: "Engineering / QA / Delivery",
  },
];

const deliverySteps = [
  ["Align", "We clarify the opportunity, audience and outcome before choosing the tools or tactics."],
  ["Create", "We design and build the experience, platform or campaign around real user needs."],
  ["Connect", "We bring content, data and systems together so the work performs as one ecosystem."],
  ["Improve", "We learn from performance and keep refining what creates the greatest value."],
];

const Services = () => (
  <main className="services-page">
    <section className="services-hero">
      <div className="services-hero-grid" />
      <div className="services-hero-glow" />
      <div className="services-hero-content">
        <span className="services-eyebrow">CAPABILITIES</span>
        <h1>
          Built for
          <span>what&apos;s next.</span>
        </h1>
        <p>
          We bring design, development, marketing and data together to create
          digital ecosystems that move your business forward.
        </p>
      </div>
      <div className="services-hero-mark" aria-hidden="true">
        <span>07</span>
        <i />
        <small>CONNECTED SERVICES</small>
      </div>
    </section>

    <section className="services-list-section">
      <div className="services-section-heading">
        <span className="services-eyebrow">OUR SERVICES</span>
        <h2>One partner.<span>Every layer.</span></h2>
      </div>

      <div className="services-list">
        {services.map((service) => (
          <article className="service-detail-card" key={service.number}>
            <span className="service-detail-number">{service.number}</span>
            <div className="service-detail-body">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-detail-tech">{service.details}</span>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="services-visual">
      <div className="services-visual-copy">
        <span className="services-eyebrow">CONNECTED BY DESIGN</span>
        <h2>Every capability works <span>better together.</span></h2>
        <p>
          Strong digital ecosystems are built through the relationships
          between disciplines. We connect the moving parts so each decision
          adds value to the next.
        </p>
      </div>
      <div className="services-visual-map" aria-label="Connected service capabilities">
        <span className="services-visual-line line-one" />
        <span className="services-visual-line line-two" />
        <span className="services-visual-line line-three" />
        <div className="services-visual-core">
          <img src={TATLogo} alt="Together Advanced Technologies" />
          <span>ECOSYSTEM</span>
        </div>
        <span className="services-visual-node node-one">Experience</span>
        <span className="services-visual-node node-two">Platforms</span>
        <span className="services-visual-node node-three">Campaigns</span>
        <span className="services-visual-node node-four">Data</span>
      </div>
    </section>

    <section className="services-delivery">
      <div className="services-delivery-heading">
        <span className="services-eyebrow">FROM BRIEF TO MOMENTUM</span>
        <h2>A better way to <span>move forward.</span></h2>
        <p>
          The best work is not just delivered and left behind. We build
          clarity into every stage so your team can make confident decisions
          long after launch.
        </p>
      </div>
      <div className="services-delivery-grid">
        {deliverySteps.map(([title, text]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="services-approach">
      <span className="services-eyebrow">OUR APPROACH</span>
      <h2>Ideas become <span>impact.</span></h2>
      <p>
        We start with the problem, build with purpose and stay close to the
        outcome. Every engagement is shaped around your people, your platforms
        and the result you want to create.
      </p>
      <a href="/contact" className="services-cta">Start a conversation <span>→</span></a>
    </section>
  </main>
);

export default Services;
