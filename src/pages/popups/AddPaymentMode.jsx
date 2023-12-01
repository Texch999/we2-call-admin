import { Container, Form, Row, Col, InputGroup, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Images } from "../../images";
import { useState } from "react";

function AddAdminsPopup(props) {
  const paymentDetailsInputFields = [
    {
      type: "text",
      placeholder: "Enter name",
      name: "accountHolderName",
      label: "Account Holder Name*",
      icon: Images.LoginUserIcon,
      id: "accountHolderName",
    },
    {
      type: "text",
      placeholder: "Enter Bank name",
      name: "bankName",
      label: "Bank Name*",
      icon: Images.bankIcon,
      id: "bankName",
    },
    {
      type: "text",
      placeholder: "Enter Account Number",
      name: "accountNumber",
      label: "Account Number*",
      icon: Images.passbookIcon,
      id: "accountNumber",
    },
    {
      type: "text",
      placeholder: "Enter IFSC Code",
      name: "ifscCode",
      label: "IFSC Code*",
      icon: Images.bankIcon,
      id: "ifscCode",
    },
  ];
  const { showPaymentMode } = props;
  const [activeType, setActiveType] = useState("NEFT / RTGS");
  const paymentTypes = ["NEFT / RTGS", "QR Code", "UPI"];
  const handleAddUser = () => {
    props.onHide();
  };
  const handlePaymentType = (type) => {
    setActiveType(type);
  };
  return (
    <Modal {...props} centered className="add-user-modal mt-4">
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
              <Form.Select onChange={(e) => handlePaymentType(e.target.value)}>
                {paymentTypes?.map((type, index) => {
                  return <option key={index}>{type}</option>;
                })}
              </Form.Select>
            </InputGroup>
          </Form.Group>
          {activeType === "NEFT / RTGS" ? (
            paymentDetailsInputFields.map((field, index) => {
              return (
                <Form.Group className="mb-2" key={index}>
                  <Form.Label>{field?.label}</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <Image src={field?.icon} style={{ width: "18px" }} />
                    </InputGroup.Text>
                    <Form.Control
                      type={field?.type}
                      name={field?.name}
                      id={field.id}
                      placeholder={field?.placeholder}
                      autoFocus
                    />
                  </InputGroup>
                </Form.Group>
              );
            })
          ) : activeType === "QR Code" ? (
            <Form.Group className="mb-2">
              <Form.Label>Upload Photo*</Form.Label>
              <InputGroup>
                <Form.Control
                  type="file"
                  name="uploadCode"
                  id="uploadCode"
                  placeholder="Upload Here"
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
            <Form.Group className="mb-2">
              <Form.Label>UPI Name*</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <Image src={Images.LoginUserIcon} style={{ width: "18px" }} />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  name="upi"
                  id="upi"
                  placeholder="Enter UPI Name"
                  autoFocus
                />
              </InputGroup>
              <Form.Label className="mt-2">Phone Number*</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <Image src={Images.callIcon} style={{ width: "18px" }} />
                </InputGroup.Text>
                <Form.Control
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Enter Phone Number"
                  autoFocus
                />
              </InputGroup>
            </Form.Group>
          )}

          <Button
            className="w-100 add-user-button mt-2"
            onClick={() => handleAddUser()}
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default AddAdminsPopup;
