import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll pozisyonunu kontrol et
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Başa dön
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed md:bottom-8 md:right-8 bottom-4 right-4 bg-gradient-to-r from-[#02C5DF] to-[#008FC7]  cursor-pointer text-white p-4 md:p-5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
          aria-label="Başa dön"
        >
          <FaArrowUp className="text-lg md:text-2xl" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
