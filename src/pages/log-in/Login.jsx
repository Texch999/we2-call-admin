import React from "react";
import { Images } from "../../images";
import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { BiSolidLock, BiSolidUser } from "react-icons/bi";

function Login(props) {
  const { showLoginPopup, setShowLoginPopup } = props;
  return (
    <Modal className="match-declaration-modal" centered show={showLoginPopup}>
      <Modal.Header className="d-flex justify-content-end">
        <IoCloseSharp onClick={() => setShowLoginPopup(false)} />
      </Modal.Header>
      <Modal.Body>
        <center className="px-3">
          <div>
            <h5>Login</h5>
            <span>Login to Your Account</span>
          </div>
          <div className="d-flex align-items-center login-input p-2 mt-2">
            <BiSolidUser />
            <input className="bl-1 ms-2" placeholder="Enter User Name"/>
          </div>
          <div className="d-flex align-items-center login-input p-2 mt-2">
            <BiSolidLock />
            <input className="bl-1 ms-2" placeholder="Password"/>
          </div>
          <div className="d-flex justify-content-end">Forgot Password?</div>
          <button className="login-button p-2 mt-2">Login</button>
        </center>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
