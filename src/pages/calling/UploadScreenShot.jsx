import React, { useCallback, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { Images } from "../../images";
import ReactPanZoom from "react-image-pan-zoom-rotate";

function UploadScreenShot(props) {
  const { showUploadButton, setShowUploadButton } = props;
  const handleUploadClose = () => {
    setShowUploadButton(false);
  };

  return (
    <div className="modal fade bd-example-modal-lg container">
      <Modal
        size="md"
        show={showUploadButton}
        onHide={handleUploadClose}
        centered
        className="match-share-modal w-100 payment-modal"
      >
        <Modal.Header closeButton>
          <div className="d-flex justify-content-center flex-column p-4 mt-n4 relative-position">
            <div className="text-center">Upload Screenshot</div>
            <div className="d-flex justify-content-center mt-2 yellow-border overflow-hidden react-pan-zoom">
              <ReactPanZoom
                alt="cool image"
                image="./assets/agent_home_page.jpg"
                className="w-25 h-25 rounded"
              />
            </div>
          </div>
        </Modal.Header>
      </Modal>
    </div>
  );
}

export default UploadScreenShot;
