import React from "react";
import AdminsTable from "../onepagereport/AdminsTable";
import { Button } from "react-bootstrap";
import { PiArrowCircleDownBold } from "react-icons/pi";

import AdminPopReports from "../onepagereport/AdminPopReports";

const FancyRiskPositionTable = (props) => {
  const {
    teamName,
    tableHeading,
    data,
    headings,
    onClick,
    matchpositionPopData,
    matchpositionPopHeadings,
    subHeading,
    matchPositionShareCommStatus,
    setMatchPositionShareCommStatus,
    totalPosition,
  } = props;

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
            onClick={() => onClick("share")}
          >
            Share{" "}
            <PiArrowCircleDownBold size={20} className="ms-2 clr-yellow" />
          </Button>
          <Button
            className="all-match-button rounded-pill d-flex align-items-center button-border"
            onClick={() => onClick("comm")}
          >
            Comm <PiArrowCircleDownBold size={20} className="ms-2" />
          </Button>
        </div>
      </div>
      <AdminsTable
        data={data}
        columns={headings}
        totalPosition={totalPosition}
      />
      {matchPositionShareCommStatus && (
        <AdminPopReports
          show={matchPositionShareCommStatus}
          onHide={() => setMatchPositionShareCommStatus(false)}
          data={matchpositionPopData}
          columns={matchpositionPopHeadings}
          heading={subHeading}
          totalPosition={totalPosition}
        />
      )}
    </div>
  );
};

export default FancyRiskPositionTable;
