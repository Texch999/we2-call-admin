import { Col, Row } from "antd";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Images } from "../../images";

function ManagementContainer() {
  const managementType = [
    {
      cssClass: "users-management-container",
      image: Images.userManagementIcon,
      name: "User",
      tagline: "Create your new users profile",
    },
    {
      cssClass: "sports-management-container",
      image: Images.sportManagementIcon,
      name: "Sports",
      tagline: "Create your match schedule meetings",
    },
  ];
  return (
    <Row className="management-container">
      <Col span={14} className="call-management p-1rem h-100p">
        <div className="w-100 h-100p call-sub-div flex">
          <div className="w-50 h-100p flex-center-col ml-20">
            <div className="font-25 mb-5">
              Call<span className="font-25-bold"> Management</span>
            </div>
            <div className="create-meeting-text mb-5">
              Create your new meetings
            </div>
            <div className="meeting-text">
              Amet, consectetur adipiscing elit, sed do
              <br /> eiusmod tempor incididunt ut labore et dolore
              <br /> magna aliqua.
            </div>
            <div className="button-w2c mt-10">We2Call</div>
          </div>
          <div className="w-50 h-100p flex-center-col ml-20">
            <img className="call-img" src={Images.callManagementIcon}></img>
          </div>
        </div>
      </Col>
      <Col span={10} className="sports-management ">
        {managementType.map((item, index) => {
          return (
            <div key={index} className={`${item.cssClass} flex-aline-center`}>
              <img className="user-management-img" src={item.image} />
              <div className="ml-10">
                <div className="font-25 mb-5">
                  {item.name}
                  <span className="font-25-bold"> Management</span>
                </div>
                {item.tagline}
                <br />
                <div className="arrow mt-10 flex-center">
                  <BsArrowRight className="font-20" />
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className="sports-management-container flex-aline-center">
            <img
              className="sports-management-img"
              src={Images.sportManagementIcon}
            />
            <div></div>
          </div> */}
      </Col>
    </Row>
  );
}

export default ManagementContainer;
