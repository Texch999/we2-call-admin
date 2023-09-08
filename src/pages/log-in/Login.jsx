import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { BiSolidLock, BiSolidUser } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";

function Login(props) {
  const { showLoginPopup, setShowLoginPopup, setShowResetPopup } = props;

  const handleFortgetPassword = () => {
    setShowResetPopup(true);
    setShowLoginPopup(false);
  };
  return (
    <Modal className="match-declaration-modal" centered show={showLoginPopup}>
      <Modal.Header className="d-flex justify-content-end">
        <IoCloseSharp onClick={() => setShowLoginPopup(false)} />
      </Modal.Header>
      <Modal.Body>
        <center className="p-3">
          <div>
            <h5 className="meetings-heading">Login</h5>
            <span>Login to Your Account</span>
          </div>
          <div className="d-flex align-items-center login-input p-1 mt-2">
            <BiSolidUser />
            <input className="bl-1 ms-2" placeholder="Enter User Name" />
          </div>
          <div className="d-flex align-items-center login-input p-1 mt-2">
            <BiSolidLock />
            <input className="bl-1 ms-2" placeholder="Password" />
            <AiFillEye />
          </div>
          <div
            className="d-flex justify-content-end font-10"
            onClick={() => handleFortgetPassword()}
          >
            Forgot Password?
          </div>
          <button className="login-button p-1 mt-2">Login</button>
        </center>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
