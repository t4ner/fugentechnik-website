import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServicesPage from "./pages/ServicesPage";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";
import ScrollToTop from "./components/ScrollToTop";
import Impressum from "./pages/Impressum";
import Datens from "./pages/Datens";
const App = () => {
  return (
    <div className="overflow-x-hidden">
      <ScrollToTopOnMount />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uber-uns" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/leistungen" element={<ServicesPage />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutzerklarung" element={<Datens />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
