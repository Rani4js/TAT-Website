//Testing Home page
import React from "react";
import "./Home.css";
import ServicesConstellation from "../components/home/ServiceScroll/ServiceScroll";

const services = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites and digital experiences built for performance, accessibility and growth.",
    href: "/services/web-development",
  },
  {
    title: "React Development",
    description:
      "Scalable React applications and reusable frontend systems for fast, engaging digital products.",
    href: "/services/react-development",
  },
  {
    title: "UI/UX Design",
    description:
      "Clear, user-centred interfaces that connect business goals with intuitive digital experiences.",
    href: "/services/ui-ux-design",
  },
  {
    title: "Adobe Experience Manager",
    description:
      "AEM Sites, authoring and frontend experiences designed for flexible enterprise content delivery.",
    href: "/services/aem-development",
  },
  {
    title: "Salesforce Marketing Cloud",
    description:
      "Connected marketing experiences across journeys, email, automation and customer engagement.",
    href: "/services/salesforce/marketing-cloud",
  },
  {
    title: "Salesforce Data Cloud",
    description:
      "Customer data foundations that help teams connect, understand and activate data across experiences.",
    href: "/services/salesforce/data-cloud",
  },
  {
    title: "AI & Automation",
    description:
      "Practical automation and AI-enabled workflows that reduce repetitive work and improve digital operations.",
    href: "/services/ai-automation",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    text:
      "Understand your goals, users, technology landscape and opportunities before defining the right approach.",
  },
  {
    number: "02",
    title: "Design",
    text:
      "Turn requirements into clear experiences, interfaces and technical direction that teams can build on.",
  },
  {
    number: "03",
    title: "Build",
    text:
      "Develop reliable digital experiences using modern frontend, content, marketing and data technologies.",
  },
  {
    number: "04",
    title: "Grow",
    text:
      "Improve, automate and evolve the experience as your business, customers and technology needs change.",
  },
];

const testimonials = [
  {
    quote:
      "The team brought design, development and delivery together with a clear focus on the outcome.",
    role: "Digital Transformation",
  },
  {
    quote:
      "A thoughtful approach to building digital experiences that are easier to manage and scale.",
    role: "Technology & Experience",
  },
  {
    quote:
      "Clear communication, strong attention to detail and a practical approach from discovery through delivery.",
    role: "Digital Product",
  },
];

function Home() {
  return (
    <main className="home-page">
      {/* Hero */}
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="eyebrow">DIGITAL TECHNOLOGY PARTNER</p>

          <h1 id="hero-title">Technology That Moves Your Business.</h1>

          <p className="hero-description">
            Together Advanced Technologies helps businesses build connected
            digital experiences across web, React, Adobe Experience Manager,
            Salesforce Marketing Cloud, Data Cloud and intelligent automation.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="/services">
              Explore Services
            </a>

            <a className="btn btn-secondary" href="/contact">
              Start a Project
            </a>
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label="Together Advanced Technologies digital service ecosystem"
        >
          <ServicesConstellation />
        </div>
      </section>

      {/* Services */}
      <section className="services-section" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">WHAT WE DO</p>

          <h2 id="services-title">
            Digital capabilities that work together.
          </h2>

          <p>
            From frontend engineering and enterprise content platforms to
            customer engagement, data and automation, we bring complementary
            technology capabilities together to solve business problems.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.href}>
              <h3>
                <a href={service.href}>{service.title}</a>
              </h3>

              <p>{service.description}</p>

              <a
                className="service-card-link"
                href={service.href}
                aria-label={`Explore ${service.title}`}
              >
                Explore service →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="process-section" aria-labelledby="process-title">
        <div className="section-heading">
          <p className="eyebrow">HOW WE WORK</p>

          <h2 id="process-title">From direction to delivery.</h2>

          <p>
            A practical process designed to create clarity early, build with
            purpose and leave room for continuous improvement.
          </p>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <article className="process-card" key={step.number}>
              <span className="process-number" aria-hidden="true">
                {step.number}
              </span>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section
        className="principles-section"
        aria-labelledby="principles-title"
      >
        <div className="section-heading">
          <p className="eyebrow">OUR PRINCIPLES</p>

          <h2 id="principles-title">Technology should create clarity.</h2>
        </div>

        <div className="principles-grid">
          <article className="principle-card">
            <h3>Clarity over noise</h3>

            <p>
              We focus on the problems that matter, the users who experience
              them and the technology that can create a meaningful result.
            </p>
          </article>

          <article className="principle-card">
            <h3>People at the centre</h3>

            <p>
              Digital experiences work when they are useful to the people who
              use them, manage them and depend on them.
            </p>
          </article>

          <article className="principle-card">
            <h3>Built to move forward</h3>

            <p>
              We favour scalable foundations, reusable systems and practical
              solutions that can evolve with the business.
            </p>
          </article>
        </div>
      </section>

      {/* Client Impact */}
      <section className="impact-section" aria-labelledby="impact-title">
        <div className="section-heading">
          <p className="eyebrow">CLIENT IMPACT</p>

          <h2 id="impact-title">Build today. Create room for tomorrow.</h2>
        </div>

        <div className="impact-grid">
          <article className="impact-card">
            <h3>Clearer experiences</h3>

            <p>
              Design and frontend engineering focused on accessible,
              responsive and intuitive digital journeys.
            </p>
          </article>

          <article className="impact-card">
            <h3>Connected systems</h3>

            <p>
              Content, customer engagement and data capabilities designed to
              work together instead of becoming isolated technology stacks.
            </p>
          </article>

          <article className="impact-card">
            <h3>Room to grow</h3>

            <p>
              Flexible technical foundations that support new experiences,
              integrations, campaigns and operational improvements.
            </p>
          </article>
        </div>
      </section>

      {/* Story */}
      <section className="story-section" aria-labelledby="story-title">
        <div className="story-content">
          <p className="eyebrow">OUR STORY</p>

          <h2 id="story-title">Different disciplines. One direction.</h2>

          <p>
            Together Advanced Technologies brings design, development,
            marketing technology, customer data and automation into one
            connected delivery approach.
          </p>

          <p>
            Our focus is simple: help businesses create digital experiences
            that are useful today and ready to evolve tomorrow.
          </p>

          <a className="text-link" href="/about">
            Learn more about TAT →
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="testimonials-section"
        aria-labelledby="testimonials-title"
      >
        <div className="section-heading">
          <p className="eyebrow">WORKING TOGETHER</p>

          <h2 id="testimonials-title">Built around collaboration.</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <figure className="testimonial-card" key={index}>
              <blockquote>“{testimonial.quote}”</blockquote>

              <figcaption>{testimonial.role}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section" aria-labelledby="cta-title">
        <div className="cta-content">
          <p className="eyebrow">LET&apos;S BUILD WHAT&apos;S NEXT</p>

          <h2 id="cta-title">Ready to build what&apos;s next?</h2>

          <p>
            Tell us what you are building, improving or trying to solve. We
            can explore the right technology and delivery approach together.
          </p>

          <a className="btn btn-primary" href="/contact">
            Get in touch
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
