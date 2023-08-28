import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { BiSolidLock, BiSolidUser } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function ChangePassword(props) {
  const { showChangePopup, setShowChangePopup,setChangePasswordSubmit } = props;
  const [showEye, setShowEye] = useState(false);
  const handleShoeEye = () => {
    setShowEye(!showEye);
  };

  const handleChangePasswordSubmit = () => {
    setChangePasswordSubmit(true);
    setShowChangePopup(false);
  };
  const passwordInputs = [
    {
      head: "New Password*",
      plHolder: "Enter New Password",
    },
    {
      head: "Confrm New Password*",
      plHolder: "Re-enter Password",
    },
    {
      head: "Admin Password*",
      plHolder: "Enter Admin Password",
    },
  ];
  return (
    <Modal className="match-declaration-modal" centered show={showChangePopup}>
      <Modal.Header className="d-flex justify-content-end">
        <IoCloseSharp onClick={() => setShowChangePopup(false)} />
      </Modal.Header>
      <Modal.Body>
        <div className="p-2">
          <center>
            <h5 className="meetings-heading">Change Password</h5>
            <span className="font-11">Change Your Password</span>
          </center>
          {passwordInputs.map((item, index) => {
            return (
              <div key={index}>
                <span className="mt-2 font-9">{item.head}</span>
                <div className="d-flex align-items-center login-input p-1">
                  <BiSolidLock />
                  <input className="bl-1 ms-2" placeholder={item.plHolder} />
                  {showEye === true ? (
                    <AiFillEye onClick={() => handleShoeEye(index)} />
                  ) : (
                    <AiFillEyeInvisible onClick={() => handleShoeEye(index)} />
                  )}
                </div>
              </div>
            );
          })}
          <button
            className="login-button p-1 mt-3 medium-font"
            onClick={() => handleChangePasswordSubmit()}
          >
            Submit
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ChangePassword;
