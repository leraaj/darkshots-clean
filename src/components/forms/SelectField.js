import { useEffect, useRef, useState } from "react";

const SelectField = ({ name, items }) => {
  const selectStyle = {
    outline: 0,
    backgroundColor: "transparent",
    border: 0,
    borderRadius: 0,
    padding: 0,
    color: "white",
  };
  const optionStyle = {
    backgroundColor: "black",
  };
  const inputField = useRef(null);
  const [lists, setLists] = useState(items);

  useEffect(() => {
    inputField.current = document.querySelectorAll(".input-field");

    inputField.current.forEach((element) => {
      element.style.boxShadow = "inset 0 -1px 0 #ddd";
    });
  });
  return (
    <div className="mb-3 py-3">
      <label className="form-label text-white text-uppercase">{name}</label>
      <select className="form-control input-field" style={selectStyle}>
        {!lists ? (
          <option selected disabled>
            Empty List
          </option>
        ) : (
          lists.map((element) => {
            return (
              <option
                key={element.id}
                value={element.title}
                style={optionStyle}
              >
                {element.title}
              </option>
            );
          })
        )}
      </select>
    </div>
  );
};

export default SelectField;
