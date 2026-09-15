import "./Orbit.css";
import { useEffect, useState } from "react";
import SalesforceIcon from "../../../assets/images/Salesforce-icon.png";
import AemLogo from "../../../assets/images/AEM.png";

const slides = [
  { title: "Salesforce", subtitle: "Customer data and marketing engineering", type: "salesforce" },
  { title: "UI / UX", subtitle: "Interfaces designed around people", type: "uiux" },
  { title: "Adobe AEM", subtitle: "Enterprise digital experiences", type: "aem" },
  { title: "React", subtitle: "Fast, scalable product development", type: "react" },
  { title: "Data Cloud", subtitle: "Connected customer intelligence and Agentforce", type: "data" },
];

function SlideArtwork({ type }) {
  if (type === "salesforce") {
    return <svg className="creative-art" viewBox="0 0 600 360" role="img" aria-label="Salesforce cloud services illustration">
      <g fill="none" stroke="#6bb897" strokeWidth="1.5" opacity=".32">
        <ellipse cx="300" cy="165" rx="220" ry="94"/>
        <ellipse cx="300" cy="165" rx="220" ry="94" transform="rotate(60 300 165)"/>
        <ellipse cx="300" cy="165" rx="220" ry="94" transform="rotate(120 300 165)"/>
      </g>
      <g fill="none" stroke="#daa55b" strokeWidth="2" opacity=".8">
        <path d="M300 165 102 62M300 165 498 62M300 165 102 268M300 165 498 268"/>
      </g>
      <g fill="#10291f" stroke="#6bb897" strokeWidth="2">
        <rect x="36" y="44" width="132" height="36" rx="12"/><rect x="432" y="44" width="132" height="36" rx="12"/>
        <rect x="36" y="98" width="132" height="36" rx="12"/><rect x="432" y="98" width="132" height="36" rx="12"/>
        <rect x="36" y="250" width="132" height="36" rx="12"/><rect x="432" y="250" width="132" height="36" rx="12"/>
        <rect x="36" y="304" width="132" height="36" rx="12"/><rect x="432" y="304" width="132" height="36" rx="12"/>
      </g>
      <g fill="#f5eadb" fontSize="11" fontWeight="700" letterSpacing=".7">
        <text x="102" y="67" textAnchor="middle">SALES CLOUD</text><text x="498" y="67" textAnchor="middle">SERVICE CLOUD</text>
        <text x="102" y="121" textAnchor="middle">MARKETING</text><text x="498" y="121" textAnchor="middle">COMMERCE</text>
        <text x="102" y="273" textAnchor="middle">DATA CLOUD</text><text x="498" y="273" textAnchor="middle">EXPERIENCE</text>
        <text x="102" y="327" textAnchor="middle">PLATFORM</text><text x="498" y="327" textAnchor="middle">MULESOFT</text>
      </g>
      <image href={SalesforceIcon} x="220" y="104" width="160" height="110" preserveAspectRatio="xMidYMid meet"/>
      <text x="300" y="210" textAnchor="middle" fill="#f5eadb" fontSize="11" fontWeight="700" letterSpacing="2">CRM + AI</text>
    </svg>;
  }
  if (type === "uiux") {
    return <svg className="creative-art" viewBox="0 0 600 360" role="img" aria-label="UI and UX design illustration">
      <rect x="70" y="52" width="300" height="218" rx="14" fill="#10291f" stroke="#daa55b" strokeWidth="2"/><path d="M70 91h300" stroke="#daa55b" opacity=".6"/>
      <circle cx="95" cy="72" r="6" fill="#daa55b"/><circle cx="115" cy="72" r="6" fill="#6bb897"/><circle cx="135" cy="72" r="6" fill="#f5eadb"/>
      <rect x="100" y="120" width="105" height="105" rx="10" fill="#1f5f43"/><path d="m120 190 25-28 18 17 20-32 20 53h-83z" fill="#daa55b"/>
      <rect x="230" y="120" width="105" height="12" rx="6" fill="#f5eadb" opacity=".8"/><rect x="230" y="150" width="80" height="10" rx="5" fill="#6bb897"/><rect x="230" y="180" width="95" height="28" rx="14" fill="#daa55b"/>
      <path d="M415 95h100v170H415z" fill="#08100e" stroke="#6bb897" strokeWidth="2"/><circle cx="465" cy="135" r="22" fill="#1f5f43" stroke="#daa55b"/><path d="M438 190h54M438 212h38" stroke="#f5eadb" strokeWidth="7" strokeLinecap="round"/>
      <text x="300" y="360" textAnchor="middle" fill="#f5eadb" fontSize="22" fontWeight="700" letterSpacing="5">DESIGN SYSTEMS</text>
    </svg>;
  }
  if (type === "aem") {
    return <svg className="creative-art" viewBox="0 0 600 360" role="img" aria-label="Adobe AEM content experience illustration">
      <g fill="none" stroke="#6bb897" strokeWidth="1.5" opacity=".32">
        <ellipse cx="300" cy="164" rx="222" ry="94"/>
        <ellipse cx="300" cy="164" rx="222" ry="94" transform="rotate(60 300 164)"/>
        <ellipse cx="300" cy="164" rx="222" ry="94" transform="rotate(120 300 164)"/>
      </g>
      <g fill="none" stroke="#daa55b" strokeWidth="2" strokeLinecap="round" opacity=".85">
        <path d="M300 164 118 58M300 164 482 58M300 164 118 302M300 164 482 302"/>
      </g>
      <g fill="#10291f" stroke="#6bb897" strokeWidth="2">
        <rect x="38" y="40" width="132" height="36" rx="12"/><rect x="430" y="40" width="132" height="36" rx="12"/>
        <rect x="38" y="92" width="132" height="36" rx="12"/><rect x="430" y="92" width="132" height="36" rx="12"/>
        <rect x="38" y="274" width="132" height="36" rx="12"/><rect x="430" y="274" width="132" height="36" rx="12"/>
        <rect x="38" y="310" width="132" height="36" rx="12"/><rect x="430" y="310" width="132" height="36" rx="12"/>
      </g>
      <g fill="#f5eadb" fontSize="11" fontWeight="700" letterSpacing=".7">
        <text x="104" y="63" textAnchor="middle">SITES</text><text x="496" y="63" textAnchor="middle">ASSETS</text>
        <text x="104" y="115" textAnchor="middle">FORMS</text><text x="496" y="115" textAnchor="middle">SCREENS</text>
        <text x="104" y="297" textAnchor="middle">COMMERCE</text><text x="496" y="297" textAnchor="middle">FRAGMENTS</text>
        <text x="104" y="333" textAnchor="middle">CLOUD MANAGER</text><text x="496" y="333" textAnchor="middle">PERSONALIZE</text>
      </g>
      <image href={AemLogo} x="226" y="88" width="148" height="152" preserveAspectRatio="xMidYMid slice"/>
    </svg>;
  }
  if (type === "react") {
    return <svg className="creative-art" viewBox="0 0 600 360" role="img" aria-label="React development illustration">
      <g fill="none" stroke="#6bb897" strokeWidth="3"><ellipse cx="300" cy="175" rx="210" ry="70"/><ellipse cx="300" cy="175" rx="210" ry="70" transform="rotate(60 300 175)"/><ellipse cx="300" cy="175" rx="210" ry="70" transform="rotate(120 300 175)"/></g>
      <circle cx="300" cy="175" r="25" fill="#daa55b"/><circle cx="300" cy="175" r="10" fill="#08100e"/>
      <g fill="#f5eadb"><circle cx="110" cy="175" r="8"/><circle cx="395" cy="75" r="8"/><circle cx="395" cy="275" r="8"/></g>
      <text x="300" y="325" textAnchor="middle" fill="#f5eadb" fontSize="22" fontWeight="700" letterSpacing="5">BUILD IN MOTION</text>
    </svg>;
  }
  return <svg className="creative-art" viewBox="0 0 600 360" role="img" aria-label="Data Cloud intelligence illustration">
    <defs>
      <linearGradient id="dataCloudFlow" x1="0" x2="1">
        <stop offset="0" stopColor="#6bb897" stopOpacity=".2"/>
        <stop offset=".5" stopColor="#daa55b"/>
        <stop offset="1" stopColor="#6bb897" stopOpacity=".2"/>
      </linearGradient>
      <radialGradient id="dataCloudCore">
        <stop offset="0" stopColor="#6bb897"/>
        <stop offset=".7" stopColor="#1f5f43"/>
        <stop offset="1" stopColor="#10291f"/>
      </radialGradient>
    </defs>
    <g fill="none" stroke="#6bb897" strokeWidth="1.5" opacity=".28">
      <ellipse cx="300" cy="160" rx="218" ry="94"/>
      <ellipse cx="300" cy="160" rx="218" ry="94" transform="rotate(58 300 160)"/>
      <ellipse cx="300" cy="160" rx="218" ry="94" transform="rotate(118 300 160)"/>
    </g>
    <g fill="none" stroke="url(#dataCloudFlow)" strokeWidth="2.5" strokeLinecap="round">
      <path d="M300 160C242 110 174 88 112 111"/>
      <path d="M300 160C365 111 432 95 492 126"/>
      <path d="M300 160C303 220 272 264 221 287"/>
      <path d="M300 160C345 211 393 244 450 246"/>
    </g>
    <g fill="#10291f" stroke="#6bb897" strokeWidth="2">
      <rect x="58" y="86" width="108" height="50" rx="14"/>
      <rect x="434" y="101" width="108" height="50" rx="14"/>
      <rect x="165" y="273" width="112" height="48" rx="14"/>
      <rect x="395" y="222" width="112" height="48" rx="14"/>
    </g>
    <g fill="#f5eadb" fontSize="12" fontWeight="700" letterSpacing="1">
      <text x="112" y="116" textAnchor="middle">WEB + CRM</text>
      <text x="488" y="131" textAnchor="middle">COMMERCE</text>
      <text x="221" y="302" textAnchor="middle">SERVICE</text>
      <text x="451" y="251" textAnchor="middle">MARKETING</text>
    </g>
    <g transform="translate(236 92)">
      <circle cx="64" cy="68" r="58" fill="url(#dataCloudCore)" stroke="#daa55b" strokeWidth="3"/>
      <circle cx="64" cy="68" r="47" fill="none" stroke="#f5eadb" strokeWidth="1.5" opacity=".6"/>
      <path d="M31 73c-8-15 3-30 19-30 6-15 29-15 35 0 18-2 29 19 17 30H31z" fill="#6bb897"/>
      <path d="M41 73h46" stroke="#f5eadb" strokeWidth="3" strokeLinecap="round"/>
      <text x="64" y="88" textAnchor="middle" fill="#f5eadb" fontSize="14" fontWeight="700">DATA</text>
      <text x="64" y="108" textAnchor="middle" fill="#daa55b" fontSize="10" fontWeight="700" letterSpacing="1">CLOUD</text>
    </g>
  </svg>;
}

function Orbit() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const showSlide = (index) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  return (
    <section className="technology-orbit-section" aria-label="Technology capabilities">
      <div className="technology-gateway">
        <div className="creative-carousel">
        {slides.map((slide, index) => (
          <article
            className={`creative-slide creative-slide-${index} ${index === activeSlide ? "is-active" : ""}`}
            key={slide.title}
            aria-hidden={index !== activeSlide}
          >
            <SlideArtwork type={slide.type} />
            <div className="creative-slide-overlay">
              <span>{slide.title}</span>
              <small>{slide.subtitle}</small>
            </div>
          </article>
        ))}

        <div className="creative-carousel-controls">
          <button type="button" onClick={() => showSlide(activeSlide - 1)} aria-label="Previous capability">
            ←
          </button>
          <div className="creative-carousel-dots">
            {slides.map((slide, index) => (
              <button
                type="button"
                className={index === activeSlide ? "is-active" : ""}
                onClick={() => showSlide(index)}
                aria-label={`Show ${slide.title}`}
                key={slide.title}
              />
            ))}
          </div>
          <button type="button" onClick={() => showSlide(activeSlide + 1)} aria-label="Next capability">
            →
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Orbit;
