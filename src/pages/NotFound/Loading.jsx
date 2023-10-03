import React from "react";

const Loading = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center bg-dark"
        style={{
          height: "100vh",
          width: "100vw",
        }}>
        <h1 className="text-light">Loading...</h1>
      </div>
    </>
  );
};

export default Loading;
