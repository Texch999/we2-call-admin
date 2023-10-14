import React, { useRef, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { BiSolidCloudUpload } from "react-icons/bi";
import UploadScreenShot from "./UploadScreenShot";
import CustomPagination from "../pagination/CustomPagination";

function CallSettelment() {
  const SETTELMENT_DETAILS = [
    {
      date: "27 July 2023",
      time: "10:00:00 PM",
      amount: "5000",
      status: "Approved",
    },
    {
      date: "27 July 2023",
      time: "10:00:00 PM",
      amount: "5000",
      status: "Rejected",
    },
    {
      date: "27 July 2023",
      time: "10:00:00 PM",
      amount: "5000",
      status: "Approved",
    },
    {
      date: "27 July 2023",
      time: "10:00:00 PM",
      amount: "5000",
      status: "Rejected",
    },
  ];
  const [showUploadButton, setShowUploadButton] = useState();
  const handleUploadButton = () => {
    setShowUploadButton(true);
  };
  const uploadfileInputRef = useRef(null);
  const handleUploadFileSelect = (e) => {
    const file = e.target.files[0];
    console.log("selected file", file);
  };
  const handleUploadButtonClick = () => {
    uploadfileInputRef.current.click();
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add your logic here to fetch data for the selected page.
  };
  return (
    <div>
      <h5 className="meetings-heading mb-3">Call Settlement</h5>

      <div className="d-flex flex-row justify-content-around mb-4 w-100">
        <div className="d-flex flex-column statement-container settelment-container  justify-content-around p-2">
          <div className="medium-font">Package Charges</div>
          <div className="clr-yellow medium-font">5000</div>
        </div>
        <div className="d-flex flex-column statement-container settelment-container  justify-content-around p-2">
          <div className="medium-font">Date Upto</div>
          <div className="clr-yellow medium-font">24/07/2023</div>
        </div>
        <div className="d-flex flex-column statement-container settelment-container  justify-content-around p-2">
          <div className="medium-font">Total Duration</div>
          <div className="clr-yellow medium-font">4h 10m</div>
        </div>
        <div className="d-flex flex-column statement-container settelment-container  justify-content-around p-2">
          <div className="medium-font">Total Amount</div>
          <div className="clr-yellow medium-font">5000</div>
        </div>
        <div className="d-flex flex-column statement-container settelment-container  justify-content-around p-2">
          <div className="medium-font">Setteled Amount</div>
          <div className="clr-yellow medium-font">5000</div>
        </div>
        <div className="d-flex flex-column statement-container settelment-container  justify-content-around p-2">
          <div className="medium-font">Balance Amount</div>
          <div className="clr-yellow medium-font">0.00</div>
        </div>
      </div>
      <div className="d-flex flex-row mb-4 w-35 justify-content-between p-2">
        <div>
          <div className="medium-font mb-2">Settelment Amount</div>
          <div className="date-container d-flex justify-content-around align-items-center rounded p-2">
            <div className="small-font d-flex justify-content-start p-3">
              Setteled Amount
            </div>
          </div>
        </div>
        <div onClick={handleUploadButtonClick}>
          <div className="medium-font mb-2">Upload Screenshot</div>
          <div className="date-container d-flex justify-content-around align-items-center rounded p-3">
            <div className="small-font">Upload Screenshot</div>
            <input
              type="file"
              ref={uploadfileInputRef}
              style={{ display: "none" }}
              onChange={handleUploadFileSelect}
              className="login-inputs"
            ></input>
            <BiSolidCloudUpload className="custom-icon"></BiSolidCloudUpload>
          </div>
        </div>
        <button className="submit-button mt-3 medium-font all-none">
          Create Settelment
        </button>
      </div>

      <div>
        <table className="w-100 match-position-table medium-font">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                CREATE DATE
              </th>
              <th scope="col" className="text-center">
                CREATE TIME
              </th>
              <th scope="col" className="text-center">
                SETTELED AMOUNT
              </th>
              <th scope="col" className="text-center">
                STATUS
              </th>
              <th scope="col" className="text-center"></th>
            </tr>
          </thead>
          {SETTELMENT_DETAILS.map((item, index) => (
            <tbody key={index}>
              <tr>
                <td className="text-center">{item.date}</td>
                <td className="text-center ">{item.time}</td>
                <td className="text-center">{item.amount}</td>
                <td className="text-center clr-green ">
                  <button
                    className={
                      item.status === "Approved"
                        ? "rounded-pill p-1 history-status-approve-button"
                        : "rounded-pill p-1 history-status-reject-button "
                    }
                  >
                    {" "}
                    {item.status}
                  </button>
                  {/* <button className="rounded-pill p-1 history-status-button">
                    {item.status}
                  </button> */}
                </td>
                <td className="text-center">
                  <AiFillEye
                    className="custom-icon"
                    onClick={() => handleUploadButton()}
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
      <UploadScreenShot
        showUploadButton={showUploadButton}
        setShowUploadButton={setShowUploadButton}
      />
    </div>
  );
}

export default CallSettelment;
