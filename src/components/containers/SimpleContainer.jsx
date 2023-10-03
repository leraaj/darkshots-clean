import React, { useEffect } from "react";
import SimpleButton from "../buttons/SimpleButton";
const SimpleContainer = ({ title, rightSection, mainSection }) => {
  const headerStyle = {
    zIndex: "0",
    height: "3.625rem",
    color: "#fff",
  };

  return (
    <>
      <div className="mainContainerHeight d-flex flex-column m-0 p-0 rounded  ">
        <div className="flex-grow-1">{mainSection}</div>
      </div>
    </>
  );
};

export default SimpleContainer;
