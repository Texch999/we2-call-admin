import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { BiSolidLock } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { RESET_PASSWORD } from "../../config/endpoints";
import { call } from "../../config/axios";

function ResetPassword(props) {
  const { showResetPopup, setShowResetPopup, setResetPasswordSubmit } = props;
  const register_id = localStorage?.getItem("register_id");
  const [resetPasswordData, setResetPasswordData] = useState({});
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showEye, setShowEye] = useState(false);

  const handleResetPasswordChange = (e) => {
    setResetPasswordData({
      ...resetPasswordData,
      [e.target.name]: e.target.value,
    });
  };
  const handleShoeEye = () => {
    setShowEye(!showEye);
  };
  const handleResetPassword = async () => {
    if (
      !resetPasswordData?.old_password ||
      !resetPasswordData?.new_password ||
      !resetPasswordData?.confirm_password
    ) {
      return setError("Please Enter Required Fields");
    }
    setIsProcessing(true);
    setError("");
    await call(RESET_PASSWORD, {
      register_id,
      old_password: resetPasswordData?.old_password,
      new_password: resetPasswordData?.new_password,
      confirm_password: resetPasswordData?.confirm_password,
    })
      .then((res) => {
        if (res?.data?.statusCode === 200) {
          setIsProcessing(false);
          setResetPasswordSubmit(true);
          setTimeout(() => {
            setResetPasswordSubmit(false);
          }, 1000);
          setResetPasswordData({});
          setError("");
        } else {
          setError(
            res?.data?.message ? res?.data?.message : "Something Went Wrong"
          );
        }
      })
      .catch((err) => {
        setIsProcessing(false);
        console.log(err);
        setError("Something Went Wrong");
      });
  };

  return (
    <Modal
      className="match-declaration-modal z-index"
      centered
      show={showResetPopup}
    >
      <Modal.Header className="d-flex justify-content-end">
        <IoCloseSharp onClick={() => setShowResetPopup(false)} />
      </Modal.Header>
      <Modal.Body>
        <div className="px-3">
          <center>
            <h5 className="meetings-heading">Reset Password</h5>
          </center>
          <span className="mt-2 font-9">Old Password*</span>
          <div className="d-flex align-items-center login-input p-1">
            <BiSolidLock />
            <input
              className="bl-1 ms-2"
              type={showEye ? "text" : "password"}
              placeholder="Enter Old Password"
              name="old_password"
              onChange={(e) => handleResetPasswordChange(e)}
            />
            <div onClick={() => handleShoeEye()}>
              {showEye ? <AiFillEye /> : <AiFillEyeInvisible />}
            </div>
          </div>
          <span className="mt-2 font-9">New Password*</span>
          <div className="d-flex align-items-center login-input p-1">
            <BiSolidLock />
            <input
              className="bl-1 ms-2"
              type={showEye ? "text" : "password"}
              placeholder="Enter New Password"
              name="new_password"
              onChange={(e) => handleResetPasswordChange(e)}
            />
            <div onClick={() => handleShoeEye()}>
              {showEye ? <AiFillEye /> : <AiFillEyeInvisible />}
            </div>
          </div>
          <span className="mt-2 font-9">Confirm New Password*</span>
          <div className="d-flex align-items-center login-input p-1">
            <BiSolidLock />
            <input
              className="bl-1 ms-2"
              type={showEye ? "text" : "password"}
              placeholder="Confirm New Password"
              name="confirm_password"
              onChange={(e) => handleResetPasswordChange(e)}
            />
            <div onClick={() => handleShoeEye()}>
              {showEye ? <AiFillEye /> : <AiFillEyeInvisible />}
            </div>
          </div>
          {error && (
            <div className="clr-red small-font text-center mt-2">{error}</div>
          )}
          <button
            className="login-button p-1 mt-3 medium-font py-2"
            onClick={() => handleResetPassword()}
          >
            {isProcessing ? "Processing... " : "Reset Password"}
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ResetPassword;
