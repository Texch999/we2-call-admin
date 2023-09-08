import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { Images } from "./../../images/index";

function SubmitPopup(props) {
  const { header, state, setState } = props;
  const handleCancel = () => {
    setState(false);
  };
  return (
    <Modal show={state} className="match-declaration-modal" centered>
      <Modal.Header className="d-flex justify-content-end">
        <IoCloseSharp onClick={() => handleCancel()} />
      </Modal.Header>
      <Modal.Body>
        <center className="px-3">
          <img
            className="h-10vh"
            src={Images.CheckedMark}
            alt="Question_Mark"
          />
          <div className="fs-6 mt-3">{header} </div>
          <div className="row d-flex justify-content-between mt-3">
            <div
              className="col-5 rounded yellow-btn p-1"
              onClick={() => handleCancel()}
            >
              Yes
            </div>
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

export default SubmitPopup;
