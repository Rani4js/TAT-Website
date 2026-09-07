import "./Services.css";

const services = [
  {
    number: "01",
    title: "Web Design",
    description: "Digital experiences that make your brand clear, memorable and easy to use.",
    details: "Strategy / UX / UI / Development",
  },
  {
    number: "02",
    title: "Email Marketing",
    description: "Connected campaigns that turn customer attention into lasting relationships.",
    details: "SFMC / Automation / Campaigns",
  },
  {
    number: "03",
    title: "Salesforce",
    description: "Customer-focused solutions that connect marketing, data and business operations.",
    details: "Marketing Cloud / CRM / Data Cloud",
  },
  {
    number: "04",
    title: "AEM Sites",
    description: "Flexible enterprise content experiences built for scale and speed.",
    details: "Components / Content / Personalization",
  },
  {
    number: "05",
    title: "React Apps",
    description: "Fast, scalable applications designed for modern digital products.",
    details: "React / JavaScript / APIs",
  },
  {
    number: "06",
    title: "Data Cloud",
    description: "Unified customer data that gives teams a clearer path to action.",
    details: "CDP / Identity / Insights",
  },
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
        <span>06</span>
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
            <span className="service-detail-symbol" aria-hidden="true">↗</span>
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
