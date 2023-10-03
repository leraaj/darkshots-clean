import React from "react";
import Navbar from "../../components/shared/Navbar";
import LandingPage from "./landing/Index";
import Services from "./services/Index";
import Projects from "./project/Index";
import About from "./about/Index";
import Career from "./career/Index";
import Contact from "./contact/Index";
import Footer from "../../components/shared/Footer";
const Index = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Services />
      <Projects />
      <About />
      <Career />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
