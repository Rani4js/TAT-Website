import "./Home.css";
import ServicesConstellation from "../components/home/ServiceScroll/ServiceScroll";

const testimonials = [
  ["TAT helped us turn a complex digital challenge into a clear, connected roadmap our whole team could act on.", "Digital transformation lead"],
  ["The team brought design, development and customer data into one experience that finally feels consistent.", "Marketing director"],
  ["Practical thinking, thoughtful execution and a platform we can keep building on as the business grows.", "Product owner"],
  ["They gave our team the confidence to make better decisions without slowing down the work that mattered most.", "Customer experience director"],
  ["The result is a digital foundation that feels simpler for our customers and stronger for everyone behind it.", "Operations lead"],
  ["TAT brought the right questions, the right specialists and a clear sense of momentum from the first conversation.", "Technology partner"],
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

          <div className="hero-visual">
            <ServicesConstellation />
          </div>

        </div>


      </section>
     
       
        

      {/* =====================================================
          SERVICES
      ===================================================== */}
       {/* Services constellation moved to the dedicated Services page. */}
      
      {/* ================= PROCESS ================= */}

      <section className="process-section">

        <div className="home-story-label">
          <span className="section-number">OUR PROCESS</span>
          <span className="home-story-line"></span>
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

      <section className="home-principles">
        <div className="home-section-heading">
          <span className="section-number">WHAT GUIDES US</span>
          <h2>Make it <span>matter.</span></h2>
        </div>
        <div className="home-principle-grid">
          <article>
            <h3>Clarity over noise</h3>
            <p>We make complex technology easier to understand, use and improve.</p>
          </article>
          <article>
            <h3>People at the centre</h3>
            <p>The best digital experiences begin with empathy for the people using them.</p>
          </article>
          <article>
            <h3>Built to move forward</h3>
            <p>We create flexible foundations that keep working as your business grows.</p>
          </article>
        </div>
      </section>

      <section className="home-impact">
        <div className="home-impact-intro">
          <span className="section-number">CLIENT IMPACT</span>
          <h2>Technology that creates <span>momentum.</span></h2>
          <p>
            We connect the right people, platforms and ideas to help ambitious
            teams move from a good intention to measurable progress.
          </p>
        </div>
        <div className="home-impact-grid">
          <article>
            <h3>Clearer experiences</h3>
            <p>Make every interaction easier to understand, navigate and trust.</p>
          </article>
          <article>
            <h3>Connected systems</h3>
            <p>Bring content, campaigns, platforms and customer data into one flow.</p>
          </article>
          <article>
            <h3>Room to grow</h3>
            <p>Build flexible foundations that continue to support the next stage.</p>
          </article>
        </div>
      </section>

      <section className="home-story">
        <div className="home-story-label">
          <span className="section-number">OUR STORY</span>
          <span className="home-story-line"></span>
        </div>
        <div className="home-story-content">
          <h2>
            Different disciplines.
            <span>One direction.</span>
          </h2>
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

      <section className="home-testimonials">
        <div className="home-testimonials-heading">
          <span className="section-number">CLIENT PERSPECTIVES</span>
          <h2>Built together.<span>Measured by impact.</span></h2>
        </div>
        <div className="home-testimonials-grid">
          <div className="home-testimonials-track">
            {[false, true].map((isDuplicate, groupIndex) => (
              <div
                className="home-testimonials-group"
                key={groupIndex}
                aria-hidden={isDuplicate}
              >
                {testimonials.map(([quote, role]) => (
                  <article key={role}>
                    <p>“{quote}”</p>
                    <strong>{role}</strong>
                  </article>
                ))}
              </div>
            ))}
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




    </main>
  );
}

export default Home;