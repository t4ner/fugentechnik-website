import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Hero from "../components/Hero";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactInfo from "../components/ContactInfo";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
    emailjs.init("Wcb1JUXx4tpuKsDp3");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    toast.info("E-Mail wird gesendet...");

    emailjs
      .sendForm(
        "default_service",
        "template_oceziug",
        form.current,
        "Wcb1JUXx4tpuKsDp3"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          form.current.reset();
          toast.success("E-Mail erfolgreich gesendet!");
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast.error(
            "Beim Senden der E-Mail ist ein Fehler aufgetreten: " + error.text
          );
        }
      );
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const heroContent = {
    title: "Kontakt zur \nG&G Fugentechnik GmbH",
    subtitle: "Fragen zu unseren Leistungen? Kontaktieren Sie uns!",
    backgroundImage: "/hero/contact-hero.webp",
    imageAlt: "G&G Fugentechnik Team und Unternehmen",
  };

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section with 3D Effect */}
      <Hero {...heroContent} />

      {/* Stats/Contact Info Section */}
      <div className="relative z-10 mx-auto -mt-24 md:-mt-40 md:px-8">
        <ContactInfo />
      </div>

      {/* Contact Form Section */}
      <div className="container pt-12 pb-20 mx-auto md:pt-24">
        <ToastContainer />
        <div className="px-4 md:px-6 lg:px-8">
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row border border-[#02C5DF] shadow-3xl rounded-xl overflow-hidden bg-white transition-transform duration-300 ease-in-out"
            >
              <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto">
                <iframe
                  src="https://www.google.com/maps?q=Holzm%C3%BCllerrichtweg%202%2C%2076669%20Bad%20Sch%C3%B6nborn&z=16&output=embed"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="w-full p-6 lg:w-1/2 md:p-8">
                <h2 className="text-xl md:text-3xl font-medium bg-gradient-to-r from-[#02C5DF] to-[#008FC7] text-transparent bg-clip-text mb-6 md:mb-8">
                  Kontaktieren Sie uns!
                </h2>
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      required
                      name="user_name"
                      placeholder="Ihr Name"
                      className="w-full px-3 py-2 text-xs md:text-base rounded-md border border-gray-300 focus:border-[#008FC7] focus:ring-1 focus:ring-[#008FC7] outline-none transition-all duration-300"
                    />
                    <input
                      type="email"
                      required
                      name="user_email"
                      placeholder="Ihre E-Mail-Adresse"
                      className="w-full px-3 py-2 text-xs md:text-base rounded-md border border-gray-300 focus:border-[#008FC7] focus:ring-1 focus:ring-[#008FC7] outline-none transition-all duration-300"
                    />
                  </div>
                  <input
                    type="text"
                    required
                    name="user_telephone"
                    placeholder="Ihre Telefonnummer"
                    className="w-full px-3 py-2 text-xs md:text-base rounded-md border border-gray-300 focus:border-[#008FC7] focus:ring-1 focus:ring-[#008FC7] outline-none transition-all duration-300"
                  />
                  <textarea
                    required
                    name="message"
                    placeholder="Ihre Nachricht..."
                    className="w-full px-3 py-2 text-xs md:text-base rounded-md border border-gray-300 focus:border-[#008FC7] focus:ring-1 focus:ring-[#008FC7] outline-none transition-all duration-300 min-h-[150px] md:min-h-[200px] resize-y"
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-[#02C5DF] to-[#008FC7]  text-xs md:text-base text-white rounded-md font-medium hover:bg-[#0076AB] transition-all duration-300 transform "
                    >
                      Schicken
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
