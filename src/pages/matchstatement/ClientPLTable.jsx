import React, { useState } from "react";
import ClientPLData from "./ClientPLData";
import AdminsTable from "../onepagereport/AdminsTable";
import { Col, Container, Row } from "react-bootstrap";

function ClientPLTable() {
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
    <div className="d-flex flex-row">
      <table className="w-100 match-position-table small-font">
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>Match P/L</th>
            <th>6 Over</th>
            <th>10 Over</th>
            <th>15 Over</th>
            <th>6 Over</th>
            <th>10 Over</th>
            <th>15 Over</th>
            <th>FancyR-Com</th>
            <th>M+F+C</th>
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
              <td
                className="clr-green d-flex flex-column align-items-center"
                onClick={() => handleClientData()}
              >
                {item.mfc}
                <img
                  className="click-here-img mt-1"
                  src={process.env.PUBLIC_URL + "./assets/click_here.png"}
                ></img>
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
      {showClientPL && <ClientPLData />}
    </div>
  );
}

export default ClientPLTable;
