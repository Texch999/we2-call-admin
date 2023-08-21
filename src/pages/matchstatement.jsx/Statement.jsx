import React, { useRef } from "react";
import { AiFillEye } from "react-icons/ai";
import { BiSolidCloudUpload } from "react-icons/bi";

function Statement() {
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
      status: "Approved",
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
      status: "Approved",
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

  const uploadfileInputRef = useRef(null);
  const handleUploadFileSelect = (e) => {
    const file = e.target.files[0];
    console.log("selected file", file);
  };
  const handleUploadButtonClick = () => {
    uploadfileInputRef.current.click();
  };
  return (
    <div className="p-2">
      <div className="xx-large-font mt-2 mb-4 font-weight-bold">
        Call Settelment
      </div>
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
        <button className="submit-button medium-font p-3">
          Verify
        </button>
      </div>
      <div>
        <table className="table settelment-table">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                DATE & TIME
              </th>
              <th scope="col" className="text-center">
                MEETING TITLE
              </th>
              <th scope="col" className="text-center">
                DURATION
              </th>
              <th scope="col" className="text-center">
                PRICE
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
                  <AiFillEye className="custom-icon" />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Statement;
