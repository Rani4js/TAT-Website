import "./ServicesInteractive.css";
import {
  Globe,
  Mail,
  Cloud,
  Layers,
  Atom,
  Database,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Design",
    description:
      "Modern, responsive websites designed to create a strong digital presence for your business.",
    technologies: "UI / UX · HTML · CSS · JavaScript",
    icon: Globe,
  },
  {
    number: "02",
    title: "Email Marketing",
    description:
      "Personalized email experiences that connect your brand with the right audience.",
    technologies: "SFMC · Automation · Campaigns",
    icon: Mail,
  },
  {
    number: "03",
    title: "Salesforce",
    description:
      "Customer-focused Salesforce solutions that streamline marketing and business operations.",
    technologies: "Marketing Cloud · Data Cloud · CRM",
    icon: Cloud,
  },
  {
    number: "04",
    title: "AEM Sites",
    description:
      "Scalable Adobe Experience Manager websites built for enterprise digital experiences.",
    technologies: "AEM · Components · Content Authoring",
    icon: Layers,
  },
  {
    number: "05",
    title: "React Apps",
    description:
      "Fast and interactive React applications built with reusable and scalable components.",
    technologies: "React · JavaScript · APIs",
    icon: Atom,
  },
  {
    number: "06",
    title: "Data Cloud",
    description:
      "Connected customer data solutions that turn fragmented information into actionable insights.",
    technologies: "Data Cloud · DMO · Data Streams",
    icon: Database,
  },
];

function ServicesInteractive() {
  return (
    <section className="services-section">

      <div className="services-header">

        <div>
          <span className="services-eyebrow">
            WHAT WE DO
          </span>

          <h2>
            Technology.
            <br />
            <span>Without limits.</span>
          </h2>
        </div>

        <p className="services-intro">
          From websites to enterprise platforms, we create
          technology solutions designed around your business.
        </p>

      </div>


      <div className="services-deck">

        {services.map((service) => {

          const Icon = service.icon;

          return (
            <article
              className="service-card"
              key={service.number}
            >

              <div className="service-card-top">

                <span className="service-number">
                  {service.number}
                </span>

                <ArrowUpRight className="service-arrow" />

              </div>


              <div className="service-card-icon">
                <Icon />
              </div>


              <div className="service-card-content">

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <span className="service-tech">
                  {service.technologies}
                </span>

              </div>


              <div className="service-card-glow" />

            </article>
          );
        })}

      </div>

    </section>
  );
}

export default ServicesInteractive;