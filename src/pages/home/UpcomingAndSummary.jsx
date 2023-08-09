import { Col, Grid, Row } from "antd";
import React from "react";

function UpcomingAndSummary() {
  return (
    <Row gutter={[24, 24]} >
      <Col className="upcoming-container" span={12}></Col>
      <Col className="upcoming-container" span={12}></Col>
    </Row>
  );
}

export default UpcomingAndSummary;
