import React, { useEffect, useState } from "react";
import "./styles.css";
import OnePagePopup from "./OnePagePopup";
import { GiClick } from "react-icons/gi";
import { GET_ONEPAGE_REPORT } from "../../config/endpoints";
import { call } from "../../config/axios";

function OnePageReport() {
  const [onePageReportData, setOnePageReportData] = useState([]);
  let register_id = localStorage?.getItem("register_id");
  const getOnePageReportData = async () => {
    await call(GET_ONEPAGE_REPORT, { register_id })
      .then((res) => {
        if (res?.data?.statusCode == 200) {
          setOnePageReportData(res?.data?.data?.client_object);
        }
      })
      .catch((err) => {
        console.log(err, "error");
        throw err;
      });
  };
  useEffect(() => {
    getOnePageReportData();
  }, []);
  const ONE_PAGE_REPORT_DETAILS =
    onePageReportData.length &&
    onePageReportData?.map((item) => {
      return {
        client: item.client_name,
        mfrc: item.amount,
        cnet: item.clientShare,
        rfnet: item.referralComission,
        totalpl: item.totalLossOrProfit,
      };
    });
  const [showReportPopup, setShowReportPopup] = useState(false);
  const handleReportPageShow = () => {
    setShowReportPopup(true);
  };
  console.log(onePageReportData, "........onePageReportData");
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
        {ONE_PAGE_REPORT_DETAILS.length &&
          ONE_PAGE_REPORT_DETAILS?.map((item, index) => (
            <tbody key={index}>
              <tr className="text-center">
                <td>{item.client}</td>
                <td onClick={() => handleReportPageShow()}>
                  {item.mfrc}
                  <GiClick className="custom-click-icon ms-1 mt-2" />
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
