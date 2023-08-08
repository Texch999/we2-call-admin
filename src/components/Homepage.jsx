import { Col, Row } from "antd";
import React from "react";

function Homepage() {
  return (
    <div className="homepage">
      <Row className="management-container">
        <Col span={14} className="call-management"></Col>
        <Col span={10} className="sports-management"></Col>
      </Row>
    </div>
  );
}

export default Homepage;
