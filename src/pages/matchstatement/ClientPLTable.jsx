import React, { useState } from "react";
import ClientPLData from "./ClientPLData";
import { GiClick } from "react-icons/gi";

function ClientPLTable(props) {
  const { popupData, clientMatchStatementData, matchDetails, winTeam } = props;
  const [selectedClientID, setSelectedClientID] = useState("");
  const [selectedClientName, setSelectedClientName] = useState("");
  const [showClientPL, setShowClientPL] = useState(false);
  const handleClientData = (clientID, clientName) => {
    setShowClientPL((prev) => !prev);
    setSelectedClientID(clientID);
    setSelectedClientName(clientName);
  };
  const CLIENTPL_DETAILS =
    clientMatchStatementData.length &&
    clientMatchStatementData?.map((item) => {
      return {
        name: item.name,
        masterProfitLoss: item.masterProfitLoss,
        share: item.share,
        fancyProfitLoss: item.fancyProfitLoss,
        fancyReferralComm: item.fancyReferralComm,
        amount: item.amount,
        client_id: item?.client_id,
        client_name: item?.client_name,
      };
    });
  console.log(clientMatchStatementData, "clientMatchStatementData");
  return (
    <div className="d-flex flex-column">
      <table className="w-100 match-position-table small-font">
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>Match P/L</th>
            <th>Fancy P/L 1st</th>
            <th>Fancy P/L 2nd</th>
            <th>Total Fancy P/L</th>
            <th>Match Com/Fancy Comm</th>
            <th>Rolling Comm</th>
            <th>M+F+C/RC</th>
            <th>C-Share</th>
            <th>C Net P/L</th>
          </tr>
        </thead>
        {CLIENTPL_DETAILS?.map((item, index) => (
          <tbody key={index}>
            <tr className="text-center">
              <td>{item.name}</td>
              {/* <td className="clr-green">{item.name}</td> */}
              <td className="clr-green">{item.masterProfitLoss}</td>
              <td className="clr-green">{item.masterProfitLoss}</td>
              <td className="clr-green"> {item.share}</td>
              <td className="clr-green"> {item.fancyProfitLoss}</td>
              <td className="clr-green"> {item.fancyReferralComm}</td>
              <td className="clr-green"> {item.amount}</td>
              <td className="clr-green"> {item.fifteenoverone}</td>
              <td className="clr-green"> {item.fancyReferralComm}</td>
              <td
                className="clr-green"
                onClick={() =>
                  handleClientData(item?.client_id, item?.client_name)
                }
              >
                {item.amount}
                <GiClick className="custom-click-icon ms-1 mt-2" />
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
            <th>50000000.00</th>
            <th>50000000.00</th>
            <th>50000000.00</th>
            <th>50000000.00</th>
          </tr>
        </tfoot>
      </table>
      <table className="w-100 match-position-table small-font mt-2">
        <thead>
          <tr className="text-center">
            <th>Referal M+F+C/RC</th>
            <th>After Referral</th>
            <th>UL Share</th>
            <th>UL Comm</th>
            <th>Yours Net P/L</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>10,000</td>
            <td>90,000</td>
            <td>9000</td>
            <td>0.00</td>
            <td>{popupData?.totalAmount?.totalLossOrProfit}</td>
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
