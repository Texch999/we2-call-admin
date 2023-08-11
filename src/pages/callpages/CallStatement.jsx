import React, { useState } from "react";
import { Col, Row } from "antd";
import { BsFillPlayCircleFill } from "react-icons/bs";
import "./styles.css";

function CallStatement() {
  const SETTELMENT_DETAILS = [
    {
      datetime: "19 July 2023, 10:00:00 PM",
      title: "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      duration: "1 Hour 30 Mintes",
      charge: "5000",
      status: "Completed",
      record: "",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      title: "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      duration: "1 Hour 30 Mintes",
      charge: "5000",
      status: "Completed",
      record: "",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      title: "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      duration: "1 Hour 30 Mintes",
      charge: "5000",
      status: "Completed",
      record: "",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      title: "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      duration: "1 Hour 30 Mintes",
      charge: "5000",
      status: "Completed",
      record: "",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      title: "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      duration: "1 Hour 30 Mintes",
      charge: "5000",
      status: "Completed",
      record: "",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      title: "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      duration: "1 Hour 30 Mintes",
      charge: "5000",
      status: "Completed",
      record: "",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      title: "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      duration: "1 Hour 30 Mintes",
      charge: "5000",
      status: "Completed",
      record: "",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      title: "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      duration: "1 Hour 30 Mintes",
      charge: "5000",
      status: "Completed",
      record: "",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      title: "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      duration: "1 Hour 30 Mintes",
      charge: "5000",
      status: "Completed",
      record: "",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      title: "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      duration: "1 Hour 30 Mintes",
      charge: "5000",
      status: "Completed",
      record: "",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      title: "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      duration: "1 Hour 30 Mintes",
      charge: "5000",
      status: "Completed",
      record: "",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      title: "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      duration: "1 Hour 30 Mintes",
      charge: "5000",
      status: "Completed",
      record: "",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      title: "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      duration: "1 Hour 30 Mintes",
      charge: "5000",
      status: "Completed",
      record: "",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      title: "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      duration: "1 Hour 30 Mintes",
      charge: "5000",
      status: "Completed",
      record: "",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      title: "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      duration: "1 Hour 30 Mintes",
      charge: "5000",
      status: "Completed",
      record: "",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      title: "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      duration: "1 Hour 30 Mintes",
      charge: "5000",
      status: "Completed",
      record: "",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      title: "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      duration: "1 Hour 30 Mintes",
      charge: "5000",
      status: "Completed",
      record: "",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      title: "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      duration: "1 Hour 30 Mintes",
      charge: "5000",
      status: "Completed",
      record: "",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      title: "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      duration: "1 Hour 30 Mintes",
      charge: "5000",
      status: "Completed",
      record: "",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      title: "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      duration: "1 Hour 30 Mintes",
      charge: "5000",
      status: "Completed",
      record: "",
    },
  ];
  const [paymentModal, setPaymentModal] = useState(false);
  const handlePaymentModalOpen = () => {
    setPaymentModal(!paymentModal);
  };
  return (
    <div className="homepage">
      <div className="main-div p-10">
        <div className="meetings-container flex-column">
          <div className="font-24 fw-600 flex-start p-10 mt-20">
            Call Statement
          </div>
        </div>
        <div className="flex-row flex-space-around w-60 mb-20">
          <div className="details-btn w-40 h-5vh br-10 flex-space-around flex-column align-baseline p-5 mr-10 ml-10">
            <div className="font-14 flex-start">
              Settlement Information Charges
            </div>
            <div className="clr-yellow font-14 fw-600">1000/Hour</div>
          </div>
          <div className="details-btn w-30 h-5vh br-10 flex-space-around flex-column align-baseline p-5  mr-10 ml-10">
            <div className="font-14">Total Duration</div>
            <div className="clr-yellow font-14 fw-600">159h 59m 32s</div>
          </div>
          <div className="details-btn w-30 h-5vh br-10 flex-space-around flex-column align-baseline p-5 mr-10 ml-10">
            <div className="font-14">Total Amount</div>
            <div className="clr-yellow font-14 fw-600">15970</div>
          </div>
        </div>
        <div className="p-15">
          {" "}
          <div className="table-border">
            <div className="upcoming-meetings-heading">
              <Row>
                <Col span={4}>
                  <div className="font-12 fw-600">DATE & TIME</div>
                </Col>
                <Col span={9}>
                  <div className="font-12 fw-600">MEETING TITLE</div>
                </Col>
                <Col span={4}>
                  <div className="font-12 fw-600">MEETING DURATION</div>
                </Col>
                <Col span={3}>
                  <div className="font-12 fw-600">CHARGES</div>
                </Col>
                <Col span={3}>
                  <div className="font-12 fw-600">STATUS</div>
                </Col>
                <Col span={1}>
                  <div className="font-12 fw-600"></div>
                </Col>
              </Row>
            </div>
            <div className="meeting-content h-80vh">
              {SETTELMENT_DETAILS?.map((item, index) => (
                <div className="upcoming-meetings-content" key={index}>
                  <Row>
                    <Col span={4}>
                      <div className="font-12 fw-600">{item.datetime}</div>
                    </Col>
                    <Col span={9}>
                      <div className="font-12 fw-600">{item.title}</div>
                    </Col>
                    <Col span={4}>
                      <div className="font-12 fw-600">{item.duration}</div>
                    </Col>
                    <Col span={3}>
                      <div className="font-12 fw-600">{item.charge}</div>
                    </Col>
                    <Col span={3}>
                      <div className="font-12 fw-600 clr-green">
                        <button className="complete-button">
                          {" "}
                          {item.status}
                        </button>
                      </div>
                    </Col>
                    <Col span={1}>
                      <BsFillPlayCircleFill
                        className="font-18 fw-600 clr-yellow"
                        onClick={() => handlePaymentModalOpen()}
                      ></BsFillPlayCircleFill>
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallStatement;
