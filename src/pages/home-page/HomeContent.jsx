import React from "react";
import ManagementContainer from "./ManagementContainer";
import MeetingAndSummary from "./MeetingAndSummary";
import TopUsersList from "./TopUsersList";
import Alert from "./Alert";

function HomeContent() {
  return (
    <div className="container-fluid">
      <ManagementContainer />
      <MeetingAndSummary />
      <TopUsersList />
      <Alert />
    </div>
  );
}

export default HomeContent;
