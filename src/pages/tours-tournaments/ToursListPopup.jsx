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
  const { openToursPopup, setOpenToursPopup, toursList } = props;
  const TableHeads = toursList&&toursList.length>0?[
    {
      label: "SNO",
      field: "s_no",
    },
    {
      label: "Tour Title",
      field: "tour_title",
    },
    {
      label: "Location",
      field: "location",
    },
    {
      label: "Start Date",
      field: "schedule_from",
    },
    {
      label: "End Date",
      field: "schedule_upto",
    },
    {
      field: "button",
    },
  ]:[{
    label: "TOURS",
    field: "tours",
  }];

  const TableData = toursList && toursList.length > 0
  ? toursList.map((tour, index) => {
      if (tour) {
        return {
          s_no: index+1,
          tour_title: tour.tour_title,
          location: tour.country,
          schedule_from: tour.schedule_from,
          schedule_upto: tour.schedule_upto,
          button: <button key={index} className="table-button rounded">I am Interested</button>,
        };
      } else {
        return null;
      }
    })
  : [
    {tours:"No Tours to Display"}
  ];

  
  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        onHide={() => setOpenToursPopup(false)}
        show={openToursPopup}
        centered
        size="xl"
        className="match-share-modal w-100 close-btn"
      >
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center">Tours List</Modal.Title>
        </Modal.Header>
        <center>Select Your Tours</center>
        <div className="p-2 w-100">
          <table className="w-100">
            <thead id="home-table-head" className="p-3">
              <tr>
                {TableHeads.map((item, i) => {
                  return <th key={i} className="text-center">{item.label}</th>;
                })}
              </tr>
            </thead>
            <tbody className="p-3">
              {TableData.map((item, i) => {
                return (
                  <tr key={i} className="tr-item">
                    {TableHeads.map((headItem, i) => {
                      return <td key={i} className="td-item p-2">{item[headItem.field]}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
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
      </Modal>
    </div>
  );
}

export default ToursListPopup;
