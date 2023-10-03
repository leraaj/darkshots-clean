import React from "react";
import ThemeHeader from "../textHeaders/ThemeHeader";
const Modal = ({
  modalName,
  modalHeader,
  modalBody,
  modalCloseButtonText,
  modalSubmitButtonText,
}) => {
  const preventSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="modal fade"
      style={{ backgroundColor: "black" }}
      data-bs-backdrop="static"
      id={modalName}
      aria-hidden="true"
      aria-labelledby={modalName}
      tabIndex="-1">
      <div className="modal-dialog modal-xl modal-dialog-centered ">
        <div className="modal-content" style={{ backgroundColor: "black" }}>
          <div className="modal-header border-0">
            <h1 className="modal-title fs-5 " id={modalName}>
              <ThemeHeader title={modalHeader}></ThemeHeader>
            </h1>
          </div>
          <div className="modal-body">
            <div className="row align-items-center">{modalBody}</div>
          </div>
          <div className="modal-footer border-0 d-flex justify-content-start">
            <button
              onClick={preventSubmit}
              className="btn btn-transparent text-white text-uppercase rounded-0"
              data-bs-dismiss="modal"
              style={{ fontFamily: "Agdasima-Bold" }}>
              <i className="ri-arrow-left-line "></i>
              {modalCloseButtonText ?? "close"}
            </button>

            {modalSubmitButtonText ? (
              <button
                type="submit"
                className="btn btn-light btn-theme  rounded-0 mx-1 text-uppercase"
                style={{ fontFamily: "Agdasima-Bold" }}>
                {modalSubmitButtonText}
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
