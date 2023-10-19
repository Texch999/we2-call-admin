import { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { PiArrowCircleRightBold } from "react-icons/pi";
import FancyRiskPositionTable from "./FancyRiskPositionTable";
import { useHistory } from "react-router";

const FancyShareRisk = () => {
  const history = useHistory();
  const [matchPositionShareCommStatus, setMatchPositionShareCommStatus] =
    useState(false);
  const [positionOne, setPositionOne] = useState("client_name");
  const [positionTwo, setPositionTwo] = useState("over");
  const [positionThree, setPositionThree] = useState("runs");
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
  const [matchpositionPopData, setMatchPositionPopUpData] = useState("");
  const [matchpositionPopHeadings, setMatchPositionPopUpHeadings] =
    useState("");
  const [subHeading, setSubHeading] = useState("");

  const matchPositionSharePopUpHeadings = [
    { header: "Client Name", field: "client_name" },
    { header: "Client Share", field: "client_share" },
    { header: "Rf Share", field: "rf_share" },
    { header: "UL Share", field: "ul_share" },
  ];
  const matchPositionCommPopUpHeadings = [
    { header: "Client Name", field: "client_name" },
    { header: "Client Comm", field: "client_comm" },
    { header: "Rf Comm", field: "rf_comm" },
    { header: "--", field: "dummy" },
  ];

  const matchPositionSharePopUpData = [
    {
      client_name: "Animesh",
      client_share: 100000.0,
      rf_share: 100000.0,
      ul_share: 100000.0,
    },
    {
      client_name: "Ganesh",
      client_share: 100000.0,
      rf_share: 100000.0,
      ul_share: 100000.0,
    },
    {
      client_name: "Jayantha",
      client_share: 100000.0,
      rf_share: 100000.0,
      ul_share: 100000.0,
    },
    {
      client_name: "sri123",
      client_share: 100000.0,
      rf_share: 100000.0,
      ul_share: 100000.0,
    },
  ];
  const matchPositionCommPopUpData = [
    {
      client_name: "Sri1213",
      client_comm: 100000.0,
      rf_comm: 100000.0,
      dummy: "--",
    },
    {
      client_name: "Jayanth",
      client_comm: 100000.0,
      rf_comm: 100000.0,
      dummy: "--",
    },
    {
      client_name: "Animesh",
      client_comm: 100000.0,
      rf_comm: 100000.0,
      dummy: "--",
    },
    {
      client_name: "Ganesh",
      client_comm: 100000.0,
      rf_comm: 100000.0,
      dummy: "--",
    },
    {
      client_name: "Animesh",
      client_comm: 100000.0,
      rf_comm: 100000.0,
      dummy: "--",
    },
  ];

  const fancyPositionSharePLPopTwoHeadings = [
    { header: "Over", field: "over" },
    { header: "Client Share", field: "client_share" },
    { header: "Rf Share", field: "rf_share" },
    { header: "UL Share", field: "ul_share" },
  ];
  const fancyPositionSharePLPopTwoData = [
    {
      over: "20 over",
      client_share: 100000.0,
      rf_share: 100000.0,
      ul_share: 100000.0,
    },
    {
      over: "15 over",
      client_share: 100000.0,
      rf_share: 100000.0,
      ul_share: 100000.0,
    },
    {
      over: "10 over",
      client_share: 100000.0,
      rf_share: 100000.0,
      ul_share: 100000.0,
    },
    {
      over: "5 over",
      client_share: 100000.0,
      rf_share: 100000.0,
      ul_share: 100000.0,
    },
  ];
  const fancyPositionCommPLPopTwoHeadings = [
    { header: "Over", field: "over" },
    { header: "C-Rf-Comm", field: "client_comm" },
    { header: "Rf-RF- Comm", field: "rf_comm" },
    { header: "--", field: "dummy" },
  ];
  const fancyPositionCommPLPopTwoData = [
    {
      over: "20 Over",
      client_comm: 100000.0,
      rf_comm: 100000.0,
      dummy: "--",
    },
    {
      over: "15 Over",
      client_comm: 100000.0,
      rf_comm: 100000.0,
      dummy: "--",
    },
    {
      over: "10 Over",
      client_comm: 100000.0,
      rf_comm: 100000.0,
      dummy: "--",
    },
    {
      over: "5 Over",
      client_comm: 100000.0,
      rf_comm: 100000.0,
      dummy: "--",
    },
  ];
  const fancyPositionCommPLPopThreeData = [
    {
      runs: "44 runs",
      client_comm: 100000.0,
      rf_comm: 100000.0,
      dummy: "--",
    },
    {
      runs: "10 runs",
      client_comm: 100000.0,
      rf_comm: 100000.0,
      dummy: "--",
    },
    {
      runs: "20 runs",
      client_comm: 100000.0,
      rf_comm: 100000.0,
      dummy: "--",
    },
    {
      runs: "-44 runs",
      client_comm: 100000.0,
      rf_comm: 100000.0,
      dummy: "--",
    },
  ];
  const fancyPositionSharePLPopThreeHeadings = [
    { header: "Runs", field: "runs" },
    { header: "Client Share", field: "client_share" },
    { header: "Rf Share", field: "rf_share" },
    { header: "UL Share", field: "ul_share" },
  ];
  const fancyPositionSharePLPopThreeData = [
    {
      runs: "44 runs",
      client_share: 100000.0,
      rf_share: 100000.0,
      ul_share: 100000.0,
    },
    {
      runs: "-34 runs",
      client_share: 100000.0,
      rf_share: 100000.0,
      ul_share: 100000.0,
    },
    {
      runs: "10 runs",
      client_share: 100000.0,
      rf_share: 100000.0,
      ul_share: 100000.0,
    },
    {
      runs: "-20 runs",
      client_share: 100000.0,
      rf_share: 100000.0,
      ul_share: 100000.0,
    },
  ];
  const fancyPositionCommPLPopThreeHeadings = [
    { header: "Runs", field: "runs" },
    { header: "C-Rf-Comm", field: "client_comm" },
    { header: "Rf-RF- Comm", field: "rf_comm" },
    { header: "--", field: "dummy" },
  ];
  const handleMatchPositionStatus = (buttonType) => {
    if (buttonType === "share") {
      setMatchPositionShareCommStatus(true);
      setMatchPositionPopUpData(matchPositionSharePopUpData);
      setMatchPositionPopUpHeadings(matchPositionSharePopUpHeadings);
      setSubHeading("Fancy Result P/L- IND vs SL");
      setPositionOne("client_name");
    } else if (buttonType === "comm") {
      setMatchPositionShareCommStatus(true);
      setMatchPositionPopUpData(matchPositionCommPopUpData);
      setMatchPositionPopUpHeadings(matchPositionCommPopUpHeadings);
      setSubHeading("Fancy Result P/L- IND vs SL");
      setPositionOne("client_name");
    }
  };
  const handleFancyPositionSharePLPopTwo = (buttonType) => {
    if (buttonType === "share") {
      setMatchPositionShareCommStatus(true);
      setMatchPositionPopUpData(fancyPositionSharePLPopTwoData);
      setMatchPositionPopUpHeadings(fancyPositionSharePLPopTwoHeadings);
      setSubHeading("Fancy Result P/L- IND vs SL");
      setPositionTwo("over");
    } else if (buttonType === "comm") {
      setMatchPositionShareCommStatus(true);
      setMatchPositionPopUpData(fancyPositionCommPLPopTwoData);
      setMatchPositionPopUpHeadings(fancyPositionCommPLPopTwoHeadings);
      setSubHeading("Fancy Result P/L- IND vs SL");
      setPositionTwo("over");
    }
  };
  const handleFancyPositionSharePLPopThree = (buttonType) => {
    if (buttonType === "share") {
      setMatchPositionShareCommStatus(true);
      setMatchPositionPopUpData(fancyPositionSharePLPopThreeData);
      setMatchPositionPopUpHeadings(fancyPositionSharePLPopThreeHeadings);
      setSubHeading("Risk Running Position P/L");
      setPositionThree("runs");
    } else if (buttonType === "comm") {
      setMatchPositionShareCommStatus(true);
      setMatchPositionPopUpData(fancyPositionCommPLPopThreeData);
      setMatchPositionPopUpHeadings(fancyPositionCommPLPopThreeHeadings);
      setSubHeading("Risk Running Position P/L");
      setPositionThree("runs");
    }
  };
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
          onClick={() => history("/match-share-risk-position")}
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
              onClick={handleMatchPositionStatus}
              matchpositionPopData={matchpositionPopData}
              matchpositionPopHeadings={matchpositionPopHeadings}
              subHeading={subHeading}
              matchPositionShareCommStatus={matchPositionShareCommStatus}
              setMatchPositionShareCommStatus={setMatchPositionShareCommStatus}
              totalPosition={positionOne}
            />
          </Col>
          <Col>
            <FancyRiskPositionTable
              teamName="IND vs SL"
              tableHeading="Fancy Result P/L - "
              data={fancyRiskDataTwo}
              headings={fancyRiskHeadingsTwo}
              onClick={handleFancyPositionSharePLPopTwo}
              matchpositionPopData={matchpositionPopData}
              matchpositionPopHeadings={matchpositionPopHeadings}
              subHeading={subHeading}
              matchPositionShareCommStatus={matchPositionShareCommStatus}
              setMatchPositionShareCommStatus={setMatchPositionShareCommStatus}
              totalPosition={positionTwo}
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
              onClick={handleFancyPositionSharePLPopThree}
              matchpositionPopData={matchpositionPopData}
              matchpositionPopHeadings={matchpositionPopHeadings}
              subHeading={subHeading}
              matchPositionShareCommStatus={matchPositionShareCommStatus}
              setMatchPositionShareCommStatus={setMatchPositionShareCommStatus}
              totalPosition={positionThree}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FancyShareRisk;
