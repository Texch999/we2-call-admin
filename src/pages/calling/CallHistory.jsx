import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import DatePicker from "react-datepicker";
import { FaRegCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import { Col, Container, Modal, Row } from "react-bootstrap";
import CustomPagination from "../pagination/CustomPagination";
import { call } from "../../config/axios";
import { GET_CALL_HISTORY } from "../../config/endpoints";
import "./styles.css";
function CallHistory() {
  const [callHistoryData, setCallHistoryData] = useState([]);
  let register_id = localStorage.getItem("register_id");
  const HISTORY_DETAILS = [
    {
      datetime: "19 July 2023, 10:00:00 PM",
      title: "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      duration: "1 Hour 30 Mintes",
      charge: "5000",
      status: "Completed",
      record: "",
      delete: "",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      title: "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      duration: "1 Hour 30 Mintes",
      charge: "5000",
      status: "Completed",
      record: "",
      delete: "",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      title: "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      duration: "1 Hour 30 Mintes",
      charge: "5000",
      status: "Completed",
      record: "",
      delete: "",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      title: "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      duration: "1 Hour 30 Mintes",
      charge: "5000",
      status: "Completed",
      record: "",
      delete: "",
    },
  ];
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add your logic here to fetch data for the selected page.
  };
  return (
    <div>
      <h5 className="meetings-heading mb-3">Call History</h5>
      <Container fluid className="mt-2 mb-4">
        <Row>
          <Col className="col-lg-2 col-md-3">
            <div>
              <div className="medium-font mb-2">From</div>
              <div className="date-container d-flex justify-content-around align-items-center rounded all-none p-1 w-100">
                <DatePicker
                  className="login-input all-none w-50"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select a date"
                />
                <FaRegCalendarAlt className="custom-icon p-1" />
              </div>
            </div>
          </Col>
          <Col className="col-lg-2 col-md-3">
            <div>
              <div className="medium-font mb-2">To</div>
              <div className="date-container d-flex justify-content-around align-items-center rounded all-none p-1 w-100">
                <DatePicker
                  className="login-input all-none w-50"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select a date"
                />
                <FaRegCalendarAlt className="custom-icon p-1" />
              </div>
            </div>
          </Col>{" "}
          <Col className="ms-1 me-1 mt-4 col-lg-1 col-md-2">
            <button className="submit-button medium-font p-2 rounded all-none">
              Verify
            </button>
          </Col>
        </Row>
      </Container>

      <div>
        <table className="w-100 match-position-table small-font">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                DATE & TIME
              </th>
              <th scope="col" className="text-center">
                MEETING TITLE
              </th>
              <th scope="col" className="text-center">
                DURATION
              </th>
              <th scope="col" className="text-center">
                PRICE
              </th>
              <th scope="col" className="text-center">
                STATUS
              </th>
              <th scope="col" className="text-center"></th>
              <th scope="col" className="text-center"></th>
            </tr>
          </thead>
          {HISTORY_DETAILS.map((item, index) => (
            <tbody key={index} className="small-font">
              <tr>
                <td className="text-center">{item.datetime}</td>
                <td className="text-center ">{item.title}</td>
                <td className="text-center">{item.duration}</td>
                <td className="text-center clr-green ">{item.charge}</td>
                <td className="text-center clr-green ">
                  <button className="rounded-pill p-1 history-status-approve-button w-100">
                    {item.status}
                  </button>
                </td>
                <td className="text-center">
                  <AiFillPlayCircle className="custom-icon" />
                </td>
                <td className="text-center">
                  <RiDeleteBin6Line className="custom-icon" />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="d-flex justify-content-start font-clr-white total-count-container  py-2 px-4 rounded">
          <span>
            Showing <b> {currentPage} </b> 0f <b> {totalPages} </b> Entries....
          </span>
        </div>
        <div className="d-flex justify-content-end mt-2">
          <CustomPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default CallHistory;
