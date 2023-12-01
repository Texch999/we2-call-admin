import React, { useState, useEffect } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import UpgradeYourPackagePopup from "../upgrade-package/UpgradeYourPackagePopup";
import CustomPagination from "../pagination/CustomPagination";
import { call } from "../../config/axios";
import { CREATE_CALL_STATEMENT } from "../../config/endpoints";

function CallStatement() {
  const register_id = localStorage?.getItem("register_id");
  const [callStatementDetails, setCallStatementDetails] = useState([]);
  const getCallStatementData = async () => {
    await call(CREATE_CALL_STATEMENT, { register_id })
      .then((res) => {
        if (res?.data?.statusCode === 200) {
          setCallStatementDetails(res?.data?.data);
        }
      })
      .catch((err) => {
        throw err;
      });
  };
  useEffect(() => {
    getCallStatementData();
  }, []);
  const CALL_STATEMENT_DETAILS = callStatementDetails?.map((item) => {
    return {
      Date: "Sangram",
      Time: "Sangram",
      MeetingTitle: "Sangram",
      MeetingDuration: "Sangram",
      Charges: "Sangram",
      status: "Sangram",
    };
  });
  const [showPackagePopup, setShowPackagePopup] = useState(false);
  const handlePackagePopup = () => {
    setShowPackagePopup((prev) => !prev);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h5 className="meetings-heading mb-3">Call Statement</h5>
      <div className="d-flex flex-row justify-content-around mb-4 w-50">
        <div className="d-flex flex-column statement-container justify-content-around p-2">
          <div className="medium-font">Settlement Information Charges</div>
          <div className="clr-yellow medium-font">1000/Hour</div>
        </div>
        <div className="d-flex flex-column statement-container justify-content-around p-2">
          <div className="medium-font">Total Duration</div>
          <div className="clr-yellow medium-font">159h 59m 32s</div>
        </div>
        <div className="d-flex flex-column statement-container justify-content-around p-2">
          <div className="medium-font">Total Amount</div>
          <div className="clr-yellow medium-font">15970</div>
        </div>
      </div>
      <div>
        <table className="w-100 match-position-table medium-font">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                DATE & TIME
              </th>
              <th scope="col" className="text-center">
                MEETING TITLE
              </th>
              <th scope="col" className="text-center">
                MEETING DURATION
              </th>
              <th scope="col" className="text-center">
                CHARGES
              </th>
              <th scope="col" className="text-center">
                STATUS
              </th>
              <th scope="col" className="text-center"></th>
            </tr>
          </thead>
          {CALL_STATEMENT_DETAILS?.map((item, index) => (
            <tbody key={index}>
              <tr>
                <td className="text-center">
                  {item?.Date}
                  {item?.Time}
                </td>
                <td className="text-center ">{item?.MeetingTitle}</td>
                <td className="text-center">{item?.MeetingDuration}</td>
                <td className="text-center clr-green ">{item?.Charges}</td>
                <td className="text-center clr-green ">
                  <button className="rounded-pill p-1 history-status-approve-button w-100">
                    {item?.status}
                  </button>
                </td>
                <td className="text-center">
                  <AiFillPlayCircle
                    className="custom-icon"
                    onClick={() => handlePackagePopup()}
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
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
      <UpgradeYourPackagePopup
        showPackagePopup={showPackagePopup}
        setShowPackagePopup={setShowPackagePopup}
      />
    </div>
  );
}

export default CallStatement;
