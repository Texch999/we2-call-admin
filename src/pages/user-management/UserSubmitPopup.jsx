import React from "react";
import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { Images } from "../../images";
import { useState } from "react";

function UserSubmitPopup(props) {
  const { userCreationSubmitPopup, setUserCreationSubmitPopup } = props;
  return (
    <Modal
      show={userCreationSubmitPopup}
      className="match-declaration-modal"
      centered
    >
      <Modal.Header className="d-flex justify-content-end">
        <IoCloseSharp onClick={() => setUserCreationSubmitPopup(false)} />
      </Modal.Header>
      <Modal.Body>
        <center className="px-3">
          <img
            className="h-10vh"
            src={Images.CheckedMark}
            alt="Question_Mark"
          />
          <div className="fs-6 mt-3">Successfully created user </div>
          <div className="row d-flex justify-content-between mt-3">
            <div
              className="col-5 rounded yellow-btn p-1"
                // onClick={() => setUserCreationSubmitPopup(false)}
            >
              Yes
            </div>
            <div
              className="col-5 rounded share-bg p-1"
              //   onClick={() => setOpenDeletePopup(false)}
            >
              No
            </div>
          </div>
        </center>
      </Modal.Body>
    </Modal>
  );
}

export default UserSubmitPopup;
