import React, { useState } from "react";
import { GiClick } from "react-icons/gi";
import ClientPLData from "./ClientPLData";
function RfplTable({ matchDetails, winTeam, onePageData }) {
  const [showClientPL, setShowClientPL] = useState(false);
  const [selectedClientID, setSelectedClientID] = useState("");
  const [selectedClientName, setSelectedClientName] = useState("");
  const ulShare = localStorage.getItem("ul_share");
  const handleClientData = (clientID, clientName) => {
    setShowClientPL((prev) => !prev);
    setSelectedClientID(clientID);
    setSelectedClientName(clientName);
  };
  let clientPL = 0,
    refPL = 0,
    matchPL = 0;

  const referralFinancialStatementAllData =
    onePageData &&
    onePageData?.length > 0 &&
    onePageData?.map((report) => {
      clientPL = onePageData.reduce(
        (acc, obj) => acc + (+obj?.clientNet || 0),
        0
      );
      matchPL = onePageData.reduce(
        (acc, obj) => acc + (+obj?.totalLossOrProfit || 0),
        0
      );
      refPL = onePageData.reduce(
        (acc, obj) => acc + (+obj?.referalNet || 0),
        0
      );
      const amount = report?.matchEntryResult?.amount;
      return {
        name: report?.client_name,
        masterProfitLoss: (
          <div className={`${amount >= 0 ? "clr-green" : "clr-red"}`}>
            {amount}
          </div>
        ),
        rfShare: (
          <div
            className={`${report?.referalShare >= 0 ? "green-clr" : "red-clr"}`}
          >
            {report?.referalShare}
          </div>
        ),
        fancyProfitLoss: (
          <div className="flex-center">
            <div
              className={
                report?.fancyEntryResult?.amount >= 0 ? "green-clr" : "red-clr"
              }
            >
              {report?.fancyEntryResult?.amount}
            </div>
          </div>
        ),
        fancyReferralComm: (
          <div
            className={`${
              report?.referralComission >= 0 ? "green-clr" : "red-clr"
            }`}
          >
            {report?.referralComission}
          </div>
        ),
        referralMFC: (
          <div
            className={`${report?.referalNet >= 0 ? "green-clr" : "red-clr"}`}
          >
            {report?.referalNet}
          </div>
        ),
        client_id: report?.client_id,
      };
    });

  return (
    <div>
      <table className="w-100 match-position-table small-font">
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>Match P/L</th>
            <th>RF Share</th>
            <th>Fancy P/L</th>
            <th>RefCom(M+F) F-Roll-Com</th>
            <th>Referal M+F+C</th>
            <th>Details</th>
          </tr>
        </thead>
        {referralFinancialStatementAllData?.map((item, index) => (
          <tbody key={index}>
            <tr className="text-center">
              <td>{item.name}</td>
              <td>{item.masterProfitLoss}</td>
              <td>{item?.fancyProfitLoss}</td>
              <td>{item.rfShare}</td>
              <td>{item?.fancyReferralComm}</td>
              <td>{item?.referralMFC}</td>
              <td>
                <GiClick
                  onClick={() => handleClientData(item?.client_id, item?.name)}
                  className="custom-click-icon ms-1 mt-2"
                />
              </td>
            </tr>
          </tbody>
        ))}
        <tfoot>
          <tr className="text-center small-font clr-green all-none">
            <th>TOTAL</th>
            <th>50000000.00</th>
            <th>50000000.00</th>
            <th>50000000.00</th>
            <th>50000000.00</th>
            <th>50000000.00</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
      <table className="w-100 match-position-table small-font mt-2">
        <thead>
          <tr className="text-center">
            <th>C Net P/L</th>
            <th>Ref Net P/L</th>
            <th>Match P/L</th>
            <th>UL Share {ulShare}%</th>
            <th>Match Net P/L</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className={`${clientPL >= 0 ? "clr-green" : "clr-red"}`}>
              {clientPL}
            </td>
            <td className={`${refPL >= 0 ? "clr-green" : "clr-red"}`}>
              {refPL}
            </td>
            <td className={`${matchPL >= 0 ? "clr-green" : "clr-red"}`}>
              {matchPL}
            </td>
            <td className={`${matchPL >= 0 ? "clr-green" : "clr-red"}`}>
              {matchPL >= 0
                ? -(matchPL * ulShare) / 100
                : (matchPL * ulShare) / 100}
            </td>
            <td
              className={`${
                matchPL - (matchPL * ulShare) / 100 >= 0
                  ? "clr-green"
                  : "clr-red"
              }`}
            >
              {(matchPL - (matchPL * ulShare) / 100).toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
      {showClientPL && (
        <ClientPLData
          winTeam={winTeam}
          matchDetails={matchDetails}
          selectedClientID={selectedClientID}
          selectedClientName={selectedClientName}
        />
      )}
    </div>
  );
}

export default RfplTable;
