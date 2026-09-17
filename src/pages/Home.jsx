import React from "react";
import "./Home.css";
import ServicesConstellation from "../components/home/ServiceScroll/ServiceScroll";

const services = [
  ["Web Development", "Modern, responsive websites and digital experiences built for performance, accessibility and growth."],
  ["React Development", "Scalable React applications and reusable frontend systems for fast, engaging digital products."],
  ["UI/UX Design", "Clear, user-centred interfaces that connect business goals with intuitive digital experiences."],
  ["Adobe Experience Manager", "AEM Sites, authoring and frontend experiences designed for flexible enterprise content delivery."],
  ["Salesforce Marketing Cloud", "Connected marketing experiences across journeys, email, automation and customer engagement."],
  ["Salesforce Data Cloud", "Customer data foundations that help teams connect, understand and activate data across experiences."],
  ["AI & Automation", "Practical automation and AI-enabled workflows that reduce repetitive work and improve digital operations."],
];

const processSteps = [
  ["01", "Discover", "Understand your goals, users, technology landscape and opportunities before defining the right approach."],
  ["02", "Design", "Turn requirements into clear experiences, interfaces and technical direction that teams can build on."],
  ["03", "Build", "Develop reliable digital experiences using modern frontend, content, marketing and data technologies."],
  ["04", "Grow", "Improve, automate and evolve the experience as your business, customers and technology needs change."],
];

const capabilities = [
  ["Frontend Engineering", "Responsive, accessible interfaces and reusable frontend systems built around real user needs."],
  ["Experience Platforms", "Enterprise web and content experiences using Adobe Experience Manager and modern web technologies."],
  ["Customer Engagement", "Marketing automation, email journeys and customer engagement solutions using Salesforce technologies."],
  ["Customer Data", "Connected data foundations that help organisations bring customer information together for better experiences."],
  ["AI & Automation", "Practical automation and AI-enabled workflows designed to improve efficiency and reduce repetitive work."],
  ["Digital Experience", "Design, development and technology capabilities brought together around a common business objective."],
];

function Home() {
  return (
    <main className="home-page">
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
            <a className="btn btn-primary" href="/services">Explore Services</a>
            <a className="btn btn-secondary" href="/contact">Start a Project</a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Together Advanced Technologies digital service ecosystem">
          <ServicesConstellation />
        </div>
      </section>

      <section className="services-section" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">WHAT WE DO</p>
          <h2 id="services-title">Digital capabilities that work together.</h2>
          <p>
            From frontend engineering and enterprise content platforms to
            customer engagement, data and automation, we bring complementary
            technology capabilities together to solve business problems.
          </p>
        </div>
        <div className="services-grid">
          {services.map(([title, description]) => (
            <article className="service-card" key={title}>
              <h3><a href="/services">{title}</a></h3>
              <p>{description}</p>
              <a className="service-card-link" href="/services" aria-label={`Explore ${title}`}>
                Explore services →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="impact-section" aria-labelledby="capabilities-title">
        <div className="section-heading">
          <p className="eyebrow">OUR CAPABILITIES</p>
          <h2 id="capabilities-title">Technology expertise across the digital experience.</h2>
          <p>
            We connect design, frontend engineering, experience platforms,
            customer engagement, data and automation to create practical
            digital solutions.
          </p>
        </div>
        <div className="impact-grid">
          {capabilities.map(([title, text]) => (
            <article className="impact-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" aria-labelledby="process-title">
        <div className="section-heading">
          <p className="eyebrow">HOW WE WORK</p>
          <h2 id="process-title">From direction to delivery.</h2>
          <p>A practical process designed to create clarity early, build with purpose and leave room for continuous improvement.</p>
        </div>
        <div className="process-grid">
          {processSteps.map(([number, title, text]) => (
            <article className="process-card" key={number}>
              <span className="process-number" aria-hidden="true">{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="principles-section" aria-labelledby="principles-title">
        <div className="section-heading">
          <p className="eyebrow">OUR PRINCIPLES</p>
          <h2 id="principles-title">Technology should create clarity.</h2>
        </div>
        <div className="principles-grid">
          <article className="principle-card">
            <h3>Clarity over noise</h3>
            <p>We focus on the problems that matter, the users who experience them and the technology that can create a meaningful result.</p>
          </article>
          <article className="principle-card">
            <h3>People at the centre</h3>
            <p>Digital experiences work when they are useful to the people who use them, manage them and depend on them.</p>
          </article>
          <article className="principle-card">
            <h3>Built to move forward</h3>
            <p>We favour scalable foundations, reusable systems and practical solutions that can evolve with the business.</p>
          </article>
        </div>
      </section>

      <section className="story-section" aria-labelledby="impact-title">
        <div className="story-content">
          <p className="eyebrow">CLIENT IMPACT</p>
          <h2 id="impact-title">Build today. Create room for tomorrow.</h2>
          <p>Digital platforms should make it easier for teams to create, manage, connect and improve customer experiences.</p>
          <p>Our approach combines technology expertise with a focus on usability, accessibility, scalability and long-term maintainability.</p>
        </div>
      </section>

      <section className="story-section" aria-labelledby="story-title">
        <div className="story-content">
          <p className="eyebrow">OUR STORY</p>
          <h2 id="story-title">Different disciplines. One direction.</h2>
          <p>Together Advanced Technologies brings design, development, marketing technology, customer data and automation into one connected delivery approach.</p>
          <p>Our focus is simple: help businesses create digital experiences that are useful today and ready to evolve tomorrow.</p>
          <a className="text-link" href="/about">Learn more about TAT →</a>
        </div>
      </section>

      <section className="testimonials-section" aria-labelledby="collaboration-title">
        <div className="section-heading">
          <p className="eyebrow">WORKING TOGETHER</p>
          <h2 id="collaboration-title">Built around collaboration.</h2>
          <p>We work alongside business and technology teams to turn ideas, requirements and challenges into digital solutions.</p>
        </div>
        <div className="testimonials-grid">
          <article className="testimonial-card">
            <blockquote>“Clear communication from discovery through delivery.”</blockquote>
            <figcaption>Collaboration</figcaption>
          </article>
          <article className="testimonial-card">
            <blockquote>“Practical technology decisions with a focus on the outcome.”</blockquote>
            <figcaption>Delivery</figcaption>
          </article>
          <article className="testimonial-card">
            <blockquote>“Digital experiences designed with people and scalability in mind.”</blockquote>
            <figcaption>Experience</figcaption>
          </article>
        </div>
      </section>

      <section className="cta-section" aria-labelledby="cta-title">
        <div className="cta-content">
          <p className="eyebrow">LET&apos;S BUILD WHAT&apos;S NEXT</p>
          <h2 id="cta-title">Ready to build what&apos;s next?</h2>
          <p>Tell us what you are building, improving or trying to solve. We can explore the right technology and delivery approach together.</p>
          <a className="btn btn-primary" href="/contact">Get in touch</a>
        </div>
      </section>
    </main>
  );
}

export default Home;
