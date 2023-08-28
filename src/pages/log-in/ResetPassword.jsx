import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { BiSolidLock, BiSolidUser } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function ResetPassword(props) {
  const { showResetPopup, setShowResetPopup } = props;
  const [ showEye, setShowEye ] = useState(false);
  const handleShoeEye = () => {
    setShowEye(!showEye);
  };
  return (
    <Modal className="match-declaration-modal" centered show={showResetPopup}>
      <Modal.Header className="d-flex justify-content-end">
        <IoCloseSharp onClick={() => setShowResetPopup(false)} />
      </Modal.Header>
      <Modal.Body>
        <div className="p-3 ">
          <center>
            <h5 className="meetings-heading">Reset Password</h5>
            <span className="font-11">Reset Your Password</span>
          </center>
          <span className="mt-2 font-9">Old Password*</span>
          <div className="d-flex align-items-center login-input p-1">
            <BiSolidLock />
            <input className="bl-1 ms-2" placeholder="Enter Old Password" />
            {showEye === true ? (
              <AiFillEye onClick={() => handleShoeEye()} />
            ) : (
              <AiFillEyeInvisible onClick={() => handleShoeEye()} />
            )}
          </div>
          <span className="mt-2 font-9">New Password*</span>
          <div className="d-flex align-items-center login-input p-1">
            <BiSolidLock />
            <input className="bl-1 ms-2" placeholder="Enter New Password" />
            {showEye === true ? (
              <AiFillEye onClick={() => handleShoeEye()} />
            ) : (
              <AiFillEyeInvisible onClick={() => handleShoeEye()} />
            )}
          </div>
          <span className="mt-2 font-9">Confirm New Password*</span>
          <div className="d-flex align-items-center login-input p-1">
            <BiSolidLock />
            <input className="bl-1 ms-2" placeholder="Enter New Password" />
            {showEye === true ? (
              <AiFillEye onClick={() => handleShoeEye()} />
            ) : (
              <AiFillEyeInvisible onClick={() => handleShoeEye()} />
            )}
          </div>
          <button className="login-button p-1 mt-3 medium-font">
            ResetPassword
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ResetPassword;
