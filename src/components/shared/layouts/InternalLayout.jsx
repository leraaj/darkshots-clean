import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../sidebar/Sidebar";
const InternalLayout = ({ currentUser }) => {
  const navLinks = [
    {
      id: 1,
      position: 1,
      redirectTo: "/accounts",
      name: "Accounts",
      icon: <i className="bi bi-person-gear"></i>,
    },
    {
      id: 2,
      position: 1,
      redirectTo: "/applicants",
      name: "Applicants",
      icon: <i className="bi bi-people"></i>,
    },
    {
      id: 3,
      position: 1,
      redirectTo: "/clients",
      name: "Clients",
      icon: <i className="bi bi-person-badge"></i>,
    },
    {
      id: 4,
      position: 1,
      redirectTo: "/jobs",
      name: "Jobs",
      icon: <i className="bi bi-briefcase"></i>,
    },
    {
      id: 4,
      position: 1,
      redirectTo: "/posts",
      name: "Posts",
      icon: <i className="bi bi-file-earmark-plus"></i>,
    },
    {
      id: 5,
      position: 2,
      redirectTo: "/profile",
      name: "Profile",
      icon: <i className="bi bi-person-circle"></i>,
    },
    {
      id: 6,
      position: 2,
      redirectTo: "/orders",
      name: "Orders",
      icon: <i className="bi bi-stack"></i>,
    },
    {
      id: 7,
      position: 2,
      redirectTo: "/mediaFiles",
      name: "Media Files",
      icon: <i className="bi bi-images"></i>,
    },
    {
      id: 5,
      position: 3,
      redirectTo: "/profile",
      name: "Profile",
      icon: <i className="bi bi-person-circle"></i>,
    },
    {
      id: 6,
      position: 3,
      redirectTo: "/orders",
      name: "Orders",
      icon: <i className="bi bi-stack"></i>,
    },
    {
      id: 7,
      position: 3,
      redirectTo: "/mediaFiles",
      name: "Media Files",
      icon: <i className="bi bi-images"></i>,
    },
  ];
  return (
    <>
      <aside className="m-0 p-0 d-flex " style={{ backgroundColor: "#fff" }}>
        <Sidebar currentUser={currentUser} sidebarLinks={navLinks} />
        <div
          className="overflow-auto d-flex flex-column bg-light "
          style={{ height: "100vh", width: "100%" }}>
          <Navbar currentUser={currentUser} navLinks={navLinks} />
          <section className="flex-grow-1 overflow-auto p-3">
            <Outlet />
          </section>
        </div>
      </aside>
    </>
  );
};

export default InternalLayout;
