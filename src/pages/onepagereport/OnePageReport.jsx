import { useState } from "react";
import "./styles.css";
import OnePagePopup from "./OnePagePopup";
import { GiClick } from "react-icons/gi";
import { GET_COMPLETED_MATCHES_BY_CLEINT } from "../../config/endpoints";
import { call } from "../../config/axios";
import CustomPagination from "../pagination/CustomPagination";

function OnePageReport(props) {
  const { ONE_PAGE_REPORT_DETAILS, onePageReportData } = props;
  console.log(onePageReportData, "ONE_PAGE_REPORT_DETAILS");

  let register_id = localStorage?.getItem("register_id");
  let account_role = localStorage?.getItem("account_role");

  const [showReportPopup, setShowReportPopup] = useState(false);
  const [showIndividualOnepageReportData, setShowIndividualOnepageReportData] =
    useState();
  const [showOnepageReportData, setShowOnePageReportData] = useState([]);
  const [selectedClientData, setSelectedClientData] = useState();

  const handleIndividualOnePageData = async (item) => {
    setShowReportPopup(true);
    setShowIndividualOnepageReportData(true);
    setSelectedClientData(item);
    await call(GET_COMPLETED_MATCHES_BY_CLEINT, {
      register_id,
      account_role,
      client_id: item.clientId,
    })
      .then((res) => {
        setShowOnePageReportData(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const totalMfrcInput =
    onePageReportData &&
    onePageReportData?.length > 0 &&
    onePageReportData?.reduce(
      (acc, obj) => acc + (+obj?.amount + obj?.clientComission || 0),
      0
    );
  const totalCnetInput =
    onePageReportData &&
    onePageReportData?.length > 0 &&
    onePageReportData?.reduce(
      (acc, obj) =>
        acc + (+obj?.amount + obj?.clientShare + obj?.clientComission || 0),
      0
    );
  const totalRfnetInput =
    onePageReportData &&
    onePageReportData?.length > 0 &&
    onePageReportData?.reduce(
      (acc, obj) => acc + (+obj?.referalShare + obj?.referralComission || 0),
      0
    );
  const totalOnepageInput =
    onePageReportData &&
    onePageReportData?.length > 0 &&
    onePageReportData?.reduce(
      (acc, obj) => acc + (+obj?.totalLossOrProfit || 0),
      0
    );
  return (
    <div className="mt-3">
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
          {ONE_PAGE_REPORT_DETAILS.length > 0 &&
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
                  <td className="w-20">{item.totalpl}</td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
      <table className="w-100 match-position-table medium-font">
        <tfoot>
          <tr className="text-center">
            <th>TOTAL</th>
            <th className={totalMfrcInput > 0 ? "clr-green" : "clr-red"}>
              {totalMfrcInput ? totalMfrcInput.toFixed(2) : 0}
            </th>
            <th className={totalCnetInput > 0 ? "clr-green" : "clr-red"}>
              {totalCnetInput ? totalCnetInput.toFixed(2) : 0}
            </th>
            <th className={totalRfnetInput > 0 ? "clr-green" : "clr-red"}>
              {totalRfnetInput ? totalRfnetInput.toFixed(2) : 0}
            </th>
            <th className={totalOnepageInput > 0 ? "clr-green" : "clr-red"}>
              {totalOnepageInput ? totalOnepageInput.toFixed(2) : 0}
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
