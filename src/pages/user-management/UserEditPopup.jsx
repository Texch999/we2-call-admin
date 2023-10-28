import React from "react";
import { Modal } from "react-bootstrap";
import { Images } from "../../images";
import { IoCloseSharp } from "react-icons/io5";

function UserEditPopup(props) {
  const {
    openEditConfirm,
    editClientName,
    setOpenEditConfirm,
    handleConfirmEdit,
  } = props;
  return (
    <Modal show={openEditConfirm} className="match-declaration-modal" centered>
      <Modal.Header className="d-flex justify-content-end">
        <IoCloseSharp onClick={() => setOpenEditConfirm(false)} />
      </Modal.Header>
      <Modal.Body>
        <center className="px-3">
          <img
            className="h-10vh"
            src={Images.CheckedMark}
            alt="Question_Mark"
          />
          <div className="fs-6 mt-3">
            Are you sure to edit {editClientName} Details
          </div>
          <div className="row d-flex justify-content-between mt-3">
            <div
              className="col-5 rounded yellow-btn p-1"
              onClick={handleConfirmEdit}
            >
              Yes
            </div>
            <div
              className="col-5 rounded share-bg p-1"
              onClick={() => setOpenEditConfirm(false)}
            >
              No
            </div>
          </div>
        </center>
      </Modal.Body>
    </Modal>
  );
}

export default UserEditPopup;
