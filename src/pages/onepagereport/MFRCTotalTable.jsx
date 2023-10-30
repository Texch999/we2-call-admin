import React from "react";

function MFRCTotalTable({
  clientData,
  firstReferralNetData,
  induvisualClientData,
  induvisualClientStatus,
}) {
  console.log("Client Data", clientData);
  console.log("irstReferralNet Data", firstReferralNetData);

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

  // const MFRC_DETAILS =
  //   clientData?.length &&
  //   clientData?.map((item, index) => {
  //     return {
  //       matchName: (
  //         <div>
  //           IND vs SL
  //           <br />
  //           18-07-1995
  //         </div>
  //       ),
  //       cNameMatchPL: <div>{item?.amount}</div>,
  //       amount1: parseFloat(item?.amount || 0),
  //       fancyPL: parseFloat(item?.fancyPl || 0),
  //       refrralFancyComm: parseFloat(item?.fancyComission || 0),
  //       masterProfitloss: item?.totalLossOrProfit || 0,
  //     };
  //   });

  const MFRC_DETAILS =
    induvisualClientData?.length &&
    induvisualClientData?.map((item, index) => {
      return {
        cNameMatchPL: item.cNameMatchPL,
        fancyPL: item.fancyPL,
        mfcomm: parseFloat(item?.mfComm || 0),
        rolecomm: item.roleComm,
        mfc_crc: item.masterProfitloss,
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
                {/* <td className="w-20">{item.matchName}</td> */}
                <td className="w-20">{item.cNameMatchPL}</td>
                <td className="w-20">{item.fancyPL}</td>
                <td className="w-20">{item.mfcomm}</td>
                <td className="w-20">{item.rolecomm}</td>
                <td className="w-20">{item.mfc_crc}</td>
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
    </div>
  );
}

export default MFRCTotalTable;
