import React, { useState } from "react";
import { GiClick } from "react-icons/gi";
import ClientPLData from "./ClientPLData";
function RfplTable() {
  const CLIENTPL_DETAILS = [
    {
      name: "Animesh",
      matchpl: "1000000.00",
      sixover: "500000.00",
      tenover: "500000.00",
      fifteenover: "500000.00",
      sixoverone: "500000.00",
      tenoverone: "500000.00",
      fifteenoverone: "500000.00",
      fancycom: "500000.00",
      mfc: "500000.00",
    },
    {
      name: "Animesh",
      matchpl: "1000000.00",
      sixover: "500000.00",
      tenover: "500000.00",
      fifteenover: "500000.00",
      sixoverone: "500000.00",
      tenoverone: "500000.00",
      fifteenoverone: "500000.00",
      fancycom: "500000.00",
      mfc: "500000.00",
    },
    {
      name: "Animesh",
      matchpl: "1000000.00",
      sixover: "500000.00",
      tenover: "500000.00",
      fifteenover: "500000.00",
      sixoverone: "500000.00",
      tenoverone: "500000.00",
      fifteenoverone: "500000.00",
      fancycom: "500000.00",
      mfc: "500000.00",
    },
    {
      name: "Animesh",
      matchpl: "1000000.00",
      sixover: "500000.00",
      tenover: "500000.00",
      fifteenover: "500000.00",
      sixoverone: "500000.00",
      tenoverone: "500000.00",
      fifteenoverone: "500000.00",
      fancycom: "500000.00",
      mfc: "500000.00",
    },
  ];
  const [showClientPL, setShowClientPL] = useState(false);
  const handleClientData = () => {
    setShowClientPL((prev) => !prev);
  };
  return (
    <div>
      <table className="w-100 match-position-table small-font">
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>Match P/L</th>
            <th>Fancy P/L 1st</th>
            <th>Fancy P/L 2nd</th>
            <th>Total Fancy P/L</th>
            <th>Match Com/Fancy Comm</th>
            <th>Rolling Comm</th>
            <th>M+F+RF</th>
            <th>RF-Share</th>
            <th>RF Net P/L</th>
          </tr>
        </thead>
        {CLIENTPL_DETAILS.map((item, index) => (
          <tbody key={index}>
            <tr className="text-center">
              <td>{item.name}</td>
              <td className="clr-green">{item.matchpl}</td>
              <td className="clr-green">{item.sixover}</td>
              <td className="clr-green"> {item.tenover}</td>
              <td className="clr-green"> {item.fifteenover}</td>
              <td className="clr-green"> {item.sixoverone}</td>
              <td className="clr-green"> {item.tenoverone}</td>
              <td className="clr-green"> {item.fifteenoverone}</td>
              <td className="clr-green"> {item.fancycom}</td>
              <td className="clr-green" onClick={() => handleClientData()}>
                {item.mfc}
                <GiClick className="custom-click-icon ms-1 mt-2" />
              </td>
            </tr>
          </tbody>
        ))}
        <tfoot>
          <tr className="text-center small-font clr-green all-none">
            <th>TOTAL</th>
            <th>50000000.00</th>
            <th>50000000.00</th>
            <th>50000000.00</th>
            <th>50000000.00</th>
            <th>50000000.00</th>
            <th>50000000.00</th>
            <th>50000000.00</th>
            <th>50000000.00</th>
            <th>50000000.00</th>
          </tr>
        </tfoot>
      </table>
      <table className="w-100 match-position-table small-font mt-2">
        <thead>
          <tr className="text-center">
            <th>Referal M+F+C/RC</th>
            <th>After Referral</th>
            <th>UL Share</th>
            <th>UL Comm</th>
            <th>Yours Net P/L</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>10,000</td>
            <td>90,000</td>
            <td>9000</td>
            <td>0.00</td>
            <td>81000</td>
          </tr>
        </tbody>
      </table>
      {showClientPL && <ClientPLData />}
    </div>
  );
}

export default RfplTable;
