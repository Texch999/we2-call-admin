import React, { useState } from "react";
import { FaPercent } from "react-icons/fa6";
import { AiOutlineDown, AiOutlineUser } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import Table from "../home-page/Table";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { ImBlocked } from "react-icons/im";
import { BiLock } from "react-icons/bi";
import MatchSubmitPopup from "../match-popups/MatchSubmitPopup";

function UserManagement() {
  const shareList = ["UL Comm", "UL Share", "Owner Share"];
  const [createUserSubmit, setCreateUserSubmit] = useState(false);
  const handleSubmitUser = () => {
    setCreateUserSubmit(true);
  };
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
                  <FaPercent className="me-1" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-4 d-flex justify-content-between">
          <div className="w-40">
            <div>Client Type</div>
            <select className="sport-management-input d-flex  w-100 sport-management-select">
              <option className="w-90 ms-1">Client Type</option>
            </select>
          </div>
          <div className="w-55">
            <div>Client Name</div>
            <select className="sport-management-input d-flex  w-100 sport-management-select ">
              <option className="w-90 ms-1">Client Name</option>
            </select>
          </div>
        </div>
        <div className="col-3">
          <div>
            <div>Alias Name</div>
            <div className="sport-management-input d-flex ">
              <input className="w-90 ms-2 " placeholder="Enter"></input>
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
              <input placeholder="Enter" className="w-90 ms-1" />
              <FaPercent className="me-1" />
            </div>
          </div>
          <div className="w-30">
            <div>Deposit/Credit</div>
            <div className="sport-management-input d-flex ">
              <input placeholder="Enter" className="w-90" />
              <FaPercent className="me-1" />
            </div>
          </div>
        </div>
        <div className="col-4 d-flex justify-content-between">
          <div className="w-40">
            <div>Rf Fancy Comm</div>
            <div className="sport-management-input d-flex ">
              <input className="w-90" placeholder="Enter"></input>
              <FaPercent className="me-1" />
            </div>
          </div>
          <div className="w-55">
            <div>Rf Comm</div>
            <div className="sport-management-input d-flex w-100">
              <div className="w-90">Enter</div>
              <FaPercent className="me-1" />
            </div>
          </div>
        </div>
        <div className="col-3">
          <div>
            <div>Deposit/Credit</div>
            {/* <div className="w-90">Enter</div>
              <AiOutlineUser /> */}
            <select className="sport-management-input d-flex  w-100 sport-management-select meetings-heading">
              <option>Widthdraw</option>
              <option>Deposite</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row mt-3 meetings-heading">
        <div className="col-7 pr-3">
          <div className="row gutter-1rem">
            <div className="col">
              <div>Location</div>
              <div className="sport-management-input d-flex ">
                <div className="w-90">Enter</div>
                <BsChevronDown />
              </div>
            </div>
            <div className="col">
              <div>Match Risk Limit</div>
              <div className="sport-management-input d-flex ">
                <div className="w-90">Enter</div>
                <BsChevronDown />
              </div>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-3 d-flex align-items-end">
          <div
            className="sport-management-input w-100 d-flex justify-content-center align-items-center bg-yellow"
            onClick={() => handleSubmitUser()}
          >
            Submit
          </div>
        </div>
      </div>
      <hr className="mt-4" />
      <Table data={userTableTable} columns={userColumns} />
      <MatchSubmitPopup
        header={"You Are Successfully Created User"}
        state={createUserSubmit}
        setState={setCreateUserSubmit}
      />
    </div>
  );
}

export default UserManagement;
