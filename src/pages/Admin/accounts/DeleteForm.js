import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import SimpleButton from "../../../components/buttons/SimpleButton";
const DeleteForm = ({ data, show, onHide, refreshData }) => {
  const deleteUserAPI = "http://localhost:3001/api/user/";
  const validField = (e) => {
    const inputClass =
      e.target.value != "confirm"
        ? "form-control is-invalid"
        : "form-control is-valid";
    e.target.className = inputClass;
  };
  const [deleteValue, setDeleteValue] = useState(null);
  const handleDelete = (e) => {
    validField(e);
    setDeleteValue(e.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (deleteValue === "confirm") {
      await fetch(deleteUserAPI + data._id, {
        method: "delete",
        credentials: "include",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: data._id,
        }),
      })
        .then(async (response) => {
          const data = await response.json();
          console.log("Deleted User:\n" + data);
          onHide();
          refreshData();
        })
        .catch((error) => {
          console.log({ error: error.message });
        });
    } else {
      alert("Invalid input");
    }
  };
  return (
    <>
      {/* Modal Delete User */}
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <div className="row mx-0 gap-2">
              <div className="col-12">
                <span>
                  Type <span className="text-danger">confirm</span> to delete{" "}
                  <span className="th-fw-bold">{data.fullName}</span>
                </span>
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  onChange={handleDelete}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <SimpleButton
              type={"button"}
              color={"secondary"}
              onClick={onHide}
              label={"Cancel"}
            />
            <SimpleButton
              type={"submit"}
              color={"danger"}
              label={"Delete"}
              disabled={handleDelete === "confirm" ? true : false}
            />
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default DeleteForm;
