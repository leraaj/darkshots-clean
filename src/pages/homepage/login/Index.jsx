import React, { useEffect, useState, useContext } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import ThemeHeader from "../../../components/textHeaders/ThemeHeader";
import InputField from "../../../components/forms/InputField";
import ThemeButton from "../../../components/buttons/ThemeButton";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const loginAPI = "http://localhost:3001/api/user/login";
  const loginAPI = "https://darkshot-server.onrender.com/api/user/login";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleBack = () => {
    navigate("/");
  };
  const handleUsernameValue = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordValue = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("All fields are required");
    } else {
      await fetch(loginAPI, {
        method: "POST",
        credentials: "include",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then(async (response) => {
          const data = await response.json();
          if (response.ok) {
            const role = data.user.position;
            if (role === 1) {
              navigate("/accounts");
            } else if (role === 2 || role === 3) {
              navigate("/profile");
            }
            console.log(data.message);
          } else {
            console.log(data.message);
          }
        })
        .catch((error) => {
          alert(error.message);
          console.log({ error: error.message });
        });
    }
  };
  const loginContent = {
    minHeight: "100vh",
    width: "100vw",
    boxSizing: "border-box",
    padding: "0% 10%",
    position: "relative",
    backgroundColor: "black",
  };
  const textHeading = "Sign in your account";
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={loginContent}>
      <div className="row">
        <div className="col-12 ">
          <form method="post" action="" className="row" onSubmit={handleLogin}>
            <div className="col-12">
              <ThemeHeader title={textHeading} />
            </div>
            <div className="col-6">
              <InputField
                name="username"
                type="text"
                value={username}
                clickTrigger={handleUsernameValue}
              />
            </div>
            <div className="col-6">
              <InputField
                name="password"
                type="password"
                value={password}
                clickTrigger={handlePasswordValue}
              />
            </div>
            <div className="col-12 ">
              <div className="float-end">
                <ThemeButton textName="Sign in" type="submit" />
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
