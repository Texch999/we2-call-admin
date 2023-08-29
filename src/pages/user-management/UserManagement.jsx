import React from "react";
import { FaPercent } from "react-icons/fa6";
import { AiOutlineDown, AiOutlineUser } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import Table from "../home-page/Table";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { ImBlocked } from "react-icons/im";
import { BiLock } from "react-icons/bi";

function UserManagement() {
  const shareList = ["UL Comm", "UL Share", "Owner Share"];
  const userColumns = [
    { header: "USER NAME", field: "seriesName" },
    { header: "TYPE", field: "team" },
    { header: "ALIAS NAME", field: "sportName" },
    { header: "REFFER BY", field: "matchPlace" },
    { header: "ACTION", field: "editButton" },
  ];
  const userTableTable = [
    {
      seriesName: "T20 World Cup",
      team: "Newziland  vs  SriLanka",
      sportName: "Cricket, Male",
      matchPlace: "One day Amhadabad Stadium",
      editButton: (
        <div className="d-flex justify-content-between">
          <GoPencil className="edit-icon" />
          <RiDeleteBin6Fill className="edit-icon" />
          <ImBlocked className="edit-icon" />
          <BiLock className="edit-icon" />
        </div>
      ),
    },
    {
      seriesName: "T20 World Cup",
      team: "Newziland  vs  SriLanka",
      sportName: "Cricket, Male",
      matchPlace: "One day Amhadabad Stadium",
      editButton: (
        <div className="d-flex justify-content-between">
          <GoPencil className="edit-icon" />
          <RiDeleteBin6Fill className="edit-icon" />
          <ImBlocked className="edit-icon" />
          <BiLock className="edit-icon" />
        </div>
      ),
    },
    {
      seriesName: "T20 World Cup",
      team: "Newziland  vs  SriLanka",
      sportName: "Cricket, Male",
      matchPlace: "One day Amhadabad Stadium",
      editButton: (
        <div className="d-flex justify-content-between">
          <GoPencil className="edit-icon" />
          <RiDeleteBin6Fill className="edit-icon" />
          <ImBlocked className="edit-icon" />
          <BiLock className="edit-icon" />
        </div>
      ),
    },
  ];
  return (
    <div className="p-3">
      <h5 className="meetings-heading">User Management/Creation</h5>
      <div className="row gutter-1rem meetings-heading">
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
          <div className="w-40">
            <div>Client Type</div>
            <div className="sport-management-input d-flex ">
              <div className="w-90">Enter</div>
              <AiOutlineDown />
            </div>
          </div>
          <div className="w-55">
            <div>Client Name</div>
            <div className="sport-management-input d-flex w-100">
              <div className="w-90">Enter</div>
              <AiOutlineDown />
            </div>
          </div>
        </div>
        <div className="col-3">
          <div>
            <div>Alias Name</div>
            <div className="sport-management-input d-flex ">
              <div className="w-90">Enter</div>
              <AiOutlineUser />
            </div>
          </div>
        </div>
      </div>
      <div className="row gutter-1rem mt-3 meetings-heading">
        <div className="col-5 d-flex justify-content-between">
          <div className="w-70">
            <div>Select Referral</div>
            <div className="sport-management-input d-flex ">
              <input placeholder="Enter" className="w-90" />
              <FaPercent />
            </div>
          </div>
          <div className="w-30">
            <div>Deposit/Credit</div>
            <div className="sport-management-input d-flex ">
              <input placeholder="Enter" className="w-90" />
              <FaPercent />
            </div>
          </div>
        </div>
        <div className="col-4 d-flex justify-content-between">
          <div className="w-40">
            <div>Rf Fancy Comm</div>
            <div className="sport-management-input d-flex ">
              <div className="w-90">Enter</div>
              <AiOutlineDown />
            </div>
          </div>
          <div className="w-55">
            <div>Rf Comm</div>
            <div className="sport-management-input d-flex w-100">
              <div className="w-90">Enter</div>
              <AiOutlineDown />
            </div>
          </div>
        </div>
        <div className="col-3">
          <div>
            <div>Deposit/Credit</div>
            <div className="sport-management-input d-flex ">
              <div className="w-90">Enter</div>
              <AiOutlineUser />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 meetings-heading">
        <div className="col-7">
          <div className="row gutter-1rem">
            <div className="col-6">
              <div>Location</div>
              <div className="sport-management-input d-flex ">
                <div className="w-90">Enter</div>
                <BsChevronDown />
              </div>
            </div>
            <div className="col-6">
              <div>Match Risk Limit</div>
              <div className="sport-management-input d-flex ">
                <div className="w-90">Enter</div>
                <BsChevronDown />
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 d-flex align-items-end">
          <div className="sport-management-input w-100 d-flex justify-content-center align-items-center bg-yellow">
            Submit
          </div>
        </div>
      </div>
      <hr className="mt-4" />
      <Table data={userTableTable} columns={userColumns} />
    </div>
  );
}

export default UserManagement;
