import { useEffect, useRef } from "react";

const InputField = ({
  name,
  type,
  clickTrigger,
  accept,
  multiple,
  required,
}) => {
  const inputStyle = {
    outline: 0,
    backgroundColor: "transparent",
    border: 0,
    borderRadius: 0,
    padding: 0,
    color: "white",
  };
  const inputField = useRef(null);
  useEffect(() => {
    inputField.current = document.querySelectorAll(".input-field");

    inputField.current.forEach((element) => {
      element.style.boxShadow = "inset 0 -1px 0 #ddd";
    });
  });
  return (
    <div className="mb-3 py-3">
      <label className="form-label text-white text-uppercase">{name}</label>
      <input
        type={type}
        className={`form-control input-field ${
          type == "file" ? "px-2 py-1" : ""
        }`}
        style={inputStyle}
        onChange={clickTrigger}
        accept={accept || undefined}
        {...(multiple ? { multiple: true } : {})}
        {...(required ? { required: true } : {})}
      />
    </div>
  );
};

export default InputField;
