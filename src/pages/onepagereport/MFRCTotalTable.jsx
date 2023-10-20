import React from "react";

function MFRCTotalTable({ clientData }) {
  console.log("Client Data", clientData);
  // const MFRC_DETAILS = [
  //   {
  //     matchName: (
  //       <div>
  //         IND vs SL
  //         <br />
  //         18-07-1995
  //       </div>
  //     ),
  //     amount1: "1000000.00",
  //     amount2: "500000.00",
  //     comm: "500000.00",
  //     roleComm: "500000.00",
  //     total: "500000.00",
  //   },
  //   {
  //     matchName: (
  //       <div>
  //         IND vs SL
  //         <br />
  //         18-07-1995
  //       </div>
  //     ),
  //     amount1: "1000000.00",
  //     amount2: "500000.00",
  //     comm: "500000.00",
  //     roleComm: "500000.00",
  //     total: "500000.00",
  //   },
  //   {
  //     matchName: (
  //       <div>
  //         IND vs SL
  //         <br />
  //         18-07-1995
  //       </div>
  //     ),
  //     amount1: "1000000.00",
  //     amount2: "500000.00",
  //     comm: "500000.00",
  //     roleComm: "500000.00",
  //     total: "500000.00",
  //   },
  //   {
  //     matchName: (
  //       <div>
  //         IND vs SL
  //         <br />
  //         18-07-1995
  //       </div>
  //     ),
  //     amount1: "1000000.00",
  //     amount2: "500000.00",
  //     comm: "500000.00",
  //     roleComm: "500000.00",
  //     total: "500000.00",
  //   },
  // ];

  // const firstReferralNetData =
  // data?.length &&
  // data?.map((report) => ({
  //   cNameMatchPL: (
  //     <div className="client-name-role-container mb-5 mt-5">
  //       <div>{report?.client_name}</div>
  //       <div>{report?.amount}</div>
  //     </div>
  //   ),
  //   fancyPL: parseFloat(report?.fancyPl || 0),
  //   refrralFancyComm: parseFloat(report?.fancyComission || 0),
  //   masterProfitloss: report?.totalLossOrProfit || 0,
  // }));

  const MFRC_DETAILS =
    clientData?.length &&
    clientData?.map((item, index) => {
      return {
        matchName: (
          <div>
            IND vs SL
            <br />
            18-07-1995
          </div>
        ),
        cNameMatchPL: <div>{item?.client_name}</div>,
        amount1: parseFloat(item?.amount || 0),
        fancyPL: parseFloat(item?.fancyPl || 0),
        refrralFancyComm: parseFloat(item?.fancyComission || 0),
        masterProfitloss: item?.totalLossOrProfit || 0,
      };
    });
  return (
    <div>
      <table className="w-100 match-position-table small-font">
        <thead>
          <tr className="text-center">
            <th>
              Match Name
              <br />
              Date
            </th>
            <th>Match P/L</th>
            <th>Fancy P/L</th>
            <th>M+F Comm</th>
            <th>Role Comm</th>
            <th>M+F+C/CRC</th>
          </tr>
        </thead>
        {MFRC_DETAILS.map((item, index) => (
          <tbody key={index}>
            <tr className="text-center">
              <td>{item.matchName}</td>
              <td>{item.cNameMatchPL}</td>
              <td>{item.amount1}</td>
              <td>{item.fancyPL}</td>
              <td>{item.refrralFancyComm}</td>
              <td>{item.masterProfitloss}</td>
            </tr>
          </tbody>
        ))}
        <tfoot>
          <tr className="text-center clr-green">
            <th>TOTAL</th>
            <th>1000000.00</th>
            <th>1000000.00</th>
            <th>1000000.00</th>
            <th>1000000.00</th>
            <th>1000000.00</th>
          </tr>
        </tfoot>
      </table>
      {/* <div className="large-font font-weight-bold mt-3 mb-3">
        Total - C Share = C Gross - M Comm = C Net
      </div>
      <table className="w-100 match-position-table small-font">
        <thead>
          <tr className="text-center">
            <th>Client Name</th>
            <th>Client Share</th>
            <th>Client Gross</th>
            <th>Match Comm</th>
            <th>Client Net P/L</th>
          </tr>
        </thead>
        {MFRC_DETAILS.map((item, index) => (
          <tbody key={index}>
            <tr className="text-center clr-green">
              <td>{item.name}</td>
              <td>{item.amount1}</td>
              <td>{item.amount2}</td>
              <td>{item.comm}</td>
              <td>{item.total}</td>
            </tr>
          </tbody>
        ))}
        <tfoot>
          <tr className="text-center clr-green">
            <th>TOTAL</th>
            <th>1000000.00</th>
            <th>1000000.00</th>
            <th>1000000.00</th>
            <th>1000000.00</th>
          </tr>
        </tfoot>
      </table> */}
    </div>
  );
}

export default MFRCTotalTable;
