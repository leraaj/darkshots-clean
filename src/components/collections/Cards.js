import { useEffect, useRef, useState } from "react";

const Card = ({ title, subTitle, image }) => {
  const [titleValue, setTtitleValue] = useState("");
  const [subTitleValue, setSubTitleValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  useState(() => {
    setTtitleValue(title);
    setSubTitleValue(subTitle);
    setImageValue(image);
  });
  return (
    <div className="card col-lg-2 px-0 bg-transparent rounded-0 position-relative">
      <img src={imageValue} className="card-img-top rounded-0" />
      <div className="card-body px-0">
        <h5 className="card-title text-white">{titleValue}</h5>
        <p className="card-text text-white">{subTitleValue}</p>
      </div>
    </div>
  );
};

export default Card;
