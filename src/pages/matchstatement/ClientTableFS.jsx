import React from "react";

function ClientTableFS() {
  const CLIENTFS_DETAILS = [
    {
      name: "Sri3456",
      mfrc: "1000000.00",
      cshare: "500000.00",
      mcomm: "500000.00",
      cnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mfrc: "1000000.00",
      cshare: "500000.00",
      mcomm: "500000.00",
      cnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mfrc: "1000000.00",
      cshare: "500000.00",
      mcomm: "500000.00",
      cnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mfrc: "1000000.00",
      cshare: "500000.00",
      mcomm: "500000.00",
      cnetpl: "500000.00",
    },
  ];
  return (
    <div>
      {" "}
      <table className="w-100 match-position-table medium-font">
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>M+F+RC</th>
            <th>C Share</th>
            <th>M+-Comm</th>
            <th>C Net P/L</th>
          </tr>
        </thead>
        {CLIENTFS_DETAILS.map((item, index) => (
          <tbody key={index}>
            <tr className="text-center">
              <td>{item.name}</td>
              <td>{item.mfrc}</td>
              <td>{item.cshare}</td>
              <td>{item.mcomm}</td>
              <td>{item.cnetpl}</td>
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

export default ClientTableFS;
