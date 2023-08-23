import React from "react";
import { FaPercent } from "react-icons/fa6";

function UserManagement() {
  const shareList = ["UL Comm", "UL Share", "Owner Share"];
  return (
    <div className="p-3">
      <h4>All Admins / Sports Management</h4>
      <div className="row gutter-1rem">
        <div className="col-5 d-flex justify-content-between">
          {shareList.map((item, index) => {
            return (
              <div index={index} className="w-30">
                <div>{item}</div>
                <div className="sport-management-input d-flex ">
                  <input placeholder="Enter" className="w-90" />
                  <FaPercent />
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-4 d-flex justify-content-between">
          <div className="w-30">
            <div>Client</div>
            <div className="sport-management-input d-flex ">
              <div className="w-90" >Enter</div>
              <FaPercent />
            </div>
          </div>
          <div className="w-50">
            <div>Client</div>
            <div className="sport-management-input d-flex w-100">
              <div className="w-90" >Enter</div>
              <FaPercent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
