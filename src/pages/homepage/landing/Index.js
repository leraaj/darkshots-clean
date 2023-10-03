import React from "react";
import ThemeButton from "../../../components/buttons/ThemeButton";
import ThemeHeader from "../../../components/textHeaders/ThemeHeader";
const Index = () => {
  const landingContent = {
    height: "100vh",
    width: "100%",
    boxSizing: "border-box",
    padding: "10%",
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 95%),url(" +
      require("../../../assets/images/brand/cinema_bg.png") +
      ")",
    backgroundSize: "cover",
    backgroundPosition: "95%  0%", // Set background position to right
    position: "relative",
  };
  const textHeading = "Where dreams become Cinematic Masterpieces";

  return (
    <div
      className="row mx-0 align-items-center landing-section"
      style={landingContent}>
      <div className="col-12">
        <ThemeHeader title={textHeading} breakWord={2} />
        <div className="d-flex gap-1 col-12">
          <ThemeButton textName="Inquire Now" />
          <ThemeButton textName="Learn more" primary={false} />
        </div>
      </div>
    </div>
  );
};
export default Index;
