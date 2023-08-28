import React from "react";
import AdminsTable from "../onepagereport/AdminsTable";
import { Button } from "react-bootstrap";
import { PiArrowCircleDownBold } from "react-icons/pi";

const MatchRiskPositionTable = (props) => {
  const { teamName } = props;
  const FANCY_CLIENT_HEADER_DATA = [
    { header: "CLIENT NAME", field: "client_name" },
    { header: "GROSS PL", field: "grossPL" },
    { header: "C POSITION", field: "cNet" },
    { header: "RF POSITION", field: "rfNet" },
    { header: "URS POSITION", field: "netPL" },
  ];
  const FANCY_CLIENT_TABLE_DATA = [
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
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-2 share-risk-live-match-container">
        <h6>
          Match Position- <span className="clr-yellow">{teamName}</span>
        </h6>
        <div className="d-flex">
          <Button className="all-match-button  rounded-pill button-border me-2">
            Share{" "}
            <PiArrowCircleDownBold size={20} className="ms-2 clr-yellow" />
          </Button>
          <Button className="all-match-button rounded-pill d-flex align-items-center button-border">
            Comm <PiArrowCircleDownBold size={20} className="ms-2" />
          </Button>
        </div>
      </div>
      <AdminsTable
        data={FANCY_CLIENT_TABLE_DATA}
        columns={FANCY_CLIENT_HEADER_DATA}
        totalPosition="client_name"
      />
    </div>
  );
};

export default MatchRiskPositionTable;
