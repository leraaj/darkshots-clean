import React from "react";
import List from "../collections/List";
import File1 from "../../assets/files/legal.txt";
import Logo from "../../assets/images/brand/darkshot-logo.png";
const Footer = () => {
  const footerContent = {
    width: "100%",
    boxSizing: "border-box",
    paddingTop: "5%",
    paddingBottom: "5%",
    position: "relative",
    backgroundColor: "#252525",
  };
  const title = "Legal";
  const title2 = "Discover us";
  const documents = [
    {
      id: 1,
      name: "Terms and Conditions",
      files: File1,
    },
    {
      id: 2,
      name: "Privacy Policy",
      files: File1,
    },
  ];
  const socialMedia = [
    {
      id: 1,
      name: (
        <>
          <i className="ri-facebook-box-fill" style={{ fontSize: "2em" }}></i>
          <i className="ri-instagram-fill" style={{ fontSize: "2em" }}></i>
          <i className="ri-youtube-fill" style={{ fontSize: "2em" }}></i>
        </>
      ),
    },
  ];
  return (
    <footer
      className="row mx-0 justify-content-center align-items-center"
      style={footerContent}
    >
      <div className="col-lg-4">
        <img
          src={Logo}
          className="img img-fluid mb-4"
          style={{ width: "253px" }}
        />
        <p className="text-white">
          We are the media production company specializing events management and
          digital marketing.
        </p>
      </div>

      <div className="col-lg-3">
        <List title={title} items={documents} itemName={documents.name} />
      </div>
      <div className="col-lg-3">
        <List title={title2} items={socialMedia} itemName={socialMedia.name} />
      </div>
    </footer>
  );
};

export default Footer;
