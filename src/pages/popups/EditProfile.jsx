import { Container, Form, Row, Col, InputGroup, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Images, ImageBaseUrl } from "../../images";
import {
  GET_USER_INFO,
  UPDATE_PROFILE,
  GENERATE_SIGNED_URL,
} from "../../config/endpoints";
import { MdOutlineEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import { call } from "../../config/axios";

function EditProfile(props) {
  const { close, show } = props;
  const register_id = localStorage?.getItem("register_id");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile_no: "",
    user_name: "",
  });
  const [editProfileSubmitPopup, setEditProfileSubmitPopup] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [isUserNameValid, setIsUserNameValid] = useState(true);
  const [isMobileNumberValid, setIsMobileNumberValid] = useState(true);
  const [singedUrl, setSignedUrl] = useState("");
  const [status, setStatus] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const getProfile = async (id) => {
    const payload = {
      register_id,
    };
    try {
      const res = await call(GET_USER_INFO, payload);
      const userProfileData = res?.data?.data[0];
      setFormData({
        first_name: userProfileData?.first_name || "",
        last_name: userProfileData?.last_name || "",
        email: userProfileData?.email || "",
        mobile_no: userProfileData?.mobile_no || "",
        user_name: userProfileData?.user_name || "",
        profileImage: userProfileData?.profile_image || "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const generateSignedUrl = async () => {
    setIsProcessing(true);
    await call(GENERATE_SIGNED_URL, {
      register_id,
      event_type: "user_profile_image",
      folder_name: "profile-images",
    })
      .then(async (res) => {
        setIsProcessing(false);
        let url = res?.data?.data?.result?.signed_url;
        // console.log({url})
        setSignedUrl(url);
      })
      .catch((err) => {
        setIsProcessing(false);
        console.log("generating signed url error", err);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validateForm = () => {
    const isUserNameValid = formData.user_name.trim() !== "";
    const isMobileNumberValid = formData.mobile_no.trim() !== "";

    setIsUserNameValid(isUserNameValid);
    setIsMobileNumberValid(isMobileNumberValid);

    return isUserNameValid && isMobileNumberValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    singedUrl &&
      profileImage &&
      (await fetch(singedUrl, {
        method: "PUT",
        body: profileImage,
        headers: {
          "Content-Type": "image/jpeg",
          "cache-control": "public, max-age=0",
        },
      })
        .then((res) => {})
        .catch((err) => {
          console.log("err: ", err);
        }));
    if (validateForm()) {
      const updatedProfile = {
        register_id: localStorage?.getItem("register_id"),
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        mobile_no: formData.mobile_no,
        user_name: formData.user_name,
        profile_image: `${ImageBaseUrl}/${"profile-images"}/${register_id}.png`,
      };

      try {
        setIsProcessing(true);
        const response = await call(UPDATE_PROFILE, updatedProfile);
        if (response.status === 200) {
          setIsProcessing(false);
          console.log("Profile updated successfully.");
          setEditProfileSubmitPopup(true);
        } else {
          setIsProcessing(false);
          console.error("Profile update failed:", response.data);
        }
      } catch (error) {
        setIsProcessing(false);
        console.error("An error occurred while updating the profile:", error);
      }
    } else {
      setIsProcessing(false);
      console.log("Form is invalid, please fill in the required fields.");
    }
  };

  console.log(formData, "formData.....");

  return (
    <Modal onHide={close} show={show} centered className="add-user-modal">
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">
          Edit Your Information
        </Modal.Title>
      </Modal.Header>
      <center>Update Your details</center>

      <center>
        <img
          src={formData?.profileImage || Images.BatBall}
          className="profile-image"
          alt="profile-image"
        ></img>
        <div className="flex-center edit-profile-icon custom-box-shadow">
          <label htmlFor="upload-button" className="flex-center">
            <MdOutlineEdit className="edit-icon-black" />
          </label>
          <input
            type="file"
            id="upload-button"
            style={{ display: "none" }}
            onChange={(e) => {
              setProfileImage(e?.target?.files[0]);
              generateSignedUrl();
            }}
          />
        </div>
      </center>
      <Modal.Body>
        <Form className="add-user-modal-form-details">
          <Form.Group className="mb-3" controlId="user_name">
            <Form.Label>User Name/ Full Name</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                autoFocus
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
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
                  <Form.Label>Email ID</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="input"
                      placeholder="Enter Email ID"
                      autoFocus
                      className="fs-8rem"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3 position-relative" controlId="role">
                  <Form.Label>Whats App</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="number"
                      placeholder="Enter Whatsapp Number"
                      className="fs-8rem"
                      autoFocus
                      maxLength={10}
                      name="mobile_no"
                      value={formData.mobile_no}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  className="mb-3 position-relative"
                  controlId="userId"
                >
                  <Form.Label>Skype</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="input"
                      placeholder="Enter Email ID"
                      autoFocus
                      className="fs-8rem"
                      name="email"
                      value={formData.skype || []}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3 position-relative" controlId="role">
                  <Form.Label>Phone</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="number"
                      placeholder="Enter Whatsapp Number"
                      className="fs-8rem"
                      autoFocus
                      maxLength={10}
                      name="mobile_no"
                      value={formData.mobile_no}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
          </Container>
          <Row>
            <Col>
              <Button
                className="w-100 add-user-button"
                onClick={handleSubmit}
                disabled={isProcessing}
              >
                Update Profile
              </Button>
            </Col>
            <Col>
              <Button className="w-100 cancel-button" onClick={close}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EditProfile;
