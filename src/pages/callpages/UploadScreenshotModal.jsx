import React from "react";
import { Modal } from "antd";

function UploadScreenshotModal(props) {
  const { setShowUploadScreenshotModal, showUploadScreenshotModal } = props;
  const handleUploadClose = () => {
    setShowUploadScreenshotModal(false);
  };
  return (
    <Modal
      open={showUploadScreenshotModal}
      onCancel={() => handleUploadClose()}
      className="login-modal "
      centered
      footer={null}
    >
      <div>
        <div className="w-100 flex-center font-18 flex-column">
          <div className="font-18 flex-center fw-600 mb-10 mt-10">Uploaded Screenshot</div>
          <img
            className="w-70 yellow-border br-10 mb-10"
            src={process.env.PUBLIC_URL + "./assets/images/agent_home_page.jpg"}
          ></img>
        </div>
      </div>
    </Modal>
  );
}

export default UploadScreenshotModal;
