import React from "react";

function ReferalTableFS() {
  const REFERALFS_DETAILS = [
    {
      name: "Sri3456",
      mffrc: "1000000.00",
      rfshare: "500000.00",
      mcomm: "500000.00",
      rfnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mffrc: "1000000.00",
      rfshare: "500000.00",
      mcomm: "500000.00",
      rfnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mffrc: "1000000.00",
      rfshare: "500000.00",
      mcomm: "500000.00",
      rfnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mffrc: "1000000.00",
      rfshare: "500000.00",
      mcomm: "500000.00",
      rfnetpl: "500000.00",
    },
  ];
  return (
    <div>
      <table className="w-100 match-position-table medium-font">
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>M+F+RC</th>
            <th>RF Share</th>
            <th>M +- Comm</th>
            <th>Rf-net</th>
          </tr>
        </thead>
        {REFERALFS_DETAILS.map((item, index) => (
          <tbody key={index}>
            <tr className="text-center">
              <td>{item.name}</td>
              <td>{item.mffrc}</td>
              <td>{item.rfshare}</td>
              <td>{item.mcomm}</td>
              <td>{item.rfnetpl}</td>
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

export default ReferalTableFS;
