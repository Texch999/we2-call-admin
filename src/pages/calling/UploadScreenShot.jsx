import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Images } from "../../images";
import "./styles.css";

function UploadScreenShot(props) {
  const { showUploadButton, setShowUploadButton } = props;
  const handleUploadClose = () => {
    setShowUploadButton(false);
  };
  return (
    <div className="modal fade bd-example-modal-lg container">
      <Modal
        size="sm"
        show={showUploadButton}
        onHide={handleUploadClose}
        centered
        className="match-share-modal w-100 close-btn"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center flex-column">
            <div className="text-center">Upload Screenshot</div>
            <div className="d-flex justify-content-center mt-2">
              <img
                alt="upload screenshot"
                src={process.env.PUBLIC_URL + "./assets/agent_home_page.jpg"}
                className="w-75 h-75 p-3 yellow-border rounded mb-4"
              ></img>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UploadScreenShot;
