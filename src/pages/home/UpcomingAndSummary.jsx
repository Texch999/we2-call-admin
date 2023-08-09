import { Col, Grid, Row } from "antd";
import React from "react";
import { AiOutlineDown, AiOutlineDownCircle } from "react-icons/ai";

function UpcomingAndSummary() {
  return (
    <Row className="upcoming-main-container flex-space-between">
      <div className="w-49 upcoming-container">
        <div className="w-100 flex-space-between ">
          <div>Live/Upcoming Meetings</div>
          <div>
            See All
            <AiOutlineDownCircle />
          </div>
        </div>
      </div>
      <div className="w-49 upcoming-container">helo</div>
    </Row>
  );
}

export default UpcomingAndSummary;
