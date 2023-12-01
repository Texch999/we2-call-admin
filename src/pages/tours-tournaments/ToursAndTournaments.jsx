import React from "react";
import "./style.css";
import TakeTour from "./TakeTour";
import Football from "./Football";
import Entertainment from "./Entertainment";
import { useState } from "react";
import ChatsTours from "./ChatsTours";

function ToursAndTournaments() {
  const [showChatPopup, setShowChatPopup] = useState(false);
  const handleChatWithUsButton = () => {
    setShowChatPopup(true);
  };

  return (
    <div className="pl-1rem tours-main">
      <TakeTour />
      <Football />
      <Entertainment />
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
