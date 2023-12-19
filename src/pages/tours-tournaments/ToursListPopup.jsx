import React, { useEffect, useState } from "react";
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
import { call } from "../../config/axios";
import { GET_TOURS, GET_INTERESTED } from "../../config/endpoints";
import { ADD_INTERESTED } from "../../config/endpoints"

function ToursListPopup(props) {
  const { openToursPopup, setOpenToursPopup, tourName, setTourName } = props;
  const [buttonColor, setButtonColor] = useState([]);
  const [tours, setTours] = useState([]);
  // const [toursList, setToursList] = useState([]);

  const handleClick = async (tourId) => {
    const isSelected = buttonColor.includes(tourId);
    setButtonColor(isSelected ? [...buttonColor] : [...buttonColor, tourId]);
    let registerId = localStorage.getItem("register_id");
    let accountRole = localStorage.getItem("account_role");
    let userName = localStorage.getItem("user_name");
    const payload = {
      register_id: registerId,
      tour_id: tourId,
      website: "www.we2call.com",
      account_role: accountRole,
      user_name: userName,
      im_interested: true,
    };
    await call(ADD_INTERESTED, payload)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const handleClose = () => {
    setOpenToursPopup(false);
  };

  const getTours = async () => {
    const payload = {
      website: "www.we2call.com",
    };
    await call(GET_TOURS, payload)
      .then((res) => setTours(res?.data?.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTours();
    return () => {
      setTours([]);
    };
  }, [openToursPopup])

  const country_name = localStorage.getItem("country_name");
  const toursList =
    tours &&
    tours.length > 0 &&
    tours
      .filter((tour) => tour.country === country_name)
      .filter((tour) => tour.status === "active")
      .filter((tour) => tour.tour_name === tourName)
      .filter((tour) => {
        const publishStartDate = new Date(tour.publish_from);
        const publishStartTimestamp = publishStartDate.getTime();
        const publishEndDate = new Date(tour.publish_upto);
        const publishEndTimestamp = publishEndDate.getTime();
        const currentTimestamp = Date.now();
        if (
          currentTimestamp > publishStartTimestamp &&
          currentTimestamp < publishEndTimestamp
        ) {
          return tour;
        }
      });
  // console.log(toursList, ".....toursList");
  const TableHeads =
    toursList && toursList.length > 0
      ? [
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
        ]
      : [
          {
            label: "TOURS",
            field: "tours",
          },
        ];

  const TableData =
    toursList && toursList.length > 0
      ? toursList.map((tour, index) => {
          if (tour) {
            return {
              s_no: index + 1,
              tour_title: tour.tour_title,
              location: tour.tour_location,
              schedule_from: tour.schedule_from,
              schedule_upto: tour.schedule_upto,
              button: (
                <button
                  key={index}
                  onClick={() => handleClick(tour.tour_id)}
                  className={
                    buttonColor.includes(tour.tour_id)
                      ? "table-button table-button-clicked rounded"
                      : "table-button rounded"
                  }
                >
                  I’m Interested
                </button>
              ),
            };
          } else {
            return null;
          }
        })
      : [{ tours: "No Tours to Display" }];

  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        onHide={handleClose}
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
                  return (
                    <th key={i} className="text-center">
                      {item.label}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="p-3">
              {TableData.map((item, i) => {
                return (
                  <tr key={i} className="tr-item">
                    {TableHeads.map((headItem, i) => {
                      return (
                        <td key={i} className="td-item p-2">
                          {item[headItem.field]}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Modal>
    </div>
  );
}

export default ToursListPopup;
