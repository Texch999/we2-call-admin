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
      <div className="row">
        <div className="col-5">
          <div className="your-users-heading">
            <div className="row your-users-head">
              <div className="col-3">
                <div className="font-12 fw-600">NAME</div>
              </div>
              <div className="col-2">
                <div className="font-12 fw-600">ROLE</div>
              </div>
              <div className="col-7">
                <div className="font-12 fw-600">INTRESTED</div>
              </div>
            </div>
          </div>
          <div className="meeting-content">
            {ADMIN_DETAILS?.map((item, index) => (
              <div className="your-admins-content" key={index}>
                <div className="row .your-admin-content">
                  <div className="col-3">
                    <div className="font-12 fw-600">{item.name}</div>
                  </div>
                  <div className="col-2">
                    <div className="font-12 fw-600">{item.role}</div>
                  </div>
                  <div className="col-4 flex-center">
                    <div
                      className={`${
                        userDetails
                          ? activeIndex === index
                            ? "user-active-btn"
                            : ""
                          : null
                      } d-flex justify-content-evenly align-items-center user-btn font-12 fw-600`}
                      onClick={() => handleUserDetails(index)}
                    >
                      {item.users}
                      <BiRightArrowCircle className="font-14" />
                    </div>
                  </div>
                  <div className="col-3 flex-center">
                    <div
                      className={`${
                        adminDetails
                          ? activeIndex === index
                            ? "user-active-btn"
                            : ""
                          : null
                      } d-flex justify-content-evenly align-items-center user-btn font-12 fw-600`}
                      onClick={() => handleAdminDetails(index)}
                    >
                      {item.admins}
                      <BiRightArrowCircle className="font-14" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-5">
          {userDetails && <UserDetails />}
          {adminDetails && <AdminDetails />}
        </div>
      </div>
    </div>
  );
}

export default YourAdminsTable;
