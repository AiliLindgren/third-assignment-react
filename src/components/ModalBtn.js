import { useState } from "react";
import Modal from "./Modal";
import Main from "./Main";

const ModalBtn = ({ openModal, activateMargin }) => {
  return (
    <div
      className="modal-btn-div"
      style={activateMargin ? { marginLeft: "250px" } : { marginLeft: "0px" }}
    >
      <button className="modal-btn" onClick={() => openModal(true)}>
        Yes
      </button>
    </div>
  );
};

export default ModalBtn;
