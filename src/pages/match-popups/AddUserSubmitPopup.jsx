import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { Images } from "./../../images/index";

function AddUserSubmitPopup(props) {
  const { header, addUserPopup, setAddUserPopup } = props;
  const handleCancel = () => {
    setAddUserPopup(false);
  };  
  return (
    <Modal show={addUserPopup} className="match-declaration-modal z-index" centered>
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
          <div className="fs-6 mt-3">{header}</div>

          <div className="row d-flex justify-content-between mt-3">
            <div
              className="col rounded yellow-btn p-1"
              onClick={() => handleCancel()}
            >
              Go Back
            </div>
          </div>
        </center>
      </Modal.Body>
    </Modal>
  );
}

export default AddUserSubmitPopup;
