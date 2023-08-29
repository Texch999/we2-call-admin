import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { PiArrowCircleRightBold } from "react-icons/pi";
import { useNavigate } from "react-router";
import FancyRiskPositionTable from "./FancyRiskPositionTable";

const FancyShareRisk = () => {
  const navigate = useNavigate();
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
            />
          </Col>
          <Col>
            <FancyRiskPositionTable
              teamName="IND vs SL"
              tableHeading="Fancy Result P/L - "
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col></Col>
          <Col>
            <FancyRiskPositionTable tableHeading="Risk Running Position P/L" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FancyShareRisk;
