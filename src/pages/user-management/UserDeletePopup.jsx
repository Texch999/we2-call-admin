import React from "react";
import { Images } from "../../images";
import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";

function UserDeletePopup(props) {
  const { openDeletePopup, handleConfirmDelete, setOpenDeletePopup } = props;
  return (
    <Modal show={openDeletePopup} className="match-declaration-modal" centered>
      <Modal.Header className="d-flex justify-content-end">
        <IoCloseSharp onClick={() => setOpenDeletePopup(false)} />
      </Modal.Header>
      <Modal.Body>
        <center className="px-3">
          <img
            className="h-10vh"
            src={Images.CheckedMark}
            alt="Question_Mark"
          />
          <div className="fs-6 mt-3">Are you sure to delete user </div>
          <div className="row d-flex justify-content-between mt-3">
            <div
              className="col-5 rounded yellow-btn p-1"
              onClick={handleConfirmDelete}
            >
              Yes
            </div>
            <div
              className="col-5 rounded share-bg p-1"
              onClick={() => setOpenDeletePopup(false)}
            >
              No
            </div>
          </div>
        </center>
      </Modal.Body>
    </Modal>
  );
}

export default UserDeletePopup;
