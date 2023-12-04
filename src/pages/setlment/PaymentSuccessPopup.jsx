import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { Images } from "./../../images/index";

function PaymentSuccessPopup({
  showSuccessPaymentPopup,
  setShowSuccessPaymentPopup,
}) {
  const handleSuccessPaymentClose = () => {
    setShowSuccessPaymentPopup(false);
  };
  return (
    <div>
      {" "}
      <Modal
        show={showSuccessPaymentPopup}
        className="match-declaration-modal z-index"
        centered
      >
        <Modal.Header className="d-flex justify-content-end">
          <IoCloseSharp onClick={() => handleSuccessPaymentClose()} />
        </Modal.Header>
        <Modal.Body>
          <center className="px-3">
            {" "}
            <img
              className="h-10vh"
              src={Images.CheckedMark}
              alt="Question_Mark"
            />
            <div className="fs-6 mt-3">Payment Completed Successfully</div>
            <div className="row d-flex justify-content-between mt-3">
              <div
                className="col rounded yellow-btn p-1"
                onClick={() => handleSuccessPaymentClose()}
              >
                Go Back
              </div>
            </div>
          </center>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PaymentSuccessPopup;
