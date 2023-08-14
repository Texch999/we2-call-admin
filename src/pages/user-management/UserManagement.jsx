import { Col, Row } from "antd";
import { Select } from "antd";
import React from "react";
import {
  AiOutlineDown,
  AiOutlinePercentage,
  AiOutlineUser,
} from "react-icons/ai";
import { BiSolidChevronDown } from "react-icons/bi";

function UserManagement() {
  const ulInputs = [
    {
      label: "UL Comm",
      type: "number",
    },
    {
      label: "UL Share",
      type: "number",
    },
    {
      label: "Owner Share",
      type: "number",
    },
  ];
  return (
    <div className="homepage ">
      <div className="p-20">
        <div className="user-management-head ">User Management/Creation</div>
        <Row className="p-10" gutter={[16, 16]}>
          <Col span={10} className="user-inputs flex-space-between">
            {ulInputs.map((item, index) => {
              return (
                <div className="w-30">
                  <label>{item.label}</label>
                  <div className="flex-aline-center inputs-user">
                    <input
                      placeholder="Enter"
                      type={item.type}
                      className="w-90 p-10 "
                    />
                    <AiOutlinePercentage className="font-1rem mr-10" />
                  </div>
                </div>
              );
            })}
          </Col>
          <Col span={14} className="user-drops flex-space-between">
            <div className="w-25">
              <label>Client Type</label>
              <div className="flex-aline-center inputs-user">
                <span className="w-90 ml-10">Select</span>
                <BiSolidChevronDown className="mr-10" />
              </div>
            </div>
            <div className="w-35">
              <label>Client Name</label>
              <div className="flex-aline-center inputs-user">
                <span className="w-90 ml-10">Select</span>
                <AiOutlineDown className="mr-10" />
              </div>
            </div>
            <div className="w-35">
              <label>Alias Name</label>
              <div className="flex-aline-center inputs-user">
                <input placeholder="Enter" type="text" className="w-90 p-10 " />
                <AiOutlineUser className="font-1rem" />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="p-10" gutter={[16, 16]}>
          <Col span={10} className="user-inputs flex-space-between">
            <div className="w-65">
              <label>Select Refferal</label>
              <div className="flex-aline-center inputs-user">
                <input placeholder="Enter" type="text" className="w-90 p-10 " />
                <AiOutlineDown className="mr-10" />
              </div>
            </div>
            <div className="w-30">
              <label>Rf Share</label>
              <div className="flex-aline-center inputs-user">
                <input placeholder="Enter" type="text" className="w-90 p-10 " />
                <AiOutlinePercentage className="font-1rem mr-5" />
              </div>
            </div>
          </Col>
          <Col span={14} className="user-drops flex-space-between">
            <div className="w-25">
              <label>Rf Fancy Comm</label>
              <div className="flex-aline-center inputs-user">
                <input className="w-90 ml-10" placeholder="Enter" />
                <AiOutlinePercentage className="font-1rem mr-5" />
              </div>
            </div>
            <div className="w-35">
              <label>Rf Comm</label>
              <div className="flex-aline-center inputs-user">
                <input className="w-90 ml-10" placeholder="Enter" />
                <AiOutlinePercentage className="font-1rem mr-5" />
              </div>
            </div>
            <div className="w-35">
              <label>Deposit/Credit</label>
              <div className="flex-aline-center inputs-user">
                <div className="w-90 p-10 ">Select</div>
                <AiOutlineDown className="mr-10" />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="p-10" gutter={[16, 16]}>
          <Col span={13} className="user-inputs flex-space-between">
            <div className="w-50">
              <label>Select Refferal</label>
              <div className="flex-aline-center inputs-user">
                <input
                  placeholder="Enter"
                  type="text"
                  className="w-100 p-10 "
                />
              </div>
            </div>
            <div className="w-50 ml-20">
              <label>Select Refferal</label>
              <div className="flex-aline-center inputs-user">
                <input
                  placeholder="Enter"
                  type="text"
                  className="w-100 p-10 "
                />
              </div>
            </div>
          </Col>
          <Col span={11} className="user-drops flex-space-between">
            <div className="w-100 mt-15">
              <div className="flex-center inputs-user button-clr">Submit</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default UserManagement;
