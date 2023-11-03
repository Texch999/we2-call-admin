import React from "react";

function ULShareIndPlData(props) {
  // const PAGE_REPORT_DETAILS = [
  //   {
  //     date: "25-07-2023",
  //     matchname: "India vs Sri Lanka",
  //     urnetpl: "1000000",
  //     winteam: "India",
  //     Ulshare: "50000000.00",
  //   },
  //   {
  //     date: "25-07-2023",
  //     matchname: "India vs Sri Lanka",
  //     winteam: "India",
  //     urnetpl: "1000000",
  //     Ulshare: "50000000.00",
  //   },
  //   {
  //     date: "25-07-2023",
  //     matchname: "India vs Sri Lanka",
  //     winteam: "India",
  //     urnetpl: "1000000",

  //     Ulshare: "50000000.00",
  //   },
  // ];
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
  console.log(PAGE_REPORT_DETAILS, "one page report");
  return (
    <div>
      <h6 className="Platform-Comm-PL-">UL Share P/L :</h6>
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
            <th className="text-end">TOTAL</th>
            <th className="clr-green text-end">50000000.00</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ULShareIndPlData;
