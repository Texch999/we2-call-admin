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
        <div>
          <img
            className="w-20 h-5vh"
            src={process.env.PUBLIC_URL + "./assets/images/checked.png"}
          ></img>
        </div>
        <div className="flex-column">
          <div className="font-24">Thank You</div>
          <div className="font-14">
            Your Transaction is now being processed. We will let you know once
          </div>
          <div className="font-14">
            the Transaction is marked as complete from master/admin and amount
            will credited to your account.
          </div>
        </div>
      </div>
      <div className="flex-row flex-space-around">
        <button>G0 Back To Home</button>
      </div>
    </Modal>
  );
}

export default ThankYouPopup;
