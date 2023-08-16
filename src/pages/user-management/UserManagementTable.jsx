import { Col, Row } from "antd";
import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaPencil } from "react-icons/fa6";
import { MdOutlineBlock } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";

function UserManagementTable() {
  const tableContent = [
    {
      userName: "Sai user",
      role: "Agent",
      aliasName: "",
      reffer: "Jay7543",
      action: (
        <div className="w-100 flex-space-around">
          <FaPencil className="edit-icons" />
          <RiDeleteBin5Fill className="edit-icons" />
          <MdOutlineBlock className="edit-icons" />
          <AiFillLock className="edit-icons" />
        </div>
      ),
    },
    {
      userName: "Sai user",
      role: "Agent",
      aliasName: "Sai",
      reffer: "Jay7543",
      action: (
        <div className="w-100 flex-space-around">
          <FaPencil className="edit-icons" />
          <RiDeleteBin5Fill className="edit-icons" />
          <MdOutlineBlock className="edit-icons" />
          <AiFillLock className="edit-icons" />
        </div>
      ),
    },
    {
      userName: "Sai user",
      role: "Agent",
      aliasName: "Sai12334",
      reffer: "Jay7543",
      action: (
        <div className="w-100 flex-space-around">
          <FaPencil className="edit-icons" />
          <RiDeleteBin5Fill className="edit-icons" />
          <MdOutlineBlock className="edit-icons" />
          <AiFillLock className="edit-icons" />
        </div>
      ),
    },
    {
      userName: "Sai user",
      role: "Agent",
      aliasName: "Sai12334",
      reffer: "Jay7543",
      action: (
        <div className="w-100 flex-space-around">
          <FaPencil className="edit-icons" />
          <RiDeleteBin5Fill className="edit-icons" />
          <MdOutlineBlock className="edit-icons" />
          <AiFillLock className="edit-icons" />
        </div>
      ),
    },
    {
      userName: "Sai user",
      role: "Agent",
      aliasName: "Sai12334",
      reffer: "Jay7543",
      action: (
        <div className="w-100 flex-space-around">
          <FaPencil className="edit-icons" />
          <RiDeleteBin5Fill className="edit-icons" />
          <MdOutlineBlock className="edit-icons" />
          <AiFillLock className="edit-icons" />
        </div>
      ),
    },
  ];
  return (
    <div className="plr-20 bt-2px pb-30">
      <Row className="table-head mt-10">
        <Col span={4} className="pl-5">
          USER NAME
        </Col>
        <Col span={4}>TYPE</Col>
        <Col span={4}>ALIAS NAME</Col>
        <Col span={4}>REFFER BY</Col>
        <Col span={8} className="flex-center">
          ACTION
        </Col>
      </Row>
      {tableContent.map((item, index) => {
        return (
          <Row className="table-content">
            <Col span={4} className="pl-5">
              {item.userName}
            </Col>
            <Col span={4}>{item.role}</Col>
            <Col span={4}>{item.aliasName}</Col>
            <Col span={4}>{item.reffer}</Col>
            <Col span={8} className="flex-center">
              {item.action}
            </Col>
          </Row>
        );
      })}
    </div>
  );
}

export default UserManagementTable;
