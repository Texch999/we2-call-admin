import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function StatementPopup(props) {
  const { showModal, setShowModal } = props;

  const handleClose = () => setShowModal(false);

  return (
    <div className="container mt-5">
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal Header</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is the modal body text.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default StatementPopup;
