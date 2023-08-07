import { Modal } from "antd";
import React from "react";

function ThankYouPopup(props) {
  const { thankyouModal, setThankYouModal } = props;
  const handleOnClose = () => {
    setThankYouModal(false);
  };

  return (
    <Modal
      open={thankyouModal}
      onCancel={() => handleOnClose()}
      className="login-modal"
      centered
      footer={null}
    >
      <div>
        <div className="w-100 flex-center">
          <img
            className="w-25 h-25"
            src={process.env.PUBLIC_URL + "./assets/images/checked.png"}
          ></img>
        </div>
        <div className="flex-column flex-center w-100 clr-white mt-10">
          <div className="font-24">Thank You</div>
          <div className="font-18">Payment Successfully Completed</div>
          <div className="font-12 text-center">
            Your Transaction is now being processed. We will let you know once
            the Transaction is marked as complete from master/admin and amount
            will credited to your account.
          </div>
        </div>
      </div>
      <div className="flex-row flex-space-around mt-10">
        <button className="submit-btn h-30p" onClick={() => handleOnClose()}>
          G0 Back To Home
        </button>
      </div>
    </Modal>
  );
}

export default ThankYouPopup;
