import { Container, Form, Row, Col, InputGroup, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Images } from "../../images";
import { useState } from "react";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { call } from "../../config/axios";
import { ACCOUNT_REGISTERATION } from "../../config/endpoints";

function AddAdminsPopup(props) {
  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  let account_role = localStorage?.getItem("account_role");

  const [isProcessing, setIsProcessing] = useState(false);
  const [err, setErr] = useState("");

  const [inputData, setInputData] = useState({});

  const [togglePassword, setTogglePassword] = useState(true);
  const [cnfPasswordToggle, setCnfPasswordToggle] = useState(true);
  const [adminPasswordToggle, setAdminPasswordToggle] = useState(true);

  const handleInputChnage = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  let packageList = [
    { label: "Trial", value: "Trial" },
    { label: "Standard", value: "Standard" },
    { label: "Silver", value: "Silver" },
    { label: "Gold", value: "Gold" },
    { label: "Diamond", value: "Diamond" },
    { label: "VIP", value: "VIP" },
  ];

  let userRoles = [
    { label: "Super Admin", value: "superadmin" },
    { label: "Admin", value: "admin" },
    { label: "Sub Admin", value: "subadmin" },
    { label: "Super Master", value: "supermaster" },
    { label: "Master", value: "master" },
    { label: "Agent", value: "agent" },
  ];
  const finIndex = userRoles.findIndex(
    (obj) => obj.value === localStorage.getItem("account_role")
  );
  userRoles =
    finIndex > -1 ? userRoles.slice(finIndex + 1, userRoles.length) : [];

  const handleSubmitUserCreation = async () => {
    if (
      !(
        inputData?.first_name &&
        inputData?.user_name &&
        inputData?.share &&
        inputData?.my_share &&
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
    await call(ACCOUNT_REGISTERATION, {
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
          Add Users/Admins
        </Modal.Title>
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
                name="first_name"
                value={inputData["first_name"] || ""}
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
                      name="user_name"
                      value={inputData["user_name"] || ""}
                      onChange={(e) => handleInputChnage(e)}
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
                    <Form.Select
                      name="account_role"
                      onChange={(e) => handleInputChnage(e)}
                    >
                      <option value="">Select....</option>
                      {userRoles?.map(({ label, value }, index) => {
                        return (
                          <option index={index} value={value}>
                            {label}
                          </option>
                        );
                      })}
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
                      name="password"
                      value={inputData["password"] || ""}
                      onChange={(e) => handleInputChnage(e)}
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
                      name="confirm_password"
                      value={inputData["confirm_password"] || ""}
                      onChange={(e) => handleInputChnage(e)}
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
                      type="text"
                      placeholder="Enter Share"
                      autoFocus
                      aria-describedby="platComm"
                      name="my_share"
                      value={inputData["my_share"] || ""}
                      onChange={(e) => handleInputChnage(e)}
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Form.Group className="mb-3" controlId="adminPackages">
                <Form.Label>Package*</Form.Label> account_role: {inputData['account_role'] || ""}
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">
                    <Image src={Images.packageIcon} style={{ width: "18px" }} />
                  </InputGroup.Text>
                  <Form.Select>
                    <option value="">Select...</option>
                    {packageList?.map(({ label, value }, index) => {
                      return (
                        <option value={value} key={index}>
                          {label}
                        </option>
                      );
                    })}
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
                    type={adminPasswordToggle ? "password" : "text"}
                    placeholder="Enter Admin Password"
                    autoFocus
                    name="creator_password"
                    value={inputData["creator_password"] || ""}
                    onChange={(e) => handleInputChnage(e)}
                  />
                  <InputGroup.Text
                    className="ps-0 pe-2"
                    onClick={() => handleAdminTogglePassword()}
                  >
                    {adminPasswordToggle ? <IoEyeOffSharp /> : <IoEyeSharp />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Row>
          </Container>
          {err && <div className="error-message mb-1">{err}</div>}
          <Button
            className="w-100 add-user-button"
            disabled={isProcessing}
            onClick={() => handleSubmitUserCreation()}
          >
            {isProcessing ? "Processing..." : "Add"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default AddAdminsPopup;
