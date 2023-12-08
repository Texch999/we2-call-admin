import { Container, Form, Row, Col, InputGroup, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Images } from "../../images";
import { useEffect, useState } from "react";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { call } from "../../config/axios";
import {  
  ACCOUNT_REGISTERATION,
  UPDATE_USER_ADMIN,
} from "../../config/endpoints";

function AddAdminsPopup(props) {
  const {
    adminsData,
    usersData,
    setModalShow,
    editData,
    show,
    setAddadminsPopup,
  } = props;
  console.log("Props Data====>", props?.setIsUserAdded);
  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  let account_role = localStorage?.getItem("account_role");

  const [isProcessing, setIsProcessing] = useState(false);
  const [err, setErr] = useState("");
  const [inputData, setInputData] = useState({});
  const [togglePassword, setTogglePassword] = useState(true);
  const [cnfPasswordToggle, setCnfPasswordToggle] = useState(true);
  const [adminPasswordToggle, setAdminPasswordToggle] = useState(true);
  // const [showSuccessfulPopup, setShowSuccessfulPopup] = useState(false);

  const handleInputChnage = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  let packageList = [
    { label: "Trial", value: "Trial" },
    // { label: "Standard", value: "Standard" },
    // { label: "Silver", value: "Silver" },
    // { label: "Gold", value: "Gold" },
    // { label: "Diamond", value: "Diamond" },
    // { label: "VIP", value: "VIP" },
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

  // const handleUpdateUserAdmin = async () => {
  //   // if (
  //   //   !(
  //   //     inputData?.first_name &&
  //   //     inputData?.user_name &&
  //   //     inputData?.creator_password
  //   //   )
  //   // ) {
  //   //   return setErr("Please enter required fields");
  //   // }
  //   // if (inputData?.password !== inputData?.confirm_password) {
  //   //   return setErr(`password doesn't match`);
  //   // }
  //   // if (+inputData?.share + +inputData?.ul_share > 100) {
  //   //   return setErr("Invalid shares");
  //   // }
  //   setErr("");
  //   setIsProcessing(true);

  //   await call(UPDATE_USER_ADMIN, {
  //     ...inputData,
  //     creator_id: register_id,
  //     creator_role: account_role,
  //     share: 100 - +inputData["ul_share"],
  //   })
  //     .then((res) => {
  //       setIsProcessing(false);
  //       if (res.data.status === 200) {
  //         // props?.setIsUserAdded((prev) => !prev);
  //         setAddadminsPopup(true);
  //         setModalShow(false);
  //         // props.onHide();
  //         setInputData({});
  //       } else {
  //         setErr(
  //           res?.data?.message ? res?.data?.message : `Something went wrong`
  //         );
  //       }
  //     })
  //     .catch((err) => {
  //       setIsProcessing(false);
  //       setErr(err?.message ? err?.message : `Something went wrong`);
  //       console.log(err);
  //     });
  // };
  const handleSubmitUserCreation = async () => {
    if (
      !(
        inputData?.first_name &&
        inputData?.user_name &&
        // inputData?.share &&
        inputData?.ul_share &&
        inputData?.creator_password &&
        inputData?.location
      )
    ) {
      return setErr("Please enter required fields");
    }
    if (inputData?.password !== inputData?.confirm_password) {
      return setErr(`password doesn't match`);
    }
    if (+inputData?.share + +inputData?.ul_share > 100) {
      return setErr("Invalid shares");
    }
    const trailPack = {
      package_id: "8a147698-4f2b-42b6-a409-f56ad6065002",
      package_limits: {
        duration: "unlimited",
        members: 10,
        no_of_meetings: "5",
      },
    };
    const packInfo = inputData?.trailPack ? { trailPack } : {};
    setErr("");
    setIsProcessing(true);
    setModalShow(false);
    await call(ACCOUNT_REGISTERATION, {
      ...inputData,
      ...packInfo,
      creator_id: register_id,
      creator_role: account_role,
      share: 100 - +inputData["ul_share"],
    })
      .then((res) => {
        setIsProcessing(false);
        if (res.data.status === 201) {
          // setIsUserAdded((prev) => !prev);
          setAddadminsPopup(true);
          // props.onHide();
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
console.log("InputData====>",inputData)
  const handleUpdateUserAdmin = async () => {
    // if (
    //   !(
    //     inputData?.first_name &&
    //     inputData?.user_name &&
    //     // inputData?.share &&
    //     inputData?.ul_share &&
    //     inputData?.creator_password &&
    //     inputData?.location
    //   )
    // ) {
    //   return setErr("Please enter required fields");
    // }
    // if (inputData?.password !== inputData?.confirm_password) {
    //   return setErr(`password doesn't match`);
    // }
    // if (+inputData?.share + +inputData?.ul_share > 100) {
    //   return setErr("Invalid shares");
    // }
    const trailPack = {
      package_id: "8a147698-4f2b-42b6-a409-f56ad6065002",
      package_limits: {
        duration: "unlimited",
        members: 10,
        no_of_meetings: "5",
      },
    };
    const packInfo = inputData?.trailPack ? { trailPack } : {};
    setErr("");
    setIsProcessing(true);
    setModalShow(false);
    await call(UPDATE_USER_ADMIN, {
      ...inputData,
      ...packInfo,
      creator_id: register_id,
      creator_role: account_role,
      share: 100 - +inputData["ul_share"],
    })
      .then((res) => {
        setIsProcessing(false);
        if (res.data.status === 201) {
          // setIsUserAdded((prev) => !prev);
          setAddadminsPopup(true);
          // props.onHide();
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

  useEffect(() => {
    setInputData(adminsData);
  }, []);

  return (
    <Modal
      {...props}
      centered
      className="add-user-modal z-index"
      onHide={() => {
        setInputData({});
        props.onhideClick(false);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">
          {/* Add Users/Admins */}
          {props.Heading}
        </Modal.Title>
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
                    value={inputData?.first_name || ""}
                    onChange={(e) => handleInputChnage(e)}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="location">
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
                    value={inputData?.location || ""}
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
                      placeholder="Enter Name"
                      autoFocus
                      name="user_name"
                      value={inputData?.user_name || ""}
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
                      value={inputData?.password || ""}
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
                      value={inputData?.confirm_password || ""}
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
                      value={100 - +inputData["ul_share"] || 100}
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
                      name="ul_share"
                      value={inputData?.ul_share || ""}
                      onChange={(e) => handleInputChnage(e)}
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="adminPackages">
                  <Form.Label>Package*</Form.Label>
                  {/* {inputData?.account_role || ""} */}
                  <InputGroup>
                    <InputGroup.Text id="basic-addon1">
                      <Image
                        src={Images.packageIcon}
                        style={{ width: "18px" }}
                      />
                    </InputGroup.Text>
                    <Form.Select
                      name="trailPack"
                      onChange={(e) => handleInputChnage(e)}
                    >
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
              </Col>
              <Col>
                {" "}
                <Form.Group className="mb-3" controlId="myShare">
                  <Form.Label>Package Discount*</Form.Label>
                  <InputGroup>
                    <InputGroup.Text id="basic-addon1">
                      <Image src={Images.percentIcon} />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Enter Package_Discount"
                      autoFocus
                      aria-describedby="platComm"
                      name="package_discount"
                      value={inputData?.package_discount || ""}
                      onChange={(e) => handleInputChnage(e)}
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            <Row>
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
                    value={inputData?.creator_password || ""}
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
            onClick={() => {
              editData === true
                ? handleUpdateUserAdmin()
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
export default AddAdminsPopup;
