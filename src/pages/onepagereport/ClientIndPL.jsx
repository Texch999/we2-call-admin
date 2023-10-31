import React, { useState } from "react";
import AdminsTable from "./AdminsTable";
function ClientIndPL(props) {
  const [showIndividualCLientData, setShowIndividualClientData] =
    useState(false);
  const handleClientButton = () => {
    setShowIndividualClientData(true);
  };
  const {
 
    clientData,
    individualReportClientData,
    clientName,
    netPLInduvisualClient,
  } = props;
  // console.log(ONE_PAGE_REPORT_DETAILS, "one page report details");
  const PAGE_REPORT_DETAILS =
    clientData?.length &&
    clientData?.map((item, index) => ({
      name: item.client_name,
      pl: item.amount,
    }));
  console.log(PAGE_REPORT_DETAILS, "one page report");
  const CLIENT_PAGE_REPORT_DETAILS =
    individualReportClientData.length &&
    individualReportClientData?.map((item, index) => ({
      date: item.matchDate,
      matchname: item.matchName,
      winteam: item.winTeam,
      netpl: item.amount,
    }));
  console.log(individualReportClientData, "individualReportClientData");
  // const CLIENT_PAGE_REPORT_DETAILS = [
  //   {
  //     date: "25-07-2023",
  //     matchname: "India vs Sri Lanka",
  //     winteam: "India",
  //     netpl: "50000000.00",
  //   },
  //   {
  //     date: "25-07-2023",
  //     matchname: "India vs Sri Lanka",
  //     winteam: "India",
  //     netpl: "50000000.00",
  //   },
  //   {
  //     date: "25-07-2023",
  //     matchname: "India vs Sri Lanka",
  //     winteam: "India",
  //     netpl: "50000000.00",
  //   },
  //   {
  //     date: "25-07-2023",
  //     matchname: "India vs Sri Lanka",
  //     winteam: "India",
  //     netpl: "50000000.00",
  //   },
  //   {
  //     date: "25-07-2023",
  //     matchname: "India vs Sri Lanka",
  //     winteam: "India",
  //     netpl: "50000000.00",
  //   },
  // ];
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
            {PAGE_REPORT_DETAILS?.length &&
              PAGE_REPORT_DETAILS?.map((item, index) => (
                <tbody key={index}>
                  <tr className="text-center" onClick={handleClientButton}>
                    <td>{item.name}</td>
                    <td className="clr-green">{item.pl}</td>
                  </tr>
                </tbody>
              ))}
            {/* <tfoot>
              <tr className="text-center">
                <th className="text-center">TOTAL</th>
                <th className="clr-green">500000000.00</th>
              </tr>
            </tfoot> */}
          </table>
        </div>
        {showIndividualCLientData && (
          <div className="d-flex flex-column w-70">
            <div className="mb-2">
              <table className="match-position-table medium-font w-100">
                <thead>
                  <tr className="text-center">
                    <th className="text-start">
                     <span className="clr-yellow">{clientName}</span>  : {netPLInduvisualClient}
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
                <tfoot>
                  <tr className="text-center">
                    <th colSpan={3} className="text-end">
                      TOTAL
                    </th>
                    <th>{netPLInduvisualClient}</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClientIndPL;
