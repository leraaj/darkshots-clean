import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import logoExpand from "../../../assets/images/brand/darkshot-logo.png";
import logoCollapsed from "../../../assets/images/brand/collapseLogo.ico";
import "./sidebar.css";
const Sidebar = (props) => {
  const logoExpandStyle = {
    height: "30px",
    objectFit: "cover",
  };
  const logoCollapseStyle = {
    transform: "scale(0.8)",
    height: "30px",
    objectFit: "cover",
  };
  const [isCollapsed, setCollapsed] = useState(false);
  const handleCollapseToggle = () => {
    setCollapsed(!isCollapsed);
  };
  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [currentPosition, setCurrentPosition] = useState(
    props.currentUser.position
  );
  return (
    <>
      <aside
        className={`sidebar-container th-bg-primary ${
          isCollapsed ? "collapsed" : ""
        }`}>
        <div className="sidebar-header position-relative d-flex justify-content-center align-items-center">
          <Link to="/" className="d-flex justify-content-start">
            <img
              src={isCollapsed ? logoCollapsed : logoExpand}
              style={isCollapsed ? logoCollapseStyle : logoExpandStyle}
              alt="Logo"
              className={isCollapsed ? "collapsed" : ""}
            />
          </Link>
          {/* <div className="position-absolute top-50 start-100 translate-middle ">
            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip>{isCollapsed ? "Expand" : "Collapse"}</Tooltip>
              }>
              <button
                className="collapse-button btn btn-sm btn-light rounded-pill shadow-lg d-flex justify-content-center align-items-center "
                style={{ border: "3px solid #151515" }}
                onClick={handleCollapseToggle}>
                {isCollapsed ? (
                  <i className="bi bi-arrow-bar-right m-0="></i>
                ) : (
                  <>
                    <i className="bi bi-arrow-bar-left m-0="></i>
                  </>
                )}
              </button>
            </OverlayTrigger>
          </div> */}
        </div>
        <div className="sidebar-body pt-3">
          <ul className="sidebar-ul">
            {props.sidebarLinks.map((link) => {
              if (link.position === currentPosition) {
                return (
                  <>
                    <li>
                      {isCollapsed ? (
                        <OverlayTrigger
                          placement="right"
                          overlay={<Tooltip>{link.name}</Tooltip>}>
                          <Link to={link.redirectTo} className="sidebar-list ">
                            <span className="sidebar-icon">{link.icon}</span>
                          </Link>
                        </OverlayTrigger>
                      ) : (
                        <Link to={link.redirectTo} className="sidebar-list ">
                          <span className="sidebar-icon">{link.icon}</span>
                          <span
                            className={`sidebar-name text-start px-3 ${
                              isCollapsed ? "fade hide" : "fade show"
                            }`}>
                            {link.name}
                          </span>
                        </Link>
                      )}
                    </li>
                  </>
                );
              }
            })}
          </ul>
        </div>
        <div className="sidebar-footer">
          <li>
            {isCollapsed ? (
              <Link
                className="sidebar-list bg-outline-dark"
                onClick={handleCollapseToggle}>
                <span className="sidebar-icon">
                  <i className="bi bi-arrow-bar-right m-0="></i>
                </span>
              </Link>
            ) : (
              <Link
                className="sidebar-list bg-outline-light"
                onClick={handleCollapseToggle}>
                <span className="sidebar-icon">
                  <i className="bi bi-arrow-bar-left m-0="></i>
                </span>
                <span
                  className={`sidebar-name text-start px-3 ${
                    isCollapsed ? "fade hide" : "fade show"
                  }`}>
                  Collapse
                </span>
              </Link>
            )}
          </li>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
