import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ThemeButton from "../buttons/ThemeButton";
import SimpleButtton from "../buttons/SimpleButton";
import logo from "../../assets/images/brand/darkshot-logo.png";

const Navbar = (props) => {
  const logoutApi = "https://darkshot-server.onrender.com/api/user/logout";
  const navigate = useNavigate();
  const location = useLocation();
  const [position, setPosition] = useState(
    props.currentUser?.position || undefined
  );
  const handleLogout = async () => {
    await fetch(logoutApi, {
      method: "post",
      credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        const data = await response.json();
        navigate(data.redirectUrl);
      })
      .catch((error) => {
        alert(error.message);
        console.log({ error: error.message });
      });
  };
  const handleLogin = (event) => {
    navigate("/login");
  };
  const handleRegister = (event) => {
    navigate("/");
  };
  // ==============================================
  const homepageLists = [
    {
      navId: 1,
      redirectTo: "/",
      name: "Home",
    },
    {
      navId: 2,
      redirectTo: "#services",
      name: "services",
    },
    {
      navId: 3,
      redirectTo: "#projects",
      name: "projects",
    },
    {
      navId: 4,
      redirectTo: "#about",
      name: "about",
    },
    {
      navId: 5,
      redirectTo: "#careers",
      name: "careers",
    },
    {
      navId: 6,
      redirectTo: "#contact",
      name: "contact",
    },
  ];
  const navbarStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(10px)",
    zIndex: "3",
  };
  const logoImage = {
    height: "30px",
    objectFit: "cover",
  };
  const HomepageNavbar = position === undefined;
  if (HomepageNavbar) {
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top shadow-sm `}
        style={navbarStyle}>
        <div className="container-fluid px-5">
          <Link className="navbar-brand " to="/">
            <img src={logo} className="img img-fluid" style={logoImage} />
          </Link>
          <div className="d-flex gap-2 d-block d-md-block d-lg-none">
            <button
              className="navbar-toggler bg-transparent btn btn-dark border border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <i className="bi bi-list"></i>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto my-auto">
              {position === undefined &&
                homepageLists.map((navLink) => {
                  return (
                    <li key={navLink.navId} className="nav-item">
                      <Link
                        key={navLink.navId}
                        className="nav-link  text-uppercase"
                        onClick={navLink.redirectTo}
                        style={{ fontFamily: "Agdasima-Bold" }}>
                        {navLink.name}
                      </Link>
                    </li>
                  );
                })}
              <li className="nav-item">
                <div className="d-flex justify-content-end gap-2 d-block d-md-block d-lg-none">
                  <ThemeButton
                    textName="Register"
                    clickTrigger={handleRegister}
                  />
                  <ThemeButton
                    textName="Sign in"
                    primary={false}
                    clickTrigger={handleLogin}
                  />
                </div>
              </li>
            </ul>
            <div className="d-flex gap-2 d-none d-md-none d-lg-block">
              <ThemeButton textName="Register" clickTrigger={handleRegister} />
              <ThemeButton
                textName="Sign in"
                primary={false}
                clickTrigger={handleLogin}
              />
            </div>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="sidebar-header bg-light bg-gradient shadow-sm col-12 position-sticky sticky-top">
        <div className=" px-4 d-flex align-items-center">
          <div className="col-auto th-fw-bold th-fs-3 text-uppercase text-dark">
            {location.pathname.substring(1)}
          </div>
          <div className="col d-flex justify-content-end align-items-center">
            <div class="dropdown">
              <ThemeButton
                textName={
                  // props.currentUser.fullName
                  "NO NAME"
                }
                className="dropdown-toggle btn-sm"
                primary={false}
                dataBsToggle={"dropdown"}
                ariaExpanded={"false"}
              />
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <button
                    className="dropdown-item d-flex gap-2"
                    onClick={handleLogout}>
                    <div className="col">Logout</div>
                    <div className="col-auto">
                      <i class="bi bi-box-arrow-right"></i>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
