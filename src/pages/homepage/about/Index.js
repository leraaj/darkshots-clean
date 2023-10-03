import React from "react";
import ThemeHeader from "../../../components/textHeaders/ThemeHeader";
import profile from "../../../assets/images/team/person1.jpg";
import profile2 from "../../../assets/images/team/person2.jpg";
import Team from "./Team";
const textHeading = "About us: Meet our team";
const textHeading2 = "About us: Mission & Vision";
const Index = () => {
  const aboutContent = {
    minHeight: "100vh",
    width: "100%",
    boxSizing: "border-box",
    padding: "10%",
    position: "relative",
  };
  const teamStyle = {
    minHeight: "400px",
  };
  const teams = [
    {
      id: 1,
      name: "Francis Bayatola",
      position: "Production Manager",
      image: profile,
    },
    {
      id: 2,
      name: "Trizzia Jovie Tinte",
      position: "Art Director",
      image: profile2,
    },
    {
      id: 3,
      name: "MJ Lopez",
      position: "Director",
      image: profile2,
    },
  ];

  const texts = [
    {
      id: 1,
      description:
        "Our Mission is to be the premiere media production  company  that provides exceptional events and management and digital marketing services to our clients.",
    },
    {
      id: 2,
      description:
        "We Envision a world where every event is a success and every business thrives with our digital marketing solutions. We strive with our digital marketing solutions. We strive to create memorable experiences and help businesses reach their full potential while maintaining the highest standards of professionalism and excellence.",
    },
  ];
  return (
    <div className="row mx-0 align-items-center " style={aboutContent}>
      <div className="col-lg-12">
        <ThemeHeader title={textHeading} />
      </div>
      <div className="col-lg-12" style={teamStyle}>
        <Team
          items={teams}
          itemCenter={teams[2]}
          image={teams.image}
          title={teams.name}
          subTitle={teams.position}
        />
      </div>
      <div className="col-lg-12 ">
        <ThemeHeader title={textHeading2} />
      </div>
      <div className="col-lg-12 ">
        <div className="row justify-content-center align-items">
          {texts.map((text) => {
            return (
              <p key={text.id} style={{ color: "white" }}>
                {text.description}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
