import React from "react";
import ReactDom from "react-dom";
import "../../css/Modal.css";

const Warning = ({ setModalOpen, onDelete }) => {
  return ReactDom.createPortal(
    <div className="modal__background">
      <div className="modal__container">
        <div className="title__close-btn">
          <button
            className="modal__x"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1 className="pop__heading">Delete Assets</h1>
        </div>
        <div className="body">
          <p>Are you sure you want to delete your House?</p>
        </div>
        <div className="modal__footer">
          <button
            onClick={() => {
              setModalOpen(false);
            }}
            className="cancel__btn"
          >
            Cancel
          </button>
          <button className="modal__delete-btn" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Warning;
