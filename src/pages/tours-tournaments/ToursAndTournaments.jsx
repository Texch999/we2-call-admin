import React, { useEffect, useState } from "react";
import "./style.css";
import TakeTour from "./TakeTour";
import Football from "./Football";
import Entertainment from "./Entertainment";
import ChatsTours from "./ChatsTours";
import { call } from "../../config/axios";
import { GET_TOURS } from "../../config/endpoints";

function ToursAndTournaments() {
  const [tours, setTours] = useState([]);
  const [showChatPopup, setShowChatPopup] = useState(false);

  const handleChatWithUsButton = () => {
    setShowChatPopup(true);
  };

  const toursFromManagement = async () => {
    const payload = {
      website: ["www.we2call.com"]
    };
    try {
      const response = await call(GET_TOURS, payload);
      // console.log(response.data.data[0]);
      setTours(response?.data?.data)
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
  };

  useEffect(() => {
    toursFromManagement();
  }, []);
  // console.log(tours,'.....tours')
  const entertainment = tours.filter((i)=>i.tour_name==="4.Entertainment Tour")
  console.log(entertainment,'............fortourid')
  const cricket = tours.filter((i)=>i.tour_name==="1.Cricket Tour")
  const casino = tours.filter((i)=>i.tour_name==="3.Casino Tour")
  const football = tours.filter((i)=>i.tour_name==="2.Sports Tour")
  // console.log(football,'=====>football')
  return (
      <div className="pl-1rem tours-main">
        <TakeTour data = {cricket} />
        <Football casinoData = {casino} footballData = {football} />
        <Entertainment data = {entertainment} />
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
