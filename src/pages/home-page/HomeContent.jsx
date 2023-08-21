import React from "react";
import ManagementContainer from "./ManagementContainer";
import MeetingAndSummary from "./MeetingAndSummary";
import TopUsersList from "./TopUsersList";

function HomeContent() {
  return (
    <div className="container-fluid">
      <ManagementContainer />
      <MeetingAndSummary />
      <TopUsersList />
    </div>
  );
}

export default HomeContent;
