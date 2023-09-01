import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
import { FaRegShareFromSquare } from "react-icons/fa6";

function SharePopup(props) {
  const { state, setState } = props;
  const handleCancel = () => {
    setState(false);
  };
  return (
    <Modal show={state} className="match-declaration-modal" centered>
      <Modal.Header className="d-flex justify-content-end">
        <IoCloseSharp onClick={() => handleCancel()} />
      </Modal.Header>
      <Modal.Body>
        <center className="px-3 pb-3">
          <h5 className="h-5 fw-bold">Share Details</h5>
          <p className="small-font text-start mb-0 mt-1">Refer/Share ID</p>
          <div className="btn-bg medium-font p-2 rounded text-start mt-1">
            1234567892
          </div>
          <p className="small-font text-start mb-0 mt-1">Meeting Head ID</p>
          <div className="btn-bg medium-font p-2 rounded text-start mt-1">
            1234567892456
          </div>
          <p className="small-font text-start mb-0 mt-1">Link</p>
          <p className="small-font yellow-clr text-start">
            https://facetime.apple.com/join#v= 1&p=ppUTyQ8dEe65UEI12X 6TJA&k=4
            DQ8srux9pAg-43btHil8eydItY5ktlql-xHR dHRtRE
          </p>
          <div className="d-flex justify-content-between mt-3">
            <div className="d-flex align-items-center justify-content-evenly medium-font rounded share-bg p-2 w-45">
              <MdContentCopy className="yellow-clr large-font" /> Copy
            </div>
            <div className="d-flex align-items-center justify-content-evenly medium-font rounded share-bg p-2 w-45">
              <FaRegShareFromSquare className="green-color large-font" /> Share
            </div>
          </div>
        </center>
      </Modal.Body>
    </Modal>
  );
}

export default SharePopup;
