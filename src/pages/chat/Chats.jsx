import React, { useRef, useState, useEffect } from "react";
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
import { PiDotOutlineFill } from "react-icons/pi";
import { icons } from "react-icons";
import { open, send } from "../../utils/WebSocket";
import { GET_USER_MESSAGES } from "../../config/endpoints";
import { call } from "../../config/axios";
import moment from "moment";
import ScrollableFeed from "react-scrollable-feed";
import { BsCheck2All } from "react-icons/bs";

function Chats() {
  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  const [supportData, setSupportData] = useState([]);
  const [profileImage, setProfileImage] = useState("");

  const [messages, setMessages] = useState([
    {
      content: "We need to know it,Because it's about our community",
      sender: "user",
      img: Images.DhoniImage02,
    },
    {
      content: "We need to know it,Because it's about our community",
      sender: "computer",
      img: Images.ViratImage02,
    },
    {
      content: "We need to know it,Because it's about our community",
      sender: "user",
      img: Images.DhoniImage02,
    },
    {
      content: "We need to know it,Because it's about our community",
      sender: "computer",
      img: Images.ViratImage02,
    },
    {
      content: "We need to know it,Because it's about our community",
      sender: "user",
      img: Images.DhoniImage02,
    },
    {
      content: "We need to know it,Because it's about our community",
      sender: "computer",
      img: Images.ViratImage02,
    },
    {
      content: "We need to know it,Because it's about our community",
      sender: "user",
      img: Images.DhoniImage02,
    },
    {
      content: "We need to know it,Because it's about our community",
      sender: "computer",
      img: Images.ViratImage02,
    },
  ]);
  const date = new Date().toLocaleDateString();
  const [userInput, setUserInput] = useState("");
  // const inputFile = useRef(null);

  const videoRef = useRef(null);

  const [file, setFile] = useState([]);
  const inputFile = useRef(null);

  const handleChange = (e) => {
    setFile([...file, e.target.files[0]]);
  };

  // const handleUserInput = () => {
  //   if (userInput.trim() !== "") {
  //     setMessages((prevMessages) => [
  //       ...prevMessages,
  //       {
  //         content: reply,
  //         sender: "computer",
  //         img: Images.ViratImage02,
  //       },
  //     ]);
  //     const reply = generateReply(userInput);
  //     setMessages((prevMessages) => [
  //       ...prevMessages,

  //       { content: userInput, sender: "user", img: Images.DhoniImage02 },
  //     ]);
  //     setUserInput("");
  //   }
  // };
  const generateReply = (message) => {
    return message;
  };
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const inputHandler = async () => {
    // addMessage(userInput, 1);
    setUserInput("");
    await send(userInput);
    // await getAllUserMessages();
  };

  const addMessage = (message, msg_c = 0) => {
    let temp = { message, ts: new Date().getTime(), msg_c };
    setSupportData((prev) => [...prev, temp]);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const hanldeKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftyKey) {
      event.preventDefault();
      inputHandler();
    }
  };

  const getAllUserMessages = async () => {
    await call(GET_USER_MESSAGES, {
      register_id,
      creator_id,
    })
      .then((res) => {
        setSupportData(res?.data?.data);
        // scroll();
      })
      .catch((err) => {
        // setLoading(false);
        console.log(err);
      });
  };

  const onMessageRecieve = (event) => {
    if (!event.data) {
      return;
    }
    const msg = JSON.parse(event.data);
    // if (msg.from_user_id === register_id) {
    //   return;
    // }
    addMessage(msg.message);
  };
  const scroll = () => {
    var objDiv = document.getElementById("chat");
    if (objDiv) {
      objDiv.scrollTop = objDiv?.scrollHeight;
    }
  };
  useEffect(() => {
    getAllUserMessages();
    open({ onmessage: onMessageRecieve });
  }, []);
  const [webcamVisible, setWebcamVisible] = useState(false);
  const webcamRef = useRef(null);
  const toggleWebCam = () => {
    setWebcamVisible((prevVisible) => !prevVisible);
  };
  const captureSnapshot = () => {
    const imgSrc = webcamRef.current.getScreenshot();
    console.log(imgSrc);
    setWebcamVisible(false);
  };
  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
  };
  const [selectedDate, setSelectedDate] = useState(null);
  const uploadfileInputRef = useRef(null);
  const handleUploadFileSelect = (e) => {
    const file = e.target.files[0];
  };
  const handleUploadButtonClick = () => {
    uploadfileInputRef.current.click();
  };

  return (
    <div className="container w-100">
      <div className="messaging w-100">
        <div className="inbox_msg">
          <div className="inbox_people mb-4">
            <div className="headind_srch d-flex flex-column header-bg">
              <div className="recent_heading d-flex flex-start my-2">
                <h3>Message</h3>
              </div>
              <div className="srch_bar d-flex w-100 flex-justify-center">
                <div className="stylish-input-group  w-90">
                  <input
                    type="text"
                    className="search-bar custom-search-bar rounded px-4 py-2"
                    placeholder="Search"
                  />
                  <span className="input-group-addon">
                    <button type="button">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </span>
                </div>
              </div>
              <div className="headind_srch d-flex flex-row align-items-center contacts-bg mt-3">
                <PiClockClockwiseBold className="upload-icon mx-2" />
                <span className="large-font mx-2">Recent</span>
              </div>
            </div>

            <div className="inbox_chat header-bg">
              <div className="chat_list active_chat active-chat-bg">
                <div className="chat_people">
                  <div className="chat_img">
                    <img
                      className="rounded-circle"
                      src={Images.dhoni_image}
                      alt="sunil"
                    />
                  </div>
                  <div className="chat_ib">
                    <h5>
                      Sunil Rajput <span className="chat_date">Dec 25</span>
                    </h5>
                    <p>I will purchase it for sure............ </p>
                  </div>
                </div>
              </div>
              <div className="chat_list">
                <div className="chat_people">
                  <div className="chat_img">
                    <img
                      className="rounded-circle"
                      src={Images.kohli_image}
                      alt="sunil"
                    />
                  </div>
                  <div className="chat_ib">
                    <h5>
                      Sunil Rajput <span className="chat_date">Dec 25</span>
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
              <div className="chat_list">
                <div className="chat_people">
                  <div className="chat_img">
                    <img
                      className="rounded-circle"
                      src={Images.sachin_image}
                      alt="sunil"
                    />
                  </div>
                  <div className="chat_ib">
                    <h5>
                      Sunil Rajput <span className="chat_date">Dec 25</span>
                    </h5>
                    <p>I will purchase it for sure............ </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="headind_srch d-flex flex-row align-items-center contacts-bg">
              <LuUsers className="upload-icon mx-2" />
              <span className="large-font mx-2">Contacts</span>
            </div>
            <div className="inbox-chat-contacts header-bg">
              <div className="chat_list">
                <div className="chat_people">
                  <div className="chat_img">
                    <img
                      className="rounded-circle"
                      src={Images.raina_image}
                      alt="sunil"
                    />
                  </div>
                  <div className="chat_ib">
                    <h5>
                      Sunil Rajput <span className="chat_date">Dec 25</span>
                    </h5>
                    <p>Available </p>
                  </div>
                </div>
              </div>
              <div className="chat_list">
                <div className="chat_people">
                  <div className="chat_img">
                    <img
                      className="rounded-circle"
                      src={Images.kohli_image}
                      alt="sunil"
                    />
                  </div>
                  <div className="chat_ib">
                    <h5>
                      Sunil Rajput <span className="chat_date">Dec 25</span>
                    </h5>
                    <p>Available </p>
                  </div>
                </div>
              </div>
              <div className="chat_list">
                <div className="chat_people">
                  <div className="chat_img">
                    <img
                      className="rounded-circle"
                      src={Images.dhawan_image}
                      alt="sunil"
                    />
                  </div>
                  <div className="chat_ib">
                    <h5>
                      Sunil Rajput <span className="chat_date">Dec 25</span>
                    </h5>
                    <p>Available </p>
                  </div>
                </div>
              </div>
              <div className="chat_list">
                <div className="chat_people">
                  <div className="chat_img">
                    <img
                      className="rounded-circle"
                      src={Images.dhawan_image}
                      alt="sunil"
                    />
                  </div>
                  <div className="chat_ib">
                    <h5>
                      Sunil Rajput <span className="chat_date">Dec 25</span>
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
          <div className="mesgs">
            <div className="d-flex flex-column border-none">
              <div className="recent_heading d-flex flex-start align-items-center justify-content-between w-100 header-bg h-8vh">
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
                    />
                  </div>
                  <div className=" d-flex flex-column clr-white mx-2">
                    <div className="large-font">
                      {localStorage?.getItem("user_name")}
                    </div>
                    <div className="small-font align-items-center">
                      12 Members,5 Online
                      <PiDotOutlineFill
                        className="clr-green"
                        style={{ fontSize: "30px" }}
                      />
                    </div>
                    <div></div>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <IoCall className="upload-icon clr-grey mx-2" />
                  <HiVideoCamera className="upload-icon clr-grey mx-2" />
                </div>
              </div>
            </div>
            <div className="msg_history px-4">
              <ScrollableFeed>
                {supportData?.length > 0 ? (
                  supportData.map((msg, index) => {
                    let sender = msg.to_user_id === register_id ? true : false;
                    return (
                      <div key={index}>
                        {sender ? (
                          ""
                        ) : (
                          <div className="date-text mt-1 d-flex justify-content-center font-12">
                            {moment(msg.ts).format("hh:mm a")}
                          </div>
                        )}
                        <div
                          className={`mt-2 ${
                            sender ? "incoming_msg" : "outgoing_msg"
                          }`}
                        >
                          <div
                            className={`mt-2 ${sender ? "received_msg" : ""}`}
                          >
                            <div
                              key={index}
                              className={`mt-2 message ${
                                sender ? "received_withd_msg" : "sent_msg"
                              }`}
                            >
                              {msg?.message}
                            </div>
                          </div>
                        </div>
                        <div
                          style={{ fontSize: "10px" }}
                          className="d-flex justify-content-end align-items-center me-2 mt-1"
                        >
                          {moment(msg.ts).format("hh:mm a")}
                          <BsCheck2All className="d-flex font-10 ms-1" />
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
              </ScrollableFeed>
            </div>
            <div
              className="recent_heading d-flex flex-start align-items-center justify-content-between w-100 header-bg h-8vh"
              // onClick={(e) => {
              //   e.preventDefault();
              // }}
            >
              <div className="type_msg w-75 mx-2 rounded">
                <div className="input_msg_write">
                  <input
                    type="text"
                    className="write_msg px-2 py-1"
                    name="postMessage"
                    rows={1}
                    value={userInput}
                    // className="send-text-area"
                    autoFocus
                    placeholder="Write here ......"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                    onKeyDown={(e) => userInput && hanldeKeyDown(e)}
                  />
                  <button
                    className="msg_send_btn me-3"
                    type="button"
                    onClick={() => inputHandler()}
                  >
                    <FiSend />
                  </button>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center w-25 justify-content-around">
                <div className="button-chat px-2 py-1 rounded mx-2">
                  <label htmlFor="image-upload">
                    <BiSolidCamera className="chat-icon" />
                  </label>
                  <input
                    type="file"
                    id="upload"
                    style={{ display: "none" }}
                    // onChange={handleChange}
                    onChange={(e) => {
                      setUserInput(e?.target?.files[0]);
                      // generateSignedUrl();
                    }}
                    onKeyDown={(e) => userInput && hanldeKeyDown(e)}
                  />
                </div>

                <div className="button-chat px-2 py-1 rounded mx-2">
                  <label htmlFor="attachment">
                    <ImAttachment className="chat-icon" />
                  </label>
                </div>

                <div className="button-chat px-2 py-1 rounded mx-2">
                  <MdMicNone className="upload-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chats;
