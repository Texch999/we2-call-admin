import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { MdOutlineEdit } from "react-icons/md";

function ToursListPopup(props) {
  const { openToursPopup, setOpenToursPopup } = props;
  const TableHeads = [
    {
      label: "SNO",
      field: "s_no",
    },
    {
      label: "Tour Name",
      field: "tour_name",
    },
    {
      label: "Location",
      field: "location",
    },
    {
      label: "Date",
      field: "date",
    },
    {
      field: "button",
    },
  ];

  const TableData = [
    {
      s_no: "1",
      tour_name: "india vs aus",
      location: "melborn",
      date: "20-2-2023",
      button: <button className="table-button rounded">Iam Intrested</button>,
    },
    {
      s_no: "1",
      tour_name: "india vs aus",
      location: "melborn",
      date: "20-2-2023",
      button: <button className="table-button rounded">Iam Intrested</button>,
    },

    {
      s_no: "1",
      tour_name: "india vs ausppppp",
      location: "melborn",
      date: "20-2-2023",
      button: <button className="table-button rounded">Iam Intrested</button>,
    },
    {
      s_no: "1",
      tour_name: "india vs aus",
      location: "melborn",
      date: "20-2-2023",
      button: <button className="table-button rounded">Iam Intrested</button>,
    },
  ];
  return (
    <Modal
      onHide={() => setOpenToursPopup(false)}
      show={openToursPopup}
      centered
      className="add-user-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">Tours List</Modal.Title>
      </Modal.Header>
      <center>Select Your Tours</center>
      <div className="p-2 w-100">
        <table className="w-100">
          <thead id="home-table-head">
            <tr>
              {TableHeads.map((item, i) => {
                return <th className="text-center">{item.label}</th>;
              })}
            </tr>
          </thead>
          {TableData.map((item, i) => {
            return (
              <tr className="tr-item ">
                {TableHeads.map((headItem, i) => {
                  return <td className="td-item p-1">{item[headItem.field]}</td>;
                })}
              </tr>
            );
          })}
        </table>
        <Row className="mt-2 p-2">
          <Col>
            <Button
              className="add-user-button w-100"
              onClick={() => setOpenToursPopup(false)}
            >
              Submit
            </Button>
          </Col>
          <Col>
            <Button
              className="cancel-button w-100"
              onClick={() => setOpenToursPopup(false)}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </div>
      {/* <center>
        <img className="profile-image" alt="profile-image"></img>
        <div className="flex-center edit-profile-icon custom-box-shadow">
          <label htmlFor="upload-button" className="flex-center">
            <MdOutlineEdit className="edit-icon-black" />
          </label>
          <input type="file" id="upload-button" style={{ display: "none" }} />
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
                      maxlength="10"
                      name="whats_app"
                      //   value={formData.whats_app}
                      //   onChange={handleChange}
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
                      name="skype"
                      //   value={formData.skype}
                      //   onChange={handleChange}
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
                      maxlength="10"
                      name="mobile_no"
                      //   value={formData.mobile_no}
                      //   onChange={handleChange}
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
                // onClick={handleSubmit}
                // disabled={isProcessing}
              >
                Update Profile
              </Button>
            </Col>
            <Col>
              <Button className="w-100 cancel-button">Cancel</Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body> */}
    </Modal>
  );
}

export default ToursListPopup;
