import React from "react";

function PlatformCommPL(props) {
  const { individualReportPlatformCommData } = props;

  const PAGE_REPORT_DETAILS = individualReportPlatformCommData?.map(
    (item, index) => ({
      date: item.matchDate,
      matchname: item.matchName,
      urnetpl: item.netPL,
      winteam: item.winTeam,
      platformcomm: item.individualReportPlatformComm,
    })
  );
  return (
    <div>
      <h6 className="Platform-Comm-PL-">Platform Comm:</h6>
      <table className="w-100 match-position-table medium-font">
        <thead>
          <tr className="text-center">
            <th className="w-20">DATE</th>
            <th className="w-20">MATCH NAME</th>
            <th className="w-20">WIN TEAM</th>
            <th className="w-20">Urs Net P/L</th>
            <th className="w-20">Platform Comm</th>
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
                <td className="w-20"> {item.platformcomm}</td>
              </tr>
            </tbody>
          ))}
          {/* <tfoot>
            <tr className="text-center">
              <th colSpan={4} className="text-end">
                TOTAL
              </th>
              <th colSpan={1} className="clr-green">
                50000000.00
              </th>
            </tr>
          </tfoot> */}
        </table>
      </div>
    </div>
  );
}

export default PlatformCommPL; 
