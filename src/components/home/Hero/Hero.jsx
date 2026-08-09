import "./Hero.css";
import Orbit from "../OrbitServices/Orbit"
const Hero = () => {
return(
      <section className="hero-section">

        <div className="hero-grid"></div>

        <div className="hero-orbit hero-orbit-one"></div>
        <div className="hero-orbit hero-orbit-two"></div>

        <div className="hero-content">

          <div className="hero-label">
            <span className="status-dot"></span>
            DIGITAL TECHNOLOGY PARTNER
          </div>

          <h1>
            Technology
            <span>That Moves</span>
            <strong>Your Business.</strong>
          </h1>

          <p className="hero-description">
            Together Advanced Technologies brings design, development, marketing automation and customer data together under one technology ecosystem.
          </p>

          <div className="hero-actions">

            <a href="/services" className="primary-btn">
              Explore Services
              <span>↗</span>
            </a>

            <a href="/contact" className="secondary-btn">
              Start a Project
            </a>

          </div>

        </div>
          <Orbit />
       

        <div className="hero-scroll">
          <span></span>
          SCROLL TO EXPLORE
        </div>

      </section>
    
    );
}
export default Hero;