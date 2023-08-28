import React from "react";
import MatchScroll from "../match-entry/MatchScroll";
import FancyResultClientTable from "./FancyResultClientTable";
import FancyResultOversTable from "./FancyResultOversTable";
import FancyEntries from "./FancyEntries";
import FancyEntryTable from "./FancyEntryTable";
import FancyRiskRunningTable from "./FancyRiskRunningTable";
import "./styles.css";

function FancyEntry() {
  return (
    <div>
      <MatchScroll />
      <div className="d-flex flex-wrap">
        <FancyResultClientTable />
        <FancyResultOversTable />
        <FancyRiskRunningTable />
      </div>
      <FancyEntries />
      <FancyEntryTable />
    </div>
  );
}

export default FancyEntry;
