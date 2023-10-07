import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import "./styles.css";
import StatementPopup from "./StatementPopup";
import DatePicker from "react-datepicker";
import { FaRegCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { Col, Container, Modal, Row } from "react-bootstrap";
import CustomPagination from "../pagination/CustomPagination";

function Statement() {
  const STATEMENT_DETAILS = [
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
  ];
  const seriesOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const matchOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const fancyOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const clientOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const [selectedDate, setSelectedDate] = useState(null);

  const onChange = (e) => {};
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add your logic here to fetch data for the selected page.
  };

  return (
    <div className="p-2">
      <hr />
      <Container fluid className="mt-2">
        <Row>
          <Col className="col-lg-2 col-md-3">
            <div>
              <div className="medium-font mb-2">From</div>
              <div className="date-container d-flex justify-content-around align-items-center rounded all-none p-1 w-100">
                <DatePicker
                  className="login-input all-none w-50"
                  selected={selectedDate}
                  onChange={(e) => onChange(e)}
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
          <Col className="col-lg-1 col-md-3">
            <div>
              <div className="medium-font mb-2">Match Name</div>
              <select
                name="match"
                className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
              >
                <option selected>Enter Match Name</option>
                <option value="sl">India vs SL</option>
                <option value="eng">India vs Eng</option>
                <option value="zim">Eng vs Zim</option>
                <option value="pak">India Vs Pak</option>
              </select>
            </div>
          </Col>{" "}
          <Col className="col-lg-2 col-md-3">
            <div>
              <div className="medium-font mb-2">Series Name</div>
              <select
                name="Series"
                className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
              >
                <option selected>Enter Series Name</option>
                <option value="test">Test</option>
                <option value="t20">T20 League</option>
                <option value="oneday">ODI Cricket</option>
              </select>
            </div>
          </Col>{" "}
          <Col className="col-lg-1 col-md-3">
            <div>
              <div className="medium-font mb-2"> Fancy</div>
              <select
                name="fancy"
                className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
              >
                <option selected>Enter Fancy</option>
                <option value="first">1st Innings</option>
                <option value="second">2nd Innings</option>
              </select>
            </div>
          </Col>{" "}
          <Col className="col-lg-2 col-md-3">
            <div>
              <div className="medium-font mb-2">Client Name</div>
              <select
                name="cars"
                className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
              >
                <option selected>Enter Client Name</option>
                <option value="sri">Srikanth</option>
                <option value="upi">Upendra</option>
                <option value="ranj">Ranjit katari</option>
              </select>
            </div>
          </Col>{" "}
          <Col className="ms-1 me-1 mt-4 col-lg-1 col-md-2">
            <button className="submit-button medium-font p-2 rounded all-none">
              Verify
            </button>
          </Col>
        </Row>
      </Container>
      <hr />
      <div>
        <table>
          <thead>
            <tr className="text-center">
              <th>DATE & TIME</th>
              <th>SERIES NAME</th>
              <th>TEAM NAME</th>
              <th>MATCH PLACE</th>
              <th>WIN TEAM</th>
              <th>P/L</th>
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
      <div>
        {" "}
        <table className="w-100 match-position-table medium-font">
          {STATEMENT_DETAILS.map((item, index) => (
            <tbody key={index}>
              <tr className="text-center">
                <td>{item.datetime}</td>
                <td>{item.series}</td>
                <td>{item.team}</td>
                <td className="clr-green"> {item.matchplace}</td>
                <td className="clr-green"> {item.winteam}</td>
                <td className="clr-green"> {item.pl}</td>
                <td>
                  <AiFillEdit
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg"
                    className="custom-icon"
                    onClick={() => handleShow()}
                  />
                </td>
              </tr>
            </tbody>
          ))}
          <tfoot>
            <tr className="text-center clr-green">
              <th colSpan={5} className="text-end">
                TOTAL
              </th>
              <th className="text-center" colSpan={2}>
                50000000.00
              </th>
            </tr>
          </tfoot>
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
      <StatementPopup showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Statement;
