import "./About.css";

const principles = [
  {
    number: "01",
    title: "Clarity over noise",
    text: "We make complex technology easier to understand, use and improve.",
  },
  {
    number: "02",
    title: "People at the centre",
    text: "The best digital experiences begin with empathy for the people using them.",
  },
  {
    number: "03",
    title: "Built to move forward",
    text: "We create flexible foundations that keep working as your business grows.",
  },
];

const capabilities = [
  ["Strategy", "Finding the clearest path from a business challenge to a useful digital direction."],
  ["Experience", "Designing journeys that feel considered, intuitive and unmistakably yours."],
  ["Technology", "Building dependable platforms that perform today and adapt tomorrow."],
  ["Growth", "Connecting content, campaigns and data to create momentum you can measure."],
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

    <section className="about-story">
      <div className="about-section-label">
        <span className="about-eyebrow">OUR STORY</span>
        <span className="about-section-line" />
      </div>
      <div className="about-story-content">
        <h2>Different disciplines.<span>One direction.</span></h2>
        <p>
          Design, development, marketing and data often live in separate
          places. We bring them together so every decision supports the same
          customer, the same story and the same outcome.
        </p>
        <p>
          From a sharper brand experience to a connected marketing ecosystem,
          we work alongside your team to make progress feel practical and
          measurable.
        </p>
      </div>
    </section>

    <section className="about-principles">
      <div className="about-section-heading">
        <span className="about-eyebrow">WHAT GUIDES US</span>
        <h2>Make it <span>matter.</span></h2>
      </div>
      <div className="about-principle-grid">
        {principles.map((principle) => (
          <article key={principle.number}>
            <strong>{principle.number}</strong>
            <h3>{principle.title}</h3>
            <p>{principle.text}</p>
          </article>
        ))}
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
