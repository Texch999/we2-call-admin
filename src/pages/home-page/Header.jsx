import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { BiShareAlt } from "react-icons/bi";
import { Images } from "../../images";
import {
  AiFillWarning,
  AiOutlineDown,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";
import { CiStickyNote } from "react-icons/ci";
import "./style.css";

function Header() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [activeHead, setActiveHead] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleActiveHead = (index) => {
    setActiveHead(index);
  };

  const headerMenuItems = [
    "Home",
    "Chat",
    "Tours & Tournaments",
    "Match Entry",
    "Report",
    "More",
  ];

  const matchEntryOptions = [
    {
      icon: <CiStickyNote />,
      name: "font-weight-bold",
    },
    {
      icon: <AiFillWarning />,
      name: "Share Risk",
    },
  ];
  return (
    <div className="agent-header">
      <div className=" p-3 d-flex justify-content-between">
        {/* <div className="col-1"> */}
          <img src={Images.header_logo} className="head-image " />
        {/* </div> */}
        <div className="w-75 bl-1 br-1 d-flex">
          <div className="w-80px ms-1">
            {currentDateTime.toLocaleDateString()}
            <br />
            {currentDateTime.toLocaleTimeString()}
          </div>
          <div className="d-flex ms-3 align-items-center justify-content-between w-75">
            {headerMenuItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    activeHead === index ? "active-head-menu" : "head-menu"
                  }
                  onClick={() => handleActiveHead(index)}
                >
                  {item}
                  {index > 2 ? <AiOutlineDown className="ms-1" /> : ""}
                </div>
              );
            })}
          </div>
          <div className="d-flex ms-2 align-items-center">
            <div className="profile-image d-flex align-items-center justify-content-center">
              <AiOutlineUser className="user-img" />
            </div>
            <div>Agent Name</div>
          </div>
        </div>
        <div className="col-2 d-flex">
          <div className="profile-image d-flex align-items-center justify-content-center">
            <AiOutlineUser className="user-img" />
          </div>
          <div className="profile-image d-flex align-items-center justify-content-center ms-1">
            <AiOutlineUser className="user-img" />
          </div>
        </div>
        {/* <div className="col-2 align-items-center">
            <div className="profile-image d-flex align-items-center justify-content-center">
              <AiOutlineUser className="user-img" />
            </div>
            <div className="profile-image d-flex align-items-center justify-content-center ms-1">
              <AiOutlineUser className="user-img" />
            </div>
          </div> */}
      </div>
      {/* <nav className="navbar navbar-expand-lg header-bg">
        <div className="container-fluid p-3">
          <img src={Images.header_logo} className="head-image "></img>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a
                  className="nav-link active font-white"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/match-entry">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle "
                  href="/match-entry"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Match Entry
                </a>
                <ul className="dropdown-menu">
                  {matchEntryOptions.map((item, index) => {
                    return (
                      <li key={index}>
                        <div className="dropdown-item " href="#">
                          {item.icon}
                          {item.name}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Report
                </a>
                <ul className="dropdown-menu">
                  {matchEntryOptions.map((item, index) => {
                    return (
                      <li key={index}>
                        <div className="dropdown-item " href="#">
                          {item.icon}
                          {item.name}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu">
                  {matchEntryOptions.map((item, index) => {
                    return (
                      <li key={index}>
                        <div className="dropdown-item " href="#">
                          {item.icon}
                          {item.name}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
            <div>
              <BiShareAlt />
            </div>
            <div>
              <AiOutlineSetting />
            </div>
          </div>
        </div>
      </nav> */}
      <Marquee className="marqu-tag">
        Your privacy is our priority. With end-to-end encryption, you can be
        sure that your personal messages stay between you and who you send them
        to. Your privacy is our priority. With end-to-end encryption, you can be
        sure that your personal messages stay between you and who you send them
        to.
      </Marquee>
    </div>
  );
}

export default Header;
