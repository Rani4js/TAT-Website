import "./About.css";

const capabilities = [
  ["Strategy", "Finding the clearest path from a business challenge to a useful digital direction."],
  ["Experience", "Designing journeys that feel considered, intuitive and unmistakably yours."],
  ["Technology", "Building dependable platforms that perform today and adapt tomorrow."],
  ["Growth", "Connecting content, campaigns and data to create momentum you can measure."],
];

const approach = [
  ["Listen first", "We start with the context behind the brief: the people, constraints and opportunities that shape the right solution."],
  ["Make it useful", "Every idea should make a real experience clearer, faster or more valuable for the people using it."],
  ["Keep it moving", "We build momentum through practical steps, open collaboration and foundations that can evolve with you."],
];

const About = () => (
  <main className="about-page">
    <section className="about-hero">
      <div className="about-hero-grid" />
      <div className="about-hero-glow" />
      <div className="about-hero-content">
        <span className="about-eyebrow">WHO WE ARE</span>
        <h1>
          Technology with
          <span>intention.</span>
        </h1>
        <p>
          Together Advanced Technologies is a digital partner for teams ready
          to turn ambitious ideas into useful, lasting experiences.
        </p>
      </div>
      <div className="about-hero-mark" aria-hidden="true">
        <span>01</span>
        <i />
        <small>PEOPLE / PURPOSE / PROGRESS</small>
      </div>
    </section>

    <section className="about-approach">
      <div className="about-section-label">
        <span className="about-eyebrow">HOW WE WORK</span>
        <span className="about-section-line" />
      </div>
      <div className="about-approach-intro">
        <h2>Good work starts with <span>good questions.</span></h2>
        <p>
          We bring curiosity, craft and commercial thinking to every
          engagement. That means fewer handoffs, better conversations and
          digital work that has a clear reason to exist.
        </p>
      </div>
      <div className="about-approach-grid">
        {approach.map(([title, text]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="about-technology">
      <div className="about-section-label">
        <span className="about-eyebrow">TECHNOLOGY ECOSYSTEM</span>
        <span className="about-section-line" />
      </div>
      <div className="about-technology-layout">
        <div>
          <h2>One ecosystem.<span>Multiple possibilities.</span></h2>
        </div>
        <div className="about-technology-copy">
          <p>
            Your technology stack should work as one connected system. We
            bring together modern frontend development, enterprise platforms,
            marketing automation and customer data.
          </p>
          <a href="/services">
            Explore our capabilities <span>→</span>
          </a>
        </div>
      </div>
    </section>

    <section className="about-capabilities">
      <div className="about-capabilities-intro">
        <span className="about-eyebrow">WHAT WE BRING</span>
        <h2>One team for the <span>whole picture.</span></h2>
        <p>
          We join the dots between what your customers need, what your
          business is building and what your technology can make possible.
        </p>
      </div>
      <div className="about-capabilities-list">
        {capabilities.map(([title, text], index) => (
          <article key={title}>
            <span>0{index + 1}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="about-stats">
      <div>
        <strong>01</strong>
        <span>Connected point of view</span>
      </div>
      <div>
        <strong>04</strong>
        <span>Disciplines working as one</span>
      </div>
      <div>
        <strong>∞</strong>
        <span>Room to keep evolving</span>
      </div>
    </section>

    <section className="about-cta">
      <span className="about-eyebrow">LET&apos;S BUILD TOGETHER</span>
      <h2>Have a challenge?<span>Bring it on.</span></h2>
      <a href="/contact">Start a conversation <span>→</span></a>
    </section>
  </main>
);

export default About;
