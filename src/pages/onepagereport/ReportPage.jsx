import React, { useState } from "react";
import OnePageReport from "./OnePageReport";
import IndiviudalPLReport from "./IndiviudalPLReport";
import { Button } from "react-bootstrap";
import {
  GET_INDUVISUAL_MATCH_REPORT,
  GET_INDUVISUAL_REFERRAL_BY,
  GET_INDUVISUAL_REPORTS,
  GET_ONEPAGE_REPORT,
} from "../../config/endpoints";
import { call } from "../../config/axios";
import { useEffect } from "react";

function ReportPage() {
  const reportList = ["One Page Report", "Individual P/L Report"];
  const [activeReport, setActiveReport] = useState("One Page Report");
  const handleReport = (report) => {
    setActiveReport(report);
  };

  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  let account_role = localStorage?.getItem("account_role");

  const [onePageReportData, setOnePageReportData] = useState([]);
  const [individualPlData, setIndividualPlData] = useState([]);
  const [indivisualMatchReportData, setIndivisualMatchReportData] = useState(
    []
  );
  const [invidiualReportReferralData, setInvidiualReportReferralData] =
    useState([]);

  const getOnePageReportData = async () => {
    await call(GET_ONEPAGE_REPORT, { register_id })
      .then((res) => {
        setOnePageReportData(res?.data?.data?.client_object);
      })
      .catch((err) => console.log(err));
  };

  const getIndividualPLReport = async () => {
    await call(GET_INDUVISUAL_REPORTS, { register_id })
      .then((res) => {
        setIndividualPlData(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  const getIndividualPLRefferal = async () => {
    await call(GET_INDUVISUAL_REFERRAL_BY, { register_id })
      .then((res) => {
        setInvidiualReportReferralData(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  const getIndivisualMatchReport = async (client_id) => {
    await call(GET_INDUVISUAL_MATCH_REPORT, { register_id, client_id })
      .then((res) => {
        setIndivisualMatchReportData(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getOnePageReportData();
    getIndividualPLReport();
    getIndividualPLRefferal();
    getIndivisualMatchReport();
  }, []);

  console.log(onePageReportData, "onePageReportData.....");
  console.log(individualPlData, "individualPlData.....");
  console.log(indivisualMatchReportData, "indivisualMatchReportData.....");
  return (
    <div className="p-4">
      <h5 className="meetings-heading mb-3">One Page Report</h5>
      <div className="mb-3">
        {reportList.map((report, index) => (
          <Button
            key={index}
            className={`me-2 admin-reports-button ${
              report === activeReport ? "active-report-button" : ""
            }`}
            onClick={() => handleReport(report)}
          >
            {report}
          </Button>
        ))}
      </div>
      <div className="hr-line mt-4"></div>
      {activeReport === "One Page Report" ? (
        <OnePageReport />
      ) : (
        <IndiviudalPLReport />
      )}
    </div>
  );
}

export default ReportPage;
