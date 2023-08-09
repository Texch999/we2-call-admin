import { Images } from "../images";
import moment from "moment";
import Marquee from "react-fast-marquee";
import "./common.css";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import {
  FaChevronDown,
  FaChevronUp,
  FaHandshake,
  FaRegAddressBook,
  FaRegHandshake,
} from "react-icons/fa";
import { LiaFolderSolid } from "react-icons/lia";
import { AiFillWarning } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbReport, TbReportSearch } from "react-icons/tb";
import { GiArmorUpgrade } from "react-icons/gi";
import { ShareAltOutlined, SettingOutlined } from "@ant-design/icons";
import { BiPhoneCall } from "react-icons/bi";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
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
  const handleSelectReports = (e) => {
    setReportsType(e.name);
    setReportsOpen(false);
    console.log(e);
  };
  // const date = moment().format("MMMM DD YYYY");
  const time = Date().toLocaleString();
  return (
    <div className="header ">
      <div className="w-100 flex-aline-center">
        <div className="header-logo">
          <img src={Images.header_logo} alt="we2-call-logo" />
        </div>
        <div className="w-15"></div>
        <div className="w-60 h-12vh">
          <div className=" w-100 flex-space-around h-100p">
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
                    onClick={() => handleSelectReports(item)}
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
              <ShareAltOutlined />
            </div>
            <div
              className="header-icons flex-center ml-10"
              // onClick={() => handleResetPassword()}
            >
              <SettingOutlined />
            </div>
          </div>
        </div>
      </div>
      <div className="flex scrolling-text">
        <div className="header-icons notification-icon flex-center ml-10">
          <IoIosNotificationsOutline className="notification-icon" />
        </div>
        <Marquee speed={12}>
          Your privacy is our priority. With end-to-end encryption, you can be
          sure that your personal messages stay between you and who you send
          them to. Your privacy is our priority. With end-to-end encryption, you
          can be sure that your personal messages stay between you and who you
          send them to.
        </Marquee>
      </div>
    </div>
  );
}

export default Header;
