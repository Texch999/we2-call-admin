import {
  Container,
  Form,
  Row,
  Col,
  InputGroup,
  Image,
  CloseButton,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Images } from "../../images";
import { useState } from "react";

function AddAdminsPopup(props) {
  const [newUserData, setNewUserData] = useState({
    s_no: 10,
    user_name: "",
    type: "",
    location: "",
    user: "",
    profit_loss: "",
  });
  const handleInputChnage = (e) => {
    const { id, value } = e.target;
    setNewUserData((data) => ({
      ...data,
      [id]: value,
    }));
    console.log(newUserData);
  };
  const handleAddUser = () => {
    setNewUserData("user");
    props.onHide();
  };
  return (
    <Modal {...props} centered className="add-user-modal">
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">
          Add Users/Admins
        </Modal.Title>
        <div data-bs-theme="dark" className="p-2">
          <CloseButton className="close-button-user position-relative" />
        </div>{" "}
      </Modal.Header>
      <Modal.Body>
        <Form className="add-user-modal-form-details">
          <Form.Group className="mb-3" controlId="user_name">
            <Form.Label>Name*</Form.Label>
            <InputGroup>
              <InputGroup.Text id="basic-addon1">
                <Image src={Images.LoginUserIcon} />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                aria-label="Enter Name"
                aria-describedby="basic-addon1"
                autoFocus
                onChange={(e) => handleInputChnage(e)}
              />
            </InputGroup>
          </Form.Group>
          <Container fluid>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="userId">
                  <Form.Label>User ID*</Form.Label>
                  <InputGroup>
                    <InputGroup.Text id="basic-addon1">
                      <Image src={Images.LoginUserIcon} />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      autoFocus
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="role">
                  <Form.Label>Role*</Form.Label>
                  <InputGroup>
                    <InputGroup.Text id="basic-addon1">
                      <Image src={Images.LoginUserIcon} />
                    </InputGroup.Text>
                    <Form.Control type="text" placeholder="User" autoFocus />
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password*</Form.Label>
                  <InputGroup>
                    <InputGroup.Text id="basic-addon1">
                      <Image src={Images.LoginLockIcon} />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Enter password"
                      autoFocus
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="confirmPassword">
                  <Form.Label>Confirm Password*</Form.Label>
                  <InputGroup>
                    <InputGroup.Text id="basic-addon1">
                      <Image src={Images.LoginLockIcon} />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Enter confirm password"
                      autoFocus
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="share">
                  <Form.Label>Share*</Form.Label>
                  <Form.Text id="sharePercentage">10%</Form.Text>
                  <InputGroup>
                    <InputGroup.Text id="basic-addon1">
                      <Image src={Images.percentIcon} />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Enter Share"
                      autoFocus
                      aria-describedby="sharePercentage"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="myShare">
                  <Form.Label>My Share*</Form.Label>
                  <Form.Text id="platComm" className="platform-comm">
                    Plat Comm-<span className="yellow-clr">2%</span>
                  </Form.Text>
                  <InputGroup>
                    <InputGroup.Text id="basic-addon1">
                      <Image src={Images.percentIcon} />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Enter Share"
                      autoFocus
                      aria-describedby="platComm"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Form.Group className="mb-3" controlId="adminPassword">
                <Form.Label>Package*</Form.Label>
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">
                    <Image src={Images.LoginLockIcon} />
                  </InputGroup.Text>
                  <Form.Select>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                  </Form.Select>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="adminPassword">
                <Form.Label>Admin Password*</Form.Label>
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">
                    <Image src={Images.LoginLockIcon} />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Enter Admin Password"
                    autoFocus
                  />
                </InputGroup>
              </Form.Group>
            </Row>
          </Container>
          <Button
            className="w-100 add-user-button"
            onClick={() => handleAddUser()}
          >
            Add
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default AddAdminsPopup;
