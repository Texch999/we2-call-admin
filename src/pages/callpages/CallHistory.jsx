import React, { useState } from "react";
import { Col, Row } from "antd";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import "./styles.css";
import DeletePopup from "./DeletePopup";

function CallHistory() {
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
  const [deleteModal, setdeleteModal] = useState(false);
  const handleDeleteModal = () => {
    setdeleteModal(true);
  };
  return (
    <div className="we-2-call-homepage mt-14vh">
      <div className="main-div">
        <div className="meetings-container flex-column">
          <div className="font-30 fw-600 flex-start mb-20 p-10">
            Call History
          </div>
        </div>
        <div className="flex-row flex-space-around w-50 mb-20">
          <div className="flex-row w-30">
            <div className="font-12 flex-start">From</div>
            <div className="calendar-button">
              <input className="login-inputs " type="date"></input>
              <FaCalendarAlt
                className="font-24 fw-600 clr-yellow"
                onClick={() => handlePaymentModalOpen()}
              ></FaCalendarAlt>
            </div>
          </div>
          <div className="flex-row w-30">
            <div className="font-12 flex-start">To</div>
            <div className="calendar-button">
              <input type="date" className="login-inputs"></input>
              <FaCalendarAlt
                className="font-24 fw-600 clr-yellow"
                onClick={() => handlePaymentModalOpen()}
              ></FaCalendarAlt>
            </div>
          </div>
          <button className="submit-btn w-20 h-50p mt-15">Submit</button>
        </div>
        <div className="table-border p-0">
          <div className="upcoming-meetings-heading">
            <Row>
              <Col span={3}>
                <div className="font-12 fw-600">DATE & TIME</div>
              </Col>
              <Col span={10}>
                <div className="font-12 fw-600">MEETING TITLE</div>
              </Col>
              <Col span={3}>
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
              <Col span={1}>
                <div className="font-12 fw-600"></div>
              </Col>
            </Row>
          </div>
          <div className="meeting-content h-80vh">
            {SETTELMENT_DETAILS?.map((item, index) => (
              <div className="upcoming-meetings-content" key={index}>
                <Row>
                  <Col span={3}>
                    <div className="font-12 fw-600">{item.datetime}</div>
                  </Col>
                  <Col span={10}>
                    <div className="font-12 fw-600">{item.title}</div>
                  </Col>
                  <Col span={3}>
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
                    <BsFillPlayCircleFill className="font-18 fw-600 clr-yellow"></BsFillPlayCircleFill>
                  </Col>
                  <Col span={1}>
                    <RiDeleteBin6Fill
                      className="font-18 fw-600 clr-yellow"
                      onClick={() => handleDeleteModal()}
                    ></RiDeleteBin6Fill>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </div>
      </div>
      <DeletePopup deleteModal={deleteModal} setdeleteModal={setdeleteModal} />
    </div>
  );
}

export default CallHistory;
