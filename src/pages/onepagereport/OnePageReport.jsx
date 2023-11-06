import React, { useEffect, useState } from "react";
import "./styles.css";
import OnePagePopup from "./OnePagePopup";
import { GiClick } from "react-icons/gi";
import {
  GET_ONEPAGE_REPORT,
  GET_COMPLETED_MATCHES_BY_CLEINT,
} from "../../config/endpoints";
import { call } from "../../config/axios";
import CustomPagination from "../pagination/CustomPagination";
import ClientIndPL from "./ClientIndPL";

function OnePageReport(props) {
  const { ONE_PAGE_REPORT_DETAILS } = props;
  console.log(ONE_PAGE_REPORT_DETAILS, "onepagereport Data");

  let register_id = localStorage?.getItem("register_id");
  let account_role = localStorage?.getItem("account_role");

  const [showReportPopup, setShowReportPopup] = useState(false);
  const [showIndividualOnepageReportData, setShowIndividualOnepageReportData] =
    useState();
  const [showOnepageReportData, setShowOnePageReportData] = useState([]);
  const [selectedClientData, setSelectedClientData] = useState();
  // console.log(account_role, "account_role");
  // console.log(register_id, "register_id");
  // console.log(client_id, "client_id");
  const handleIndividualOnePageData = async (item) => {
    setShowReportPopup(true);
    setShowIndividualOnepageReportData(true);
    setSelectedClientData(item);

    await call(GET_COMPLETED_MATCHES_BY_CLEINT, {
      register_id,
      account_role,
      client_id: item.client_Id,
    })
      .then((res) => {
        setShowOnePageReportData(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  console.log(
    showOnepageReportData,
    "...................sangram data balle balle"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add your logic here to fetch data for the selected page.
  };
  return (
    <div className="p-2 mt-4">
      <table className="w-100 match-position-table medium-font">
        <thead>
          <tr className="text-center">
            <th className="w-20">CLIENT NAME</th>
            <th className="w-20">M+F+RC</th>
            <th className="w-20">C NET</th>
            <th className="w-20">RF NET</th>
            <th className="w-20">TOTAL P/L</th>
          </tr>
        </thead>
      </table>
      <div className="referal-table-scroll-content">
        <table className="w-100 match-position-table medium-font">
          {ONE_PAGE_REPORT_DETAILS.length &&
            ONE_PAGE_REPORT_DETAILS?.map((item, index) => (
              <tbody key={index}>
                <tr
                  className="text-center"
                  onClick={() => handleIndividualOnePageData(item)}
                >
                  <td className="w-20">{item.client}</td>
                  <td className="text-center w-20">
                    <div className="d-flex flex-row w-100 justify-content-center">
                      {item.mfrc}
                      <GiClick className="custom-click-icon ms-1 mt-2" />
                    </div>
                  </td>
                  <td className="w-20">{item.cnet}</td>
                  <td className="w-20"> {item.rfnet}</td>
                  <td className="clr-green w-20">{item.totalpl}</td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>

      <table className="w-100 match-position-table medium-font">
        <tfoot>
          <tr className="text-center">
            <th colSpan={4}>TOTAL</th>
            <th colSpan={3} className="clr-green">
              50000000.00
            </th>
          </tr>
        </tfoot>
      </table>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="d-flex justify-content-start font-clr-white total-count-container  py-2 px-4 rounded">
          <span>
            Showing <b> {currentPage} </b> 0f <b> {totalPages} </b> Entries....
          </span>
        </div>
        <div className="d-flex justify-content-end mt-2">
          <CustomPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <OnePagePopup
        showOnepageReportData={showOnepageReportData}
        showReportPopup={showReportPopup}
        setShowReportPopup={setShowReportPopup}
        selectedClientData={selectedClientData}
      />
    </div>
  );
}

export default OnePageReport;
