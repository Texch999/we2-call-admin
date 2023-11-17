import { useState } from "react";
import OfferDetails from "./OfferDetails";
import MessagePopup from "../tour-popups/MessagePopup";
import { Images } from "../../images";
import { useHistory,useParams } from "react-router";
// import { useParams } from "react-router-dom";

function ViewOffers() {
  const history = useHistory();
  const { tourname } = useParams();
  console.log(tourname,'......tourType')
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
      <div className="d-flex justify-content-between align-items-center">
        <div className="w-40 d-flex justify-content-between">
          <div
            className="normal-button font-14"
            onClick={() => history.push("/tours-tournaments")}
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
      <hr className="hr-line mt-2" />
      {viewOffers && <OfferDetails />}
      <MessagePopup
        messagePopup={messagePopup}
        setMessagePopup={setMessagePopup}
      />
    </div>
  );
}

export default ViewOffers;
