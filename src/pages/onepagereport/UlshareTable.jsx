import React from "react";

function UlshareTable() {
  const ULSHARE_DETAILS = [
    {
      name: "Animesh",
      net: "1000000.00",
      ulshare: "500000.00",
      totalpl: "500000.00",
    },
    {
      name: "Animesh",
      net: "1000000.00",
      ulshare: "500000.00",
      totalpl: "500000.00",
    },
    {
      name: "Animesh",
      net: "1000000.00",
      ulshare: "500000.00",
      totalpl: "500000.00",
    },
    {
      name: "Animesh",
      net: "1000000.00",
      ulshare: "500000.00",
      totalpl: "500000.00",
    },
  ];
  return (
    <div>
      <table className="w-100 match-position-table small-font">
        <thead>
          <tr className="text-center">
            <th>Client Name</th>
            <th>Total Net</th>
            <th>UL Share</th>
            <th>Total P/L</th>
          </tr>
        </thead>
        {ULSHARE_DETAILS.map((item, index) => (
          <tbody key={index}>
            <tr className="text-center">
              <td>{item.name}</td>
              <td>{item.net}</td>
              <td>{item.ulshare}</td>
              <td>{item.totalpl}</td>
            </tr>
          </tbody>
        ))}
        <tfoot>
          <tr className="text-center">
            <th colSpan={3}>TOTAL</th>
            <th colSpan={3}>50000000.00</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default UlshareTable;
