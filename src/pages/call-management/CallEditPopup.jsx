import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { Images } from "./../../images/index";

function CallEditPopup(props) {
  const { meetingEditPopup, setMeetingEditPopup } = props;
  const handleCancel = () => {
    setMeetingEditPopup(false);
  };
  return (
    <Modal
      className="match-declaration-modal z-index"
      centered
      show={meetingEditPopup}
    >
      <Modal.Header className="d-flex justify-content-end">
        <IoCloseSharp onClick={() => handleCancel()} />
      </Modal.Header>
      <Modal.Body>
        <center className="px-3">
          <img
            className="h-10vh"
            src={Images.QuestionMark}
            alt="Question_Mark"
          />
          <div className="fs-6 mt-3">
            Are You Sure You Want To Edit This Meeting
          </div>
          <div className="row d-flex justify-content-between mt-3">
            <div className="col-5 rounded yellow-btn p-1">Yes</div>
            <div
              className="col-5 rounded share-bg p-1"
              onClick={() => handleCancel()}
            >
              No
            </div>
          </div>
        </center>
      </Modal.Body>
    </Modal>
  );
}

export default CallEditPopup;
