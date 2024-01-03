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
  const totalUrsPlPlatform =
    individualReportPlatformCommData &&
    individualReportPlatformCommData?.length > 0 &&
    individualReportPlatformCommData?.reduce(
      (acc, obj) => acc + (+obj?.netPL?.props?.children || 0),
      0
    );
  const totalPlatform =
    individualReportPlatformCommData &&
    individualReportPlatformCommData?.length > 0 &&
    individualReportPlatformCommData?.reduce(
      (acc, obj) =>
        acc + (+obj?.individualReportPlatformComm?.props?.children || 0),
      0
    );
  return (
    <div className="mt-3">
      {/* <h6 className="Platform-Comm-PL-">Platform Comm:</h6> */}
      {/* <table className="w-100 fixed-teble match-position-table medium-font">
        <thead>
          <tr className="text-center">
            <th className="w-20">DATE</th>
            <th className="w-20">MATCH NAME</th>
            <th className="w-20">WIN TEAM</th>
            <th className="w-20">Urs Net P/L</th>
            <th className="w-20">Platform Comm</th>
          </tr>
        </thead>
      </table> */}
      <div className="fixed-table">
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
          <tfoot>
            <tr className="text-center">
              <th colSpan="3">TOTAL</th>
              <th className={totalUrsPlPlatform > 0 ? "clr-green" : "clr-red"}>
                {totalUrsPlPlatform ? totalUrsPlPlatform?.toFixed(2) : 0}
              </th>
              <th className={totalPlatform > 0 ? "clr-green" : "clr-red"}>
                {totalPlatform ? totalPlatform?.toFixed(2) : 0}
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default PlatformCommPL;
