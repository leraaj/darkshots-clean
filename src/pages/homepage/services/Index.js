import React, { useEffect, useRef } from "react";
import ThemeHeader from "../../../components/textHeaders/ThemeHeader";
import Carousel from "../../../components/collections/Carousel";
const Index = () => {
  const servicesContent = {
    minHeight: "100vh",
    width: "100%",
    boxSizing: "border-box",
    padding: "10%",
    position: "relative",
    backgroundSize: "cover",
    backdropFilter: "blur(100em)",
  };
  const textHeading = "Production Services we offfer";
  const textDescription =
    "Our events Management team will plan and execute your events, from corporate occasions to large-scaleconcerts, and ensure that every aspect of the event is well taken case of. We take pride in our strong partnerships that different vendors, which  allows us to  secure the best deals for our clients.";

  const services = [
    {
      name: "event management",
      image: {
        firstImage: "services0_pic.jpg",
        secondImage: "services1_pic.jpg",
        backgroundImage: "services1_bg.jpg",
      },
    },
    {
      name: "digital marketing",
      image: {
        firstImage: "services2_pic.jpg",
        secondImage: "services3_pic.jpg",
        backgroundImage: "services2_bg.jpg",
      },
    },
    {
      name: "Model Photoshoot",
      image: {
        firstImage: "services4_pic.jpg",
        secondImage: "services5_pic.jpg",
        backgroundImage: "services3_bg.jpg",
      },
    },
  ];

  return (
    <div
      className="row mx-0 align-items-center services-content"
      style={servicesContent}
    >
      <div className="col-lg-6 col-md-6, col-sm-12 col-12">
        <ThemeHeader title={textHeading} />
        <div>
          <p className="text-white" style={{ marginTop: "50px" }}>
            {textDescription}
          </p>
        </div>
        <div className="d-flex item-identifier mt-5"></div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
        <Carousel items={services} transitionSpeed={5000} />
      </div>
    </div>
  );
};

export default Index;
