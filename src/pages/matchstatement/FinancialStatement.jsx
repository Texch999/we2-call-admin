import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import "./styles.css";
import { Col, Container, Modal, Row } from "react-bootstrap";
import FinancialPopupStatement from "./FinancialPopupStatement";
import DatePicker from "react-datepicker";
import { FaRegCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import Table from "../home-page/Table";
function FinancialStatement(props) {
  const { financialStatementData } = props;
  const tableColumns = [
    { header: "DATE & TIME", field: "dateTime" },
    { header: "SERIES NAME", field: "seriesName" },
    { header: "TEAM NAME", field: "teamName" },
    { header: "MATCH PLACE", field: "matchplace" },
    { header: "WIN TEAM", field: "winTeam" },
    { header: "P/L", field: "profitLoss" },
    {
      field: "edit",
    },
  ];
  const FINANCIAL_STATEMENT_DETAILS = financialStatementData.map((item) => {
    return {
      dateTime: item?.sport_name,
      seriesName: item?.series_name,
      teamName: (
        <div>
          {item?.team1} VS {item?.team1}
        </div>
      ),
      matchplace: item?.stadium,
      winTeam: item?.winTeam,
      profitLoss: item?.totalAmount?.totalLossOrProfit,
      edit: (
        <AiFillEdit
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
          className="custom-icon"
          onClick={() => handleFinancialModalShow()}
        />
      ),
    };
  });
  const [selectedDate, setSelectedDate] = useState(null);

  const [showFinancialModal, setShowFinancialModal] = useState(false);
  const handleFinancialModalShow = () => setShowFinancialModal(true);
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
          </Col>
          <Col className="col-lg-2 col-md-3">
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
          </Col>
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
          </Col>
          <Col className="ms-1 me-1 mt-4 col-lg-1 col-md-2">
            <button className="submit-button medium-font p-2 rounded all-none">
              Verify
            </button>
          </Col>
        </Row>
      </Container>
      <hr />
      <Table data={FINANCIAL_STATEMENT_DETAILS} columns={tableColumns} />
      <FinancialPopupStatement
        showFinancialModal={showFinancialModal}
        setShowFinancialModal={setShowFinancialModal}
      />
    </div>
  );
}

export default FinancialStatement;
