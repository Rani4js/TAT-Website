import "./Navbar.css";
import TATLogo from "../../../assets/images/TAT.PNG"
import { useState } from "react";
function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false);
  return(
  <header className="w-full">
    <div className="max-w-7xl mx-auto flex items-center py-4 px-6">
        {/* Left */}
        <div className="flex-1 flex items-center">
          <img src={TATLogo} className="h-16 w-auto" alt="Together Advanced Technologies Logo"/>
        </div>
        {/* Center */}
        <div className="hidden lg:flex flex-1 flex justify-center">
          <nav>
            <ul className="flex items-center gap-8">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        {/* Right */}
          <div className="hidden lg:flex flex-1 justify-end quote-wrapper">
           <button className="get-quote-btn">
                    <span>Get Quote</span>
                    <svg className="ribbon" viewBox="0 0 120 140" preserveAspectRatio="none">
                    <path d="M0 0 H120 V100 L60 140 L0 100 Z"/>
                    </svg>
                    </button>
          </div>
          <div className="lg:hidden flex-1 flex justify-end">
          <button className="text-3xl text-white" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "✕" : "☰"} </button>
         </div>
    </div>
    
              {menuOpen && (
                <div className="lg:hidden text-center bg-black text-white p-6">
                  <ul className="flex flex-col gap-6">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Careers</li>
                    <li>Contact</li>

                    <button className="bg-[var(--tat-gold)] text-black py-3 rounded-lg mt-4">
                      Get Quote
                    </button>
                  </ul>
                </div>
                )}
  </header>)
}
export default Navbar;