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
  const [refClientName, setRefClientName] = useState("");
  const [clientsDataForRefferal, setClientsDataForRefferal] = useState([]);

  const handleReferralId = (name, refId) => {
    setClientId(clientId);
    setRefName(name);
    setRefId(refId);
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
        referral_name: ref?.referral_name,
        referral_id: ref?.refferal_id,
        amount: (
          <div
            className={ref?.total_profit_or_loss >= 0 ? "clr-green" : "clr-red"}
          >
            {ref?.total_profit_or_loss
              ? ref?.total_profit_or_loss?.toFixed(2)
              : 0}
          </div>
        ),
        onClick: () => handleReferralId(ref?.referral_name, ref?.refferal_id),
      };
    });
  const [clientName, setClientName] = useState("");
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
  console.log(onePageReportData, "onePageReportData");

  const ONE_PAGE_REPORT_DETAILS =
    onePageReportData?.length > 0 &&
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
        clientId: item.client_id,
        client: item.client_name,
        mfrc: (
          <div
            className={
              totalAmountAfterCommission >= 0 ? "clr-green" : "clr-red"
            }
          >
            {totalAmountAfterCommission
              ? totalAmountAfterCommission.toFixed(2)
              : 0}
          </div>
        ),
        cnet: (
          <div className={clienPL >= 0 ? "clr-green" : "clr-red"}>
            {clienPL}
          </div>
        ),
        rfnet: (
          <div className={rfNet >= 0 ? "clr-green" : "clr-red"}>
            {rfNet ? rfNet.toFixed(2) : 0}
          </div>
        ),
        totalpl:
          (
            <div
              className={item?.totalLossOrProfit >= 0 ? "clr-green" : "clr-red"}
            >
              {item?.totalLossOrProfit ? item?.totalLossOrProfit.toFixed(2) : 0}
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
      })
      .catch((err) => {
        throw err;
      });
  };
  const individualReportPlatformCommData =
    completeMatchesData &&
    completeMatchesData?.length > 0 &&
    completeMatchesData?.map((match) => {
      const netAmount = +match?.totalAmount?.totalLossOrProfit;
      return {
        matchName: (
          <div>
            <div>{match?.match_name}</div>
          </div>
        ),
        matchDate: (
          <div>{moment(match?.matchTimeStamp).format("DD-MM-YYYY")}</div>
        ),

        netPL: (
          <div className={+netAmount >= 0 ? "clr-green" : "clr-red"}>
            {netAmount?.toFixed(2) || 0}
          </div>
        ),
        winTeam: match?.winTeam,
        individualReportPlatformComm: (
          <div
            className={
              +match?.totalAmount?.platformCommission >= 0
                ? "clr-green"
                : "clr-red"
            }
          >
            {match?.totalAmount?.platformCommission?.toFixed(2) || 0}
          </div>
        ),
      };
    });
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
            {match?.totalLossOrProfit
              ? match?.totalLossOrProfit?.toFixed(2)
              : 0}
          </div>
        ),
      };
    });
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
          {report?.totalLossOrProfit ? report?.totalLossOrProfit.toFixed(2) : 0}
        </div>
      ),
    }));
  const handleClientName = (client_name, client_id, netPL) => {
    setClientName(client_name);
    setClientId(client_id);
    setNetPLInduvisualClient(netPL);
    // console.log("client....", client_name, client_id);
  };
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
  const invidiualReportReferralHeading = (
    <div>
      <button
        className={`common-active-css inactive-css font-12 individual-referral-name
`}
      >
        Client - {refClientName} Match Wise Rf P/L
      </button>
    </div>
  );
  const individualRefferralData =
    clientsDataForRefferal &&
    clientsDataForRefferal?.length > 0 &&
    clientsDataForRefferal?.map((client) => {
      return {
        referral_name: client?.client_name,
        // amount: 100000,
        amount: (
          <div
            className={client?.referralTotalNet > 0 ? "clr-green" : "clr-red"}
          >
            {client?.referralTotalNet
              ? client?.referralTotalNet?.toFixed(2)
              : 0}
          </div>
        ),
        onClick: () =>
          handleReportReferral(client?.client_name, client?.client_id),
      };
    });
  const handleReportReferral = (name, id) => {
    setRefClientName(name);
    setRefClientId(id);
  };

  useEffect(() => {
    getOnePageReportData();
    // getIndividualPLReport();
    getIndividualPLRefferal();
    // getIndivisualMatchReport();
    getCompleteMatches();
    getRefferalData();
  }, []);

  return (
    <div className="p-3">
      <h5 className="meetings-heading mb-3">
        Your Book Client One Page Report
      </h5>
      <div className="mb-2">
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
      <div className="hr-line mt-3"></div>
      {activeReport === "One Page Report" ? (
        <OnePageReport
          ONE_PAGE_REPORT_DETAILS={ONE_PAGE_REPORT_DETAILS}
          onePageReportData={onePageReportData}
          induvisualClientData={induvisualClientData}
          induvisualClientStatus={induvisualClientStatus}
        />
      ) : (
        <IndiviudalPLReport
          refData={refData}
          individualReportULShareData={individualReportULShareData}
          individualReportReferralData={individualReportReferralData}
          individualReportClientData={
            clientId ? individualReportClientData : individualRefferralData
          }
          clientName={clientName}
          individualClientNameData={individualClientNameData}
          ONE_PAGE_REPORT_DETAILS={ONE_PAGE_REPORT_DETAILS}
          clientData={clientData}
          clientId={clientId}
          refId={refId}
          refClientId={refClientId}
          invidiualReportReferralHeading={invidiualReportReferralHeading}
          setIndivisualMatchReportData={setIndivisualMatchReportData}
          netPLInduvisualClient={netPLInduvisualClient}
          setClientsDataForRefferal={setClientsDataForRefferal}
          individualReportPlatformCommData={individualReportPlatformCommData}
        />
      )}
    </div>
  );
}

export default ReportPage;
