import React from "react";

function ULShareIndPlData(props) {
  const { individualReportULShareData } = props;
  const PAGE_REPORT_DETAILS = individualReportULShareData?.map(
    (item, index) => ({
      date: item.matchDate,
      matchname: item.matchName,
      winteam: item.winTeam,
      urnetpl: item.ULnetPL,
      Ulshare: item.afterAllSharePL,
    })
  );
  const totalUrsNet =
    individualReportULShareData &&
    individualReportULShareData?.length > 0 &&
    individualReportULShareData?.reduce(
      (acc, obj) => acc + (+obj?.ULnetPL?.props?.children || 0),
      0
    );
  const totalUlShareNet =
    individualReportULShareData &&
    individualReportULShareData?.length > 0 &&
    individualReportULShareData?.reduce(
      (acc, obj) => acc + (+obj?.afterAllSharePL?.props?.children || 0),
      0
    );
  return (
    <div className="mt-3">
      {/* <h6 className="Platform-Comm-PL-">UL Share P/L :</h6> */}
      <table className="w-100 match-position-table medium-font">
        <thead>
          <tr className="text-center">
            <th className="w-20">DATE</th>
            <th className="w-20">MATCH NAME</th>
            <th className="w-20">WIN TEAM</th>
            <th className="w-20">Urs Net P/L</th>
            <th className="w-20">UL SHARE P/L</th>
          </tr>
        </thead>
      </table>
      <div className="referal-table-scroll-content">
        <table className="w-100 match-position-table medium-font">
          {PAGE_REPORT_DETAILS?.map((item, index) => (
            <tbody key={index}>
              <tr className="text-center">
                <td className="w-20">{item.date}</td>
                <td className="w-20">{item.matchname}</td>
                <td className="w-20">{item.winteam}</td>
                <td className="w-20">{item.urnetpl}</td>
                <td className="w-20">{item.Ulshare}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <table className="w-100 match-position-table medium-font">
        <tfoot>
          <tr className="text-center">
            <th></th>
            <th></th>
            <th colSpan={3}>TOTAL</th>
            <th className={totalUrsNet > 0 ? "clr-green" : "clr-red"}>
              {totalUrsNet ? totalUrsNet?.toFixed(2) : 0}
            </th>
            <th className={totalUlShareNet > 0 ? "clr-green" : "clr-red"}>
              {totalUlShareNet ? totalUlShareNet?.toFixed(2) : 0}
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ULShareIndPlData;
