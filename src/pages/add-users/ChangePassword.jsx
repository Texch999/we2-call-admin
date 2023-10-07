// import React, { useState } from "react";
// import { Modal } from "react-bootstrap";
// import { IoCloseSharp } from "react-icons/io5";
// import { BiSolidLock, BiSolidUser } from "react-icons/bi";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

// function ChangePassword(props) {
//   const { showChangePopup, setShowChangePopup, setChangePasswordSubmit } =
//     props;
//   const [showEye, setShowEye] = useState(false);
//   const handleShoeEye = () => {
//     setShowEye(!showEye);
//   };

//   const handleChangePasswordSubmit = () => {
//     setChangePasswordSubmit(true);
//     setShowChangePopup(false);
//   };
//   const passwordInputs = [
//     {
//       head: "New Password*",
//       plHolder: "Enter New Password",
//     },
//     {
//       head: "Confrm New Password*",
//       plHolder: "Re-enter Password",
//     },
//     {
//       head: "Admin Password*",
//       plHolder: "Enter Admin Password",
//     },
//   ];
//   return (
//     <Modal className="match-declaration-modal" centered show={showChangePopup}>
//       <Modal.Header className="d-flex justify-content-end">
//         <IoCloseSharp onClick={() => setShowChangePopup(false)} />
//       </Modal.Header>
//       <Modal.Body>
//         <div className="p-2">
//           <center>
//             <h5 className="meetings-heading">Change Password</h5>
//             <span className="font-11">Change Your Password</span>
//           </center>
//           {passwordInputs.map((item, index) => {
//             return (
//               <div key={index}>
//                 <span className="mt-2 font-9">{item.head}</span>
//                 <div className="d-flex align-items-center login-input p-1">
//                   <BiSolidLock />
//                   <input className="bl-1 ms-2" placeholder={item.plHolder} />
//                   {showEye === true ? (
//                     <AiFillEye onClick={() => handleShoeEye(index)} />
//                   ) : (
//                     <AiFillEyeInvisible onClick={() => handleShoeEye(index)} />
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//           <button
//             className="login-button p-1 mt-3 medium-font"
//             onClick={() => setShowChangePopup(false)}
//           >
//             Submit
//           </button>
//         </div>
//       </Modal.Body>
//     </Modal>
//   );
// }

// export default ChangePassword;

import React, { useState,useEffect} from "react";
import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { BiSolidLock } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { CHANGE_PASSWORD } from "../../config/endpoints";
import { call } from "../../config/axios";

function ChangePassword(props) {
  const { showChangePopup, setShowChangePopup, setChangePasswordSubmit } = props;
  const [showEye, setShowEye] = useState(false);
  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  const [passwordData, setPasswordData] = useState({
    new_password: "",
    confirm_password: "",
    admin_password: "",
  });
  const [error, setError] = useState("");

  const handleShowEye = () => {
    setShowEye(!showEye);
  };

  useEffect(() => {
    if (showChangePopup) {
      setPasswordData({
        new_password: "",
        confirm_password: "",
        admin_password: "",
      });
      setError("");
    }
  }, [showChangePopup]);

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

    try {
      const response = await call(
        CHANGE_PASSWORD,
        {
          register_id: "reg-20231006103427425",
          creator_id: "reg-20230918153256097",
          // register_id: register_id,
          // creator_id: creator_id,
          old_password: passwordData.admin_password,
          new_password: passwordData.new_password,
          confirm_password: passwordData.confirm_password,
        }
      );

      if (response.status === 200) {
        console.log("Password changed successfully");
        setChangePasswordSubmit(true);
        setShowChangePopup(false);
      } else {
        setError("Password change failed. Please try again.");
      }
    } catch (error) {
      console.error("API error:", error);
      setError("Password change failed. Please try again later.");
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
            onClick={handleChangePassword}
          >
            Submit
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ChangePassword;
