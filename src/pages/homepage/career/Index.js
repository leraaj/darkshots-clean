import React, { useState, useEffect } from "react";
import ThemeHeader from "../../../components/textHeaders/ThemeHeader";
import Card from "../../../components/collections/Cards";
import ThemeButton from "../../../components/buttons/ThemeButton";
import CareerForm from "./CareerForm";
const Index = () => {
  const textHeading = "We're Hiring! Grab the opportunity";
  const textMessage = "Let your talents leads to career path.";
  const careerContent = {
    minHeight: "100vh",
    width: "100%",
    boxSizing: "border-box",
    padding: "10%",
    position: "relative",
  };
  const jobPositions = [
    {
      id: 1,
      title: "Graphic Designer",
      contract: "full-time",
      qualifications: ["one", "two", "three", "four"],
      benefits: ["one", "two", "three", "four"],
      vacancy: 1,
      image:
        "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png",
    },
    {
      id: 2,
      title: "Business Analyst",
      contract: "project-based",
      qualifications: ["one", "two", "three", "four"],
      benefits: ["one", "two", "three", "four"],
      vacancy: 2,
      image:
        "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png",
    },
    {
      id: 3,
      title: "Videographer",
      contract: "project-based",
      qualifications: ["one", "two", "three", "four"],
      benefits: ["one", "two", "three", "four"],
      vacancy: 4,
      image:
        "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png",
    },
    {
      id: 4,
      title: "Accounting Staff",
      contract: "full-time",
      qualifications: ["one", "two", "three", "four"],
      benefits: ["one", "two", "three", "four"],
      vacancy: 1,
      image:
        "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png",
    },
    {
      id: 5,
      title: "sample position",
      contract: "project-based",
      qualifications: ["one", "two", "three", "four"],
      benefits: ["one", "two", "three", "four"],
      vacancy: 6,
      image:
        "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png",
    },
  ];
  return (
    <div className="row mx-0 align-items-center" style={careerContent}>
      <div className="col-12">
        <ThemeHeader title={textHeading} />
      </div>
      <div className="col-12 ">
        <div className="row mx-0 mb-5">
          <div className="text-white">
            {textMessage}
            {"  "}
            <ThemeButton
              textName="Apply now"
              enableModal={true}
              modalName="openModalCareerApplication"
              modalHeader="Fill up form application"
              modalCloseButtonText="back"
              modalSubmitButtonText="confirm"
              modalBody={<CareerForm items={jobPositions} />}
            />
          </div>
        </div>
        <div className="row mx-0 justify-content-center align-items-start gap-2">
          {jobPositions.map((jobPosition) => {
            return (
              <Card
                key={jobPosition.id}
                image={jobPosition.image}
                title={jobPosition.title}
                subTitle={"Vacancy " + jobPosition.vacancy}></Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
