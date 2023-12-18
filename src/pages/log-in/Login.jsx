import { Modal } from "react-bootstrap";
import { BiSolidLock, BiSolidUser } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { call } from "../../config/axios";
import { USER_LOGIN } from "../../config/endpoints";
import { setLocalStorageItems } from "../../utils/helpers";

function Login(props) {
  const { showLoginPopup, setShowLoginPopup, setShowResetPopup } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFortgetPassword = () => {
    setShowResetPopup(true);
    setShowLoginPopup(false);
  };

  const handleEyeicon = () => {
    setIsVisible((prev) => !prev);
  };

  const handleLogin = () => {
    setIsProcessing(true);
    call(USER_LOGIN, { user_name: username, password: password })
      .then((res) => {
        setIsProcessing(false);
        setErr("");
        if (res?.data?.status === 200) {
          const {
            email,
            first_name,
            last_name,
            register_id,
            creator_id,
            account_role,
            user_name,
            country_name,
            ul_share,
            share,
          } = res.data.data;

          console.log(res.data.data, ".........res.data.data");

          setLocalStorageItems({
            email,
            token: password + new Date(),
            first_name,
            last_name,
            register_id,
            creator_id,
            account_role,
            country_name,
            user_name,
            ul_share,
            share,
          });
          setShowLoginPopup(false);
          window.location.reload("/");
        } else {
          setErr(
            res?.data?.message ? res?.data?.message : `something wen't wrong`
          );
        }
      })
      .catch((err) => {
        setIsProcessing(false);
        setErr(err?.message ? err.message : `something wen't wrong`);
        console.log(err);
      });
  };

  return (
    <Modal className="match-declaration-modal" centered show={showLoginPopup}>
      <Modal.Header className="d-flex justify-content-end">
        {/* <IoCloseSharp onClick={() => setShowLoginPopup(false)} /> */}
      </Modal.Header>
      <Modal.Body>
        <center className="p-3">
          <div>
            <h5 className="meetings-heading">Login</h5>
            <span>Login to Your Account</span>
          </div>
          <div className="d-flex align-items-center login-input p-1 mt-2">
            <BiSolidUser />
            <input
              className="bl-1 ms-2"
              placeholder="username"
              type="text"
              name="username"
              id="username"
              value={username || ""}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="d-flex align-items-center login-input p-1 mt-2">
            <BiSolidLock />
            <input
              className="bl-1 ms-2"
              placeholder="password"
              name="password"
              id="password"
              type={isVisible ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              value={password || ""}
            />
            {isVisible ? (
              <AiFillEye
                className="cursor-pointer"
                onClick={() => handleEyeicon()}
              />
            ) : (
              <AiFillEyeInvisible
                className="cursor-pointer"
                onClick={() => handleEyeicon()}
              />
            )}
          </div>
          <div
            className="d-flex justify-content-end font-10 cursor-pointer"
            onClick={() => handleFortgetPassword()}
          >
            Forgot Password?
          </div>
          {err && <div className="text-danger">{err}</div>}
          <button
            className="login-button p-1 mt-2 cursor-pointer"
            disabled={isProcessing}
            onClick={() => handleLogin()}
          >
            Login
          </button>
        </center>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
