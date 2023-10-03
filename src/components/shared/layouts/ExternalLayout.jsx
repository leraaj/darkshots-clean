import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../../pages/NotFound/Loading";
import { Navigate } from "react-router-dom";
import Navbar from "../Navbar";
const ExternalLayout = () => {
  const navigate = useNavigate();
  // const currentUserApi = "http://localhost:3001/api/user/current-user";
  const currentUserApi =
    "https://darkshot-server.onrender.com/api/user/current-user";
  const [loading, setLoading] = useState(true); // Add loading state
  const [currentUser, setCurrentUser] = useState([]);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await fetch(currentUserApi, {
          method: "POST",
          credentials: "include",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          console.log("TOKEN: " + data.token);
          const user = data.user;
          setCurrentUser(user);
        }
      } catch (error) {
        console.error("Error fetching token:" + error);
      } finally {
        setLoading(false); // Set loading to false, whether the request succeeds or fails
      }
    };
    fetchCurrentUser();
  }, [currentUser, navigate]);
  if (loading) {
    return <Loading />;
  }
  const position = currentUser.position;
  const viewPublicRoute = position === undefined;
  const RestrictAdminFromExternalLayout = position === 1;
  const RestrictOthersFromExternalLayout = position === 2 || position === 3;
  if (viewPublicRoute) {
    return (
      <>
        <Outlet />
      </>
    );
  }
  if (RestrictAdminFromExternalLayout) {
    return (
      <>
        <Navigate to={"/accounts"} />
      </>
    );
  }
  if (RestrictOthersFromExternalLayout) {
    return (
      <>
        <Navigate to={"/profile"} />
      </>
    );
  }
};

export default ExternalLayout;
