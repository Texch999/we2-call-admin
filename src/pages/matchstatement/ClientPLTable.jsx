import { useState } from "react";
import ClientPLData from "./ClientPLData";
import { GiClick } from "react-icons/gi";

function ClientPLTable(props) {
  const { popupData, onePageData, matchDetails, winTeam } = props;
  const [selectedClientID, setSelectedClientID] = useState("");
  const [selectedClientName, setSelectedClientName] = useState("");
  const [showClientPL, setShowClientPL] = useState(false);
  const ulShare = localStorage.getItem("ul_share");
  const handleClientData = (clientID, clientName) => {
    setShowClientPL((prev) => !prev);
    setSelectedClientID(clientID);
    setSelectedClientName(clientName);
  };
  let clientPL = 0,
    matchPL = 0,
    refPL = 0;

  let totalMatchPL = 0,
    totalShare = 0,
    totalFancyPL = 0,
    totalClientComm = 0,
    totalClientPL = 0;

  const clientMatchStatementData =
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
      totalMatchPL += amount;
      totalShare += +report?.clientShare || 0;
      totalFancyPL += +report?.fancyProfitLoss || 0;
      totalClientComm += +report?.clientComission || 0;
      totalClientPL += +report?.clientNet;
      return {
        client_id: report?.client_id,
        name: <div>{report?.client_name}</div>,
        masterProfitLoss: (
          <div className={`${amount >= 0 ? "clr-green" : "clr-red"}`}>
            {amount}
          </div>
        ),
        share: (
          <div
            className={`${report?.clientShare >= 0 ? "clr-green" : "clr-red"}`}
          >
            {report?.clientShare}
          </div>
        ),
        fancyProfitLoss: (
          <div
            className={
              report?.fancyEntryResult?.amount >= 0 ? "clr-green" : "clr-red"
            }
          >
            {report?.fancyEntryResult?.amount}
          </div>
        ),
        fancyReferralComm: (
          <div
            className={`${
              report?.clientComission >= 0 ? "clr-green" : "clr-red"
            }`}
          >
            {report?.clientComission}
          </div>
        ),
        clientNet: (
          <div
            className={`${report?.clientNet >= 0 ? "clr-green" : "clr-red"}`}
          >
            {report?.clientNet}
          </div>
        ),
      };
    });

  return (
    <div className="d-flex flex-column">
      <table className="w-100 match-position-table small-font">
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>Match P/L</th>
            <th>Share</th>
            <th>Fancy P/L</th>
            <th>C.Comm(M+F)-RollComm</th>
            <th>M+F+C=C-P/L</th>
            <th>Details</th>
          </tr>
        </thead>
        {clientMatchStatementData?.map((item, index) => (
          <tbody key={index}>
            <tr className="text-center">
              <td>{item.name}</td>
              <td>{item.masterProfitLoss}</td>
              <td>{item.share}</td>
              <td>{item.fancyProfitLoss}</td>
              <td>{item?.fancyReferralComm}</td>
              <td>{item?.clientNet}</td>
              <td>
                <GiClick
                  className="custom-click-icon ms-1 mt-2"
                  onClick={() => handleClientData(item?.client_id, item?.name)}
                />
              </td>
            </tr>
          </tbody>
        ))}
        <tfoot>
          <tr className="text-center small-font all-none">
            <th>TOTAL</th>
            <th className={`${totalMatchPL >= 0 ? "clr-green" : "clr-red"}`}>
              {totalMatchPL}
            </th>
            <th className={`${totalShare >= 0 ? "clr-green" : "clr-red"}`}>
              {totalShare}
            </th>
            <th className={`${totalFancyPL >= 0 ? "clr-green" : "clr-red"}`}>
              {totalFancyPL}
            </th>
            <th className={`${totalClientComm >= 0 ? "clr-green" : "clr-red"}`}>
              {totalClientComm}
            </th>
            <th className={`${totalClientPL >= 0 ? "clr-green" : "clr-red"}`}>
              {totalClientPL}
            </th>
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

export default ClientPLTable;
