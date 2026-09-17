import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";
import { Outlet } from "react-router-dom";
import SEO from "../SEO";

const Layout = () => {
  return (
    <>
      <SEO />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar />

      <main className="pt-20" id="main-content">
        <Outlet />
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
};

export default Layout;