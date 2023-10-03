import React from "react";

const SimpleTable = ({ heads, rows }) => {
  return (
    <>
      <div style={{ height: "50vh", overflow: "auto" }}>
        <table className="table table-sm table-hover table-responsive">
          <thead className=" text-center text-uppercase ">
            <tr>
              {heads != null
                ? heads.map((th) => {
                    return (
                      <>
                        <th
                          key={th._id}
                          className="th-fw-bold p-0 sticky-top th-bg-secondary"
                        >
                          <div className=" th-fw-bold th-bg-secondary">
                            {th.columnName}
                          </div>
                        </th>
                      </>
                    );
                  })
                : ""}
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </>
  );
};

export default SimpleTable;
