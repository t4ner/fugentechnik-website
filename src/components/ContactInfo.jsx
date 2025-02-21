import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactInfo = () => {
  const contactItems = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Adresse",
      value: (
        <>
          G&G Fugentechnik GmbH
          <br />
          Südendstraße 7/1,
          <br />
          76709 Kronau
        </>
      ),
      link: "https://maps.app.goo.gl/GsX4i2fXnqiB54ys5",
      color: "from-[#7BE4F0] to-[#02C5DF]",
    },
    {
      icon: <FaPhone />,
      title: "Kontakt",
      value: (
        <>
          Tel: +49 (0)7253 5091 338
          <br />
          E-Mail: info@gundg-fugentechnik.de
        </>
      ),
      links: {
        phone: "tel:+49 (0)7253 5091 338",
        email: "mailto:info@gundg-fugentechnik.de",
      },
      color: "from-[#02C5DF] to-[#02A7C7]",
    },
    {
      icon: <FaClock />,
      title: "Bürozeiten",
      value: (
        <>
          Montag bis Freitag: 8:00 - 16:30 Uhr
          <br />
          Samstag, Sonntag und an Feiertagen: geschlossen
          <br />
          <span className="italic">
            Oder nach vorheriger Terminvereinbarung
          </span>
        </>
      ),
      color: "from-[#02A7C7] to-[#008FC7]",
    },
  ];

  const ContactCard = ({ item, index }) => {
    const cardContent = (
      <div
        className="bg-white rounded-lg md:rounded-2xl shadow-md md:shadow-xl 
                      overflow-hidden transition-all duration-300 hover:shadow-lg 
                      md:hover:shadow-2xl h-[190px] md:h-[320px]"
      >
        <div
          className={`bg-gradient-to-r ${item.color} p-4 sm:p-6 md:p-8 
                     text-white h-full flex flex-col justify-between`}
        >
          <div className="flex items-center justify-between">
            <div className="p-2 rounded-lg sm:p-3 md:p-4 bg-white/20 backdrop-blur-sm">
              {React.cloneElement(item.icon, {
                className: "w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8",
              })}
            </div>
            <span className="text-2xl font-bold transition-opacity opacity-50 sm:text-3xl md:text-4xl group-hover:opacity-100">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div>
            <h3 className="mb-2 text-base font-semibold md:text-2xl md:mb-4">
              {item.title}
            </h3>
            {item.links ? (
              <div className="text-sm leading-relaxed md:text-lg opacity-90">
                <a href={item.links.phone} className="block hover:underline">
                  Tel: +49 (0)7253 5091 338
                </a>
                <a href={item.links.email} className="block hover:underline">
                  E-Mail: info@gundg-fugentechnik.de
                </a>
              </div>
            ) : (
              <p className="text-sm leading-relaxed md:text-lg opacity-90">
                {item.value}
              </p>
            )}
          </div>
        </div>
      </div>
    );

    return item.link ? (
      <a
        href={item.link}
        target={item.link.startsWith("http") ? "_blank" : "_self"}
        rel={item.link.startsWith("http") ? "noopener noreferrer" : ""}
        className="block w-full"
      >
        {cardContent}
      </a>
    ) : (
      cardContent
    );
  };

  return (
    <div className="grid grid-cols-1 gap-3 px-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-4 md:gap-6 sm:px-6 md:px-0">
      {contactItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="w-full group"
        >
          <ContactCard item={item} index={index} />
        </motion.div>
      ))}
    </div>
  );
};

export default ContactInfo;
