import { Container, Form, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddUserPopUp(props) {
  return (
    <Modal {...props} centered className="add-user-modal">
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">Add Users</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name*</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" autoFocus />
          </Form.Group>
          <Container fluid>
            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>User ID*</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    autoFocus
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Role*</Form.Label>
                  <Form.Control type="text" placeholder="User" autoFocus />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Password*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter password"
                    autoFocus
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Confirm Password*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter confirm password"
                    autoFocus
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Share*</Form.Label>
                  <Form.Text id="sharePercentage">10%</Form.Text>
                  <Form.Control
                    type="text"
                    placeholder="Enter password"
                    autoFocus
                    aria-describedby="sharePercentage"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>My Share*</Form.Label>

                  <Form.Text id="platComm">
                    Plat Comm-<span>10%</span>
                  </Form.Text>
                  <Form.Control
                    type="text"
                    placeholder="Enter confirm password"
                    autoFocus
                    aria-describedby="platComm"
                  />
                </Form.Group>
              </Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Admin Password*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Admin Password"
                  autoFocus
                />
              </Form.Group>
            </Row>
          </Container>
          <Button className="w-100 add-user-button">Add</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default AddUserPopUp;
