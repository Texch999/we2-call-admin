import React, { useState } from "react";
import { Col, Row } from "antd";
import { FaCalendarAlt } from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import "./styles.css";
import StatementIndividualModal from "./StatementIndividualModal";

function Statement() {
  const SETTELMENT_DETAILS = [
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
  const [openStatementIndividualPopup, setOpenStatementIndividualPopup] =
    useState(false);
  const handleStatementrIndividualPopup = () => {
    setOpenStatementIndividualPopup(true);
  };
  const listOfMatches = ["demo", "demo", "demo", "demo"];
  const listOfFancys = ["demo", "demo", "demo", "demo"];
  const listOfSeries = ["demo", "demo", "demo", "demo"];
  const listOfClients = ["demo", "demo", "demo", "demo"];

  const [clientsListDropdown, setClientsListDropdown] = useState(false);
  const [showClientsListDropdown, setShowClientsListDropdown] = useState(false);
  const handleClientsListDropdown = () => {
    setShowClientsListDropdown((prev) => !prev);
  };
  const handleClientsListSelect = (value) => {
    setClientsListDropdown(value);
    setShowClientsListDropdown(false);
  };
  const [seriesListDropDown, setSeriesListDropdown] = useState(false);
  const [showSeriesListDropdown, setShowSeriesListDropdown] = useState(false);
  const handleSeriesListDropdown = () => {
    setShowSeriesListDropdown((prev) => !prev);
  };
  const handleSeriesListSelect = (value) => {
    setSeriesListDropdown(value);
    setShowSeriesListDropdown(value);
  };

  const [matchListDropdown, setMatchListDropdown] = useState(false);
  const [showmatchListDropdown, setShowMatchListDropdown] = useState(false);
  const handleMatchesListDropdown = () => {
    setShowMatchListDropdown((prev) => !prev);
  };
  const handleMatchesListSelect = (value) => {
    setMatchListDropdown(value);
    setShowMatchListDropdown(false);
  };
  const [fancyListDropdown, setFancyListDropdown] = useState(false);
  const [showFancyListDropdown, setShowFancyListDropdown] = useState("");
  const handleFancyssListDropdown = () => {
    setShowFancyListDropdown((prev) => !prev);
  };
  const handleFancysListSelect = (value) => {
    setFancyListDropdown(value);
    setShowFancyListDropdown(false);
  };
  return (
    <>
      <div className="flex-row flex-space-around mrl-5cent relative-position">
        <div className="flex-row w-20">
          <div className="font-14 flex-start mb-5">From</div>
          <div className="calendar-button h-5vh w-70">
            <div className="font-12">Start Date</div>
            <input
              className="login-inputs "
              style={{ opacity: "0" }}
              type="date"
            ></input>
            <FaCalendarAlt className="font-18 fw-600 clr-yellow"></FaCalendarAlt>
          </div>
        </div>
        <div className="flex-row w-20">
          <div className="font-14 flex-start mb-5">To</div>
          <div className="calendar-button h-5vh w-70">
            <input className="login-inputs " type="date"></input>
            <FaCalendarAlt className="font-24 fw-600 clr-yellow"></FaCalendarAlt>
          </div>
        </div>
        <div className="flex-row w-20">
          <div className="font-14 flex-start mb-5">Series Name</div>
          <div
            className="calendar-button w-70 flex-space-around"
            onClick={() => {
              handleSeriesListDropdown();
            }}
          >
            <div className="font-12">
              {seriesListDropDown ? seriesListDropDown : "Series Name"}
            </div>
            {showSeriesListDropdown ? (
              <RiArrowDropUpLine style={{ fontSize: "40px" }} />
            ) : (
              <RiArrowDropDownLine style={{ fontSize: "40px" }} />
            )}
          </div>
        </div>
        <div className="flex-row w-25">
          <div className="font-14 flex-start mb-5">Match Name</div>
          <div
            className="calendar-button w-70 flex-space-around"
            onClick={() => handleMatchesListDropdown()}
          >
            {" "}
            <div className="font-12">
              {matchListDropdown ? matchListDropdown : "Matches Name"}
            </div>
            {showmatchListDropdown ? (
              <RiArrowDropUpLine style={{ fontSize: "40px" }} />
            ) : (
              <RiArrowDropDownLine style={{ fontSize: "40px" }} />
            )}
          </div>
        </div>
        <div className="flex-row w-20">
          <div className="font-14 flex-start mb-5">Fancy</div>
          <div
            className="calendar-button w-70 flex-space-around"
            onClick={() => handleFancyssListDropdown()}
          >
            <div className="font-12">
              {fancyListDropdown ? fancyListDropdown : "Fancy"}
            </div>
            {showFancyListDropdown ? (
              <RiArrowDropUpLine style={{ fontSize: "40px" }} />
            ) : (
              <RiArrowDropDownLine style={{ fontSize: "40px" }} />
            )}
          </div>
        </div>
        <div className="flex-row w-30">
          <div className="font-14 flex-start mb-5">Client Name</div>
          <div
            className="calendar-button w-70 flex-space-around"
            onClick={() => handleClientsListDropdown()}
          >
            <div className="font-12">
              {clientsListDropdown ? clientsListDropdown : "Client Name"}
            </div>
            {showClientsListDropdown ? (
              <RiArrowDropUpLine style={{ fontSize: "40px" }} />
            ) : (
              <RiArrowDropDownLine style={{ fontSize: "40px" }} />
            )}
          </div>
        </div>
        <button className="submit-btn w-10 h-50p mt-15">Verify</button>
        {showmatchListDropdown && (
          <div className="select-team-dropdown matches-dropdown w-30-vw font-12">
            {listOfMatches.map((value, index) => {
              return (
                <div
                  className="h-30p flex-center mb-5 "
                  key={index}
                  onClick={() => handleMatchesListSelect(value)}
                >
                  {console.log(value)}
                  {value}
                </div>
              );
            })}
          </div>
        )}
        {showFancyListDropdown && (
          <div className="select-team-dropdown fancy-dropdown w-30-vw font-12">
            {listOfFancys.map((value, index) => {
              return (
                <div
                  className="h-30p flex-center mb-5"
                  key={index}
                  onClick={() => handleFancysListSelect(value)}
                >
                  {console.log(value)}
                  {value}
                </div>
              );
            })}
          </div>
        )}
        {showClientsListDropdown && (
          <div className="select-team-dropdown clients-dropdown w-30-vw font-12">
            {listOfClients.map((value, index) => {
              return (
                <div
                  className="h-30p flex-center mb-5"
                  key={index}
                  onClick={() => handleClientsListSelect(value)}
                >
                  {console.log(value)}
                  {value}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="hr-line mt-10 mb-10"></div>
      <div className="p-15">
        <div className="table-border p-0">
          <div className="upcoming-meetings-heading">
            <Row>
              <Col span={5}>
                <div className="font-12 fw-600">DATE & TIME</div>
              </Col>
              <Col span={4}>
                <div className="font-12 fw-600">SERIES NAME</div>
              </Col>
              <Col span={3}>
                <div className="font-12 fw-600">TEAM NAME</div>
              </Col>
              <Col span={3}>
                <div className="font-12 fw-600">MATCH PLACE</div>
              </Col>
              <Col span={4}>
                <div className="font-12 fw-600">WIN TEAM</div>
              </Col>
              <Col span={4}>
                <div className="font-12 fw-600">P/L</div>
              </Col>
              <Col span={1}>
                <div className="font-12 fw-600"></div>
              </Col>
            </Row>
          </div>
          <div className="meeting-content">
            {SETTELMENT_DETAILS?.map((item, index) => (
              <div className="upcoming-meetings-content" key={index}>
                <Row>
                  <Col span={5}>
                    <div className="font-12 fw-600">{item.datetime}</div>
                  </Col>
                  <Col span={4}>
                    <div className="font-12 fw-600">{item.series}</div>
                  </Col>
                  <Col span={3}>
                    <div className="font-12 fw-600">{item.team}</div>
                  </Col>
                  <Col span={3}>
                    <div className="font-12 fw-600">{item.matchplace}</div>
                  </Col>
                  <Col span={4}>
                    <div className="font-12 fw-600 clr-green">
                      {item.winteam}
                    </div>
                  </Col>
                  <Col span={4}>
                    <div className="font-12 fw-600 clr-green">{item.pl}</div>
                  </Col>
                  <Col span={1}>
                    <AiFillEdit
                      className="font-30 fw-600 clr-yellow"
                      onClick={() => handleStatementrIndividualPopup()}
                    ></AiFillEdit>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
          <div className="upcoming-meetings-heading">
            <Row>
              <Col span={19}>
                <div className="font-12 fw-600 flex-center">TOTAL</div>
              </Col>
              <Col span={5}>
                <div className="font-12 fw-600 clr-green">50000000000</div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <StatementIndividualModal
        openStatementIndividualPopup={openStatementIndividualPopup}
        setOpenStatementIndividualPopup={setOpenStatementIndividualPopup}
      />
    </>
  );
}

export default Statement;
