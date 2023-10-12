import React from "react";
import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { Images } from "../../images";
import { FiSend } from "react-icons/fi";
import { IoCall } from "react-icons/io5";
import { HiVideoCamera } from "react-icons/hi";
import { BiSolidCamera } from "react-icons/bi";
import { ImAttachment } from "react-icons/im";
import { MdMicNone } from "react-icons/md";
import { open, send } from "../../utils/WebSocket";
import { GET_USER_MESSAGES } from "../../config/endpoints";
import { call } from "../../config/axios";
import { useState } from "react";
import { PiDotOutlineFill } from "react-icons/pi";
import { useRef } from "react";
import { useEffect } from "react";
import moment from "moment";
import ScrollableFeed from "react-scrollable-feed";
import { BsCheck2All } from "react-icons/bs";

function ChatsTours(props) {
  const { showChatPopup, setShowChatPopup } = props;
  const handleChatPopupClose = () => {
    setShowChatPopup(false);
  };

  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  const [supportData, setSupportData] = useState([]);

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

  const handleUserInput = () => {
    if (userInput.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          content: reply,
          sender: "computer",
          img: Images.ViratImage02,
        },
      ]);
      const reply = generateReply(userInput);
      setMessages((prevMessages) => [
        ...prevMessages,

        { content: userInput, sender: "user", img: Images.DhoniImage02 },
      ]);
      setUserInput("");
    }
  };
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
    // console.log("new message : ", message);
    let temp = { message, ts: new Date().getTime(), msg_c };
    setSupportData((prev) => [...prev, temp]);
    // console.log(supportData)
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
        // console.log(res.data.data)
        setSupportData(res?.data?.data);
        // scroll();
      })
      .catch((err) => {
        // setLoading(false);
        console.log(err);
      });
  };

  const onMessageRecieve = (event) => {
    console.log("onMessageRecieve : ", event);
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
    console.log(event);
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
  };
  const [selectedDate, setSelectedDate] = useState(null);
  const uploadfileInputRef = useRef(null);
  const handleUploadFileSelect = (e) => {
    const file = e.target.files[0];
    console.log("selected file", file);
  };
  const handleUploadButtonClick = () => {
    uploadfileInputRef.current.click();
  };

  console.log(supportData, "Messages Data");

  return (
    <Modal
      className="match-share-modal modal-lg py-4"
      show={showChatPopup}
      onHide={handleChatPopupClose}
      centered
    >
      <Modal.Header>
        <div className="d-flex justify-content-end">
          <IoCloseSharp onClick={handleChatPopupClose} />
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="chat-popup-mesgs">
          <div className="d-flex flex-column border-none">
            <div className="recent_heading d-flex flex-start align-items-center justify-content-between w-100 header-bg h-8vh">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="d-flex flex-row px-2">
                  <img
                    className="rounded-circle h-30px mx-2 header-img-indvdual"
                    // src={Images.dhoni_image}
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
          <div className="chat-msg_history px-4">
            <ScrollableFeed>
              {supportData?.length > 0 ? (
                supportData.map((msg, index) => {
                  let sender = msg.to_user_id === register_id ? true : false;
                  return (
                    <div key={index}>
                      {sender ? (
                        ""
                      ) : (
                        <div className="mt-1 d-flex justify-content-center font-10">
                          {"     "}
                          {moment(msg.ts).format("DD-MM-YY")}
                        </div>
                      )}
                      <div
                        className={`mt-1 ${
                          sender ? "incoming_msg" : "outgoing_msg"
                        }`}
                      >
                        <div className={`mt-1 ${sender ? "received_msg" : ""}`}>
                          <div
                            key={index}
                            className={`mt-1 message ${
                              sender ? "received_withd_msg" : "sent_msg"
                            }`}
                          >
                            <div className="me-2"> {msg?.message}</div>
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
                <label htmlFor="upload">
                  <BiSolidCamera className="chat-icon" />
                </label>
                <input
                  type="file"
                  id="upload"
                  style={{ display: "none" }}
                  // onChange={handleChange}
                  // onChange={(e) => {
                  //   setProfileImage(e?.target?.files[0]);
                  //   // generateSignedUrl();
                  // }}
                />
              </div>

              <div className="button-chat px-2 py-1 rounded mx-2">
                <label htmlFor="attachment">
                  <ImAttachment className="chat-icon" />
                </label>
                <input
                  type="file"
                  id="attachment"
                  // ref={uploadfileInputRef}
                  style={{ display: "none" }}
                  // onChange={handleFileUpload}
                  // onChange={(e) => {
                  //   setProfileImage(e?.target?.files[0]);
                  //   // generateSignedUrl();
                  // }}
                />
              </div>

              <div className="button-chat px-2 py-1 rounded mx-2">
                <MdMicNone className="upload-icon" />
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ChatsTours;
