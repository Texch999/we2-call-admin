import React, { useState } from "react";
import MatchScroll from "../match-entry/MatchScroll";
import FancyResultClientTable from "./FancyResultClientTable";
import FancyResultOversTable from "./FancyResultOversTable";
import FancyEntries from "./FancyEntries";
import FancyEntryTable from "./FancyEntryTable";
import FancyRiskRunningTable from "./FancyRiskRunningTable";

function FancyEntry() {
  return (
    <div>
      <MatchScroll />
      <div className="d-flex">
        <FancyResultClientTable />
        {/* <FancyResultOversTable /> */}
        <FancyRiskRunningTable />
      </div>
      <FancyEntries />
      <FancyEntryTable />
    </div>
  );
}

export default FancyEntry;
