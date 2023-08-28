import React from "react";

function ReferalNetTable() {
  const REFERALNET_DETAILS = [
    {
      name: "Animesh",
      amount1: "1000000.00",
      amount2: "500000.00",
      comm: "500000.00",
      total: "500000.00",
    },
    {
      name: "Animesh",
      amount1: "1000000.00",
      amount2: "500000.00",
      comm: "500000.00",
      total: "500000.00",
    },
    {
      name: "Animesh",
      amount1: "1000000.00",
      amount2: "500000.00",
      comm: "500000.00",
      total: "500000.00",
    },
    {
      name: "Animesh",
      amount1: "1000000.00",
      amount2: "500000.00",
      comm: "500000.00",
      total: "500000.00",
    },
  ];
  return (
    <div>
      <table className="w-100 match-position-table small-font">
        <thead>
          <tr className="text-center">
            <th>Client Name</th>
            <th>Match P/L</th>
            <th>Fancy P/L</th>
            <th>RF-Fancy Comm</th>
            <th>Total</th>
          </tr>
        </thead>
        {REFERALNET_DETAILS.map((item, index) => (
          <tbody key={index}>
            <tr className="text-center clr-green">
              <td>{item.name}</td>
              <td>{item.amount1}</td>
              <td>{item.amount2}</td>
              <td>{item.comm}</td>
              <td>{item.total}</td>
            </tr>
          </tbody>
        ))}
        <tfoot>
          <tr className="text-center clr-green">
            <th colSpan={4}>TOTAL</th>
            <th colSpan={3}>50000000.00</th>
          </tr>
        </tfoot>
      </table>
      <div className="large-font font-weight-bold mt-3 mb-3">
        Total - Rf Share = Rf Gross - M Comm = Rf Net
      </div>
      <table className="w-100 match-position-table small-font">
        <thead>
          <tr className="text-center">
            <th>Client Name</th>
            <th>Client Share</th>
            <th>Client Gross</th>
            <th>Match Comm</th>
            <th>Client Net P/L</th>
          </tr>
        </thead>
        {REFERALNET_DETAILS.map((item, index) => (
          <tbody key={index}>
            <tr className="text-center clr-green">
              <td>{item.name}</td>
              <td>{item.amount1}</td>
              <td>{item.amount2}</td>
              <td>{item.comm}</td>
              <td>{item.total}</td>
            </tr>
          </tbody>
        ))}
        <tfoot>
          <tr className="text-center clr-green">
            <th>TOTAL</th>
            <th>1000000.00</th>
            <th>1000000.00</th>
            <th>1000000.00</th>
            <th>1000000.00</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ReferalNetTable;
