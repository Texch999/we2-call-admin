import React, { useState } from "react";
import OnePageReport from "./OnePageReport";
import IndiviudalPLReport from "./IndiviudalPLReport";
import { Button } from "react-bootstrap";
import {
  GET_COMPLETED_MATCHES_BY_CLEINT,
  GET_INDUVISUAL_MATCH_REPORT,
  GET_INDUVISUAL_REFERRAL_BY,
  GET_INDUVISUAL_REPORTS,
  GET_ONEPAGE_REPORT,
  GET_FINANCIAL_STATEMENT_BY_DATE,
} from "../../config/endpoints";
import { call } from "../../config/axios";
import { useEffect } from "react";
import moment from "moment";

function ReportPage() {
  const reportList = ["One Page Report", "Individual P/L Report"];
  const [activeReport, setActiveReport] = useState("One Page Report");
  const handleReport = (report) => {
    setActiveReport(report);
  };

  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  let account_role = localStorage?.getItem("account_role");
  const ulShare = localStorage?.getItem("ul_share") || 0;

  const [onePageReportData, setOnePageReportData] = useState([]);
  const [individualPlData, setIndividualPlData] = useState([]);
  const [indivisualMatchReportData, setIndivisualMatchReportData] = useState(
    []
  );
  const [invidiualReportReferralData, setInvidiualReportReferralData] =
    useState([]);
  const [completeMatchesData, setCompleteMatchesData] = useState([]);
  const [individualClientData, setIndividualClientData] = useState([]);
  const [induvisualClientStatus, setInduvisualClientStatus] = useState(false);

  const getIndividualPLReport = async (clientId) => {
    await call(GET_COMPLETED_MATCHES_BY_CLEINT, {
      register_id,
      account_role,
      client_id: clientId,
    })
      .then((res) => {
        console.log("res.data.data", res.data);
        setIndividualClientData(res?.data?.data);
        setInduvisualClientStatus((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };
  const induvisualClientData =
    individualClientData &&
    individualClientData?.length > 0 &&
    individualClientData?.map((client) => {
      const netCommission = +client?.fancyEntryResult?.clientCommission
        ? +client?.clientComission - +client?.clientFancyComission
        : client?.clientComission;
      const totalAmountAfterCommission =
        parseFloat(+client?.amount || 0) +
        parseFloat(+client?.clientComission || 0);
      return {
        cNameMatchPL: (
          <div className="client-name-role-container mb-5 mt-5">
            <div>{`${client?.team1} vs ${client?.team2}`}</div>
            <div
              className={
                +client?.matchEntryResult?.amount >= 0
                  ? "clr-green"
                  : "clr-red"
              }
            >
              {client?.matchEntryResult?.amount}
            </div>
            <div>{moment(+client?.matchTimeStamp).format("DD-MM-YYYY")}</div>
          </div>
        ),
        fancyPL: (
          <div
            className={
              +client?.fancyEntryResult?.amount >= 0
                ? "clr-green"
                : "clr-red"
            }
          >
            {+client?.fancyEntryResult?.amount}
          </div>
        ),
        mfComm: (
          <div className={+netCommission >= 0 ? "clr-green" : "clr-red"}>
            {+netCommission}
          </div>
        ),
        roleComm: (
          <div
            className={
              +client?.fancyEntryResult?.clientCommission >= 0
                ? "clr-green"
                : "clr-red"
            }
          >
            {client?.fancyEntryResult?.clientCommission}
          </div>
        ),
        masterProfitloss: (
          <div
            className={
              +totalAmountAfterCommission >= 0 ? "clr-green" : "clr-red"
            }
          >
            {totalAmountAfterCommission}
          </div>
        ),
      };
    });
  // const clientData =
  //   onePageReportData?.length > 0 &&
  //   onePageReportData?.map((report) => ({
  //     client_name: report?.client_name,
  //     amount: (
  //       <div
  //         className={`${
  //           report?.totalLossOrProfit >= 0 ? "clr-green" : "clr-red"
  //         }`}
  //       >
  //         {report?.totalLossOrProfit}
  //       </div>
  //     ),
  //     onClick: () =>
  //       handleClientName(
  //         report?.client_name,
  //         report?.client_id,
  //         report?.totalLossOrProfit
  //       ),
  //   }));
  // const getOnePageReportData = async () => {
  //   await call(GET_ONEPAGE_REPORT, { register_id })
  //     .then((res) => {
  //       setOnePageReportData(res?.data?.data?.client_object);
  //     })
  //     .catch((err) => console.log(err));
  // };
  const getOnePageReportData = async () => {
    await call(GET_ONEPAGE_REPORT, { register_id })
      .then((res) => {
        setOnePageReportData(res?.data?.data?.client_object);
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

  const ONE_PAGE_REPORT_DETAILS =
    onePageReportData.length &&
    onePageReportData?.map((item) => {
      const totalAmountAfterCommission =
        parseFloat(item?.amount || 0) + parseFloat(item?.clientComission || 0);
      const clienPL =
        parseFloat(item?.amount || 0) +
        parseFloat(item?.clientShare || 0) +
        parseFloat(item?.clientComission || 0);
      const rfNet =
        parseFloat(item?.referalShare || 0) +
        parseFloat(item?.referralComission || 0);
      return {
        client: item.client_name,
        mfrc: (
          <div
            className={
              totalAmountAfterCommission >= 0 ? "clr-green" : "clr-red"
            }
          >
            {totalAmountAfterCommission}
          </div>
        ),
        // mfrc: item.amount,
        cnet: (
          <div className={clienPL >= 0 ? "clr-green" : "clr-red"}>
            {clienPL}
          </div>
        ),
        rfnet: (
          <div className={rfNet >= 0 ? "clr-green" : "clr-red"}>{rfNet}</div>
        ),
        totalpl:
          (
            <div
              className={item?.totalLossOrProfit >= 0 ? "clr-green" : "clr-red"}
            >
              {item?.totalLossOrProfit}
            </div>
          ) || 0,
      };
    });
  const getCompleteMatches = async () => {
    await call(GET_FINANCIAL_STATEMENT_BY_DATE, {
      register_id,
      account_role,
    })
      .then((res) => {
        // const result = res?.data?.data?.Items;
        setCompleteMatchesData(
          res?.data?.data?.filter((item) => item?.match_declared === "Y")
        );
        // console.log(result,"result");
      })
      .catch((err) => {
        throw err;
      });
  };
  const individualReportULShareData =
    completeMatchesData &&
    completeMatchesData?.length > 0 &&
    completeMatchesData?.map((match) => {
      const netAmount = +match?.totalAmount?.totalLossOrProfit;
      const netAfterUlShare = +((+netAmount * +ulShare) / 100);
      return {
        matchName: (
          <div>
            <div>{match?.match_name}</div>
            <div>{moment(match?.matchTimeStamp).format("DD-MM-YYYY")}</div>
          </div>
        ),
        ULnetPL: (
          <div className={+netAmount >= 0 ? "clr-green" : "clr-red"}>
            {netAmount}
          </div>
        ),
        winTeam: match?.winTeam,
        afterAllSharePL: (
          <div className={+netAmount >= 0 ? "clr-red" : "clr-green"}>
            {-netAfterUlShare}
          </div>
        ),
      };
    });

  useEffect(() => {
    getOnePageReportData();
    getIndividualPLReport();
    getIndividualPLRefferal();
    getIndivisualMatchReport();
    getCompleteMatches();
  }, []);

  return (
    <div className="p-4">
      <h5 className="meetings-heading mb-3">
        Your Book Client One Page Report
      </h5>
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
        <OnePageReport
          ONE_PAGE_REPORT_DETAILS={ONE_PAGE_REPORT_DETAILS}
          induvisualClientData={induvisualClientData}
          induvisualClientStatus={induvisualClientStatus}
        />
      ) : (
        <IndiviudalPLReport ONE_PAGE_REPORT_DETAILS={ONE_PAGE_REPORT_DETAILS} />
      )}
    </div>
  );
}

export default ReportPage;
