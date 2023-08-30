import { Container, Form, Row, Col, InputGroup, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Images } from "../../images";
import { useState } from "react";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";

function AddNewMeetingsPopUp(props) {
  const [togglePassword, setTogglePassword] = useState(true);
  const [cnfPasswordToggle, setCnfPasswordToggle] = useState(true);
  const [adminPasswordToggle, setAdminPasswordToggle] = useState(true);
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
  const handleTogglePassword = () => {
    setTogglePassword(!togglePassword);
  };
  const handleCnfTogglePassword = () => {
    setCnfPasswordToggle(!cnfPasswordToggle);
  };
  const handleAdminTogglePassword = () => {
    setAdminPasswordToggle(!adminPasswordToggle);
  };
  return (
    <Modal {...props} centered className="add-user-modal">
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">
          Add New Meetings
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="add-user-modal-form-details">
          <Form.Group className="mb-3" controlId="user_name">
            <Form.Label>Meeting/Event Name*</Form.Label>
            <InputGroup>
              <InputGroup.Text id="basic-addon1">
                <Image src={Images.LoginUserIcon} />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Enter Meeting Name"
                aria-label="Enter Meeting Name"
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
                    <Form.Select>
                      <option>Admin</option>
                      <option>Super Admin</option>
                      <option>Master</option>
                      <option>Super Master</option>
                      <option>Agent</option>
                    </Form.Select>
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
                      type={togglePassword ? "password" : "text"}
                      placeholder="Enter password"
                      autoFocus
                    />
                    <InputGroup.Text
                      className="ps-0 pe-2"
                      onClick={() => handleTogglePassword()}
                    >
                      {togglePassword ? <IoEyeOffSharp /> : <IoEyeSharp />}
                    </InputGroup.Text>
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
                      type={cnfPasswordToggle ? "password" : "text"}
                      placeholder="Enter confirm password"
                      autoFocus
                    />
                    <InputGroup.Text
                      className="ps-0 pe-2"
                      onClick={() => handleCnfTogglePassword()}
                    >
                      {cnfPasswordToggle ? <IoEyeOffSharp /> : <IoEyeSharp />}
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="adminPackages">
                <Form.Label>Add Live Scoreboard*</Form.Label>
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">
                    <Image src={Images.packageIcon} style={{ width: "18px" }} />
                  </InputGroup.Text>
                  <Form.Select>
                    <option>Trial</option>
                    <option>Standard</option>
                    <option>Silver</option>
                    <option>Gold</option>
                    <option>Diamond</option>
                    <option>VIP</option>
                  </Form.Select>
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
export default AddNewMeetingsPopUp;
