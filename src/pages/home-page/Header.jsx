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
import Login from "../log-in/Login";

// ====================================================================================

// import { Images } from "../images";
// import moment from "moment";
// import Marquee from "react-fast-marquee";
// import "./common.css";
// import "./styles.css";
import { useNavigate } from "react-router-dom";
import {
  FaChevronDown,
  FaChevronUp,
  FaHandshake,
  FaRegAddressBook,
  FaRegHandshake,
} from "react-icons/fa";
import { LiaFolderSolid } from "react-icons/lia";
// import { AiFillWarning } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbReport, TbReportSearch } from "react-icons/tb";
import { GiArmorUpgrade } from "react-icons/gi";
// import { ShareAltOutlined, SettingOutlined } from "@ant-design/icons";
import { BiPhoneCall } from "react-icons/bi";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { MdOutlinePrivacyTip } from "react-icons/md";
import ResetPassword from "../log-in/ResetPassword";
// import { useState } from "react";
// import { Images } from "../../images";

function Header() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  // const [activeHead, setActiveHead] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showResetPopup, setShowResetPopup] = useState(false);
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

  const handleLoginPopup = () => {
    setShowLoginPopup(true);
    // console.log("Hello")
  };

  // =========================================================================================

  const [activeHead, setActiveHead] = useState(0);
  const [matchEntryOpen, setMatchEntryOpen] = useState(false);
  const [matchEntryType, setMatchEntryType] = useState("Match Entry");
  const [reportsOpen, setReportsOpen] = useState(false);
  const [reportsType, setReportsType] = useState("Report");
  const [moreOpen, setMoreOpen] = useState(false);
  const [moreType, setMoreType] = useState("More");
  const headerMenu = [
    "Home",
    "Chat",
    "Tours & Tournaments",
    matchEntryType,
    reportsType,
    moreType,
  ];
  const MatchEntryDropdown = [
    { icon: <LiaFolderSolid className="mr-10" />, name: "Match Entry" },
    { icon: <AiFillWarning className="mr-10" />, name: "Share Risk" },
  ];

  const ReportsEntryDropdown = [
    {
      icon: <BiPhoneCall className="mr-10" />,
      name: "Call History",
    },
    {
      icon: <FaRegHandshake className="mr-10" />,
      name: "Call Settlement",
    },
    {
      icon: <FaRegAddressBook className="mr-10" />,
      name: "Call Statement",
    },
    {
      icon: <TbReportSearch className="mr-10" />,
      name: "Match  Statement",
    },
    {
      icon: <TbReport className="mr-10" />,
      name: "One Page Reports",
    },
    {
      icon: <FaRegHandshake className="mr-10" />,
      name: "Settlement",
    },
    {
      icon: <FaHandshake className="mr-10" />,
      name: "Settlement Statement",
    },
    {
      icon: <GiArmorUpgrade className="mr-10" />,
      name: "Upgrade Packages",
    },
  ];

  const moreDropdown = [
    {
      icon: <BsFillCreditCard2BackFill className="mr-10" />,
      name: "Add Payment Gateway",
    },
    {
      icon: <MdOutlinePrivacyTip className="mr-10" />,
      name: "Privacy Policy",
    },
  ];
  const handleMenuItem = (index) => {
    setActiveHead(index);
    {
      index === 3 && handleMatchEntry();
    }
    {
      index === 4 && handleReports();
    }
    {
      index === 5 && handleMoreSelect();
    }
  };

  const handleMatchEntry = () => {
    setMatchEntryOpen((prev) => !prev);
    setReportsOpen(false);
    setMoreOpen(false);
  };
  const handleReports = () => {
    setMatchEntryOpen(false);
    setReportsOpen((prev) => !prev);
    setMoreOpen(false);
  };
  const handleMoreSelect = () => {
    setMatchEntryOpen(false);
    setReportsOpen(false);
    setMoreOpen((prev) => !prev);
  };
  const handleSelectMatchEntry = (name) => {
    setMatchEntryType(name);
    setMatchEntryOpen(false);
  };

  const handleMore = (name) => {
    setMoreType(name);
    setMoreOpen(false);
  };
  const handleSelectReports = (name) => {
    setReportsType(name);
    setReportsOpen(false);
  };
  // const date = moment().format("MMMM DD YYYY");
  const time = Date().toLocaleString();

  return (
    <div className="agent-header ">
      {/* <div className=" p-3 d-flex justify-content-between">
        <div className="col-1">
          <img
            src={Images.header_logo}
            className="head-image "
            onClick={() => handleLoginPopup()}
          />
        </div>
        <div className="bl-1 br-1 d-flex">
          <div className=" ms-1">
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
      </div> */}
      <div className="w-100 flex-align-center d-flex">
        <div className="header-logo col-2">
          <img
            src={Images.header_logo}
            alt="we2-call-logo"
            onClick={() => handleLoginPopup()}
          />
        </div>
        <div className="w-15"></div>
        <div className="w-70 h-12vh d-flex justify-content-between">
          <div className=" w-100 justify-content-between h-100p d-flex">
            {headerMenu.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    activeHead === index ? "active-head-menu" : null
                  } header-menu flex-aline-center`}
                  onClick={() => handleMenuItem(index)}
                >
                  {item}
                  {index > 2 ? (
                    activeHead === index ? (
                      <FaChevronUp className="ml-5" />
                    ) : (
                      <FaChevronDown className="ml-5" />
                    )
                  ) : null}
                </div>
              );
            })}
          </div>
          {matchEntryOpen && (
            <div className="head-dropdown match-entry-position">
              {MatchEntryDropdown.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex-align-center mt-5"
                    onClick={() => handleSelectMatchEntry(item.name)}
                  >
                    {item.icon}
                    {item.name}
                  </div>
                );
              })}
            </div>
          )}
          {reportsOpen && (
            <div className="head-dropdown report-position">
              {ReportsEntryDropdown.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex-aline-center mt-5"
                    onClick={() => handleSelectReports(item.name)}
                  >
                    {item.icon}
                    {item.name}
                  </div>
                );
              })}
            </div>
          )}
          {moreOpen && (
            <div className="head-dropdown more-position w-200px">
              {moreDropdown.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex-aline-center mt-5"
                    onClick={() => handleMore(item.name)}
                  >
                    {item.icon}
                    {item.name}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="flex-space-between w-15">
          <div className="header-avatar flex-aline-center">
            <img src={Images.profile} alt="profile" className="mr-5" />
            <div>SriAgent</div>
          </div>
          <div className="flex">
            <div
              className="header-icons flex-center mr-10"
              // onClick={() => handleShareButton()}
            >
              {/* <ShareAltOutlined /> */}
            </div>
            <div
              className="header-icons flex-center ml-10"
              // onClick={() => handleResetPassword()}
            >
              {/* <SettingOutlined /> */}
            </div>
          </div>
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
      <Login
        showLoginPopup={showLoginPopup}
        setShowLoginPopup={setShowLoginPopup}
        setShowResetPopup={setShowResetPopup}
      />
      <ResetPassword
        showResetPopup={showResetPopup}
        setShowResetPopup={setShowResetPopup}
      />
    </div>
  );
}

export default Header;
