import React from "react";

const NotFound = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center bg-danger"
        style={{
          height: "100vh",
          width: "100vw",
        }}>
        <h1 className="text-light">Page Not Found</h1>
      </div>
    </>
  );
};

export default NotFound;
