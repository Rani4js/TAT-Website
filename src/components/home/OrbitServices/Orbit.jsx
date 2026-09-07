import "./Orbit.css";

import TATLogo from "../../../assets/images/TAT.PNG";
import AemLogo from "../../../assets/images/AEM.png";
import SalesforceLogo from "../../../assets/images/Salesforce-icon.png";
import FigmaLogo from "../../../assets/images/figma-official.svg";
import ReactLogo from "../../../assets/images/react-official.svg";


const services = [
  {
    name: "UI / UX",
    className: "orbit-web",
    img: FigmaLogo,
  },
  {
    name: "AEM",
    img: AemLogo,
    className: "orbit-aem",
  },
  {
    name: "REACT",
    className: "orbit-react",
    img: ReactLogo,
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
                alt={`${service.name} official logo`}
              />

            </div>

          </div>

        ))}

      </div>
    </section>
  );
}


export default Orbit;