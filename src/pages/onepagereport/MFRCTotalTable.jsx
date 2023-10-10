import React from "react";

function MFRCTotalTable() {
  const MFRC_DETAILS = [
    {
      matchName: (
        <div>
          IND vs SL
          <br />
          18-07-1995
        </div>
      ),
      amount1: "1000000.00",
      amount2: "500000.00",
      comm: "500000.00",
      roleComm: "500000.00",
      total: "500000.00",
    },
    {
      matchName: (
        <div>
          IND vs SL
          <br />
          18-07-1995
        </div>
      ),
      amount1: "1000000.00",
      amount2: "500000.00",
      comm: "500000.00",
      roleComm: "500000.00",
      total: "500000.00",
    },
    {
      matchName: (
        <div>
          IND vs SL
          <br />
          18-07-1995
        </div>
      ),
      amount1: "1000000.00",
      amount2: "500000.00",
      comm: "500000.00",
      roleComm: "500000.00",
      total: "500000.00",
    },
    {
      matchName: (
        <div>
          IND vs SL
          <br />
          18-07-1995
        </div>
      ),
      amount1: "1000000.00",
      amount2: "500000.00",
      comm: "500000.00",
      roleComm: "500000.00",
      total: "500000.00",
    },
  ];
  return (
    <div>
      <table className="w-100 match-position-table small-font">
        <thead>
          <tr className="text-center">
            <th>
              Match Name
              <br />
              Date
            </th>
            <th>Match P/L</th>
            <th>Fancy P/L</th>
            <th>M+F Comm</th>
            <th>Role Comm</th>
            <th>M+F+C/CRC</th>
          </tr>
        </thead>
        {MFRC_DETAILS.map((item, index) => (
          <tbody key={index}>
            <tr className="text-center clr-green">
              <td>{item.matchName}</td>
              <td>{item.amount1}</td>
              <td>{item.amount2}</td>
              <td>{item.comm}</td>
              <td>{item.roleComm}</td>
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
            <th>1000000.00</th>
          </tr>
        </tfoot>
      </table>
      {/* <div className="large-font font-weight-bold mt-3 mb-3">
        Total - C Share = C Gross - M Comm = C Net
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
        {MFRC_DETAILS.map((item, index) => (
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
      </table> */}
    </div>
  );
}

export default MFRCTotalTable;
