import React, { useState } from "react";
import OnePageReport from "./OnePageReport";
import IndiviudalPLReport from "./IndiviudalPLReport";
import { Button } from "react-bootstrap";
import {
  GET_COMPLETED_MATCHES_BY_CLEINT,
  GET_INDUVISUAL_MATCH_REPORT,
  GET_INDUVISUAL_REFERRAL_BY,
  GET_INDUVISUAL_REPORTS,
  GET_REFFERAL_DATA,
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
  // console.log(onePageReportData,"SangraonePageReportData")
  const [individualPlData, setIndividualPlData] = useState([]);
  const [indivisualMatchReportData, setIndivisualMatchReportData] = useState(
    []
  );
  const [invidiualReportReferralData, setInvidiualReportReferralData] =
    useState([]);
  const [completeMatchesData, setCompleteMatchesData] = useState([]);
  const [individualClientData, setIndividualClientData] = useState([]);
  const [induvisualClientStatus, setInduvisualClientStatus] = useState(false);
  const [induvisualClientName, setInduvisualClientName] = useState("");
  const [refData, setRefData] = useState("");
  const [refName, setRefName] = useState("");
  const [refId, setRefId] = useState("");
  const [clientId, setClientId] = useState("");
  const [refClientId, setRefClientId] = useState("");
  const [netPLInduvisualClient, setNetPLInduvisualClient] = useState(0);

  const handleReferralId = (name, refId) => {
    setClientId(clientId);
    setRefName(name);
    setRefId(refId);
  };
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
  const getRefferalData = async () => {
    await call(GET_REFFERAL_DATA, { register_id })
      .then((res) => {
        setRefData(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  const individualReportReferralData =
    refData &&
    refData?.length > 0 &&
    refData?.map((ref) => {
      return {
        referral_id: ref?.referral_name,
        amount: 1000000.0,
        onClick: () => handleReferralId(ref?.referral_name, ref?.refferal_id),
      };
    });
  const [clientName, setClientName] = useState("");

  const onePageReportdata1 =
    onePageReportData?.length > 0 &&
    onePageReportData?.map((report) => {
      const totalAmountAfterCommission =
        parseFloat(report?.amount || 0) +
        parseFloat(report?.clientComission || 0);
      const clienPL =
        parseFloat(report?.amount || 0) +
        parseFloat(report?.clientShare || 0) +
        parseFloat(report?.clientComission || 0);
      const rfNet =
        parseFloat(report?.referalShare || 0) +
        parseFloat(report?.referralComission || 0);
      return {
        referralComission: (
          <div
            className="client-name-role-container mb-5 mt-5"
            onClick={() => {
              getIndividualPLReport(report?.client_id);
              setInduvisualClientName(report?.client_name);
            }}
          >
            <div>{report?.client_name}</div>
            <div
              className={
                totalAmountAfterCommission >= 0 ? "green-clr" : "clr-red"
              }
            >
              {totalAmountAfterCommission}
            </div>
          </div>
        ),
        clientShare: (
          <div className={clienPL >= 0 ? "green-clr" : "clr-red"}>
            {clienPL}
          </div>
        ),
        referalShare: (
          <div className={rfNet >= 0 ? "green-clr" : "clr-red"}>{rfNet}</div>
        ),
        masterProfitloss:
          (
            <div
              className={
                report?.totalLossOrProfit >= 0 ? "green-clr" : "clr-red"
              }
            >
              {report?.totalLossOrProfit}
            </div>
          ) || 0,
      };
    });

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
                +client?.matchEntryResult?.amount >= 0 ? "clr-green" : "clr-red"
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
              +client?.fancyEntryResult?.amount >= 0 ? "clr-green" : "clr-red"
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

  // const getIndivisualMatchReport = async (client_id) => {
  //   await call(GET_INDUVISUAL_MATCH_REPORT, { register_id, client_id })
  //     .then((res) => {
  //       setIndivisualMatchReportData(res?.data?.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

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
          </div>
        ),
        matchDate: (
          <div>{moment(match?.matchTimeStamp).format("DD-MM-YYYY")}</div>
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
  const individualReportClientData =
    indivisualMatchReportData &&
    indivisualMatchReportData?.length > 0 &&
    indivisualMatchReportData?.map((match) => {
      return {
        matchName: (
          <div>
            <div>{match?.match_name}</div>
          </div>
        ),
        matchDate: (
          <div>{moment(match?.matchTimeStamp).format("DD-MM-YYYY")}</div>
        ),
        netPL: 1000000.0,
        winTeam: match?.winTeam,
        amount: (
          <div
            className={match?.totalLossOrProfit >= 0 ? "clr-green" : "clr-red"}
          >
            {match?.totalLossOrProfit}
          </div>
        ),
      };
    });

  const handleClientName = (client_name, client_id, netPL) => {
    setClientName(client_name);
    setClientId(client_id);
    setNetPLInduvisualClient(netPL);
    // console.log("client....", client_name, client_id);
  };

  const clientData =
    onePageReportData?.length > 0 &&
    onePageReportData?.map((report) => ({
      client_name: report?.client_name,
      amount: (
        <div
          className={`${
            report?.totalLossOrProfit >= 0 ? "clr-green" : "clr-red"
          }`}
          onClick={() =>
            handleClientName(
              report?.client_name,
              report?.client_id,
              report?.totalLossOrProfit
              // report
            )
          }
        >
          {report?.totalLossOrProfit}
        </div>
      ),
    }));

  const individualClientNameData = (
    <div>
      <button
        className={`common-active-css inactive-css font-12 individual-referral-name
  `}
      >
        {clientName} &nbsp; - &nbsp;&nbsp;{" "}
        <span className={netPLInduvisualClient >= 0 ? "clr-green" : "clr-red"}>
          {netPLInduvisualClient}
        </span>
      </button>
      <div className="hr-line"></div>
    </div>
  );
  useEffect(() => {
    getOnePageReportData();
    getIndividualPLReport();
    getIndividualPLRefferal();
    // getIndivisualMatchReport();
    getCompleteMatches();
    getRefferalData();
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
        <IndiviudalPLReport
          individualReportULShareData={individualReportULShareData}
          individualReportReferralData={individualReportReferralData}
          individualReportClientData={
            clientId ? individualReportClientData : ""
          }
          clientName={clientName}
          individualClientNameData={individualClientNameData}
          onePageReportdata1={onePageReportdata1}
          ONE_PAGE_REPORT_DETAILS={ONE_PAGE_REPORT_DETAILS}
          clientData={clientData}
          clientId={clientId}
          refId={refId}
          refClientId={refClientId}
          setIndivisualMatchReportData={setIndivisualMatchReportData}
        />
      )}
    </div>
  );
}

export default ReportPage;
