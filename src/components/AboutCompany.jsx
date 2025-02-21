import React from "react";
import { FaCheck, FaHandshake, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutCompany = () => {
  const principles = [
    {
      icon: <FaCheck />,
      title: "Höchste Standards",
      description:
        "Höchste Qualitätsstandards und termingerechte Ausführung der Aufträge",
    },
    {
      icon: <FaHandshake />,
      title: "Preis-Leistung",
      description: "Optimale Preis-Leistungs-Verhältnisse",
    },
    {
      icon: <FaChartLine />,
      title: "Weiterentwicklung",
      description:
        "Ständige Weiterentwicklung und Verbesserung unseres Serviceangebots",
    },
  ];

  return (
    <div className="about-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="about-content"
      >
        <section className="pt-6 pb-12 md:pb-16" id="information">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 text-center md:mb-20"
            >
              <h2 className="text-2xl md:text-5xl font-bold pb-2 md:pb-6 bg-gradient-to-r from-[#02C5DF] to-[#008FC7] bg-clip-text text-transparent">
                G&G Fugentechnik GmbH
              </h2>
              <p className="mx-auto text-sm text-gray-600 md:text-lg">
                Ihr zuverlässiger Partner für Fugentechnik seit 2013
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#D6EFF6] p-3 md:p-8 rounded-xl shadow-lg mb-8 md:mb-20 border border-gray-100"
            >
              <h3 className="mb-2 text-base font-semibold text-gray-900 md:mb-4 md:text-xl">
                Unsere Geschichte
              </h3>
              <p className="mb-2 text-sm leading-relaxed text-gray-600 md:mb-4 md:text-lg">
                Präzision, Qualität und Innovation – seit 2013
              </p>
              <p className="mb-2 text-sm leading-relaxed text-gray-600 md:mb-4 md:text-lg">
                Die G&G Fugentechnik GmbH wurde 2013 gegründet und steht seither
                für höchste Präzision, Qualität und Innovation. Von Anfang an
                betrachten wir unsere Kunden als Partner und setzen auf enge
                Zusammenarbeit, um langfristigen Erfolg zu sichern.
              </p>
              <p className="mb-2 text-sm leading-relaxed text-gray-600 md:mb-4 md:text-lg">
                Unser Ziel ist es, durch technische Exzellenz, wirtschaftliche
                Effizienz und höchste Zuverlässigkeit echte Wettbewerbsvorteile
                zu schaffen. Dabei optimieren wir kontinuierlich unsere
                Dienstleistungen und passen uns flexibel an die Bedürfnisse
                unserer Kunden an.
              </p>
              <p className="mb-2 text-sm leading-relaxed text-gray-600 md:mb-4 md:text-lg">
                Mit jahrelanger Erfahrung und einem starken Qualitätsbewusstsein
                bieten wir innovative, effiziente und nachhaltige Lösungen für
                anspruchsvolle Projekte.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 gap-8 md:grid-cols-3"
            >
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 * (index + 3) }}
                  className="p-4 transition-shadow duration-300 bg-white border border-gray-100 shadow-lg md:p-8 rounded-xl hover:shadow-xl"
                >
                  <div className="text-2xl md:text-4xl text-[#008FC8] mb-6">
                    {principle.icon}
                  </div>
                  <h3 className="mb-4 text-base font-semibold text-gray-900 md:text-xl">
                    {principle.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-lg">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 text-center md:mt-12"
            >
              <p className="text-sm italic text-gray-600 md:text-base">
                Wir laden Interessierte ein, sich persönlich mit den
                Verantwortlichen in Verbindung zu setzen, um sich von der
                Qualität unserer Leistungen zu überzeugen.
              </p>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default AboutCompany;
