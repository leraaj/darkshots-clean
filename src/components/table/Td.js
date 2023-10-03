import React from "react";

const td = ({ classes, values, colSpan, style }) => {
  return (
    <>
      <td colSpan={colSpan} className={`${classes}`} style={style}>
        {values}
      </td>
    </>
  );
};

export default td;
