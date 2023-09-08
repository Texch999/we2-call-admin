import React from "react";

function ULShareTableFS() {
  const ULSHARE_DETAILS = [
    {
      name: "Sri3456",
      totalnet: "1000000.00",
      ulshare: "500000.00",
      urspl: "500000.00",
      ulcomm: "500000.00",
    },
    {
      name: "Sri3456",
      totalnet: "1000000.00",
      ulshare: "500000.00",
      urspl: "500000.00",
      ulcomm: "500000.00",
    },
    {
      name: "Sri3456",
      totalnet: "1000000.00",
      ulshare: "500000.00",
      urspl: "500000.00",
      ulcomm: "500000.00",
    },
    {
      name: "Sri3456",
      totalnet: "1000000.00",
      ulshare: "500000.00",
      urspl: "500000.00",
      ulcomm: "500000.00",
    },
  ];
  return (
    <div>
      {" "}
      <table className="w-100 match-position-table medium-font">
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>Total Net</th>
            <th>UL Share</th>
            <th>Urs PL</th>
            <th>UL Comm</th>
          </tr>
        </thead>
        {ULSHARE_DETAILS.map((item, index) => (
          <tbody key={index}>
            <tr className="text-center">
              <td>{item.name}</td>
              <td>{item.totalnet}</td>
              <td>{item.ulshare}</td>
              <td>{item.urspl}</td>
              <td>{item.ulcomm}</td>
            </tr>
          </tbody>
        ))}
        <tfoot>
          <tr className="text-center">
            <th colSpan={4}>TOTAL</th>
            <th colSpan={3}>50000000.00</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ULShareTableFS;
