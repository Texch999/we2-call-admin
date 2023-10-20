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
        cNameMatchPL: <div>{item?.amount}</div>,
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
            <th className="w-20">
              Match Name
              <br />
              Date
            </th>
            <th className="w-20">Match P/L</th>
            <th className="w-20">Fancy P/L</th>
            <th className="w-20">M+F Comm</th>
            <th className="w-20">Role Comm</th>
            <th className="w-20">M+F+C/CRC</th>
          </tr>
        </thead>
      </table>
      <div className="table-scroll-content">
        <table className="w-100 match-position-table small-font">
          {MFRC_DETAILS?.map((item, index) => (
            <tbody key={index}>
              <tr className="text-center">
                <td className="w-20">{item.matchName}</td>
                <td className="w-20">{item.masterProfitloss}</td>
                <td className="w-20">{item.amount1}</td>
                <td className="w-20">{item.fancyPL}</td>
                <td className="w-20">{item.refrralFancyComm}</td>
                <td className="w-20">{item.cNameMatchPL}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <table className="w-100 match-position-table small-font">
        <tfoot className="px-4">
          <tr className="text-center clr-green">
            <th className="w-20">TOTAL</th>
            <th className="w-20">1000000.00</th>
            <th className="w-20">1000000.00</th>
            <th className="w-20">1000000.00</th>
            <th className="w-20">1000000.00</th>
            <th className="w-20">1000000.00</th>
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
