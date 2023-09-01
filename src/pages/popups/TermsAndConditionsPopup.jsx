import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { Images } from "./../../images/index";
import { useNavigate } from "react-router-dom";

function TermsAndConditionsPopup(props) {
  const { state, setState } = props;
  const handleCancel = () => {
    setState(false);
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/privacy-policy");
    handleCancel();
  };
  return (
    <Modal show={state} className="match-declaration-modal" centered>
      <Modal.Header className="d-flex justify-content-end">
        <IoCloseSharp onClick={() => handleCancel()} />
      </Modal.Header>
      <Modal.Body>
        <center className="px-3">
          <img
            className="w-75 h-10vh"
            src={Images.TermsImage}
            alt="Question_Mark"
          />
          <h5 className="h-5 mt-3 fw-bold">Terms & Conditions</h5>
          <p className="small-font">
            This company established under the laws of Costa Rica, with
            registered address at Costa Rica and having its gaming sublicence
            No. 1669/KAV issued by Costa Rica e-Gaming and all rights to operate
            the gaming software.
          </p>
          <div
            className="rounded yellow-btn p-1 mt-2"
            onClick={() => handleCancel()}
          >
            I Agree
          </div>
          <div
            className="rounded share-bg p-1 my-3"
            onClick={() => handleNavigate()}
          >
            Read Terms & Policy
          </div>
        </center>
      </Modal.Body>
    </Modal>
  );
}

export default TermsAndConditionsPopup;
