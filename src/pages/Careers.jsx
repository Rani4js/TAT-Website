import "./Careers.css";

const roles = [
  {
    title: "Frontend Developer",
    type: "Full-time · Hybrid",
    description: "Build thoughtful, high-performance interfaces with React and modern web technology.",
    tags: "React / JavaScript / APIs",
  },
  {
    title: "Salesforce Marketing Cloud Specialist",
    type: "Full-time · Hybrid",
    description: "Design connected customer journeys that turn data into meaningful experiences.",
    tags: "SFMC / Automation / Data",
  },
  {
    title: "UI/UX Designer",
    type: "Full-time · Hybrid",
    description: "Shape clear, expressive digital products from the first idea through final delivery.",
    tags: "Research / UX / Visual Design",
  },
];

const Careers = () => (
  <main className="careers-page">
    <section className="careers-hero">
      <div className="careers-hero-grid" />
      <div className="careers-hero-glow" />
      <div className="careers-hero-content">
        <span className="careers-eyebrow">JOIN THE JOURNEY</span>
        <h1>
          Make work
          <span>matter.</span>
        </h1>
        <p>
          Bring your curiosity, craft and point of view. We are building a
          team that makes digital experiences clearer, kinder and more useful.
        </p>
        <a className="careers-hero-link" href="#open-roles">
          Explore open roles <span>↓</span>
        </a>
      </div>
      <div className="careers-hero-mark" aria-hidden="true">
        <span>∞</span>
        <i />
        <small>GROW TOGETHER</small>
      </div>
    </section>

    <section className="careers-values">
      <div className="careers-section-heading">
        <span className="careers-eyebrow">HOW WE WORK</span>
        <h2>Good people.<span>Great work.</span></h2>
      </div>
      <div className="careers-value-list">
        <article>
          <strong>01</strong>
          <h3>Stay curious</h3>
          <p>We ask better questions, keep learning and never settle for the obvious answer.</p>
        </article>
        <article>
          <strong>02</strong>
          <h3>Own the outcome</h3>
          <p>We take responsibility for the details and stay focused on the difference our work makes.</p>
        </article>
        <article>
          <strong>03</strong>
          <h3>Make space</h3>
          <p>Different perspectives make stronger work. We listen generously and build together.</p>
        </article>
      </div>
    </section>

    <section className="careers-roles" id="open-roles">
      <div className="careers-section-heading">
        <span className="careers-eyebrow">OPEN POSITIONS</span>
        <h2>Find your <span>next move.</span></h2>
      </div>
      <div className="careers-role-list">
        {roles.map((role) => (
          <article className="career-role-card" key={role.title}>
            <div>
              <span className="career-role-type">{role.type}</span>
              <h3>{role.title}</h3>
              <p>{role.description}</p>
              <span className="career-role-tags">{role.tags}</span>
            </div>
            <a href="/contact" aria-label={`Apply for ${role.title}`}>↗</a>
          </article>
        ))}
      </div>
    </section>

    <section className="careers-cta">
      <span className="careers-eyebrow">DON&apos;T SEE YOUR ROLE?</span>
      <h2>We&apos;re always open to <span>good energy.</span></h2>
      <p>Tell us what you could bring to TAT and where you want to grow.</p>
      <a href="/contact">Start a conversation <span>→</span></a>
    </section>
  </main>
);

export default Careers;
