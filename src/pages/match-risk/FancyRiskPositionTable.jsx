import React from "react";
import AdminsTable from "../onepagereport/AdminsTable";
import { Button } from "react-bootstrap";
import { PiArrowCircleDownBold } from "react-icons/pi";
import { useState } from "react";
import AdminPopReports from "../onepagereport/AdminPopReports";

const FancyRiskPositionTable = (props) => {
  const { teamName, tableHeading } = props;
  const [matchPositionShareCommStatus, setMatchPositionShareCommStatus] =
    useState(false);
  const [matchpositionPopData, setMatchPositionPopUpData] = useState("");
  const [matchpositionPopHeadings, setMatchPositionPopUpHeadings] =
    useState("");
  const [subHeading, setSubHeading] = useState("");
  const matchFancyRiskHeadings = [
    { header: "CLIENT NAME", field: "client_name" },
    { header: "GROSS P/L", field: "grossPL" },
    { header: "C NET", field: "cNet" },
    { header: "RF NET", field: "rfNet" },
    { header: "NET P/L", field: "netPL" },
  ];
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
  const matchFancyRiskData = [
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
  const handleMatchPositionStatus = (buttonType) => {
    if (buttonType === "share") {
      setMatchPositionShareCommStatus(true);
      setMatchPositionPopUpData(matchPositionSharePopUpData);
      setMatchPositionPopUpHeadings(matchPositionSharePopUpHeadings);
      setSubHeading("Share");
    } else if (buttonType === "comm") {
      setMatchPositionShareCommStatus(true);
      setMatchPositionPopUpData(matchPositionCommPopUpData);
      setMatchPositionPopUpHeadings(matchPositionCommPopUpHeadings);
      setSubHeading("Comm");
    }
  };
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-2 share-risk-live-match-container">
        <h6>
          {tableHeading}
          <span className="clr-yellow">{teamName}</span>
        </h6>
        <div className="d-flex">
          <Button
            className="all-match-button  rounded-pill button-border me-2"
            onClick={() => handleMatchPositionStatus("share")}
          >
            Share{" "}
            <PiArrowCircleDownBold size={20} className="ms-2 clr-yellow" />
          </Button>
          <Button
            className="all-match-button rounded-pill d-flex align-items-center button-border"
            onClick={() => handleMatchPositionStatus("comm")}
          >
            Comm <PiArrowCircleDownBold size={20} className="ms-2" />
          </Button>
        </div>
      </div>
      <AdminsTable
        data={matchFancyRiskData}
        columns={matchFancyRiskHeadings}
        totalPosition="client_name"
      />
      {matchPositionShareCommStatus && (
        <AdminPopReports
          show={matchPositionShareCommStatus}
          onHide={() => setMatchPositionShareCommStatus(false)}
          data={matchpositionPopData}
          columns={matchpositionPopHeadings}
          heading={`Client ${subHeading}`}
          totalPosition="client_name"
        />
      )}
    </div>
  );
};

export default FancyRiskPositionTable;
