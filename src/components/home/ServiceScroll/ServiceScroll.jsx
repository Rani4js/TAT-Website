import React, { useState } from "react";
import "./ServiceScroll.css";

const services = [
  {
    number: "01",
    title: "Web Design",
    description:
      "Modern, responsive websites designed to create a strong digital presence for your business.",
    tech: "UI / UX • HTML • CSS • JavaScript",
    icon: "◎",
    className: "node-web",
  },
  {
    number: "02",
    title: "Email Marketing",
    description:
      "Personalized email experiences that connect your brand with the right audience.",
    tech: "SFMC • Automation • Campaigns",
    icon: "✉",
    className: "node-email",
  },
  {
    number: "03",
    title: "Salesforce",
    description:
      "Customer-focused Salesforce solutions that streamline marketing and business operations.",
    tech: "Marketing Cloud • Data Cloud • CRM",
    icon: "☁",
    className: "node-salesforce",
  },
  {
    number: "04",
    title: "AEM Sites",
    description:
      "Enterprise digital experiences built with Adobe Experience Manager.",
    tech: "AEM • Components • Content",
    icon: "▱",
    className: "node-aem",
  },
  {
    number: "05",
    title: "React Apps",
    description:
      "Fast, scalable React applications built for modern digital experiences.",
    tech: "React • JavaScript • APIs",
    icon: "⚛",
    className: "node-react",
  },
  {
    number: "06",
    title: "Data Cloud",
    description:
      "Connected customer data solutions that turn information into actionable insights.",
    tech: "Data Cloud • CDP • Customer Data",
    icon: "◉",
    className: "node-data",
  },
];

const ServicesConstellation = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="constellation-section" id="services">

      {/* Background atmosphere */}
      <div className="constellation-glow"></div>
      <div className="constellation-grid"></div>

      <div className="constellation-container">

        {/* HEADER */}
        <div className="constellation-header">

          <div>
            <span className="constellation-eyebrow">
              WHAT WE DO
            </span>

            <h2>
              Technology.
              <span>Without limits.</span>
            </h2>
          </div>

          <p>
            One connected ecosystem bringing design,
            development, automation and customer data
            together.
          </p>

        </div>


        {/* CONSTELLATION */}
        <div className="constellation">

          {/* SVG CONNECTIONS */}
          <svg
            className="constellation-lines"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >

            {/* WEB → EMAIL */}
            <path
              className={
                activeService.number === "01" ||
                activeService.number === "02"
                  ? "constellation-path active"
                  : "constellation-path"
              }
              d="M130 155 C250 80 330 105 405 185"
            />

            {/* EMAIL → SALESFORCE */}
            <path
              className={
                activeService.number === "02" ||
                activeService.number === "03"
                  ? "constellation-path active"
                  : "constellation-path"
              }
              d="M405 185 C500 275 610 270 750 150"
            />

            {/* SALESFORCE → DATA */}
            <path
              className={
                activeService.number === "03" ||
                activeService.number === "06"
                  ? "constellation-path active"
                  : "constellation-path"
              }
              d="M750 150 C850 210 870 330 820 440"
            />

            {/* DATA → REACT */}
            <path
              className={
                activeService.number === "06" ||
                activeService.number === "05"
                  ? "constellation-path active"
                  : "constellation-path"
              }
              d="M820 440 C680 510 560 500 500 410"
            />

            {/* REACT → AEM */}
            <path
              className={
                activeService.number === "05" ||
                activeService.number === "04"
                  ? "constellation-path active"
                  : "constellation-path"
              }
              d="M500 410 C410 500 300 480 255 390"
            />

            {/* AEM → WEB */}
            <path
              className={
                activeService.number === "04" ||
                activeService.number === "01"
                  ? "constellation-path active"
                  : "constellation-path"
              }
              d="M255 390 C160 350 90 280 130 155"
            />

            {/* Inner connections */}
            <path
              className="constellation-path subtle"
              d="M130 155 C300 300 360 280 500 410"
            />

            <path
              className="constellation-path subtle"
              d="M405 185 C470 300 600 350 820 440"
            />

          </svg>


          {/* CENTER INFORMATION */}
          <div className="constellation-center">

            <div className="center-orbit"></div>

            <span className="center-number">
              {activeService.number} / 06
            </span>

            <div className="center-icon">
              {activeService.icon}
            </div>

            <h3>
              {activeService.title}
            </h3>

            <p>
              {activeService.description}
            </p>

            <span className="center-tech">
              {activeService.tech}
            </span>

          </div>


          {/* SERVICE NODES */}

          {services.map((service) => (

            <button
              key={service.number}
              type="button"
              className={`
                constellation-node
                ${service.className}
                ${
                  activeService.number === service.number
                    ? "active"
                    : ""
                }
              `}
              onMouseEnter={() => setActiveService(service)}
              onFocus={() => setActiveService(service)}
              onClick={() => setActiveService(service)}
              aria-label={`View ${service.title}`}
            >

              {/* <span className="node-number">
                {service.number}
              </span> */}

              <span className="node-icon">
                {service.icon}
              </span>

              <span className="node-title">
                {service.title}
              </span>

            </button>

          ))}

        </div>


        {/* BOTTOM INDICATOR */}
        <div className="constellation-footer">

          <span className="constellation-line"></span>

          <span>
            EXPLORE OUR TECHNOLOGY ECOSYSTEM
          </span>

          <span className="constellation-arrow">
            ↓
          </span>

        </div>

      </div>

    </section>
  );
};

export default ServicesConstellation;