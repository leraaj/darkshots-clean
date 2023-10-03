import { useEffect, useRef, useState } from "react";

const CardsInnerText = ({ title, subTitle, image }) => {
  const [titleValue, setTtitleValue] = useState("");
  const [subTitleValue, setSubTitleValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  useState(() => {
    setTtitleValue(title);
    setSubTitleValue(subTitle);
    setImageValue(image);
  });
  return (
    <div className="card card-inner-text col-xl-3 col-lg-3 col-md-6 col-sm-8 col-9 px-0 bg-transparent rounded-0 position-relative">
      <img
        src={imageValue}
        className="card-img-top rounded-0"
        style={{ height: "300px" }}
      />
      <div className="card-body position-absolute sticky-bottom z-1">
        <h5 className="card-title text-white">{titleValue}</h5>
        <p className="card-text text-white">{subTitleValue}</p>
      </div>
    </div>
  );
};

export default CardsInnerText;
