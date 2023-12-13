import { useEffect, useState } from "react";
import OfferDetails from "./OfferDetails";
import MessagePopup from "../tour-popups/MessagePopup";
import { Images } from "../../images/index";
import { useHistory, useParams } from "react-router";
import MyTours from "./MyTours";
// import { useParams } from "react-router-dom";

function ViewOffers() {
  const history = useHistory();
  const { tourname } = useParams();
  const [messagePopup, setMessagePopup] = useState(false);
  const [viewOffers, setViewOffers] = useState("0");
  const handleViewOffersOpen = (item) => {
    setViewOffers(item);
  };
  const handleOpenMessagePopup = () => {
    setMessagePopup(true);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="w-40 d-flex justify-content-between">
          <div
            className={
              viewOffers === "0"
                ? "hilight-button font-14"
                : "normal-button font-14"
            }
            // onClick={() => history.push("/tours-tournaments")}
            onClick={() => handleViewOffersOpen("0")}
          >
            Tours & Tournaments
          </div>
          <div
            className={
              viewOffers === "1"
                ? "hilight-button font-14"
                : "normal-button font-14"
            }
            onClick={() => handleViewOffersOpen("1")}
          >
            My Tours
          </div>
        </div>
        <div onClick={() => handleOpenMessagePopup()}>
          <img
            className="offers-msg-img"
            chat_icon
            src={"../assets/chat_icon.png"}
            alt="Message"
          />
        </div>
      </div>
      <hr className="hr-line mt-2" />
      {viewOffers === "0" && <OfferDetails tourname={tourname} />}
      {viewOffers === "1" && <MyTours tourname={tourname} />}

      <MessagePopup
        messagePopup={messagePopup}
        setMessagePopup={setMessagePopup}
      />
    </div>
  );
}

export default ViewOffers;
