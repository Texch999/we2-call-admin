import React, { useState } from "react";
import NoOffer from "./NoOffer";
import OfferDetails from "./OfferDetails";
import { useNavigate } from "react-router-dom";
import { Images } from "../../images";
import MessagePopup from "../tour-popups/MessagePopup";

function ViewOffers() {
  const navigate = useNavigate();
  const [messagePopup, setMessagePopup] = useState(false);
  const [viewOffers, setViewOffers] = useState(true);
  const handleViewOffersOpen = () => {
    setViewOffers(true);
  };
  const handleOpenMessagePopup = () => {
    setMessagePopup(true);
  };
  return (
    <div>
      <div className="view-offers-container flex-space-between">
        <div className="w-40 flex-space-between">
          <div
            className="normal-button font-14"
            onClick={() => navigate("/tours-and-tournaments")}
          >
            Tours & Tournaments
          </div>
          <div
            className={`${viewOffers ? "hilight-button font-14" : "normal-button font-14"}`}
            onClick={() => handleViewOffersOpen()}
          >
            View Offers
          </div>
        </div>
        <div onClick={() => handleOpenMessagePopup()}>
          <img
            className="offers-msg-img"
            src={Images.chat_icon}
            alt="Message"
          />
        </div>
      </div>
      <hr className="hr-line" />
      {viewOffers && <OfferDetails />}
      <MessagePopup
        messagePopup={messagePopup}
        setMessagePopup={setMessagePopup}
      />
    </div>
  );
}

export default ViewOffers;
