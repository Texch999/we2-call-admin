import { Col, Row } from "antd";
import { BiRightArrowCircle } from "react-icons/bi";
import UserDetails from "./UserDetails";
import AdminDetails from "./AdminDetails";
import { useState } from "react";

function YourAdminsTable() {
  const [activeIndex, setActiveIndex] = useState();
  const [userDetails, setUserDetails] = useState(false);
  const [adminDetails, setAdminDetails] = useState(false);
  const handleUserDetails = (index) => {
    setUserDetails(true);
    setAdminDetails(false);
    setActiveIndex(index);
  };
  const handleAdminDetails = (index) => {
    setAdminDetails(true);
    setUserDetails(false);
    setActiveIndex(index);
  };
  const ADMIN_DETAILS = [
    {
      name: "Srinivas",
      role: "Super Admin",
      users: "Users  5200",
      admins: "Admins  5200",
    },
    {
      name: "Srinivas",
      role: "Super Admin",
      users: "Users  5200",
      admins: "Admins  5200",
    },
    {
      name: "Srinivas",
      role: "Super Admin",
      users: "Users  5200",
      admins: "Admins  5200",
    },
  ];

  return (
    <div className="common-container">
      <Row gutter={[24, 24]}>
        <Col span={10}>
          <div className="your-users-heading">
            <Row>
              <Col span={5}>
                <div className="font-12 fw-600">NAME</div>
              </Col>
              <Col span={5}>
                <div className="font-12 fw-600">ROLE</div>
              </Col>
              <Col span={14}>
                <div className="font-12 fw-600">INTRESTED</div>
              </Col>
            </Row>
          </div>
          <div className="meeting-content">
            {ADMIN_DETAILS?.map((item, index) => (
              <div className="your-admins-content" key={index}>
                <Row>
                  <Col span={5}>
                    <div className="font-12 fw-600">{item.name}</div>
                  </Col>
                  <Col span={5}>
                    <div className="font-12 fw-600">{item.role}</div>
                  </Col>
                  <Col span={7} className="flex-center">
                    <div
                      className={`${
                        userDetails
                          ? activeIndex === index
                            ? "user-active-btn"
                            : ""
                          : null
                      } flex-space-evenly user-btn font-12 fw-600`}
                      onClick={() => handleUserDetails(index)}
                    >
                      {item.users}
                      <BiRightArrowCircle className="font-14" />
                    </div>
                  </Col>
                  <Col span={7} className="flex-center">
                    <div
                      className={`${
                        adminDetails
                          ? activeIndex === index
                            ? "user-active-btn"
                            : ""
                          : null
                      } flex-space-evenly user-btn font-12 fw-600`}
                      onClick={() => handleAdminDetails(index)}
                    >
                      {item.admins}
                      <BiRightArrowCircle className="font-14" />
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </Col>
        <Col span={14}>
          {userDetails && <UserDetails />}
          {adminDetails && <AdminDetails />}
        </Col>
      </Row>
    </div>
  );
}

export default YourAdminsTable;
