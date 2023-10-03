import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ThemeHeader from "../../../components/textHeaders/ThemeHeader";
import InputField from "../../../components/forms/InputField";
import ThemeButton from "../../../components/buttons/ThemeButton";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [nameValue, setNameValue] = useState(null);
  const [contactValue, setContactValue] = useState(null);
  const [emailValue, setEmailValue] = useState(null);
  const [usernameValue, setUsernameValue] = useState(null);
  const [passwordValue, setPasswordValue] = useState(null);
  // const apiEndpoint = "https://darkshot-server.onrender.com/api";
  const apiEndpoint = "http://localhost:3001/api";
  const registerContent = {
    minHeight: "100vh",
    width: "100vw",
    boxSizing: "border-box",
    padding: "0% 10%",
    position: "relative",
    backgroundColor: "black",
  };
  const handleClientName = (event) => {
    setNameValue(event.target.value);
  };
  const handleContact = (event) => {
    setContactValue(event.target.value);
  };
  const handleEmail = (event) => {
    setEmailValue(event.target.value);
  };
  const handleUserName = (event) => {
    setUsernameValue(event.target.value);
  };
  const handlePassword = (event) => {
    setPasswordValue(event.target.value);
  };
  const handleBack = (e) => {
    navigate(-1);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = JSON.stringify({
      fullName: nameValue,
      contact: contactValue,
      username: usernameValue,
      email: emailValue,
      password: passwordValue,
      position: 3,
    });
    await fetch(apiEndpoint + "/user", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: formData,
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        alert(formData);
      });
  };
  const textHeading = "Create new account";
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={registerContent}>
      <div className="row">
        <div className="col-12 ">
          <form
            method="post"
            action=""
            className="row mx-0 needs-validation"
            onSubmit={handleSubmit}>
            <div className="col-12">
              <ThemeHeader title={textHeading} />
            </div>
            <div className="col-6">
              <InputField
                name="client name"
                type="text"
                value={nameValue}
                clickTrigger={handleClientName}
              />
            </div>
            <div className="col-6">
              <InputField
                name="contact number"
                type="text"
                value={contactValue}
                clickTrigger={handleContact}
              />
            </div>
            <div className="col-6">
              <InputField
                name="email"
                type="email"
                value={emailValue}
                clickTrigger={handleEmail}
              />
            </div>
            <div className="col-6">
              <InputField
                name="username"
                type="text"
                value={usernameValue}
                clickTrigger={handleUserName}
              />
            </div>
            <div className="col-6">
              <InputField
                name="password"
                type="password"
                value={passwordValue}
                clickTrigger={handlePassword}
              />
            </div>
            <div className="col-12 ">
              <div className="float-end">
                <ThemeButton textName="Register" type="submit" />
              </div>
            </div>
          </form>
        </div>
        <div className="col-2">
          <div className="float-start">
            <button
              onClick={handleBack}
              className="btn btn-transparent text-white text-uppercase rounded-0"
              style={{ fontFamily: "Agdasima-Bold" }}>
              <i className="ri-arrow-left-line "></i>
              back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
