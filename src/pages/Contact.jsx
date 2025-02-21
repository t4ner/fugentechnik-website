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
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ukiun8l", "template_z809tfd", form.current, {
        publicKey: "PTCU4WX568fR4ym8L",
      })
      .then(
        () => {
          form.current.reset();
          toast.success("E-Mail erfolgreich gesendet!");
        },
        (error) => {
          toast.error("Beim Senden der E-Mail ist ein Fehler aufgetreten!");
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.479675928826!2d8.626844499999999!3d49.2104295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797bd87b327fc9b%3A0x88814e4334e9b77c!2sG%C3%B6k%20%26%20G%C3%BCney%20Fugentechnik%20GmbH!5e0!3m2!1sen!2str!4v1738857777383!5m2!1sen!2str"
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
