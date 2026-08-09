import "./Orbit.css";

import TATLogo from "../../../assets/images/TAT.PNG";
import WebLogo from "../../../assets/images/UI.png";
import AemLogo from "../../../assets/images/AEM.png";
import ReactLogo from "../../../assets/images/reactapp.png";
import SalesforceLogo from "../../../assets/images/Salesforce-icon.png";


const services = [
  {
    name: "WEB DESIGN",
    img: WebLogo,
    className: "orbit-web",
  },
  {
    name: "AEM",
    img: AemLogo,
    className: "orbit-aem",
  },
  {
    name: "REACT",
    img: ReactLogo,
    className: "orbit-react",
  },
  {
    name: "SALESFORCE",
    img: SalesforceLogo,
    className: "orbit-salesforce",
  },
];


function Orbit() {
  return (
    <section className="technology-orbit-section">

      <div className="technology-orbit">

        {/* ================================
            ORBIT RINGS
        ================================= */}

        <div className="orbit-ring orbit-ring-1"></div>

        <div className="orbit-ring orbit-ring-2"></div>

        <div className="orbit-ring orbit-ring-3"></div>

        <div className="orbit-ring orbit-ring-4"></div>


        {/* ================================
            CENTER GLOW
        ================================= */}

        <div className="orbit-center-glow"></div>


        {/* ================================
            TAT CENTER
        ================================= */}

        <div className="tat-orbit-center">

          <img
            src={TATLogo}
            alt="Together Advanced Technologies"
          />

        </div>


        {/* ================================
            SERVICES
        ================================= */}

        {services.map((service) => (

          <div
            key={service.name}
            className={`service-orbit ${service.className}`}
          >

            <div className="service-logo">

              <img
                src={service.img}
                alt={service.name}
              />

            </div>

          </div>

        ))}

      </div>
    </section>
  );
}


export default Orbit;