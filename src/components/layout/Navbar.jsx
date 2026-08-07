import TATLOGO from "../../assets/TAT-Brand.PNG";

const Navbar = () => {
  return (
<header className="fixed top-0 left-0 w-full bg-[#09090B] border-b border-zinc-800 z-50">
  <div className="max-w-7xl mx-auto px-8 h-18 flex items-center">

    {/* Left */}
    <div className="flex-1">
      <img
        src={TATLOGO}
        alt="TAT Logo"
        className="h-20 w-auto"
      />
    </div>

    {/* Center */}
    <nav className="flex-1 flex justify-center items-center gap-7 text-zinc-300">
      <a href="/" className="hover:text-white transition">Home</a>
      <a href="/about" className="hover:text-white transition">About</a>
      <a href="/services" className="hover:text-white transition">Services</a>
      <a href="/careers" className="hover:text-white transition">Careers</a>
      <a href="/contact" className="hover:text-white transition">Contact</a>
    </nav>

    {/* Right */}
    <div className="flex-1 flex justify-center items-center">
      <button className="get-quote-btn">
        <span>Get Quote</span>
        <svg
    className="ribbon"
    viewBox="0 0 120 140"
    preserveAspectRatio="none"
  >
    <path
      d="
      M0 0
      H120
      V100
      L60 140
      L0 100
      Z"
    />
  </svg>
      </button>
    </div>

  </div>
</header>
  );
};

export default Navbar;