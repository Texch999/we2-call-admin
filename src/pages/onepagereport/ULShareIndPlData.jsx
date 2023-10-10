import React from "react";

function ULShareIndPlData() {
  const PAGE_REPORT_DETAILS = [
    {
      date: "25-07-2023",
      matchname: "India vs Sri Lanka",
      urnetpl: "1000000",
      winteam: "India",
      Ulshare: "50000000.00",
    },
    {
      date: "25-07-2023",
      matchname: "India vs Sri Lanka",
      winteam: "India",
      urnetpl: "1000000",

      Ulshare: "50000000.00",
    },
    {
      date: "25-07-2023",
      matchname: "India vs Sri Lanka",
      winteam: "India",
      urnetpl: "1000000",

      Ulshare: "50000000.00",
    },
  ];
  return (
    <div>
      <h6 className="Platform-Comm-PL-">UL Share P/L :</h6>
      <table className="w-100 match-position-table medium-font">
        <thead>
          <tr className="text-center">
            <th>DATE</th>
            <th>MATCH NAME</th>
            <th>WIN TEAM</th>
            <th>Urs Net P/L</th>
            <th>UL SHARE P/L</th>
          </tr>
        </thead>
        {PAGE_REPORT_DETAILS.map((item, index) => (
          <tbody key={index}>
            <tr className="text-center">
              <td>{item.date}</td>
              <td>{item.matchname}</td>
              <td>{item.winteam}</td>
              <td>{item.urnetpl}</td>
              <td className="clr-green"> {item.Ulshare}</td>
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

export default ULShareIndPlData;
