import React, { useState } from "react";
import AdminsTable from "./AdminsTable";
function ClientIndPL(props) {
  const {
    clientData,
    individualReportClientData,
    clientName,
    netPLInduvisualClient,
    totalUrsNet,
  } = props;
  const [showIndividualCLientData, setShowIndividualClientData] =
    useState(false);
  const handleClientButton = () => {
    setShowIndividualClientData(true);
  };
  const PAGE_REPORT_DETAILS =
    clientData?.length &&
    clientData?.map((item, index) => ({
      name: item.client_name,
      pl: item.amount,
    }));
  const CLIENT_PAGE_REPORT_DETAILS =
    individualReportClientData.length &&
    individualReportClientData?.map((item, index) => ({
      date: item.matchDate,
      matchname: item.matchName,
      winteam: item.winTeam,
      netpl: item.amount,
    }));

  const totalInduvisualReportClientData =
    individualReportClientData &&
    individualReportClientData?.length > 0 &&
    individualReportClientData?.reduce(
      (acc, obj) => acc + (+obj?.amount?.props?.children || 0),
      0
    );
  const totalClientPl =
    clientData &&
    clientData?.length > 0 &&
    clientData?.reduce(
      (acc, obj) => acc + (+obj?.amount?.props?.children || 0),
      0
    );

  return (
    <div>
      <h6 className="Platform-Comm-PL-">Client :</h6>
      <div className="d-flex flex-row w-100 justify-content-between">
        <div className="w-30">
          <table className="w-100 match-position-table medium-font">
            <thead>
              <tr className="text-center">
                <th>CLIENT NAME</th>
                <th>TOTAL P/L</th>
              </tr>
            </thead>
          </table>
          <div className="referal-table-scroll-content">
            <table className="w-100 match-position-table medium-font">
              {PAGE_REPORT_DETAILS?.length &&
                PAGE_REPORT_DETAILS?.map((item, index) => (
                  <tbody key={index}>
                    <tr className="text-center" onClick={handleClientButton}>
                      <td>{item.name}</td>
                      <td className="clr-green">{item.pl}</td>
                    </tr>
                  </tbody>
                ))}
              <tfoot>
                <tr className="text-center">
                  <th className="text-center">TOTAL</th>
                  <th className={totalClientPl > 0 ? "clr-green" : "clr-red"}>
                    10000
                    {/* {totalClientPl ? totalClientPl?.toFixed(2) : null} */}
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        {showIndividualCLientData && (
          <div className="d-flex flex-column w-70">
            <div className="mb-2">
              <table className="match-position-table medium-font w-100">
                <thead>
                  <tr className="text-center">
                    <th className="text-start">
                      <span className="clr-yellow">{clientName}</span> :{" "}
                      <div
                        className={
                          netPLInduvisualClient >= 0 ? "clr-green" : "clr-red"
                        }
                      >
                        {netPLInduvisualClient
                          ? netPLInduvisualClient.toFixed(2)
                          : 0}
                      </div>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <div>
              {/* <AdminsTable data={PAGE_REPORT_DETAILS} columns/> */}
              <table className="w-100 match-position-table medium-font">
                <thead>
                  <tr className="text-center">
                    <th>DATE</th>
                    <th>MATCH NAME</th>
                    <th>WIN TEAM</th>
                    <th>NET P/L</th>
                  </tr>
                </thead>
              </table>
              <div className="individual-client-table">
                <table className="w-100 match-position-table medium-font">
                  {CLIENT_PAGE_REPORT_DETAILS?.length &&
                    CLIENT_PAGE_REPORT_DETAILS?.map((data, index) => (
                      <tbody key={index}>
                        <tr className="text-center">
                          <td>{data.date}</td>
                          <td>{data.matchname}</td>
                          <td>{data.winteam}</td>
                          <td className="clr-green">{data.netpl}</td>
                        </tr>
                      </tbody>
                    ))}
                </table>
                <table className="w-100 match-position-table medium-font">
                  <tfoot>
                    <tr className="text-center">
                      <th className="text-end">TOTAL</th>
                      <th
                        // className="text-end"
                        className={`text-end ${
                          totalInduvisualReportClientData > 0
                            ? "clr-green"
                            : "clr-red"
                        }`}
                      >
                        {" "}
                        {totalInduvisualReportClientData
                          ? totalInduvisualReportClientData?.toFixed(2)
                          : 0}
                      </th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClientIndPL;
