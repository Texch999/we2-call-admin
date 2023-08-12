import { Col, Row } from "antd";
import React from "react";
import { AiOutlineDownCircle } from "react-icons/ai";
import { PiPencilLineBold } from "react-icons/pi";

function AlertsAndConnect() {
  const tableContent = [
    {
      adminRole: "Jay",
      eventName: "India -  E, Newziland vs SriLanka oneday 23-06-2023, 15:42:00 PM",
      userName: "100000",
      status: "Edited",
    },
    {
        adminRole: "Jay",
        eventName: "India -  E, Newziland vs SriLanka oneday 23-06-2023, 15:42:00 PM",
        userName: "100000",
        status: "Edited",
      },
      {
        adminRole: "Jay",
        eventName: "India -  E, Newziland vs SriLanka oneday 23-06-2023, 15:42:00 PM",
        userName: "100000",
        status: "Edited",
      },
      {
        adminRole: "Jay",
        eventName: "India -  E, Newziland vs SriLanka oneday 23-06-2023, 15:42:00 PM",
        userName: "100000",
        status: "Edited",
      },
      {
        adminRole: "Jay",
        eventName: "India -  E, Newziland vs SriLanka oneday 23-06-2023, 15:42:00 PM",
        userName: "100000",
        status: "Edited",
      },
    
  ];
  return (
    <Row className="upcoming-main-container flex-space-between">
      <div className="w-49 upcoming-container">
        <div className="w-90 flex-space-between m-20">
          <div className="live-heading">Alert Bets</div>
          <div className="see-all flex-aline-center">
            See All
            <AiOutlineDownCircle className="ml-5" />
          </div>
        </div>
        <Row className="w-90 m-20 live-table-head">
          <Col className="table-text" span={6}>
            Users 
          </Col>
          <Col className="table-text" span={9}>
            Match Name
          </Col>
          <Col className="table-text" span={5}>
            Amount
          </Col>
          <Col className="table-text" span={4}>
            Status
          </Col>
        </Row>
        <div className="w-100 table-scroll">
          {tableContent.map((item, index) => {
            return (
              <Row className="w-90 m-20 live-table-content">
                <Col className="table-text" span={4}>
                  {item.adminRole}
                </Col>
                <Col className="table-text" span={10}>
                  {item.eventName}
                </Col>
                <Col span={5} className="ml-10 table-text">
                  {item.userName}
                  {index !== 0 ? (
                    <PiPencilLineBold className="pencil-icon" />
                  ) : null}
                </Col>
                <Col span={4} className="join-button flex-center table-text">
                  {item.status}
                </Col>
              </Row>
            );
          })}
        </div>
      </div>
    </Row>
  );
}

export default AlertsAndConnect;
