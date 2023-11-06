import React, { useEffect, useState } from "react";
import "./styles.css";
import OnePagePopup from "./OnePagePopup";
import { GiClick } from "react-icons/gi";
import {
  GET_ONEPAGE_REPORT,
  GET_COMPLETED_MATCHES_BY_CLEINT,
} from "../../config/endpoints";
import { call } from "../../config/axios";
import CustomPagination from "../pagination/CustomPagination";
import ClientIndPL from "./ClientIndPL";

function OnePageReport(props) {
  const { ONE_PAGE_REPORT_DETAILS } = props;
  const [onePageReportData, setOnePageReportData] = useState([]);
  const [individualClientData, setIndividualClientData] = useState([]);
  const [induvisualClientStatus, setInduvisualClientStatus] = useState(false);
  const [induvisualClientName, setInduvisualClientName] = useState("");

  const [clientName, setClientName] = useState("");
  const [clientId, setClientId] = useState("");
  const [netPLInduvisualClient, setNetPLInduvisualClient] = useState(0);

  let register_id = localStorage?.getItem("register_id");
  let account_role = localStorage?.getItem("account_role");

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
            report?.totalLossOrProfit >= 0 ? "approved-color" : "red-clr"
          }`}
        >
          {report?.totalLossOrProfit}
        </div>
      ),
      onClick: () =>
        handleClientName(
          report?.client_name,
          report?.client_id,
          report?.totalLossOrProfit
        ),
    }));

  const getOnePageReportData = async () => {
    await call(GET_ONEPAGE_REPORT, { register_id })
      .then((res) => {
        if (res?.data?.statusCode == 200) {
          setOnePageReportData(res?.data?.data?.client_object);
        }
      })
      .catch((err) => {
        console.log(err, "error");
        throw err;
      });
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

  useEffect(() => {
    getOnePageReportData();
    getIndividualPLReport();
  }, []);

  console.log(ONE_PAGE_REPORT_DETAILS, "onepagereport Data");

  const [showReportPopup, setShowReportPopup] = useState(false);
  const handleReportPageShow = () => {
    setShowReportPopup(true);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add your logic here to fetch data for the selected page.
  };
  return (
    <div className="p-2 mt-4">
      <table className="w-100 match-position-table medium-font">
        <thead>
          <tr className="text-center">
            <th className="w-20">CLIENT NAME</th>
            <th className="w-20">M+F+RC</th>
            <th className="w-20">C NET</th>
            <th className="w-20">RF NET</th>
            <th className="w-20">TOTAL P/L</th>
          </tr>
        </thead>
      </table>
      <div className="referal-table-scroll-content">
        <table className="w-100 match-position-table medium-font">
          {ONE_PAGE_REPORT_DETAILS.length &&
            ONE_PAGE_REPORT_DETAILS?.map((item, index) => (
              <tbody key={index}>
                <tr className="text-center">
                  <td className="w-20">{item.client}</td>
                  <td
                    onClick={() => handleReportPageShow()}
                    className="text-center w-20"
                  >
                    <div className="d-flex flex-row w-100 justify-content-center">
                      {item.mfrc}
                      <GiClick className="custom-click-icon ms-1 mt-2" />
                    </div>
                  </td>
                  <td className="w-20">{item.cnet}</td>
                  <td className="w-20"> {item.rfnet}</td>
                  <td className="clr-green w-20">{item.totalpl}</td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>

      <table className="w-100 match-position-table medium-font">
        <tfoot>
          <tr className="text-center">
            <th colSpan={4}>TOTAL</th>
            <th colSpan={3} className="clr-green">
              50000000.00
            </th>
          </tr>
        </tfoot>
      </table>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="d-flex justify-content-start font-clr-white total-count-container  py-2 px-4 rounded">
          <span>
            Showing <b> {currentPage} </b> 0f <b> {totalPages} </b> Entries....
          </span>
        </div>
        <div className="d-flex justify-content-end mt-2">
          <CustomPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <OnePagePopup
        clientData={clientData}
        showReportPopup={showReportPopup}
        setShowReportPopup={setShowReportPopup}
        onePageReportdata1={onePageReportdata1}
        individualClientData={individualClientData}
        induvisualClientStatus={induvisualClientStatus}
        induvisualClientName={induvisualClientName}
      />
    </div>
  );
}

export default OnePageReport;
