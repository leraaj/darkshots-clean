import { useState, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import InternalLayout from "../shared/layouts/InternalLayout";
import ExternalLayout from "../shared/layouts/ExternalLayout";
import Loading from "../../pages/NotFound/Loading";
const PrivateRoute = ({ allowedRoles }) => {
  // const currentUserApi = "http://localhost:3001/api/user/current-user";
  const currentUserApi =
    "https://darkshot-server.onrender.com/api/user/current-user";
  const location = useLocation();
  const [hasToken, setHasToken] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state
  const [currentUser, setCurrentUser] = useState([]);
  useEffect(() => {
    const fetchTokenFromApi = async () => {
      try {
        const response = await fetch(currentUserApi, {
          method: "post",
          credentials: "include",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        const token = data.token;
        const user = data.user;
        console.log(data);
        if (response.ok) {
          if (token) {
            setHasToken(true);
            setCurrentUser(user);
          } else {
            console.error(data.message);
            setHasToken(false);
            setCurrentUser(null);
          }
        } else {
          setHasToken(false);
        }
      } catch (error) {
        console.error("Error fetching token:", error);
        setHasToken(false);
      } finally {
        setLoading(false); // Set loading to false, whether the request succeeds or fails
      }
    };
    fetchTokenFromApi();
  }, []);
  if (loading) {
    return <Loading />;
  }

  const position = currentUser.position;
  const RestrictAdminFromExternalLayout = position === 1;
  const RestrictOthersFromExternalLayout = position === 2 || position === 3;
  if (hasToken) {
    if (allowedRoles.includes(currentUser.position)) {
      return (
        <>
          <InternalLayout currentUser={currentUser}>
            <Outlet />
          </InternalLayout>
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
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
