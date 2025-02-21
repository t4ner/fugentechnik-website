import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const DetailServices = () => {
  const location = useLocation();
  const selectedServiceId = location.state?.selectedService;
  const serviceRefs = useRef({});

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
    show: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const index = selectedServiceId - 1;
    if (selectedServiceId && serviceRefs.current[index]) {
      setTimeout(() => {
        serviceRefs.current[index].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  }, [selectedServiceId]);

  const services = [
    {
      title: "Fugenherstellung nach ZTV Fug-StB",
      description: `Wir stellen wasserdichte Anschlussfugen zwischen Beton, Gussasphalt und
Walzasphalt fachgerecht her. Dabei erfolgt das präzise Aufschneiden und
gleichzeitige Absaugen des Schneidstaubs in einem Arbeitsgang mithilfe
hochmoderner Schneidstaubabsaugmaschinen.
Für eine dauerhafte und belastbare Abdichtung werden die Fugen entlang von
Brücken und Verkehrsflächen mit heiß verarbeiteter Fugenvergussmasse
verfüllt. Dies gewährleistet eine zuverlässige Verbindung zwischen
Gussasphalt, Walz- und Betonbelägen.
Dank der elastischen Eigenschaften der Fugen werden auftretende
Bewegungen optimal aufgenommen. Dadurch wird das Eindringen von
Feuchtigkeit und Tausa`,
      image: "/services/service1.webp",
      imageAlt: "Lüks Havuz",
      align: "left",
    },
    {
      title: "Trennschnitte in Beton und Asphalt",
      description: `Wir führen präzise Trennschnitte in Asphalt und Beton bis zu einer Tiefe von 50-60 cm aus. Dank moderner Schneidtechnik erzielen wir saubere Schnittkanten,
minimieren Spannungsrisse und gewährleisten eine materialschonende
Bearbeitung.
Auf Wunsch übernehmen wir auch die fachgerechte Vormarkierung des
Sägeschnitts gemäß Ihren Plänen oder Vorgaben, um eine exakte und effiziente
Umsetzung sicherzustellen. Unsere präzise Arbeitsweise sorgt für eine
optimale Vorbereitung von Baumaßnahmen, wie dem Einbau von
Dehnungsfugen, Induktionsschleifen oder Sanierungsarbeiten an Straßen und
Verkehrsflächen`,
      image: "/services/service2.webp",
      imageAlt: "Havuz Bakımı",
      align: "right",
    },
    {
      title: "Verarbeitung von 1- und 2-K Fugendichtstoffen",
      description: `Für die zuverlässige Abdichtung von Bewegungs- und Anschlussfugen verwenden wir hochwertige 1- und 2-komponentige Fugendichtstoffe. Diese bieten eine dauerhafte, elastische Versiegelung und schützen vor Feuchtigkeit, Temperaturschwankungen und mechanischen Belastungen. Unsere Anwendungen umfassen:

1. Bewegungsfugen in Beton, Mauerwerk und Kunststein, besonders in LAU-Anlagen.
2. Anschlussfugenabdichtungen für Zargen aus Holz, Glas, Metall oder Kunststoff.
3. Fugensanierungen zur Erneuerung und langfristigen Schadensvermeidung.

Mit unserer fachgerechten Verarbeitung gewährleisten wir beständige und belastbare Fugenlösungen.`,
      image: "/services/service3.webp",
      imageAlt: "Havuz Bakımı",
      align: "left",
    },
    {
      title: "Rissesanierung im HPS-Verfahren",
      description: `Die Rissesanierung im Heißpress-Stoßverfahren (HPS-Verfahren) ist eine effektive Methode zur dauerhaften Instandsetzung von Rissen in Asphalt- und Betonflächen. Durch heiß verarbeitete Vergussmasse wird unter Druck eine kraftschlüssige Verbindung hergestellt, die Feuchtigkeit, Tausalze und Schmutz abhält. Vorteile der HPS-Rissesanierung:

1. Langlebige Abdichtung
2. Flexibilität zur Anpassung an Bewegungen
3. Effiziente Verarbeitung für minimale Verkehrsbehinderungen
4. Verbesserte Verkehrssicherheit

Diese Methode eignet sich besonders für Straßen, Brücken und Parkplätze.`,
      image: "/services/service4.webp",
      imageAlt: "Havuz Bakımı",
      align: "right",
    },
    {
      title: "Heißnaht und Randabdichtung",
      description: `Die Heißnaht- und Randabdichtung sorgt für die langfristige Versiegelung von Fugen und Schnittkanten in Asphalt- und Betonflächen. Durch heiß verarbeitete Vergussmasse wird eine dauerhafte Verbindung geschaffen, die Feuchtigkeit, Tausalzen und Verkehrsbelastungen standhält. Einsatzbereiche:

1. Heißnahtabdichtung – Verbindung von Asphalt- und Betonflächen, besonders an Nahtstellen
2. Randabdichtung – Schutz freiliegender Kanten vor Wasser und Schmutz

Vorteile: Langlebiger Schutz, hohe Belastbarkeit und optimierte Haltbarkeit. Mit unserer präzisen Ausführung sichern wir die Lebensdauer von Verkehrsflächen.`,
      image: "/services/service5.webp",
      imageAlt: "Havuz Bakımı",
      align: "left",
    },
    {
      title: "Schienenfugen- und Pflasterverguss",
      description: `Der Schienenfugen- und Pflasterverguss sorgt für die Abdichtung und Stabilisierung von Fugen in Gleisanlagen, Pflasterflächen und Verkehrswegen. Durch elastische Vergussmassen wird eine sichere Verbindung geschaffen, die vor Feuchtigkeit, Schmutz und Belastung schützt. Einsatzbereiche:

1. Schienenfugenverguss – schützt vor Wasser, Schmutz, reduziert Schwingungen und Lärm
2. Pflasterverguss – sorgt für stabile Pflasterbeläge in Verkehrsflächen und Gehwegen

Vorteile: Langlebige Abdichtung, hohe Elastizität und erhöhte Verkehrssicherheit.`,
      image: "/services/service6.webp",
      imageAlt: "Havuz Bakımı",
      align: "right",
    },
    {
      title: "Verlegung von Induktionsschleifen",
      description: `Die fachgerechte Verlegung von Induktionsschleifen ist entscheidend für die Funktion von Verkehrsleitsystemen, Schrankenanlagen, Parkleitsystemen und Ampelanlagen. Durch präzise Fräsarbeiten und den sorgfältigen Einbau gewährleisten wir optimale Signalübertragung und Langlebigkeit. Ablauf:

1. Exakte Fräsung der Schlitze
2. Einlegen und Fixieren der Schleifen
3. Verguss zum Schutz vor Witterung und Belastung
4. Anschluss und Funktionsprüfung

Vorteile: Hohe Signalqualität, Langlebigkeit und präzise Ausführung für effiziente Verkehrssteuerung.`,
      image: "/services/service7.webp",
      imageAlt: "Havuz Bakımı",
      align: "left",
    },
  ];

  return (
    <div className="w-full min-h-screen pt-5 pb-20 overflow-x-hidden md:pt-0 md:py-20">
      <header className="px-4 text-center">
        <h1 className="text-2xl md:text-5xl font-bold pb-6 md:mb-10 bg-gradient-to-r from-[#02C5DF] to-[#008FC7] bg-clip-text text-transparent">
          G&G Fugentechnik GmbH
        </h1>
      </header>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="px-4 space-y-8 md:space-y-32 md:px-0"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            ref={(el) => (serviceRefs.current[index] = el)}
            variants={item}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group/item"
          >
            <div
              className={`flex flex-col group ${
                service.align === "right"
                  ? "md:flex-row-reverse md:rounded-l-[3rem] md:ml-auto"
                  : "md:flex-row md:rounded-r-[3rem] md:mr-auto"
              } overflow-hidden w-full md:w-[90%] lg:w-[1500px] h-auto md:h-[550px] md:hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transform md:hover:-translate-y-3 transition-all duration-700 ease-out md:group-hover/item:translate-y-0 rounded-2xl md:rounded-none`}
            >
              <div
                className={`w-full md:w-2/3 relative h-[200px] md:h-[600px] overflow-hidden ${
                  service.align === "right" ? "md:border-l-8" : "md:border-r-8"
                } border-white`}
              >
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="object-cover w-full h-full transition-all duration-1000 transform md:group-hover/item:scale-105"
                />
                <div className="absolute inset-0 transition-all duration-700 opacity-0 bg-gradient-to-br from-black/50 via-transparent to-transparent md:group-hover/item:opacity-75"></div>
              </div>
              <div className="w-full md:w-3/4 bg-gradient-to-br from-[#02C5DF] to-[#008FC7] text-white p-4 md:p-12 flex flex-col justify-center relative overflow-hidden backdrop-blur-sm md:group-hover/item:from-[#008FC7] md:group-hover/item:to-[#02C5DF] transition-all duration-700">
                <div className="relative z-10">
                  <span className="block w-24 h-0.5 bg-white/60 mb-4 md:mb-8 transform origin-left scale-x-0 transition-all duration-700 md:group-hover/item:scale-x-100"></span>
                  <h2 className="mb-4 text-base font-semibold transition-all duration-500 transform md:mb-8 md:text-3xl md:group-hover/item:translate-x-2">
                    {service.title}
                  </h2>
                  <p className="text-sm text-gray-100 md:text-lg ">
                    {service.description.split("\n\n")[0]}
                  </p>

                  {/* Özellikler Bölümü */}
                  {service.description.split("\n\n").length > 1 && (
                    <div>
                      <ul className="space-y-1 list-disc list-inside">
                        {service.description
                          .split("\n\n")
                          .slice(1, -1)
                          .join("\n")
                          .split("\n")
                          .filter((item) => item.match(/^\d/))
                          .map((item, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-100 md:text-lg"
                            >
                              {item.replace(/^\d+\.\s/, "")}
                            </li>
                          ))}
                      </ul>

                      {/* Son paragraf */}
                      <p className="text-sm text-gray-100 md:text-lg">
                        {service.description.split("\n\n").slice(-1)[0]}
                      </p>
                    </div>
                  )}
                </div>

                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full md:group-hover/item:translate-x-full transition-transform duration-1500 ease-in-out"></div>
                <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform translate-x-full md:group-hover/item:-translate-x-full transition-transform duration-1500 ease-in-out"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default DetailServices;
