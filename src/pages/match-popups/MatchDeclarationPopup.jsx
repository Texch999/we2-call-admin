import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { Images } from "./../../images/index";
import MatchSubmitPopup from "./MatchSubmitPopup";
import { useState } from "react";

function MatchDeclarationPopup(props) {
  const { header, amount, state, setState, handleMatchSubmitSuccessPopupOpen } =
    props;
  const [matchSubmitSuccessPopup, setMatchSubmitSuccessPopup] = useState(false);

  return (
    <Modal className="match-declaration-modal" centered show={state}>
      <Modal.Header className="d-flex justify-content-end">
        <IoCloseSharp onClick={() => setState()} />
      </Modal.Header>
      <Modal.Body>
        <center className="px-3">
          <img
            className="h-10vh"
            src={Images.QuestionMark}
            alt="Question_Mark"
          />
          <div className="fs-6 mt-3">{header}</div>
          <div className="fs-6 mt-3">{amount}</div>
          <div className="row d-flex justify-content-between mt-3">
            <div
              className="col-5 rounded yellow-btn p-1"
              onClick={() => handleMatchSubmitSuccessPopupOpen()}
            >
              Yes
            </div>
            <div
              className="col-5 rounded share-bg p-1"
              onClick={() => setState(false)}
            >
              No
            </div>
          </div>
        </center>
      </Modal.Body>
      <MatchSubmitPopup
        header={"You Are Successfully Submited Your Match to Win IND"}
        state={matchSubmitSuccessPopup}
        setState={setMatchSubmitSuccessPopup}
      />
    </Modal>
  );
}

export default MatchDeclarationPopup;
