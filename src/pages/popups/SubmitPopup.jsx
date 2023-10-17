import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { Images } from "./../../images/index";

function SubmitPopup(props) {
  const {
    header,
    state,
    setState,
    data,
    setSelectedMatchEntry,
    deletedId,
    deleteApi,
    setSelectedId,

    fancySetSelectedMatchEntry,
    fancyData,
    fancyDeletedId,
    fancyDeleteApi,
    fancySetSelectedId,
  } = props;
  const handleCancelPopup = () => {
    setState(false);
  };
  const handleConfirm = () => {
    if (setSelectedMatchEntry) {
      setSelectedMatchEntry && setSelectedMatchEntry(data);
      deletedId && deleteApi();
      handleCancelPopup(false);
    } else if (fancySetSelectedMatchEntry) {
      fancySetSelectedMatchEntry && fancySetSelectedMatchEntry(fancyData);
      fancyDeletedId && fancyDeleteApi();
      handleCancelPopup();
    }
  };
  const handelCancel = () => {
    if (setSelectedMatchEntry) {
      setSelectedMatchEntry && setSelectedMatchEntry("");
      deletedId && setSelectedId("");
      handleCancelPopup(false);
    } else if (fancySetSelectedMatchEntry) {
      fancySetSelectedMatchEntry && fancySetSelectedMatchEntry("");
      fancyDeletedId && fancySetSelectedId("");
      handleCancelPopup();
    }
  };
  return (
    <Modal show={state} className="match-declaration-modal" centered>
      <Modal.Header className="d-flex justify-content-end">
        <IoCloseSharp onClick={() => handleCancelPopup()} />
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
              onClick={() => handleConfirm()}
            >
              Yes
            </div>
            <div
              className="col-5 rounded share-bg p-1"
              onClick={() => handelCancel()}
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
