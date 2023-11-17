import React, { useEffect } from "react";
import "./style.css";
import TakeTour from "./TakeTour";
import Football from "./Football";
import Entertainment from "./Entertainment";
import { useState } from "react";
import ChatsTours from "./ChatsTours";
import { call } from "../../config/axios";
import { GET_TOURS } from "../../config/endpoints";

function ToursAndTournaments() {
  const [showChatPopup, setShowChatPopup] = useState(false);
  const [tours, setTours] = useState([]);
  // const [bookTourType, setBookTourType] = useState();
  const handleChatWithUsButton = () => {
    setShowChatPopup(true);
  };

  const getTours = async () => {
    const payload = {};
    await call(GET_TOURS, payload).then((res) => setTours(res.data.data));
  };
  console.log(tours, "......tours");
  useEffect(() => {
    getTours();
  }, []);

  return (
    <div className="pl-1rem tours-main">
      <TakeTour tours={tours} />
      <Football tours={tours} />
      <Entertainment tours={tours} />
      <div
        className="d-flex msg-container"
        onClick={() => handleChatWithUsButton()}
      >
        <img src="./assets/chat_icon.png" className="chat-tour-img-icon" />
        <span className="ms-2 text-clr">Chat With Us</span>
      </div>
      <ChatsTours
        showChatPopup={showChatPopup}
        setShowChatPopup={setShowChatPopup}
      />
    </div>
  );
}

export default ToursAndTournaments;
