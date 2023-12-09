import React from "react";
import { Modal } from "react-bootstrap";
import { Images } from "../../images";
import { IoCloseSharp } from "react-icons/io5";

const BlockUnBlockPopUp = ({
  open = false,
  handleConfirm,
  handleCancel,
  heading = "",
  isProcessing,
}) => {
  return (
    <Modal show={open} className="match-declaration-modal" centered>
      <Modal.Header className="d-flex justify-content-end">
        <IoCloseSharp onClick={() => handleCancel()} />
      </Modal.Header>
      <Modal.Body>
        <center className="px-3">
          <img
            className="h-10vh"
            src={Images?.CheckedMark}
            alt="Question_Mark"
          />
          <div className="fs-6 mt-3">{heading} </div>
          <div className="row d-flex justify-content-between mt-3">
            <button
              className="col-5 rounded yellow-btn p-1"
              onClick={() => handleConfirm()}
              disabled={isProcessing}
            >
              {isProcessing ? "Processing...." : "Yes"}
            </button>
            <button
              className="col-5 rounded share-bg p-1"
              onClick={() => handleCancel()}
              disabled={isProcessing}
            >
              No
            </button>
          </div>
        </center>
      </Modal.Body>
    </Modal>
  );
};

export default BlockUnBlockPopUp;
