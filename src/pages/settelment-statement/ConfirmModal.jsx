import React from "react";
import { Modal } from "antd";

function ConfirmModal(props) {
  const { confirmModal, setConfirmModal } = props;
  const handleConfirmClose = () => {
    setConfirmModal(false);
  };
  return (
    <Modal
      open={confirmModal}
      onCancel={() => handleConfirmClose()}
      className="login-modal"
      centered
      footer={null}
    >
      <div>
        <div>
          <img
            className="w-20 h-5vh"
            src={process.env.PUBLIC_URL + "./assets/images/question_mark.png"}
          ></img>
        </div>
        <div className="flex-column font-24">
          <div>Settled Payment sai-offline-Agent</div>
          <div>4000 are you sure?</div>
        </div>
      </div>
      <div className="flex-row flex-space-around">
        <button>yes</button>
        <button>No</button>
      </div>
    </Modal>
  );
}

export default ConfirmModal;
