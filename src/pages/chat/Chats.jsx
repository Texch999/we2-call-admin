import React from "react";
import "./styles.css";
import { PiClockClockwiseBold } from "react-icons/pi";
import { IoCall } from "react-icons/io5";
import { HiVideoCamera } from "react-icons/hi";
import { BiSolidCamera } from "react-icons/bi";
import { ImAttachment } from "react-icons/im";
import { MdMicNone } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { BiLock } from "react-icons/bi";
import { Images } from "../../images";
import { FiSend } from "react-icons/fi";
function Chats() {
  return (
    <div class="container w-100">
      <div class="messaging w-100">
        <div class="inbox_msg">
          <div class="inbox_people mb-4">
            <div class="headind_srch d-flex flex-column header-bg">
              <div class="recent_heading d-flex flex-start my-2">
                <h3>Message</h3>
              </div>
              <div class="srch_bar d-flex w-100 flex-justify-center">
                <div class="stylish-input-group  w-90">
                  <input
                    type="text"
                    class="search-bar custom-search-bar rounded px-4 py-2"
                    placeholder="Search"
                  />
                  <span class="input-group-addon">
                    <button type="button">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </span>
                </div>
              </div>
              <div class="headind_srch d-flex flex-row align-items-center contacts-bg mt-3">
                <PiClockClockwiseBold className="upload-icon mx-2" />
                <span className="large-font mx-2">Recent</span>
              </div>
              {/* <div className="d-flex justify-content-start align-items-center w-100 my-2">
                <div>
                  <PiClockClockwiseBold className="upload-icon" />
                </div>
                <div className="medium-font ms-1 clr-cornflower">Recent</div>
              </div> */}
            </div>

            <div class="inbox_chat header-bg">
              <div class="chat_list active_chat active-chat-bg">
                <div class="chat_people">
                  <div class="chat_img">
                    <img
                      className="rounded-circle"
                      src={Images.dhoni_image}
                      // src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt="sunil"
                    />
                  </div>
                  <div class="chat_ib">
                    <h5>
                      Sunil Rajput <span class="chat_date">Dec 25</span>
                    </h5>
                    <p>I will purchase it for sure............ </p>
                  </div>
                </div>
              </div>
              <div class="chat_list">
                <div class="chat_people">
                  <div class="chat_img">
                    <img
                      className="rounded-circle"
                      src={Images.kohli_image}
                      alt="sunil"
                    />
                  </div>
                  <div class="chat_ib">
                    <h5>
                      Sunil Rajput <span class="chat_date">Dec 25</span>
                    </h5>
                    <div className="d-flex align-items-center justify-content-between w-100">
                      <p className="clr-green">Typing............ </p>
                      <div className="rounded-circle clr-red-bg clr-white text-center px-1 small-font">
                        2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="chat_list">
                <div class="chat_people">
                  <div class="chat_img">
                    <img
                      className="rounded-circle"
                      src={Images.sachin_image}
                      alt="sunil"
                    />
                  </div>
                  <div class="chat_ib">
                    <h5>
                      Sunil Rajput <span class="chat_date">Dec 25</span>
                    </h5>
                    <p>I will purchase it for sure............ </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="headind_srch d-flex flex-row align-items-center contacts-bg">
              <LuUsers className="upload-icon mx-2" />
              <span className="large-font mx-2">Contacts</span>
            </div>
            <div className="inbox-chat-contacts header-bg">
              <div class="chat_list">
                <div class="chat_people">
                  <div class="chat_img">
                    <img
                      className="rounded-circle"
                      src={Images.raina_image}
                      alt="sunil"
                    />
                  </div>
                  <div class="chat_ib">
                    <h5>
                      Sunil Rajput <span class="chat_date">Dec 25</span>
                    </h5>
                    <p>Available </p>
                  </div>
                </div>
              </div>
              <div class="chat_list">
                <div class="chat_people">
                  <div class="chat_img">
                    <img
                      className="rounded-circle"
                      src={Images.kohli_image}
                      alt="sunil"
                    />
                  </div>
                  <div class="chat_ib">
                    <h5>
                      Sunil Rajput <span class="chat_date">Dec 25</span>
                    </h5>
                    <p>Available </p>
                  </div>
                </div>
              </div>
              <div class="chat_list">
                <div class="chat_people">
                  <div class="chat_img">
                    <img
                      className="rounded-circle"
                      src={Images.dhawan_image}
                      alt="sunil"
                    />
                  </div>
                  <div class="chat_ib">
                    <h5>
                      Sunil Rajput <span class="chat_date">Dec 25</span>
                    </h5>
                    <p>Available </p>
                  </div>
                </div>
              </div>
              <div class="chat_list">
                <div class="chat_people">
                  <div class="chat_img">
                    <img
                      className="rounded-circle"
                      src={Images.dhawan_image}
                      alt="sunil"
                    />
                  </div>
                  <div class="chat_ib">
                    <h5>
                      Sunil Rajput <span class="chat_date">Dec 25</span>
                    </h5>
                    <p>Available </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center encrpt-msg-bg py-3 justify-content-center ">
                <BiLock className="clr-green" />
                you can be sure that your conversations is
                <span className="clr-green">Safe</span>.
              </div>
            </div>
          </div>
          <div class="mesgs">
            <div class="d-flex flex-column border-none">
              <div class="recent_heading d-flex flex-start align-items-center justify-content-between w-100 header-bg h-8vh">
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <div className="d-flex flex-row px-2">
                    <img
                      className="rounded-circle h-30px mx-2 header-img-indvdual"
                      src={Images.dhoni_image}
                      alt="dhoni"
                    />
                    <img
                      className="rounded-circle h-30px mx-2"
                      src={Images.kohli_image}
                      alt="kohli"
                    />{" "}
                  </div>
                  <div className="large-font clr-white mx-2">
                    Mahendra Singh Baahubali
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <IoCall className="upload-icon clr-grey mx-2" />
                  <HiVideoCamera className="upload-icon clr-grey mx-2" />
                </div>
              </div>
            </div>

            <div class="msg_history px-4 py-3">
              <div class="incoming_msg">
                <div class="incoming_msg_img">
                  <img
                    className="rounded-circle"
                    src={Images.dhoni_image}
                    alt="sunil"
                  />
                </div>
                <div class="received_msg">
                  <div class="received_withd_msg">
                    <p>Test which is a new approach to have all solutions</p>
                    <span class="time_date"> 11:01 AM | June 9</span>
                  </div>
                </div>
              </div>
              <div class="outgoing_msg">
                <div class="sent_msg">
                  <p>Test which is a new approach to have all solutions</p>
                  <span class="time_date"> 11:01 AM | June 9</span>{" "}
                </div>
              </div>
              <div className="d-flex justify-content-center my-4">
                <div className="small-font input-btn-bg px-2 py-2 clr-grey rounded ">
                  Yesterday
                </div>
              </div>
              <div class="incoming_msg">
                <div class="incoming_msg_img">
                  <img
                    className="rounded-circle"
                    src={Images.kohli_image}
                    alt="sunil"
                  />
                </div>
                <div class="received_msg">
                  <div class="received_withd_msg">
                    <p>Test, which is a new approach to have</p>
                    <span class="time_date"> 11:01 AM | Yesterday</span>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="small-font input-btn-bg px-2 py-2 clr-grey rounded">
                  today
                </div>
              </div>
              <div class="outgoing_msg">
                <div class="sent_msg">
                  <p>Apollo University, Delhi, India Test</p>
                  <span class="time_date"> 11:01 AM | Today</span>{" "}
                </div>
              </div>
              <div class="incoming_msg">
                <div class="incoming_msg_img">
                  <img
                    className="rounded-circle"
                    src={Images.dhoni_image}
                    alt="sunil"
                  />
                </div>
                <div class="received_msg">
                  <div class="received_withd_msg">
                    <p>
                      We work directly with our designers and suppliers, and
                      sell direct to you, which means quality, exclusive
                      products, at a price anyone can afford.
                    </p>
                    <span class="time_date"> 11:01 AM | Today</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="d-flex flex-row align-items-center">
              <div className="bg-clr-chat px-2 py-2 rounded mx-2">
                <BiSolidCamera className="upload-icon" />
              </div>
              <div className="bg-clr-chat px-2 py-2 rounded mx-2">
                <GrAttachment className="upload-icon" />
              </div>
              <div className="bg-clr-chat px-2 py-2 rounded mx-2">
                <MdMicNone className="upload-icon" />
              </div>
            </div> */}
          </div>
          <div className="d-flex flex-row justify-content-around align-items-center px-4  chat-container-box header-bg">
            <div class="type_msg w-75 mx-2 rounded">
              <div class="input_msg_write">
                <input
                  type="text"
                  class="write_msg px-4 py-3"
                  placeholder="Type a message"
                />
                <button class="msg_send_btn me-3" type="button">
                  <FiSend />
                  {/* <i class="fa fa-paper-plane-o" aria-hidden="true"></i> */}
                </button>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center w-25 justify-content-around">
              <div className="button-chat px-3 py-2 rounded mx-2">
                <BiSolidCamera className="chat-icon" />
              </div>
              <div className="button-chat px-3 py-2 rounded mx-2">
                <ImAttachment className="chat-icon" />
              </div>
              <div className="button-chat px-3 py-2 rounded mx-2">
                <MdMicNone className="upload-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chats;
