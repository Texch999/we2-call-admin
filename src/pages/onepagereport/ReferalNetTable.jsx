import React from "react";

function ReferalNetTable({ firstReferralNetData }) {
  const REFERALNET_DETAILS =
    firstReferralNetData?.length &&
    firstReferralNetData?.map((item, index) => {
      return {
        clientName: item?.client_name,
        cNameMatchPL: item?.cNameMatchPL,
        fancyPL: item?.fancyPL,
        refrralFancyComm: item?.mfComm,
        rollcom: item?.roleComm,
        netpl: item?.masterProfitloss,
      };
    });
  return (
    <div>
      <table className="w-100 match-position-table small-font px-4">
        <thead className="px-4">
          <tr className="text-center">
            <th className="w-20">Referer Name</th>
            <th className="w-20">Match P/L</th>
            <th className="w-20">Fancy P/L</th>
            <th className="w-20">RF-M+F Comm</th>
            <th className="w-20">Role Comm</th>
            <th className="w-20">M+F+RFCR</th>
          </tr>
        </thead>
      </table>
      <div className="table-scroll-content">
        <table className="w-100 match-position-table small-font">
          {REFERALNET_DETAILS?.map((item, index) => (
            <tbody key={index}>
              <tr className="text-center w-100">
                <td className="w-20">{item.clientName}</td>
                <td className="w-20">{item.cNameMatchPL}</td>
                <td className="w-20">{item.fancyPL}</td>
                <td className="w-20">{item.refrralFancyComm}</td>
                <td className="w-20">{item.rollcom}</td>
                <td className="w-20">{item.netpl}</td>
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

export default ReferalNetTable;
