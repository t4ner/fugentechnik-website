import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Mobile menü açıldığında scroll'u engelleyelim
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { to: "/", text: "STARTSEITE", label: "Zur Startseite" },
    { to: "/leistungen", text: "LEISTUNGEN", label: "Zu unseren Leistungen" },
    { to: "/uber-uns", text: "ÜBER UNS", label: "Über uns" },
  ];

  // Stil kontrolü için yardımcı fonksiyon
  const getLinkStyle = () => {
    if (
      location.pathname === "/impressum" ||
      location.pathname === "/datenschutzerklarung"
    ) {
      return "tracking-wider text-[#02C5DF] font-medium hover:text-[#008FC7] transition-colors";
    }
    return "tracking-wider text-white font-medium hover:text-[#02C5DF] transition-colors";
  };

  const isLegalPage =
    location.pathname === "/impressum" ||
    location.pathname === "/datenschutzerklarung";

  return (
    <header className="relative">
      <nav
        className="absolute z-50 w-full top-4"
        role="navigation"
        aria-label="Hauptnavigation"
      >
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className={`relative z-50 font-bold ${
                isLegalPage ? "text-black" : "text-white"
              }`}
              aria-label="Zur Startseite"
            >
              <img
                src="/logo/logo.webp"
                alt="Unternehmenslogo"
                className="object-contain w-auto h-16 md:h-20"
                width="80"
                height="80"
                loading="eager"
                fetchPriority="high"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="items-center hidden space-x-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.text}
                  to={link.to}
                  className={getLinkStyle()}
                  aria-label={link.label}
                >
                  {link.text}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/kontakt"
              className="hidden md:block px-6 py-3 bg-gradient-to-r from-[#02C5DF] to-[#008FC7] text-white rounded-full tracking-wider font-medium hover:scale-105 transition-all duration-300"
              role="button"
              aria-label="Kontakt aufnehmen"
            >
              KONTAKT
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="relative z-50 p-2 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke={
                  isMobileMenuOpen
                    ? "currentColor"
                    : isLegalPage
                    ? "#000"
                    : "white"
                }
                viewBox="0 0 24 24"
                width="24"
                height="24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 z-40 flex items-center justify-center pt-20 bg-white md:hidden"
              style={{ top: 0 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              <div className="flex flex-col items-center p-4 space-y-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.text}
                    to={link.to}
                    className={
                      location.pathname === "/impressum" ||
                      location.pathname === "/datens"
                        ? "text-[#02C5DF] tracking-wider text-xl font-semibold hover:text-[#008FC7] transition-colors"
                        : "text-black tracking-wider text-xl font-semibold hover:text-[#02C5DF] transition-colors"
                    }
                    aria-label={link.label}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.text}
                  </Link>
                ))}
                <Link
                  to="/kontakt"
                  className=" px-8 py-3 tracking-wider bg-gradient-to-r from-[#02C5DF] to-[#008FC7] text-white rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300"
                  role="button"
                  aria-label="Kontakt aufnehmen"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  KONTAKT
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
