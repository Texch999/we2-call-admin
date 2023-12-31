import React from "react";

function MFRCTotalTable(props) {
  const {
    induvisualClientData,
    totalFancyPl,
    totalMfComm,
    totalRoleComm,
    totalMasterPL,
  } = props;

  const MFRC_DETAILS =
    induvisualClientData?.length &&
    induvisualClientData?.map((item, index) => {
      return {
        cNameMatchPL: item.cNameMatchPL,
        matchPl: item.matchPl,
        fancyPL: item.fancyPL,
        mfcomm: item.mfComm,
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
                <td className="w-20">{item.matchPl}</td>
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
          <tr className="text-center">
            <th className="w-20">TOTAL</th>
            <th className="w-20"></th>
            <th className={totalFancyPl > 0 ? "clr-green" : "clr-red"}>
              {totalFancyPl ? totalFancyPl.toFixed(2) : 0}
            </th>
            <th className={totalMfComm > 0 ? "clr-green" : "clr-red"}>
              {totalMfComm ? totalMfComm.toFixed(2) : 0}
            </th>
            <th className={totalRoleComm > 0 ? "clr-green" : "clr-red"}>
              {totalRoleComm ? totalRoleComm.toFixed(2) : 0}
            </th>
            <th className={totalMasterPL > 0 ? "clr-green" : "clr-red"}>
              {totalMasterPL ? totalMasterPL.toFixed(2) : 0}
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default MFRCTotalTable;
