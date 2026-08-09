import "./Navbar.css";
import TATLogo from "../../../assets/images/TAT.PNG"
import { useState } from "react";
function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false);
  return(
  <header className="w-full">
  <div className="navbar-container">

    {/* Logo */}
    <div className="navbar-logo">
      <img
        src={TATLogo}
        alt="Together Advanced Technologies"
      />
    </div>

    {/* Desktop Navigation */}
    <nav className="desktop-nav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/careers">Careers</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>

    {/* Desktop Get Quote */}
    <div className="quote-wrapper">
      <button className="get-quote-btn">
        <span>Get Quote</span>

        <svg
          className="ribbon"
          viewBox="0 0 120 140"
          preserveAspectRatio="none"
        >
          <path d="M0 0 H120 V100 L60 140 L0 100 Z" />
        </svg>
      </button>
    </div>

    {/* Mobile hamburger */}
    <button
      className="mobile-menu-btn"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? "✕" : "☰"}
    </button>

  </div>

  {/* Mobile menu */}
  {menuOpen && (
    <div className="mobile-menu">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/careers">Careers</a></li>
        <li><a href="/contact">Contact</a></li>

        <button>Get Quote</button>
      </ul>
    </div>
  )}
</header>
  )
}
export default Navbar;