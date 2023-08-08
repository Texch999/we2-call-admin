import React, { useState } from "react";
import { Modal } from "antd";

function ConfirmModal(props) {
  const { confirmModal, setConfirmModal, thankyouModal, setThankYouModal } =
    props;
  const handleConfirmClose = () => {
    setConfirmModal(false);
  };
  const handleThankyouPopup = () => {
    setThankYouModal(!thankyouModal);
    setConfirmModal(false);
  };
  const handleConfirmPopup = () => {
    setConfirmModal(false);
  };
  const [active,setActive]=useState()
  return (
    <Modal
      open={confirmModal}
      onCancel={() => handleConfirmClose()}
      className="login-modal "
      centered
      footer={null}
    >
      <div>
        <div className="w-100 flex-center">
          <img
            className="w-25 h-25"
            src={process.env.PUBLIC_URL + "./assets/images/question_mark.png"}
          ></img>
        </div>
        <div className="flex-column font-24 flex-center mt-20">
          <div>Settled Payment sai-offline-Agent</div>
          <div>4000 are you sure?</div>
        </div>
        <div className="flex-row flex-space-around w-100 mt-20">
          <button
            className="submit-btn w-30 h-50p"
            onClick={() => handleThankyouPopup()}
          >
            yes
          </button>
          <button
            className="submit-btn w-30 h-50p"
            onClick={() => handleConfirmPopup()}
          >
            No
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmModal;
