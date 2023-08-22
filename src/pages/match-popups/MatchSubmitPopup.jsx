import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { Images } from "./../../images/index";

function MatchSubmitPopup(props) {
  const { submitPopup, handleSubmitPopupClose } = props;
  return (
    <Modal show={submitPopup} className="match-declaration-modal" centered>
      <Modal.Header className="d-flex justify-content-end">
        <IoCloseSharp onClick={handleSubmitPopupClose} />
      </Modal.Header>
      <Modal.Body>
        <center className="px-3">
          <img
            className="h-10vh"
            src={Images.CheckedMark}
            alt="Question_Mark"
          />
          <div className="fs-6 mt-3">
            You Are Successfully Submited Your Match to Win IND
          </div>
          <div className="row d-flex justify-content-between mt-3">
            <div
              className="col rounded yellow-btn p-1"
              onClick={handleSubmitPopupClose}
            >
              Go Back To Main Page
            </div>
          </div>
        </center>
      </Modal.Body>
    </Modal>
  );
}

export default MatchSubmitPopup;
