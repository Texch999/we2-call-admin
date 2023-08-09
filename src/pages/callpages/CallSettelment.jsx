import React, { useState } from "react";
import "./styles.css";
import { Col, Row } from "antd";
import { FiFileText } from "react-icons/fi";
import { MdCloudUpload } from "react-icons/md";
import { BsFillEyeFill } from "react-icons/bs";
import UploadScreenshotModal from "./UploadScreenshotModal";

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

  const [showUploadScreenshotModal, setShowUploadScreenshotModal] =
    useState(false);
  const handleUploadButton = () => {
    setShowUploadScreenshotModal(true);
  };
  return (
    <div className="homepage">
      <div className="main-div">
        <div className="meetings-container flex-column">
          <div className="font-30 fw-600 flex-start mb-20 p-10">
            Call Settelment
          </div>
        </div>
        <div className="flex-row flex-space-around w-100 mb-20">
          <div className="details-btn w-30 h-7vh br-10 flex-space-around flex-column align-baseline p-5 mr-10 ml-10">
            <div className="font-16">Package Charges</div>
            <div className="clr-yellow">5000</div>
          </div>
          <div className="details-btn w-30 h-7vh br-10 flex-space-around flex-column align-baseline p-5  mr-10 ml-10">
            <div className="font-16">Date Upto</div>
            <div className="clr-yellow">24/07/2023</div>
          </div>
          <div className="details-btn w-30 h-7vh br-10 flex-space-around flex-column align-baseline p-5 mr-10 ml-10">
            <div className="font-16">Total Duration</div>
            <div className="clr-yellow">4h 10m</div>
          </div>
          <div className="details-btn w-30 h-7vh br-10 flex-space-around flex-column align-baseline p-5 mr-10 ml-10">
            <div className="font-16">Total Amount</div>
            <div className="clr-yellow">5000</div>
          </div>
          <div className="details-btn w-30 h-7vh br-10 flex-space-around flex-column align-baseline p-5  mr-10 ml-10">
            <div className="font-16">Settled Amount</div>
            <div className="clr-yellow">5000</div>
          </div>
          <div className="details-btn w-30 h-7vh br-10 flex-space-around flex-column align-baseline p-5 mr-10 ml-10">
            <div className="font-16">Balance Amount</div>
            <div className="clr-yellow">0.00</div>
          </div>
        </div>
        <div className="flex-row flex-space-around w-50 mb-20">
          <div className="flex-row w-30">
            <div className="font-14 flex-start mb-10">Setteled Amount</div>
            <div className="calendar-button">
              <input
                className="login-inputs "
                type="number"
                placeholder="Enter Amount"
              ></input>
            </div>
          </div>
          <div className="flex-row w-30">
            <div className="font-14 flex-start mb-10">Upload Screenshot</div>
            <div className="calendar-button">
              <input
                type="file"
                className="login-inputs"
                placeholder="file"
              ></input>
              <MdCloudUpload className="font-24 fw-600 clr-yellow"></MdCloudUpload>
            </div>
          </div>
          <button className="submit-btn w-20 h-50p mt-15">Submit</button>
        </div>
        <div className="table-border p-0">
          <div className="upcoming-meetings-heading">
            <Row>
              <Col span={4}>
                <div className="font-12 fw-600">CREATE DATE</div>
              </Col>
              <Col span={4}>
                <div className="font-12 fw-600">CREATE TIME</div>
              </Col>
              <Col span={8}>
                <div className="font-12 fw-600">SETTELED AMOUNT</div>
              </Col>
              <Col span={6}>
                <div className="font-12 fw-600">STATUS</div>
              </Col>
              <Col span={2}>
                <div className="font-12 fw-600"></div>
              </Col>
            </Row>
          </div>
          <div className="meeting-content">
            {SETTELMENT_DETAILS?.map((item, index) => (
              <div className="upcoming-meetings-content" key={index}>
                <Row>
                  <Col span={4}>
                    <div className="font-12 fw-600">{item.date}</div>
                  </Col>
                  <Col span={4}>
                    <div className="font-12 fw-600">{item.time}</div>
                  </Col>
                  <Col span={8}>
                    <div className="font-12 fw-600">{item.amount}</div>
                  </Col>
                  <Col span={6}>
                    <div className="font-12 fw-600 clr-green">
                      <button
                        className={
                          item.status === "Approved"
                            ? "complete-button w-50"
                            : "rejected-buttons w-50"
                        }
                      >
                        {item.status}
                      </button>
                      {/* <button className="complete-button w-50">
                        {" "}
                        {item.status}
                      </button> */}
                    </div>
                  </Col>

                  <Col span={2}>
                    <BsFillEyeFill
                      className="font-18 fw-600 clr-yellow"
                      onClick={() => handleUploadButton()}
                    ></BsFillEyeFill>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </div>
        <UploadScreenshotModal
          showUploadScreenshotModal={showUploadScreenshotModal}
          setShowUploadScreenshotModal={setShowUploadScreenshotModal}
        />
      </div>
    </div>
  );
}

export default CallSettelment;
