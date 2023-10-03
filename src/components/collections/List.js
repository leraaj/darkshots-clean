import React, { useState } from "react";
const List = ({ items, title }) => {
  const [lists, setLists] = useState(items);
  return (
    <ul className="list-group ">
      <h5 className="list-group-item bg-transparent text-white border-0">
        {title}
      </h5>
      {lists.map((item) => {
        return (
          <li
            key={item.id}
            className="list-group-item bg-transparent text-white border-0"
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
