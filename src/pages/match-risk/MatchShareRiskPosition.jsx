import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router";
import "./style.css";
import { PiArrowCircleDownBold } from "react-icons/pi";
import MatchRiskPositionTable from "./MatchRiskPositionTable";

const MatchShareRiskPosition = () => {
  const navigate = useNavigate();
  const shareRiskLiveMatchData = [
    {
      date_time: "19 July 2023, 10:00:00 PM",
      series_name: "Men T20 World Cup 2023",
      team_name: "Newziland vs Srilanka",
      match_place: "Amhadabad Stadium",
      team_one: "NewZealnd",
      amount: 50000000,
      team_two: "Srilanka",
      profit: 5000000,
    },
    {
      date_time: "19 July 2023, 10:00:00 PM",
      series_name: "Women T20 World Cup 2023",
      team_name: "India vs Srilanka",
      match_place: "Amhadabad Stadium",
      team_one: "India Wo",
      amount: 50000000,
      team_two: "Srilanka Wo",
      profit: 5000000,
    },
    {
      date_time: "19 July 2023, 10:00:00 PM",
      series_name: "Men T20 World Cup 2023",
      team_name: "India vs Srilanka",
      match_place: "Amhadabad Stadium",
      team_one: "NewZealnd",
      amount: 50000000,
      team_two: "Srilanka",
      profit: 5000000,
    },
    {
      date_time: "19 July 2023, 10:00:00 PM",
      series_name: "Men T20 World Cup 2023",
      team_name: "Newziland vs Srilanka",
      match_place: "Amhadabad Stadium",
      team_one: "NewZealnd",
      amount: 50000000,
      team_two: "Srilanka",
      profit: 5000000,
    },
    {
      date_time: "19 July 2023, 10:00:00 PM",
      series_name: "Men T20 World Cup 2023 ",
      team_name: "India vs Srilanka",
      match_place: "Amhadabad Stadium",
      team_one: "NewZealnd",
      amount: 50000000,
      team_two: "Srilanka",
      profit: 5000000,
    },
    {
      date_time: "19 July 2023, 10:00:00 PM",
      series_name: "Men T20 World Cup 2023",
      team_name: "Newziland vs Srilanka",
      match_place: "Amhadabad Stadium",
      team_one: "NewZealnd",
      amount: 50000000,
      team_two: "Srilanka",
      profit: 5000000,
    },
  ];

  const shareRiskLiveMatchHeadings = [
    "DATE & TIME",
    "SERIES NAME",
    "TEAM NAME",
    "MATCH PLACE",
    "",
    "",
    "",
    "",
  ];
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

      <MatchRiskPositionTable />
    </div>
  );
};

export default MatchShareRiskPosition;
