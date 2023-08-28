import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { PiArrowCircleDownBold } from "react-icons/pi";
import MatchRiskPositionTable from "./MatchRiskPositionTable";

const MatchShareRiskPosition = () => {
  return (
    <div className="p-4">
      <h5 className="meetings-heading mb-3">Match Share Risk</h5>
      <hr />
      <div className="d-flex justify-content-between align-items-center mb-2 share-risk-live-match-container">
        <div>
          <h6>Share Risk - Live Match</h6>
          <Button className="agent-button sm-button">SM</Button>
          <span className="mb-0 ms-2 me-2 add-user-name">Srinivas</span>
        </div>
        <Button className="all-match-button clr-yellow rounded-pill">
          India Vs Sri lanka
        </Button>
        <Button className="all-match-button rounded-pill d-flex align-items-center button-border">
          Fancy Risk <PiArrowCircleDownBold size={20} className="ms-2" />
        </Button>
      </div>
      <Container fluid className="match-share-risk-position-table-container">
        <Row>
          <Col>
            <MatchRiskPositionTable teamName="IND" />
          </Col>
          <Col>
            <MatchRiskPositionTable teamName="SL" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MatchShareRiskPosition;
