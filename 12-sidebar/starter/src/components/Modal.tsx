import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../Context";

function Modal() {
  const { isModalOpen, modalOpen, modalClose } = useGlobalContext();
  return (
    <div className={isModalOpen ? "modal-overlay show" : "modal-overlay"}>
      <div className="modal-container">
        <h3>Modal Content</h3>
        <button className="close-modal-btn" onClick={modalClose}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

export default Modal;
