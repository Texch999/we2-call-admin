import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Images } from "../../images";
import {
  AiFillEdit,
  AiFillWarning,
  AiOutlineLogout,
  AiOutlineSetting,
  AiOutlineShareAlt,
} from "react-icons/ai";
import "./style.css";
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
import { MdLockReset, MdOutlinePrivacyTip } from "react-icons/md";
import ResetPassword from "../log-in/ResetPassword";
import MatchSubmitPopup from "../match-popups/MatchSubmitPopup";
import AddPaymentMode from "../popups/AddPaymentMode";
import { useHistory } from "react-router-dom";
import { isLoggedIn } from "../../utils/helpers";
import Login from "../log-in/Login";
import EditProfile from "../popups/EditProfile";

function Header() {
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const history = useHistory();

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

  // const handleAddPaymentModelOpen = () => {
  //   setModalShow(true);
  // };

  const [activeHead, setActiveHead] = useState(0);
  const [matchEntryOpen, setMatchEntryOpen] = useState(false);
  const [matchEntryType, setMatchEntryType] = useState("Match Entry");
  const [reportsOpen, setReportsOpen] = useState(false);
  const [reportsType, setReportsType] = useState("Report");
  const [moreOpen, setMoreOpen] = useState(false);
  const [moreType, setMoreType] = useState("More");
  const [activeUserDropdown, setActiveUserDropdown] = useState(false);
  const [showeditProfile, setShowEditProfile] = useState(false);
  const headerMenu = [
    "Home",
    "Chat",
    "Tours &Tournies",
    matchEntryType,
    reportsType,
    moreType,
  ];
  const MatchEntryDropdown = [
    {
      icon: <LiaFolderSolid className="mr-10 d-flex" />,
      name: "Match Entry",
      path: "/match-entry",
    },
    {
      icon: <AiFillWarning className="mr-10 d-flex" />,
      name: "Share Risk",
      path: "/share-risk-live-matches",
    },
  ];

  const ReportsEntryDropdown = [
    {
      icon: <GiArmorUpgrade className="mr-10 d-flex" />,
      name: "Upgrade Packages",
      path: "/upgrade-package",
    },
    {
      icon: <TbReport className="mr-10 d-flex" />,
      name: "Package Statement",
      path: "/package-statement",
    },
    {
      icon: <BiPhoneCall className="mr-10 d-flex" />,
      name: "Call Reports",
      path: "/call-reports",
    },
    // /call-reports
    // {
    //   icon: <BiPhoneCall className="mr-10 d-flex" />,
    //   name: "Call History",
    //   path: "/call-history",
    // },
    // {
    //   icon: <FaRegHandshake className="mr-10 d-flex" />,
    //   name: "Call Settlement",
    //   path: "/call-settlement",
    // },
    // {
    //   icon: <FaRegAddressBook className="mr-10 d-flex" />,
    //   name: "Call Statement",
    //   path: "/call-statement",
    // },
    {
      icon: <TbReportSearch className="mr-10 d-flex" />,
      name: "Match  Statement",
      path: "/match-statement",
    },
    {
      icon: <TbReport className="mr-10 d-flex" />,
      name: "One Page Reports",
      path: "/report-page",
    },
    {
      icon: <FaRegHandshake className="mr-10 d-flex" />,
      name: "Settlement",
      path: "/settlement",
    },
    {
      icon: <FaHandshake className="mr-10 d-flex" />,
      name: "Settlement Statement",
      path: "/settlement-statement",
    },
  ];

  const moreDropdown = [
    {
      icon: <BsFillCreditCard2BackFill className="mr-10 d-flex" />,
      name: "Add Payment Gateway",
      onClick: "onClick",
    },
    // /payment-gateway-list
    {
      icon: <FaRegHandshake className="mr-10 d-flex" />,
      name: "Payment Gateway List",
      path: "/payment-gateway-list",
    },
    {
      icon: <MdOutlinePrivacyTip className="mr-10 d-flex" />,
      name: "Privacy Policy",
      path: "/privacy-policy",
    },
    // {
    //   icon: <MdOutlinePrivacyTip className="mr-10 d-flex" />,
    //   name: "Admin One Page Report",
    //   path: "/admin-one-page-report",
    // },
    // {
    //   icon: <MdOutlinePrivacyTip className="mr-10 d-flex" />,
    //   name: "Admin Share Comm Settlement",
    //   path: "/admin-share-comm-settlement",
    // },
    {
      icon: <MdOutlinePrivacyTip className="mr-10 d-flex" />,
      name: "Call Management",
      path: "/call-management",
    },
    // {
    //   icon: <MdOutlinePrivacyTip className="mr-10 d-flex" />,
    //   name: "Super Admin Call Management",
    //   path: "/super-admin-call-management",
    // },
    {
      icon: <MdOutlinePrivacyTip className="mr-10 d-flex" />,
      name: "Share Risk live mathces",
      path: "/share-risk-live-matches",
    },
    {
      icon: <MdOutlinePrivacyTip className="mr-10 d-flex" />,
      name: "Admin Share Match Statement",
      path: "/admin-share-match-statement",
    },
    {
      icon: <MdOutlinePrivacyTip className="mr-10 d-flex" />,
      name: "Add Users",
      path: "/add-users",
    },
    {
      icon: <MdOutlinePrivacyTip className="mr-10 d-flex" />,
      name: "Add Admins",
      path: "/add-admins",
    },
  ];

  const navigate = (path) => {
    token && history.push(path);
  };

  const handleMenuItem = (index) => {
    if (!token) return "";
    setActiveHead(index);
    index === 0 && navigate("/");
    index === 1 && navigate("/chats");
    index === 2 && navigate("/tours-tournaments");
    index === 3 && handleMatchEntry();
    index === 4 && handleReports();
    index === 5 && handleMoreSelect();
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
  const handleSelectMatchEntry = (v) => {
    setMatchEntryType(v.name);
    setMatchEntryOpen(false);
    navigate(v.path);
  };

  const handleMore = (item, index) => {
    setMoreType(item.name);
    setMoreOpen(false);
    navigate(item.path);
    if (item.onClick) {
      setModalShow(true);
    }
  };
  const handleSelectReports = (e) => {
    setReportsType(e.name);
    setReportsOpen(false);
    navigate(e.path);
  };

  const handleSettingsDropdown = () => {
    setActiveUserDropdown((prev) => !prev);
  };

  const handleEndDropdown = (item, index) => {
    setActiveUserDropdown(false);
    {
      index === 2 && handleLogout();
    }
    {
      index === 1 && setShowResetPopup(true);
    }
    {
      index === 0 && setEditModalShow(true);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload("");
  };

  const settingsDropdown = [
    {
      icon: <AiFillEdit className="mr-10" />,
      name: "Edit profile",
      // onClick: "onClick",
    },
    {
      icon: <MdLockReset className="mr-10" />,
      name: "Reset Password",
      // path: "/privacy-policy",
    },
    {
      icon: <AiOutlineLogout className="mr-10" />,
      name: "Logout",
      // path: "/admin-one-page-report",
    },
  ];

  // useEffect(() => {
  //   switch (history.location.pathname) {
  //     case "/":
  //       setActiveHead(0);
  //       break;
  //     case "/chats":
  //       setActiveHead(1);
  //       break;

  //     case "/tours-tournaments":
  //       setActiveHead(2);
  //       break;

  //     case "/match-entry":
  //       setActiveHead(3);
  //       break;

  //     case "/phub":
  //       setActiveHead(4);
  //       break;

  //     case "/horny":
  //       setActiveHead(5);

  //       break;

  //     default:
  //       setActiveHead(0);
  //   }
  // }, []);

  const [resetPasswordSubmit, setResetPasswordSubmit] = useState();
  const token = isLoggedIn();
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
        <div className="date-div mt-2 d-flex align-items-center justify-content-center ms-1">
          <div className="meetings-heading medium-font header-font ms-2">
            {currentDateTime.toLocaleString()}
          </div>
        </div>
        <div className="h-10vh d-flex align-items-center head-wrap">
          <div className="row w-100 min-h-10vh d-flex align-items-center">
            {headerMenu?.map((item, index) => {
              return (
                <div
                  className="col meetings-heading cursor-pointer"
                  key={index}
                >
                  <div
                    className={`${
                      activeHead === index ? "active-head-menu" : null
                    } header-menu flex-aline-center`}
                    onClick={() => token && handleMenuItem(index)}
                  >
                    <div className="d-flex h-100 justify-content-between align-items-center">
                      <span className="header-font">{item}</span>
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
                    className="d-flex align-items-center mt-2 cursor-pointer"
                    onClick={() => handleSelectMatchEntry(item)}
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
                    className="d-flex align-items-center mt-2 p-2 cursor-pointer"
                    onClick={() => handleSelectReports(item)}
                  >
                    {/* {item.icon}
                    {item.name} */}
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
                    className="d-flex align-items-center mt-2 p-2 cursor-pointer"
                    onClick={() => handleMore(item, index)}
                  >
                    <span className="me-1">{item.icon}</span>
                    {item.name}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="d-flex justify-content-between p-2">
          <div className="header-avatar align-items-center justify-content-around d-flex w-50">
            <img src={Images.profile} alt="profile" className="me-2" />
            <div className="meetings-heading header-font">
              {localStorage?.getItem("user_name")}
            </div>
          </div>
          <div className="h-10vh">
            <div className="d-flex align-items-center w-50 justify-content-around">
              <div className=" icons-share me-2 ms-2">
                <AiOutlineShareAlt />
              </div>
              <div
                className=" icons-share"
                onClick={() => handleSettingsDropdown()}
              >
                <AiOutlineSetting />
              </div>
            </div>
            {activeUserDropdown && (
              <div className="head-dropdown setting-position p-2">
                {settingsDropdown.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="d-flex align-items-center mt-2 p-2 cursor-pointer"
                      onClick={() => handleEndDropdown(item, index)}
                    >
                      {/* {item.icon}
                    {item.name} */}
                      <span className="me-1">{item.icon}</span>
                      {item.name}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <Marquee className="marqu-tag meetings-heading">
        Your privacy is our priority. With end-to-end encryption, you can be
        sure that your personal messages stay between you and who you send them
        to. Your privacy is our priority. With end-to-end encryption, you can be
        sure that your personal messages stay between you and who you send them
        to.
      </Marquee>
      {!token && (
        <Login
          showLoginPopup={token ? false : true}
          setShowLoginPopup={setShowLoginPopup}
          setShowResetPopup={setShowResetPopup}
        />
      )}
      <ResetPassword
        showResetPopup={showResetPopup}
        setShowResetPopup={setShowResetPopup}
        resetPasswordSubmit={resetPasswordSubmit}
        setResetPasswordSubmit={setResetPasswordSubmit}
      />
      <EditProfile show={editModalShow} close={() => setEditModalShow(false)} />
      <MatchSubmitPopup
        header={"You Are Successfully Reset your Password"}
        state={resetPasswordSubmit}
        setState={setResetPasswordSubmit}
      />
      <AddPaymentMode state={modalShow} setState={setModalShow} />
    </div>
  );
}

export default Header;
