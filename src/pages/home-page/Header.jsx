import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Images } from "../../images";
import {
  AiFillWarning,
  AiOutlineSetting,
  AiOutlineShareAlt,
} from "react-icons/ai";
import "./style.css";
import Login from "../log-in/Login";
import { useNavigate } from "react-router-dom";
import {
  FaChevronDown,
  FaChevronUp,
  FaHandshake,
  FaRegAddressBook,
  FaRegHandshake,
} from "react-icons/fa";
import { LiaFolderSolid } from "react-icons/lia";
import { TbReport, TbReportSearch } from "react-icons/tb";
import { GiArmorUpgrade } from "react-icons/gi";
import { BiPhoneCall } from "react-icons/bi";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { MdOutlinePrivacyTip } from "react-icons/md";
import ResetPassword from "../log-in/ResetPassword";
import MatchSubmitPopup from "../match-popups/MatchSubmitPopup";

function Header() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showResetPopup, setShowResetPopup] = useState(false);

  const handleLoginPopup = () => {
    setShowLoginPopup(true);
  };

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
    "Tours &Tournies",
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

  const navigate = useNavigate();

  const handleMenuItem = (index) => {
    setActiveHead(index);
    {
      index === 0 && navigate("/");
    }
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

  const [resetPasswordSubmit, setResetPasswordSubmit] = useState();

  return (
    <div className="agent-header d-flex align-items">
      <div className="w-100 flex-align-center d-flex h-10vh mb-1">
        <div className="header-logo ">
          <img
            src={Images.header_logo}
            alt="we2-call-logo"
            onClick={() => handleLoginPopup()}
          />
        </div>
        <div className="date-div mt-2">
          <p>{currentDateTime.toLocaleString()}</p>
        </div>
        <div className="h-10vh d-flex align-items-center head-wrap">
          <div className="row w-100 min-h-10vh d-flex align-items-center">
            {headerMenu.map((item, index) => {
              return (
                <div className="col-2">
                  <div
                    key={index}
                    className={`${
                      activeHead === index ? "active-head-menu" : null
                    } header-menu flex-aline-center`}
                    onClick={() => handleMenuItem(index)}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <span>{item}</span>
                      {index > 2 ? (
                        activeHead === index ? (
                          <FaChevronUp className="ml-5" />
                        ) : (
                          <FaChevronDown className="ml-5" />
                        )
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {matchEntryOpen && (
            <div className="head-dropdown match-entry-position p-2">
              {MatchEntryDropdown.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="d-flex align-items-center mt-2 "
                    onClick={() => handleSelectMatchEntry(item.name)}
                  >
                    <span className="me-1">{item.icon}</span>
                    {item.name}
                  </div>
                );
              })}
            </div>
          )}
          {reportsOpen && (
            <div className="head-dropdown report-position p-2">
              {ReportsEntryDropdown.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="d-flex align-items-center mt-2 p-2"
                    onClick={() => handleSelectReports(item.name)}
                  >
                    <span className="me-1">{item.icon}</span>
                    {item.name}
                  </div>
                );
              })}
            </div>
          )}
          {moreOpen && (
            <div className="head-dropdown p-2 more-position w-200px">
              {moreDropdown.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="d-flex align-items-center mt-2 p-2"
                    onClick={() => handleMore(item.name)}
                  >
                    <span className="me-1">{item.icon}</span>
                    {item.name}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="d-flex w-18 p-2">
          <div className="header-avatar align-items-center justify-content-around d-flex w-50">
            <img src={Images.profile} alt="profile" className="me-2" />
            <div>SriAgent</div>
          </div>
          <div className="d-flex align-items-center w-50 justify-content-around">
            <div className=" icons-share me-2 ms-2">
              <AiOutlineShareAlt />
            </div>
            <div className=" icons-share">
              <AiOutlineSetting />
            </div>
          </div>
        </div>
      </div>
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
        setResetPasswordSubmit={setResetPasswordSubmit}
      />
      <MatchSubmitPopup
        header={"You Are Successfully Reset your Password"}
        state={resetPasswordSubmit}
        setState={setResetPasswordSubmit}
      />
    </div>
  );
}

export default Header;
