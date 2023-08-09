import { Col, Grid, Row } from "antd";

import { Carousel } from "antd";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import ManagementContainer from "../pages/home/ManagementContainer";
import UpcomingAndSummary from "../pages/home/UpcomingAndSummary";
import TopWinners from "../pages/home/TopWinners";

function Homepage() {
  return (
    <div className="homepage">
      <ManagementContainer />
      <UpcomingAndSummary />
      <TopWinners />
    </div>
  );
}

export default Homepage;
