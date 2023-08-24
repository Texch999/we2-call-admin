import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Images } from "../../images";

function UploadScreenShot(props) {
  const { showUploadButton, setShowUploadButton } = props;
  const handleUploadClose = () => {
    setShowUploadButton(false);
  };
  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="md"
        show={showUploadButton}
        onHide={handleUploadClose}
        centered
        className="match-share-modal w-100"
      >
        <Modal.Header>
          <div className="d-flex justify-content-center flex-column">
            <div className="text-center mt-1 mb-2">Upload Screenshot</div>
            <img
              src={process.env.PUBLIC_URL + "./assets/agent_home_page.jpg"}
              className="w-100 h-75 p-3 yellow-border rounded"
            ></img>
          </div>
        </Modal.Header>

     
      </Modal>
    </div>
  );
}

export default UploadScreenShot;
