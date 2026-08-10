import TATLogo from "../../assets/TAT-Logo.png";
const Footer = () => {
  return (

<footer className="site-footer">

    <div className="footer-grid"></div>

    <div className="footer-glow"></div>

    <div className="footer-container">

        {/* TOP FOOTER */}

        <div className="footer-top">

            {/* BRAND */}

            <div className="footer-brand">

                <div className="footer-logo">
                   <img src={TATLogo} alt="TAT Logo" />
                </div>

                <p>
                    Together Advanced Technologies brings
                    design, development, marketing and data
                    together under one technology ecosystem.
                </p>

                <a
                    href="/contact"
                    className="footer-project-link"
                >
                    Start a project<span>→</span>
                    
                </a> 

            </div>


            {/* NAVIGATION */}

            <div className="footer-column">

                <span className="footer-label">
                    EXPLORE
                </span>

                <a href="/">Home</a>

                <a href="/services">Services</a>

                <a href="/about">About</a>

                <a href="/contact">Contact</a>

            </div>


            {/* SERVICES */}

            <div className="footer-column">

                <span className="footer-label">
                    CAPABILITIES
                </span>

                <a href="/services">
                    Web Design
                </a>

                <a href="/services">
                    Email Marketing
                </a>

                <a href="/services">
                    Salesforce
                </a>

                <a href="/services">
                    AEM Sites
                </a>

                <a href="/services">
                    React Apps
                </a>

                <a href="/services">
                    Data Cloud
                </a>

            </div>


            {/* TECHNOLOGY */}

            <div className="footer-column">

                <span className="footer-label">
                    TECHNOLOGY
                </span>

                <span>React</span>

                <span>JavaScript</span>

                <span>AEM</span>

                <span>Salesforce</span>

                <span>Marketing Cloud</span>

                <span>Data Cloud</span>

            </div>

        </div>


        {/* FOOTER DIVIDER */}

        <div className="footer-divider"></div>


        {/* BOTTOM FOOTER */}

        <div className="footer-bottom">

            <span>
                © 2026 Together Advanced Technologies
            </span>

            <div className="footer-bottom-links">

                <a href="/privacy">
                    Privacy
                </a>

                <a href="/terms">
                    Terms
                </a>

                <a href="/cookies">
                    Cookies
                </a>

            </div>

            <span className="footer-status">
                <span></span>
                DIGITAL TECHNOLOGY PARTNER
            </span>

        </div>

    </div>

</footer>
  );
};

export default Footer;