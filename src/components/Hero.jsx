import React, { useEffect, useCallback } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = ({
  title,
  subtitle,
  backgroundImage = "/hero/home-hero.webp",
  imageAlt,
}) => {
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY;
    const parallaxElements = document.querySelectorAll(".parallax");

    parallaxElements.forEach((element) => {
      const speed = element.dataset.speed || 0.5;
      const yPos = scrolled * speed;
      element.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section
      className="relative h-[90vh] overflow-hidden md:min-h-screen bg-gradient-to-b from-black to-gray-900"
      aria-label="Hero Section"
    >
      <Navbar />

      <div className="absolute inset-0 z-0 w-screen h-screen">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <img
          src={backgroundImage}
          alt={imageAlt}
          className="object-cover w-full h-full scale-105 parallax"
          data-speed="0.2"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
          decoding="async"
        />
      </div>

      <div className="absolute inset-0 z-5">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-[#02C5DF]/10 rounded-full blur-3xl animate-pulse"
          style={{ willChange: "opacity" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-[#008FC7]/10 rounded-full blur-3xl animate-pulse delay-700"
          style={{ willChange: "opacity" }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-[calc(100vh-80px)] flex items-center pt-44">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1
            className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl animate-fade-in"
            aria-label={title}
          >
            {title.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {i > 0 && <br />}
                {i === title.split("\n").length - 1 ? (
                  <span className="bg-gradient-to-r from-[#02C5DF] to-[#008FC7] text-transparent bg-clip-text">
                    {line}
                  </span>
                ) : (
                  line
                )}
              </React.Fragment>
            ))}
          </h1>
          <p className="mb-8 text-lg text-white md:text-2xl animate-slide-up">
            {subtitle}
          </p>
        </motion.div>
      </div>

      <button
        className="absolute z-10 transition-transform duration-300 transform -translate-x-1/2 bottom-8 left-1/2 hover:scale-110"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
        aria-label="Nach unten scrollen"
      >
        <div className="flex items-start justify-center w-8 p-2 border-2 border-white rounded-full h-14">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll-bounce"></div>
        </div>
      </button>
    </section>
  );
};

export default Hero;
