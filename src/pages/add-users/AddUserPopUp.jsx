import { Container, Form, Row, Col, InputGroup, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Images } from "../../images";
import { useState } from "react";
import { call } from "../../config/axios";
import {
  ACCOUNT_REGISTERATION,
  UPDATE_USER_CLIENT,
} from "../../config/endpoints";

function AddUserPopUp(props) {
  const { setModalShow, editData, setInputData, inputData ,setStatus,status} = props;
  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  let account_role = localStorage?.getItem("account_role");

  const [isProcessing, setIsProcessing] = useState(false);
  const [err, setErr] = useState("");

  // const [inputData, setInputData] = useState({});
  
  const handleInputChnage = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleUpdateUser = async () => {
    setErr("");
    setIsProcessing(true);
    setModalShow(false);
    await call(UPDATE_USER_CLIENT, {
      ...inputData,
      creator_id: register_id,
      creator_role: account_role,
    })
      .then((res) => {
        setIsProcessing(false);
        if (res.data.status === 200) {
          props?.setIsUserAdded((prev) => !prev);
          // props.onHide();
          setInputData({});
          setStatus((prev)=>!prev)
          
        } else {
          setErr(
            res?.data?.message ? res?.data?.message : `Something went wrong`
          );
        }
      })
      .catch((err) => {
        setIsProcessing(false);
        setErr(err?.message ? err?.message : `Something went wrong`);
        console.log(err);
      });
  };
  const handleSubmitUserCreation = async () => {
    if (
      !(
        inputData?.first_name &&
        inputData?.user_name &&
        // inputData?.share &&
        // inputData?.my_share &&
        inputData?.creator_password
      )
    ) {
      return setErr("Please enter required fields");
    }
    if (inputData?.password !== inputData?.confirm_password) {
      return setErr(`password doesn't match`);
    }
    setErr("");
    setIsProcessing(true);
    setModalShow(false);
    await call(ACCOUNT_REGISTERATION, {
      account_role: "client",
      ...inputData,
      creator_id: register_id,
      creator_role: account_role,
    })
      .then((res) => {
        setIsProcessing(false);
        if (res.data.status === 201) {
          props?.setIsUserAdded((prev) => !prev);
          props.onHide();
          setInputData({});
        } else {
          setErr(
            res?.data?.message ? res?.data?.message : `something wen't wrong`
          );
        }
      })
      .catch((err) => {
        setIsProcessing(false);
        setErr(err?.message ? err?.message : `something wen't wrong`);
        console.log(err);
      });
  };

  return (
    <Modal {...props} centered className="add-user-modal">
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">{props.Heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="add-user-modal-form-details">
          <Row>
            <Col>
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
                    name="first_name"
                    value={inputData["first_name"] || ""}
                    onChange={(e) => handleInputChnage(e)}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="user_name">
                <Form.Label>Location*</Form.Label>
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">
                    <Image src={Images.LoginUserIcon} />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Enter Location"
                    aria-label="Enter Location"
                    aria-describedby="basic-addon1"
                    autoFocus
                    name="location"
                    value={inputData["location"] || ""}
                    onChange={(e) => handleInputChnage(e)}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
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
                      placeholder="Enter user id"
                      autoFocus
                      name="user_name"
                      value={inputData?.user_name || ""}
                      onChange={(e) => handleInputChnage(e)}
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              {/* <Col>
                <Form.Group className="mb-3" controlId="role">
                  <Form.Label>Role*</Form.Label>
                  <InputGroup>
                    <InputGroup.Text id="basic-addon1">
                      <Image src={Images.LoginUserIcon} />
                    </InputGroup.Text>
                    <Form.Control type="text" placeholder="User" autoFocus />
                  </InputGroup>
                </Form.Group>
              </Col> */}
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
                      name="password"
                      value={inputData["password"] || ""}
                      onChange={(e) => handleInputChnage(e)}
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
                      name="confirm_password"
                      value={inputData["confirm_password"] || ""}
                      onChange={(e) => handleInputChnage(e)}
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              {/* <Col>
                <Form.Group className="mb-3" controlId="share">
                  <Form.Label>Share*</Form.Label>
                  <Form.Text id="sharePercentage">10%</Form.Text>
                  <InputGroup>
                    <InputGroup.Text id="basic-addon1">
                      <Image src={Images.percentIcon} />
                    </InputGroup.Text>
                    <Form.Control
                      type="number"
                      placeholder="Enter Share"
                      autoFocus
                      aria-describedby="sharePercentage"
                      name="share"
                      value={inputData["share"] || ""}
                      onChange={(e) => handleInputChnage(e)}
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
                      type="number"
                      placeholder="Enter Share"
                      autoFocus
                      aria-describedby="platComm"
                      name="ul_share"
                      value={inputData["ul_share"] || ""}
                      onChange={(e) => handleInputChnage(e)}
                    />
                  </InputGroup>
                </Form.Group>
              </Col> */}
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
                    name="creator_password"
                    value={inputData["creator_password"] || ""}
                    onChange={(e) => handleInputChnage(e)}
                  />
                </InputGroup>
              </Form.Group>
            </Row>
          </Container>
          {err && <div className="error-message mb-1">{err}</div>}
          <Button
            className="w-100 add-user-button"
            disabled={isProcessing}
            // onClick={() => handleSubmitUserCreation()
            onClick={() => {
              editData === true
                ? handleUpdateUser()
                : handleSubmitUserCreation();
            }}
          >
            {/* {isProcessing ? "Processing..." : "Add"} */}
            {editData === true ? "Update" : "Create"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default AddUserPopUp;
