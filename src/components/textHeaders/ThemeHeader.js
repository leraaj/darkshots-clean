import React, { useEffect, useRef, useState } from "react";

const ThemeHeader = ({ title, breakWord }) => {
  const [valueHeader, setValueHeader] = useState(title);
  const formmattedHeaders = useRef(null);
  useEffect(() => {
    const textHandler = (str) => {
      const splitString = str
        .split(" ")
        .map((item, index) => {
          return index == (breakWord ?? 1) ? item + "<br>" : item ?? item;
        })
        .join(" ");
      // const reverseString = splitString.reverse();
      formmattedHeaders.current.innerHTML = splitString;
      return splitString;
    };

    typeof valueHeader === "string"
      ? textHandler(valueHeader ?? "No headers")
      : console.log("must be string");
  });
  return (
    <>
      <h1
        className="custom-headers text-white text-uppercase my-5"
        ref={formmattedHeaders}
      ></h1>
    </>
  );
};

export default ThemeHeader;
