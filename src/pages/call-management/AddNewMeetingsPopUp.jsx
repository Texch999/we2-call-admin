import { Container, Form, Row, Col, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function AddNewMeetingsPopUp(props) {
  const { meetingType, onHide, show, label, selectData } = props;
  const handleAddUser = () => {
    onHide();
  };

  const callCreations = ["Audio Only", "Audio+Video"];
  const [activeType, setActiveType] = useState("Personal");
  const [activeCreation, setActiveCreation] = useState("Call Creation 01");
  const handleMeetingType = (type) => {
    setActiveType(type);
  };
  const handleCreations = (creation) => {
    setActiveCreation(creation);
  };
  return (
    <Modal
      onHide={onHide}
      show={show}
      centered
      className="add-user-modal z-index"
    >
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">
          Add New Meetings
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="add-user-modal-form-details">
          <Form.Group className="mb-3" controlId="user_name">
            <Form.Label>Meeting Type*</Form.Label>
            <Container fluid>
              <Row>
                {meetingType?.map((type, index) => {
                  return (
                    <Col key={index}>
                      <Button
                        className={`w-100 all-match-button custom-bs-button fs-8rem ${
                          activeType === type ? "border-yellow" : ""
                        }`}
                        onClick={() => handleMeetingType(type)}
                      >
                        {type}
                      </Button>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </Form.Group>
          <Form.Group className="mb-3" controlId="user_name">
            <Form.Label>Meeting/Event Name*</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Enter Meeting Name"
                aria-label="Enter Meeting Name"
                autoFocus
              />
            </InputGroup>
          </Form.Group>
          <Container fluid>
            <Row>
              <Col>
                <Form.Group
                  className="mb-3 position-relative"
                  controlId="userId"
                >
                  <Form.Label>Meeting Date*</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="date"
                      placeholder="select"
                      autoFocus
                      className="fs-8rem"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3 position-relative" controlId="role">
                  <Form.Label>Meeting Time*</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="time"
                      placeholder="select"
                      className="fs-8rem"
                      autoFocus
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="addUsers">
              <Form.Label>{label}</Form.Label>
              <InputGroup>
                <Form.Select className="fs-8rem">
                  {selectData.map((option, index) => {
                    return <option key={index}>{option}</option>;
                  })}
                </Form.Select>
              </InputGroup>
            </Form.Group>
          </Container>
          <Form.Group className="mb-3" controlId="user_name">
            <Container fluid>
              <Row>
                {callCreations?.map((creation, index) => {
                  return (
                    <Col key={index}>
                      <Button
                        className={`w-100 all-match-button fs-8rem ${
                          activeCreation === creation ? "border-yellow" : ""
                        }`}
                        onClick={() => handleCreations(creation)}
                      >
                        {creation}
                      </Button>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </Form.Group>
          <Button
            className="w-100 add-user-button"
            onClick={() => handleAddUser()}
          >
            Sumbit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default AddNewMeetingsPopUp;
