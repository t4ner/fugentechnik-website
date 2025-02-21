import React from "react";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import Navbar from "../components/Navbar";
import AboutCompany from "../components/AboutCompany";
import EmployeeCard from "../components/EmployeeCard";

const About = () => {
  const heroContent = {
    title: "Über die \nG&G Fugentechnik GmbH",
    subtitle: "Erfahrung und Kompetenz seit Jahren",
    backgroundImage: "/hero/uber-uns-hero.webp",
    imageAlt: "G&G Fugentechnik Team und Unternehmen",
  };

  const statisticsContent = {
    title: "G&G Fugentechnik GmbH - Ihre Vorteile",
    description:
      "Technische Exzellenz, Wirtschaftlichkeit und Zuverlässigkeit für Ihren Wettbewerbsvorteil",
    stats: [
      {
        value: "100%",
        title: "Technische Exzellenz",
        description: "Modernste Technologie und Fachkompetenz",
      },
      {
        value: "24/7",
        title: "Zuverlässigkeit",
        description: "Termintreue und flexible Einsatzbereitschaft",
      },
      {
        value: "Top",
        title: "Preis-Leistung",
        description: "Optimales Kosten-Nutzen-Verhältnis",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <Hero {...heroContent} />
      <Statistics {...statisticsContent} />
      <AboutCompany />
      <EmployeeCard />
    </>
  );
};

export default About;
