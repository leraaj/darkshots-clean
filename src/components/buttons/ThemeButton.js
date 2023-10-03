import React, { useEffect, useRef, useState } from "react";
import ThemeModal from "../popups/ThemeModal";
const ThemeButton = ({
  textName,
  clickTrigger,
  enableModal,
  type,
  modalName,
  modalHeader,
  modalBody,
  modalCloseButtonText,
  modalSubmitButtonText,
  primary,
  dataBsToggle,
  ariaExpanded,
  className,
}) => {
  const btn = useRef(null);

  useEffect(() => {
    function showModal(val) {
      if (val === true) {
        btn.current.setAttribute("data-bs-target", "#" + modalName);
        btn.current.setAttribute("data-bs-toggle", "modal");
      }
    }
    // function buttonType(val) {
    //   if (val === false) {
    //     btn.current.classList.remove("btn-light");
    //     btn.current.classList.add("btn-transparent");
    //     btn.current.style.color = "white";
    //     btn.current.style.border = "1px solid white";
    //   }
    // }
    // buttonType(primary);
    showModal(enableModal);
  });
  return (
    <>
      {primary === false ? (
        <button
          ref={btn}
          type={type ? "submit" : "button"}
          className={`btn btn-dark btn-theme border rounded-0 mx-1 text-uppercase ${className}`}
          onClick={clickTrigger}
          {...(dataBsToggle != null ? { "data-bs-toggle": dataBsToggle } : {})}
          {...(ariaExpanded != null ? { "aria-expanded": ariaExpanded } : {})}
          style={{ fontFamily: "Agdasima-Bold" }}>
          <b>{textName ?? "Empty"}</b>
        </button>
      ) : (
        <button
          ref={btn}
          type={type ? "submit" : "button"}
          className={`btn btn-light btn-theme border rounded-0 mx-1 text-uppercase ${className}`}
          onClick={clickTrigger}
          {...(dataBsToggle != null ? { "data-bs-toggle": dataBsToggle } : {})}
          {...(ariaExpanded != null ? { "aria-expanded": ariaExpanded } : {})}
          style={{ fontFamily: "Agdasima-Bold" }}>
          <b>{textName ?? "Empty"}</b>
        </button>
      )}
      {enableModal === true ? (
        <ThemeModal
          modalName={modalName}
          modalHeader={modalHeader}
          modalBody={modalBody}
          modalCloseButtonText={modalCloseButtonText}
          modalSubmitButtonText={modalSubmitButtonText}
        />
      ) : (
        enableModal === false
      )}
    </>
  );
};
export default ThemeButton;
