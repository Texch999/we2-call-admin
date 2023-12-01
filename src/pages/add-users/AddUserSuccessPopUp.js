import React from "react";
import { Modal } from "react-bootstrap";
import { Images } from "../../images";
import { IoCloseSharp } from "react-icons/io5";

const AddUserSuccessPopUp = ({
  open = false,
  handleConfirm,
  handleCancel,
  heading = "",
  flag,
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
            <div
              className="col-12 rounded yellow-btn p-1"
              onClick={() => handleConfirm()}
            >
              Go Back
            </div>
          </div>
        </center>
      </Modal.Body>
    </Modal>
  );
};

export default AddUserSuccessPopUp;
