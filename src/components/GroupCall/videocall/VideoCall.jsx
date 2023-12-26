import React, { useState } from "react";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineSetting,
} from "react-icons/ai";
import { FiPhoneOff, FiSearch } from "react-icons/fi";
import profileImage from "./Assets/profileImage.png";
// import TagSelecter from "../meetings/TagSelector";
import ScoreBoard from "./ScoreBoard";
// import "./Styles.css";
import VideoCallMatchPosition from "./VideoCallMatchPosition";

function VideoCall(props) {
  const [collapsed, setCollapse] = useState(false);
  const [videoCallSideBar, setVideoCallBar] = useState(
    "sidebar-all-users sidebar-all-users-closed"
  );
  const [calling, setCalling] = useState(false);
  const [backToNaviagte, setBackToNaviagte] = useState(false);
  const [close, setClosed] = useState(true);
  const [opensidebar, setOpenSideBar] = useState(true);
  const user = [
    {
      username: "Texch Master",
    },
    {
      username: "Texch Admin",
    },
    {
      username: "Srinivas",
    },
    {
      username: "Jayanth",
    },
    {
      username: "Ranjith",
    },
  ];

  const handleClick = () => {
    setCollapse(true);
    setClosed(true);
    setBackToNaviagte(false);
    setVideoCallBar(
      "sidebar-all-users sidebar-all-users-semiclosed display-flex-end-property"
    );
    setCalling(false);
    setOpenSideBar(false);
  };
  const handleBack = () => {
    setCollapse(false);
    setOpenSideBar(true);
    setVideoCallBar("sidebar-all-users sidebar-all-users-closed");
  };
  const handleClose = () => {
    setCalling(true);
    setBackToNaviagte(true);
    setClosed(false);
    setVideoCallBar(
      "sidebar-all-users sidebar-all-users-open display-flex-end-property"
    );
  };
  const meetingCreatedStatus =
    localStorage.getItem("createdBy") === localStorage.getItem("username") &&
    true;
  const { userList = [], onCloseClick = () => {} } = props;
  return (
    <div className="video-call-main-cantainer">
      <div className={videoCallSideBar}>
        <div className="display-flex-property users-image-container">
          <div>
            {opensidebar && (
              <div className="open-icon" onClick={handleClick}>
                <AiOutlineRight />
              </div>
            )}
            <img src={profileImage} alt="profile-pic" />
          </div>
          <AiOutlineSetting className="settings-icon" />
        </div>
        {collapsed && (
          <div className="display-flex-property users-list-container">
            <div className="caller-list">
              <div className="display-flex-property collapse display-flex-end-property">
                {close && (
                  <div className="display-flex-property">
                    <div
                      className="outline-left collapse-container"
                      onClick={handleBack}
                    >
                      <AiOutlineLeft />
                    </div>
                    <div
                      className="outline-left collapse-container"
                      onClick={handleClose}
                    >
                      <AiOutlineRight />
                    </div>
                  </div>
                )}
                {backToNaviagte && (
                  <>
                    <div className="date-match-container">
                      <span>19-05-2023</span>
                      <span>One Day</span>
                      <div class="wrapper">
                        <div class="marquee">
                          <span>Ind vs Sl</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="outline-left collapse-container"
                      onClick={handleClick}
                    >
                      <AiOutlineLeft />
                    </div>
                  </>
                )}
              </div>
              {/* ===============================video-call-creation-side================================= */}
              {meetingCreatedStatus && (
                <>
                  <center>
                    <div className="display-flex-property users-list-input">
                      <FiSearch className="search-icon"></FiSearch>
                      {/* <TagSelecter
                    tags={props.tags}
                    inputVisible={props.inputVisible}
                    tagSelectId="video_call_user_search_div"
                    handleInputChange={(e)=>props.handleInputChange(e)}
                    options={props.options}
                    inputRef={props.inputRef}
                    showInput={props.showInput}
                    cssClass={`${props.cssClass} users-list-input-feild`} 
                    handleClose={props.handleClose}
                  /> */}
                    </div>
                  </center>

                  <div className="all-users-text">All users</div>
                  <div className="users-active-list">
                    {userList?.length ? (
                      userList?.map((item, index) => {
                        if (item?.UserId !== localStorage.getItem("id")) {
                          return (
                            <div
                              key={index}
                              className="display-flex-property users-container"
                            >
                              <div className="user-details-container all-users-text">
                                <span>{item?.userName || item?.UserName}</span>
                                <br></br>
                                Sent :Image
                              </div>
                              {calling && (
                                <div className="call-off-icon">
                                  <FiPhoneOff
                                    className="call-icon"
                                    onClick={() => onCloseClick(item)}
                                  />
                                </div>
                              )}
                            </div>
                          );
                        }
                      })
                    ) : (
                      <p style={{ color: "lightgrey" }}>No users joined</p>
                    )}
                  </div>
                </>
              )}
              {/* ===============================vide0-call-creation-side===================================           */}

              {/* =================================video-call-joining-side====================================         */}
              {!meetingCreatedStatus && <VideoCallMatchPosition />}
              {/* =================================video-call-joining-side====================================         */}
            </div>
            {calling && (
              <div className="score-board">
                <ScoreBoard />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoCall;
