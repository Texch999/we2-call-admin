import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { PiArrowCircleRightBold } from "react-icons/pi";
import { useNavigate } from "react-router";
import FancyRiskPositionTable from "./FancyRiskPositionTable";

const FancyShareRisk = () => {
  const navigate = useNavigate();
  const fancyRiskHeadingsOne = [
    { header: "CLIENT NAME", field: "client_name" },
    { header: "GROSS P/L", field: "grossPL" },
    { header: "C NET", field: "cNet" },
    { header: "RF NET", field: "rfNet" },
    { header: "NET P/L", field: "netPL" },
  ];
  const fancyRiskDataOne = [
    {
      client_name: "Animesh",
      grossPL: 50000000,
      cNet: 50000000,
      rfNet: 50000000,
      netPL: 50000000,
    },
    {
      client_name: "Ganesh",
      grossPL: 50000000,
      cNet: 50000000,
      rfNet: 50000000,
      netPL: 50000000,
    },
    {
      client_name: "Jayanth",
      grossPL: 50000000,
      cNet: 50000000,
      rfNet: 50000000,
      netPL: 50000000,
    },
    {
      client_name: "Srikanth",
      grossPL: 50000000,
      cNet: 50000000,
      rfNet: 50000000,
      netPL: 50000000,
    },
    {
      client_name: "Sri182",
      grossPL: 50000000,
      cNet: 50000000,
      rfNet: 50000000,
      netPL: 50000000,
    },
  ];
  const fancyRiskHeadingsTwo = [
    { header: "OVERS", field: "over" },
    { header: "GROSS P/L", field: "grossPL" },
    { header: "C NET", field: "cNet" },
    { header: "RF NET", field: "rfNet" },
    { header: "NET P/L", field: "netPL" },
  ];
  const fancyRiskDataTwo = [
    {
      over: "20 over",
      grossPL: 50000000.0,
      cNet: 50000000.0,
      rfNet: 50000000.0,
      netPL: 50000000.0,
    },
    {
      over: "15 over",
      grossPL: 50000000.0,
      cNet: 50000000.0,
      rfNet: 50000000.0,
      netPL: 50000000.0,
    },
    {
      over: "10 over",
      grossPL: 50000000.0,
      cNet: 50000000.0,
      rfNet: 50000000.0,
      netPL: 50000000.0,
    },
    {
      over: "5 over",
      grossPL: 50000000.0,
      cNet: 50000000.0,
      rfNet: 50000000.0,
      netPL: 50000000.0,
    },
    {
      over: "1 over",
      grossPL: 50000000.0,
      cNet: 50000000.0,
      rfNet: 50000000.0,
      netPL: 50000000.0,
    },
  ];
  const fancyRiskHeadingsThree = [
    { header: "RUNS", field: "runs" },
    { header: "AMOUNT", field: "amount" },
    { header: "C POSITION", field: "cPosition" },
    { header: "RF POSITION", field: "rfPosition" },
    { header: "URS POSITION", field: "ursPosition" },
  ];
  const fancyRiskDataThree = [
    {
      runs: "-44 runs",
      amount: 50000000.0,
      cPosition: 50000000.0,
      rfPosition: 50000000.0,
      ursPosition: 50000000.0,
    },
    {
      runs: "-44 runs",
      amount: 50000000.0,
      cPosition: 50000000.0,
      rfPosition: 50000000.0,
      ursPosition: 50000000.0,
    },
    {
      runs: "-40 runs",
      amount: 50000000.0,
      cPosition: 50000000.0,
      rfPosition: 50000000.0,
      ursPosition: 50000000.0,
    },
    {
      runs: "42 runs",
      amount: 50000000.0,
      cPosition: 50000000.0,
      rfPosition: 50000000.0,
      ursPosition: 50000000.0,
    },
    {
      runs: "40 runs",
      amount: 50000000.0,
      cPosition: 50000000.0,
      rfPosition: 50000000.0,
      ursPosition: 50000000.0,
    },
  ];
  return (
    <div className="p-4">
      <h5 className="meetings-heading mb-3">Match Share Risk </h5>
      <hr />
      <div className="d-flex justify-content-between align-items-center mb-2 share-risk-live-match-container">
        <Button className="fs-lg all-match-button share-risk-match-button clr-yellow text-start">
          Share Risk - Live Match
        </Button>
        <Button
          className="all-match-button rounded-pill d-flex align-items-center button-border"
          onClick={() => navigate("/match-share-risk-position")}
        >
          Match Risk <PiArrowCircleRightBold size={20} className="ms-2" />
        </Button>
      </div>
      <Container
        fluid
        className="match-share-risk-position-table-container mt-3"
      >
        <Row>
          <Col>
            <FancyRiskPositionTable
              teamName="IND Vs SL"
              tableHeading="Fancy Result P/L - "
              data={fancyRiskDataOne}
              headings={fancyRiskHeadingsOne}
            />
          </Col>
          <Col>
            <FancyRiskPositionTable
              teamName="IND vs SL"
              tableHeading="Fancy Result P/L - "
              data={fancyRiskDataTwo}
              headings={fancyRiskHeadingsTwo}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col></Col>
          <Col>
            <FancyRiskPositionTable
              tableHeading="Risk Running Position P/L"
              data={fancyRiskDataThree}
              headings={fancyRiskHeadingsThree}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FancyShareRisk;
