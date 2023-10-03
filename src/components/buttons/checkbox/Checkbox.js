import React from "react";
import "../checkbox/style.css";
const Checkbox = ({ value }) => {
  return (
    <label className="checkbox-label">
      <input type="checkbox" className="checkbox-input" />
      <span className="checkbox-span">{value}</span>
    </label>
  );
};

export default Checkbox;
