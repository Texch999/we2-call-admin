import React from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";

function ImagePopup(props) {
  const { showImagePopup, setShowImagePopup, imageUrl } = props;
  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="md"
        show={showImagePopup}
        onHide={setShowImagePopup}
        centered
        className="match-share-modal payment-modal z-index-big"
      >
        <Modal.Header closeButton>
          <div className="w-100 yllow-border min-h200">
            <img src={imageUrl} />
          </div>
        </Modal.Header>
      </Modal>
    </div>
  );
}

export default ImagePopup;
