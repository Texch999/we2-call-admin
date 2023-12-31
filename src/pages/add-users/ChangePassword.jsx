import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { BiSolidLock } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { CHANGE_PASSWORD } from "../../config/endpoints";
import { call } from "../../config/axios";

function ChangePassword(props) {
  const {
    showChangePopup,
    setShowChangePopup,
    setChangePasswordSubmit,
    selectedUser,
    setSelectedUser,
  } = props;
  const [showEye, setShowEye] = useState(false);
  const register_id = localStorage?.getItem("register_id");
  const creator_id = localStorage?.getItem("creator_id");
  const [passwordData, setPasswordData] = useState({});
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleShowEye = () => {
    setShowEye(!showEye);
  };

  const handleChangePassword = async () => {
    if (
      !passwordData.new_password ||
      !passwordData.confirm_password ||
      !passwordData.admin_password
    ) {
      setError("Please fill in all the fields.");
      return;
    }

    if (passwordData.new_password !== passwordData.confirm_password) {
      setError("New password and confirm password must match.");
      return;
    }
    setError("");
    setIsProcessing(true);
    try {
      const response = await call(CHANGE_PASSWORD, {
        register_id: selectedUser?.register_id,
        creator_id: selectedUser?.creator_id,
        creator_password: passwordData.admin_password,
        new_password: passwordData.new_password,
        confirm_password: passwordData.confirm_password,
      });

      if (response?.data?.statusCode === 200) {
        setIsProcessing(false);
        setSelectedUser("");
        setPasswordData({});
        setChangePasswordSubmit(true);
        setTimeout(() => {
          setChangePasswordSubmit(false);
        }, 2000);
        setShowChangePopup(false);
      } else {
        setIsProcessing(false);
        setError(
          response?.data?.message
            ? response?.data?.message
            : `something wen't wrong`
        );
      }
    } catch (error) {
      console.error("API error:", error);
      setIsProcessing(false);
      setError("something went wrong");
    }
  };

  const passwordInputs = [
    {
      head: "New Password*",
      plHolder: "Enter New Password",
      name: "new_password",
    },
    {
      head: "Confirm New Password*",
      plHolder: "Re-enter Password",
      name: "confirm_password",
    },
    {
      head: "Admin Password*",
      plHolder: "Enter Admin Password",
      name: "admin_password",
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
                  <input
                    className="bl-1 ms-2"
                    placeholder={item.plHolder}
                    type={showEye ? "text" : "password"}
                    name={item.name}
                    value={passwordData[item.name]}
                    onChange={(e) =>
                      setPasswordData({
                        ...passwordData,
                        [item.name]: e.target.value,
                      })
                    }
                  />
                  {showEye === true ? (
                    <AiFillEye onClick={handleShowEye} />
                  ) : (
                    <AiFillEyeInvisible onClick={handleShowEye} />
                  )}
                </div>
              </div>
            );
          })}
          {error && <div className="error-message mt-2">{error}</div>}
          <button
            className="login-button p-1 mt-3 medium-font"
            onClick={() => handleChangePassword()}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Submit"}
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ChangePassword;
