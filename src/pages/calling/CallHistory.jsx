import React, { useEffect, useState } from "react";
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

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [activeButton, setActiveButton] = useState([]);
  const handleStatusButton = (e) => {
    setActiveButton(e);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add your logic here to fetch data for the selected page.
  };

  const getCallHistoryData = async () => {
    await call(GET_CALL_HISTORY, { register_id })
      .then((res) => {
        if (res?.data?.statusCode === 200) {
          setCallHistoryData(res?.data?.data);
        }
      })
      .catch((err) => {
        throw err;
      });
  };
  useEffect(() => {
    getCallHistoryData();
  }, []);

  const CALL_HISTORY_DETAILS = callHistoryData.map((item) => {
    return {
      Date: item?.date,
      Time: item?.time,
      Meetingtitle:
        "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      Duration: item?.time,
      price: "5000",
      status: item?.recording_status,
    };
  });
  // const filterCallhistory = CALL_HISTORY_DETAILS.filter((item) => {
  //   return item.Date > selectedStartDate && item.Date < selectedEndDate;
  // });
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
                  selected={selectedStartDate}
                  onChange={(date) => setSelectedStartDate(date)}
                  dateFormat="mm/dd/yyyy"
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
                  selected={selectedEndDate}
                  onChange={(date) => setSelectedEndDate(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select a date"
                />
                {/* <input
                  className="login-input all-none w-50"
                  type="date"
                  name="start_date"
                  value={selectedEndDate}
                  // dateFormat="mm-dd-yy"
                  onChange={(e) => setSelectedEndDate(e.target.value)}
                ></input>
                <FaRegCalendarAlt className="custom-icon p-1" /> */}
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

          {CALL_HISTORY_DETAILS.filter((item) => {
            return item.Date > selectedStartDate && item.Date < selectedEndDate;
          }).map((item, index) => (
            <tbody key={index} className="small-font">
              <tr>
                <td className="text-center">
                  {item?.Date}
                  <div className="ms-2"> {item?.Time}</div>
                </td>
                <td className="text-center ">{item?.Meetingtitle}</td>
                <td className="text-center">{item?.Duration}</td>
                <td className="text-center clr-green ">{item?.price}</td>
                <td className="text-center clr-green ">
                  <div
                    className={`p-1 w-100 ${
                      item?.status === "started" ? "clr-green" : "clr-red"
                    }`}
                  >
                    {item?.status}
                  </div>
                  {/* className={`p-1 w-100 ${ {item?.recording_status} === started : "clr-green" :"clr-red"}`} */}
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
