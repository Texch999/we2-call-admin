import { Container, Form, InputGroup, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Images } from "../../images";
import { useEffect, useState, useRef } from "react";
import {
  ADD_PAYMENT,
  UPDATE_PAYMENT_GATEWAY,
  GENERATE_SIGNED_URL,
} from "../../config/endpoints";
import { call } from "../../config/axios";
import MatchSubmitPopup from "../match-popups/MatchSubmitPopup";

function AddPaymentMode(props) {
  const ImageBaseUrl = "https://we2-call-images.s3.us-east-2.amazonaws.com";
  const { state, setState, selectedGateway } = props;
  const status = props.status;
  const register_id = localStorage?.getItem("register_id");
  const [openTQPopup, setOpenTQPopup] = useState(false);
  const [formData, setFormData] = useState({ pg_upi: "neft" });
  const [paymentId, setPaymentId] = useState("");
  const [singedUrl, setSignedUrl] = useState("");
  const [uploadImage, setuploadImage] = useState([]);
  const [profileImage, setProfileImage] = useState("");
  const [selectedImage, setSelectedImage] = useState();

  const paymentDetailsInputFields = [
    {
      type: "text",
      placeholder: "Enter name",
      name: "account_holder_name",
      label: "Account Holder Name*",
      icon: Images.LoginUserIcon,
      id: "accountHolderName",
    },
    {
      type: "text",
      placeholder: "Enter Bank name",
      name: "bank_name",
      label: "Bank Name*",
      icon: Images.bankIcon,
      id: "bankName",
    },
    {
      type: "text",
      placeholder: "Enter Account Number",
      name: "account_number",
      label: "Account Number*",
      icon: Images.passbookIcon,
      id: "accountNumber",
    },
    {
      type: "text",
      placeholder: "Enter IFSC Code",
      name: "ifsc_code",
      label: "IFSC Code*",
      icon: Images.bankIcon,
      id: "ifscCode",
    },
  ];

  const paymentTypes = [
    {
      label: "NEFT/RTGS",
      value: "neft",
    },
    {
      label: "PhonePe",
      value: "phonepe",
    },
    {
      label: "Paytm",
      value: "paytm",
    },
    {
      label: "GooglePay",
      value: "gpay",
    },
    {
      label: "QR Code",
      value: "qr_code",
    },
  ];
  const uploadfileInputRef = useRef(null);

  const handleUploadFileSelect = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    generateSignedUrl();
  };
  const handleOpenTqPopup = async () => {
    const payload = {
      register_id,
      uploadImage: `${ImageBaseUrl}/${"payment-images"}/${paymentId}.png`,
      ...formData,
    };
    try {
      if (profileImage) {
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
      } else {
        const url = selectedGateway ? UPDATE_PAYMENT_GATEWAY : ADD_PAYMENT;
        const res = await call(url, payload);
        if (res.status) {
          setOpenTQPopup(true);
          props.apiResponse(!status);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "pg_upi" && files) {
      setSelectedImage(files[0]);
    }
    setFormData({ ...formData, [name]: value });
  };

  const generateSignedUrl = async () => {
    setuploadImage(true);
    const posetNewId = new Date().getTime();
    await call(GENERATE_SIGNED_URL, {
      register_id: `${posetNewId}`,
      event_type: "user_profile_image",
      folder_name: "payment-images",
    })
      .then(async (res) => {
        setuploadImage(false);
        let url = res?.data?.data?.result?.signed_url;
        setSignedUrl(url);
        setPaymentId(posetNewId);
      })
      .catch((err) => {
        setuploadImage(false);
        console.log("generating signed url error", err);
      });
  };

  useEffect(() => {
    setFormData({ ...formData, ...selectedGateway });
    const obj = paymentTypes.find(
      (obj) => obj?.value === selectedGateway?.pg_upi
    );
  }, [selectedGateway]);

  return (
    <Modal
      show={state}
      onHide={() => setState(false)}
      centered
      className="add-user-modal mt-4"
    >
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">
          Add Payment Mode
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center me-4">Add Your Payment Details</div>
        <Form className="add-user-modal-form-details">
          <Form.Group className="mb-2">
            <Form.Label>Select Type*</Form.Label>
            <InputGroup>
              <InputGroup.Text id="basic-addon1">
                <Image src={Images.transactionIcon} style={{ width: "18px" }} />
              </InputGroup.Text>
              <Form.Select
                onChange={handleChange}
                name="pg_upi"
                value={formData.pg_upi}
              >
                {paymentTypes.map((type, index) => (
                  <option key={index} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </Form.Select>
            </InputGroup>
          </Form.Group>
          {formData.pg_upi === "neft" ? (
            paymentDetailsInputFields.map((field, index) => (
              <Form.Group className="mb-2" key={index}>
                <Form.Label>{field.label}</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <Image src={field.icon} style={{ width: "18px" }} />
                  </InputGroup.Text>
                  <Form.Control
                    type={field.type}
                    name={field.name}
                    id={field.id}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    value={formData[field.name] || ""}
                    autoFocus
                  />
                </InputGroup>
              </Form.Group>
            ))
          ) : formData.pg_upi === "qr_code" ? (
            <Form.Group className="mb-2">
              <Form.Label>Upload Photo*</Form.Label>
              <InputGroup>
                <Form.Control
                  type="file"
                  ref={uploadfileInputRef}
                  name="uploadCode"
                  id="uploadCode"
                  placeholder="Upload Here"
                  onChange={handleUploadFileSelect}
                  autoFocus
                />
                <InputGroup.Text>
                  <Image
                    src={Images.uploadIcon}
                    style={{ width: "18px" }}
                    className="mb-2"
                  />
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
          ) : (
            <>
              <Form.Group className="mb-2">
                <Form.Label>UPI Name*</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <Image
                      src={Images.LoginUserIcon}
                      style={{ width: "18px" }}
                    />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="pg_name"
                    id="pg_name"
                    placeholder="Enter UPI Name"
                    onChange={handleChange}
                    value={formData.pg_name || ""}
                    autoFocus
                  />
                </InputGroup>
              </Form.Group>
              <Form.Label className="mt-2">Phone Number*</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <Image src={Images.callIcon} style={{ width: "18px" }} />
                </InputGroup.Text>
                <Form.Control
                  type="number"
                  name="mobile_number"
                  id="mobile_number"
                  placeholder="Enter Phone Number"
                  onChange={handleChange}
                  value={formData.mobile_number || ""}
                  autoFocus
                />
              </InputGroup>
            </>
          )}
          <Button
            className="w-100 add-user-button mt-2"
            onClick={handleOpenTqPopup}
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <MatchSubmitPopup
        header={"You Have Successfully Submitted Your Payment Details"}
        state={openTQPopup}
        setState={setOpenTQPopup}
      />
    </Modal>
  );
}

export default AddPaymentMode;
