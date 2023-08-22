import React from "react";
import { Images } from "../../images";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router";

function ManagementContainer() {
  const navigate = useNavigate();
  return (
    <div className="row vh-50 p-3">
      <div className="col-7 call-management col-sm-12 col-md-12 col-lg-7 col-xl-7 d-flex">
        <div className="w-50 p-3 call-management-text">
          <h2>Call Management</h2>
          <h5>Create your new meetings</h5>
          <p>
            Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
          <div className="we2-call-button">we2Call</div>
        </div>
        <div className="w-50 d-flex align-items-center justify-content-center">
          <img
            className="call-management-image"
            src={Images.headphone_with_microphone}
          ></img>
        </div>
      </div>
      <div className="col-5 col-sm-12 col-md-12 col-lg-5 col-xl-5 management">
        <div className="user-management  d-flex p-3 align-items-center">
          <div>
            <img
              className="management-image"
              src={Images.SportManagement}
            ></img>
          </div>
          <div className="ms-3">
            <h2>Sports Management</h2>
            <h5>Create your new meetings</h5>
            <div className="right-arrow-icon">
              <BsArrowRight onClick={() => navigate("/sport-management")} />
            </div>
          </div>
        </div>
        <div className="sports-management  p-3 d-flex align-items-center">
          <div>
            <img className="management-image" src={Images.UserManagement}></img>
          </div>
          <div className="ms-3">
            <h2>User Management</h2>
            <h5>Create your new meetings</h5>
            <div className="right-arrow-icon">
              <BsArrowRight onClick={() => navigate("/user-management")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagementContainer;
