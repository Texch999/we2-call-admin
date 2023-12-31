import React from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";

function ImagePopup(props) {
  const { showImagePopup, setShowImagePopup } = props;
  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="md"
        show={showImagePopup}
        onHide={setShowImagePopup}
        centered
        className="match-share-modal payment-modal"
      >
        <Modal.Header closeButton>
          <div className="w-100 yllow-border">
            <img src="./assets/transaction_Image.jpeg" />
          </div>
        </Modal.Header>
      </Modal>
    </div>
  );
}

export default ImagePopup;
