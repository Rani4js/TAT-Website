import "./Orbit.css";
import tatLogo from "../../../assets/images/TAT.PNG";

function Orbit() {
  return (
    <section className="technology-orbit-section" aria-label="Together Advanced Technologies logo">
      <div className="technology-gateway">
        <div className="tat-logo-visual">
          <span className="tat-logo-ring tat-logo-ring-one" aria-hidden="true" />
          <span className="tat-logo-ring tat-logo-ring-two" aria-hidden="true" />
          <span className="tat-logo-ring tat-logo-ring-three" aria-hidden="true" />
          <span className="tat-logo-orbit tat-logo-orbit-one" aria-hidden="true" />
          <span className="tat-logo-orbit tat-logo-orbit-two" aria-hidden="true" />
          <div className="tat-logo-core">
            <img src={tatLogo} alt="Together Advanced Technologies" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Orbit;
