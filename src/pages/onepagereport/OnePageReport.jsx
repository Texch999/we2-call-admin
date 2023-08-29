import React, { useState } from "react";
import "./styles.css";
import OnePagePopup from "./OnePagePopup";

function OnePageReport() {
  const PAGE_REPORT_DETAILS = [
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
  ];
  const [showReportPopup, setShowReportPopup] = useState(false);
  const handleReportPageShow = () => {
    setShowReportPopup(true);
  };
  return (
    <div className="p-2 mt-4">
      <table className="w-100 match-position-table medium-font">
        <thead>
          <tr className="text-center">
            <th>CLIENT NAME</th>
            <th>M+F+RC</th>
            <th>C NET</th>
            <th>RF NET</th>
            <th>TOTAL P/L</th>
          </tr>
        </thead>
        {PAGE_REPORT_DETAILS.map((item, index) => (
          <tbody key={index}>
            <tr className="text-center">
              <td>{item.client}</td>
              <td className="d-flex flex-column align-items-center">
                {item.mfrc}
                <img
                  className="click-here-img mt-1"
                  src={process.env.PUBLIC_URL + "./assets/click_here.png"}
                  onClick={() => handleReportPageShow()}
                ></img>
              </td>
              <td>{item.cnet}</td>
              <td> {item.rfnet}</td>
              <td className="clr-green">{item.totalpl}</td>
            </tr>
          </tbody>
        ))}
        <tfoot>
          <tr className="text-center">
            <th colSpan={4}>TOTAL</th>
            <th colSpan={3} className="clr-green">
              50000000.00
            </th>
          </tr>
        </tfoot>
      </table>
      <OnePagePopup
        showReportPopup={showReportPopup}
        setShowReportPopup={setShowReportPopup}
      />
    </div>
  );
}

export default OnePageReport;
