import React from "react";

function MatchBetTable() {
  const CLIENTPL_DETAILS = [
    {
      sno: "5",
      rate: "1.5",
      team: "IND",
      name: "Animesh",
      pe: "E",
      date: "31/07/2023",
      time: "18:44:00 PM",
      winteam: "India",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      sno: "5",
      rate: "1.5",
      team: "IND",
      name: "Animesh",
      pe: "P",
      date: "31/07/2023",
      time: "18:44:00 PM",
      winteam: "India",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      sno: "5",
      rate: "1.5",
      team: "IND",
      name: "Animesh",
      pe: "E",
      date: "31/07/2023",
      time: "18:44:00 PM",
      winteam: "India",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      sno: "5",
      rate: "1.5",
      team: "IND",
      name: "Animesh",
      pe: "P",
      date: "31/07/2023",
      time: "18:44:00 PM",
      winteam: "India",
      amount: "500000.00",
      pl: "500000.00",
    },
  ];
  return (
    <div>
      <table className="w-100 match-position-table medium-font">
        <thead>
          <tr className="text-center">
            <th>S No</th>
            <th>Rate</th>
            <th>Team</th>
            <th>Name</th>
            <th>P/E</th>
            <th>Date</th>
            <th>Time</th>
            <th>Win Team</th>
            <th>Amount</th>
            <th>P/L</th>
          </tr>
        </thead>
        {CLIENTPL_DETAILS.map((item, index) => (
          <tbody key={index}>
            <tr className="text-center">
              <td>{item.sno}</td>
              <td>{item.rate}</td>
              <td>{item.team}</td>
              <td className="clr-green"> {item.name}</td>
              <td className="clr-green"> {item.pe}</td>
              <td className="clr-green"> {item.date}</td>
              <td className="clr-green"> {item.time}</td>
              <td className="clr-green"> {item.winteam}</td>
              <td className="clr-green"> {item.amount}</td>
              <td className="clr-green"> {item.pl}</td>
            </tr>
          </tbody>
        ))}
        <tfoot>
          <tr className="text-center">
            <th colSpan={9}>TOTAL</th>
            <th colSpan={1}>50000000.00</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default MatchBetTable;
