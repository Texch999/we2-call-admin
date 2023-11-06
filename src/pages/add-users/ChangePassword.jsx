import { useState } from "react";
import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { BiSolidLock } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { CHANGE_PASSWORD } from "../../config/endpoints";
import { call } from "../../config/axios";

function ChangePassword({
  showChangePopup,
  setShowChangePopup,
  setChangePasswordSubmit,
  registerID,
  setChangePasswordPopup,
}) {
  const register_id = localStorage?.getItem("register_id");
  const creator_id = localStorage?.getItem("creator_id");
  const [error, setError] = useState("");
  const [showEye, setShowEye] = useState(false);
  const [passwordData, setPasswordData] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const handleShowEye = (index) => {
    setShowEye(!showEye);
  };
  const handlePasswordData = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };
  const handleChangePassword = async () => {
    if (
      !passwordData.new_password ||
      !passwordData.confirm_password ||
      !passwordData.admin_password
    ) {
      setError("Please Enter Required Fields");
    }
    if (passwordData.new_password !== passwordData.confirm_password) {
      setError("New Password And Confirm Password Should Match");
    }
    setIsProcessing(true);
    setError("");
    await call(CHANGE_PASSWORD, {
      register_id: registerID,
      creator_id,
      creator_password: passwordData.admin_password,
      new_password: passwordData.new_password,
      confirm_password: passwordData.confirm_password,
    })
      .then((res) => {
        if (res?.data?.statusCode === 200) {
          setIsProcessing(false);
          setChangePasswordPopup(true);
          setShowChangePopup(false);
          setTimeout(() => {
            setChangePasswordPopup(false);
          }, 2000);
          setPasswordData({});
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
                    onChange={(e) => handlePasswordData(e)}
                  />
                  <div onClick={() => handleShowEye(index)}>
                    {showEye ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </div>
                </div>
              </div>
            );
          })}
          {error && <div className="error-message mt-2">{error}</div>}
          <button
            className="login-button p-1 mt-3 medium-font"
            onClick={() => handleChangePassword()}
          >
            {isProcessing ? "Is Processing..." : "Change Password"}
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ChangePassword;
