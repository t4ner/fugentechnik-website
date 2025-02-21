import React, { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Services = () => {
  const [hasHovered, setHasHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const services = [
    {
      id: 1,
      title: "Fugenherstellung nach ZTV Fug-StB",
      description:
        "Wir führen Fugenarbeiten gemäß ZTV Fug-StB fachgerecht und präzise aus. Dank unserer sorgfältigen Arbeitsweise gewährleisten wir eine langlebige Abdichtung, die zuverlässig vor Feuchtigkeit, Temperaturschwankungen und daraus resultierenden Schäden schützt",
      img: "/services/service1.webp",
    },
    {
      id: 2,
      title: "Trennschnitte in Beton und Asphalt",
      description:
        "Wir führen präzise Trennschnitte in Beton und Asphalt aus. Unsere fachgerechte Arbeitsweise sorgt für saubere Schnittkanten und minimiert Spannungsrisse, um die Langlebigkeit und Stabilität der Bauwerke zu gewährleisten",
      img: "/services/service2.webp",
    },
    {
      id: 3,
      title: "Verarbeitung von 1- und 2-K Fugendichtstoffen",
      description:
        "Wir verarbeiten hochwertige 1- und 2-komponentige Fugendichtstoffe fachgerecht und präzise. Unsere professionelle Anwendung sorgt für eine dauerhafte, elastische Abdichtung, die optimalen Schutz vor Feuchtigkeit, Temperaturschwankungen und mechanischer Belastung bietet",
      img: "/services/service3.webp",
    },
    {
      id: 4,
      title: "Rissesanierung im HPS-Verfahren",
      description:
        "Wir führen Rissesanierungen im HPS-Verfahren fachgerecht und effizient durch. Diese Methode sorgt für eine nachhaltige Versiegelung von Rissen, verhindert das Eindringen von Feuchtigkeit und trägt zur langfristigen Erhaltung der Bausubstanz bei.",
      img: "/services/service4.webp",
    },
    {
      id: 5,
      title: "Heißnaht- und Randabdichtung",
      description:
        "Wir bieten professionelle Heißnaht- und Randabdichtungen an. Diese Verfahren sorgen für eine sichere, langlebige Versiegelung, schützen vor Feuchtigkeitseintritt und erhöhen die Widerstandsfähigkeit von Bauwerken gegen Witterungseinflüsse und mechanische Belastungen.",
      img: "/services/service5.webp",
    },
    {
      id: 6,
      title: "Schienenfugen- und Pflasterverguss",
      description:
        "Wir führen Schienenfugen- und Pflasterverguss fachgerecht und präzise aus. Diese Verfahren gewährleisten eine dauerhafte Abdichtung, schützen vor Feuchtigkeit und verhindern Schäden durch Temperaturschwankungen sowie mechanische Belastungen",
      img: "/services/service6.webp",
    },
    {
      id: 7,
      title: "Verlegung von Induktionsschleifen",
      description:
        "Wir verlegen Induktionsschleifen präzise und fachgerecht. Diese ermöglichen eine zuverlässige Signalübertragung für Verkehrssteuerungssysteme, Schrankenanlagen und Parkleitsysteme und sorgen für eine effiziente und langlebige Funktion",
      img: "/services/service7.webp",
    },
  ];

  const handleMouseEnter = (index) => {
    setHasHovered(true);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div className="container w-full px-4 mx-auto pb-18 md:px-6">
      <h1 className="text-2xl md:text-5xl  pb-6 md:pb-10 font-bold md:mb-6 bg-gradient-to-r from-[#02C5DF] to-[#008FC7] bg-clip-text text-transparent text-center p-3">
        Unsere Leistungen im Überblick
      </h1>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={item}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative service-card"
          >
            <Link
              to="/leistungen"
              key={service.id}
              state={{ selectedService: service.id }}
            >
              <div
                className={`group relative rounded-xl overflow-visible transition-all duration-300 ${
                  (!hasHovered && index === 0) || hoveredIndex === index
                    ? "bg-[#D6EFF6] md:bg-gradient-to-r from-[#02C5DF] to-[#008FC7]"
                    : "bg-[#D6EFF6]"
                } hover:cursor-pointer`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative z-10 flex flex-col h-full gap-4 p-4 md:flex-row md:items-center md:p-6">
                  <div className="flex-1 max-w-2xl">
                    <h2
                      className={`text-base md:text-xl font-semibold mb-2 md:mb-4 ${
                        (!hasHovered && index === 0) || hoveredIndex === index
                          ? "text-black md:text-white"
                          : ""
                      }`}
                    >
                      {service.title}
                    </h2>
                    <p
                      className={`text-sm md:text-lg leading-relaxed ${
                        (!hasHovered && index === 0) || hoveredIndex === index
                          ? "text-gray-600 md:text-white/90"
                          : "text-gray-600"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        (!hasHovered && index === 0) || hoveredIndex === index
                          ? "border-white bg-gradient-to-r from-[#02C5DF] to-[#008FC7] md:bg-[#D6EFF6]"
                          : "border-white bg-gradient-to-r from-[#02C5DF] to-[#008FC7]"
                      }`}
                    >
                      <HiArrowUpRight
                        className="w-5 h-5 md:w-6 md:h-6"
                        color={
                          (!hasHovered && index === 0) || hoveredIndex === index
                            ? "white"
                            : "white"
                        }
                      />
                    </div>
                    <span
                      className={`lg:hidden text-sm md:text-base ${
                        (!hasHovered && index === 0) || hoveredIndex === index
                          ? "md:text-white"
                          : "md:text-gray-600"
                      }`}
                    >
                      Mehr erfahren
                    </span>
                  </div>
                </div>

                {/* Büyük ekranlar için resim */}
                <div
                  className={`absolute right-[200px] top-1/2 -translate-y-1/2 w-[350px] h-[250px] rotate-12 overflow-hidden rounded-2xl border-8 border-white lg:block hidden transition-opacity duration-300 ${
                    (!hasHovered && index === 0) || hoveredIndex === index
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                  style={{ zIndex: 20 }}
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="object-cover w-full h-full scale-110"
                  />
                </div>

                {/* Mobil ve tablet için resim */}
                <div className="lg:hidden w-full h-[200px] overflow-hidden rounded-xl mt-4">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-10 md:mt-16">
        <Link
          to="/leistungen"
          className="group text-sm md:text-lg flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-[#D6EFF6]  rounded-full text-black hover:bg-gradient-to-r hover:from-[#02C5DF] hover:to-[#008FC7] hover:text-white transition-all duration-300"
        >
          Einzelheiten
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-[#02C5DF] to-[#008FC7] group-hover:bg-[#D6EFF6] flex items-center justify-center">
            <HiArrowUpRight
              color="white"
              className="w-3 h-3 text-white group-hover:text-black md:w-4 md:h-4"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
