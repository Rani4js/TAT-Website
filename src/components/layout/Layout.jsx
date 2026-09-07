import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Outlet />
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
};

export default Layout;