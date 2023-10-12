import React from "react";

function PlatformCommPL() {
  const PAGE_REPORT_DETAILS = [
    {
      date: "25-07-2023",
      matchname: "India vs Sri Lanka",
      urnetpl: "100000",
      winteam: "India",
      platformcomm: "50000000.00",
    },
    {
      date: "25-07-2023",
      matchname: "India vs Sri Lanka",
      urnetpl: "100000",

      winteam: "India",
      platformcomm: "50000000.00",
    },
    {
      date: "25-07-2023",
      matchname: "India vs Sri Lanka",
      urnetpl: "100000",

      winteam: "India",
      platformcomm: "50000000.00",
    },
  ];
  return (
    <div>
      <h6 className="Platform-Comm-PL-">Platform Comm:</h6>
      <table className="w-100 match-position-table medium-font">
        <thead>
          <tr className="text-center">
            <th>DATE</th>
            <th>MATCH NAME</th>
            <th>WIN TEAM</th>
            <th>Urs Net P/L</th>
            <th>Platform Comm</th>
          </tr>
        </thead>
        {PAGE_REPORT_DETAILS.map((item, index) => (
          <tbody key={index}>
            <tr className="text-center">
              <td>{item.date}</td>
              <td>{item.matchname}</td>
              <td>{item.winteam}</td>
              <td>{item.urnetpl}</td>
              <td className="clr-green"> {item.platformcomm}</td>
            </tr>
          </tbody>
        ))}
        <tfoot>
          <tr className="text-center">
            <th colSpan={4} className="text-end">
              TOTAL
            </th>
            <th colSpan={1} className="clr-green">
              50000000.00
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default PlatformCommPL;
