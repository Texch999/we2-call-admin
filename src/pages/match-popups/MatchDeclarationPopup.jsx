import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { Images } from "./../../images/index";

function MatchDeclarationPopup(props) {
  const {
    matchSubmitPopup,
    handleMatchSubmitPopupClose,
    handleSubmitPopupOpen,
  } = props;
  return (
    <Modal className="match-declaration-modal" centered show={matchSubmitPopup}>
      <Modal.Header className="d-flex justify-content-end">
        <IoCloseSharp onClick={handleMatchSubmitPopupClose} />
      </Modal.Header>
      <Modal.Body>
        <center className="px-3">
          <img
            className="h-10vh"
            src={Images.QuestionMark}
            alt="Question_Mark"
          />
          <div className="fs-6 mt-3">
            Are You Sure You Want Match to Win India?
          </div>
          <div className="fs-6 mt-3">+100000</div>
          <div className="row d-flex justify-content-between mt-3">
            <div
              className="col-5 rounded yellow-btn p-1"
              onClick={handleSubmitPopupOpen}
            >
              Yes
            </div>
            <div
              className="col-5 rounded share-bg p-1"
              onClick={handleMatchSubmitPopupClose}
            >
              No
            </div>
          </div>
        </center>
      </Modal.Body>
    </Modal>
  );
}

export default MatchDeclarationPopup;
