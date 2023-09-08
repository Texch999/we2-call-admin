import React, { useState } from "react";
import NoOffer from "./NoOffer";
import { HiThumbUp } from "react-icons/hi";
import YourIntrested from "./YourIntrested";
import TeamIntrested from "./TeamIntrested";
import { Images } from "../../images";

function OfferDetails() {
  const [yourIntrested, setYourIntrested] = useState(true);
  const [teamIntrested, setTeamIntrested] = useState(false);
  const handleYouIntrested = () => {
    setYourIntrested(true);
    setTeamIntrested(false);
  };
  const handleTeamIntrested = () => {
    setTeamIntrested(true);
    setYourIntrested(false);
  };
  return (
    <div className="p-1">
      {/* <NoOffer /> */}
      <div className="p-1">
        <div className="row">
          <div className="w-100 d-flex justify-content-between align-items-center take-tour-div h-55vh">
            <div className="w-45 tour-content">
              <div className="font-clr-white tour-heading-text">
                Take a part in our tour
              </div>
              <div className="w-75 fw-600 font-clr-white font-14 mt-1">
                Play and get a chance to join with tour
              </div>
              <div className="w-40 flex-center intrested-container mt-1">
                <div className="font-clr-white flex-center font-14 fw-600">
                  <HiThumbUp className="font-clr-white thumbsup-icon mr-5 font-14 fw-600" />
                  179.5 K are interested
                </div>
              </div>
              <div className="font-clr-white font-14 mt-1">
                Tour Start Date:<b> 2nd Aug, 2023</b>
              </div>
            </div>
            <div className="w-45 flex-center suitcase-img-div">
              <img
                className="h-300px suitcase-image mr-40per"
                src={Images.travel_banner}
                alt="Suitcase_Img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-40 d-flex justify-content-between p-1 mt-2">
        <div
          className={`${yourIntrested ? "hilight-button  font-14" : "normal-button w-40 font-14"}`}
          onClick={() => handleYouIntrested()}
        >
          Your Interested
        </div>
        <div
          className={`${teamIntrested ? "hilight-button font-14" : "normal-button w-40 font-14"}`}
          onClick={() => handleTeamIntrested()}
        >
          Team Interested
        </div>
      </div>
      <hr className="hr-line mt-2" />
      <div className="mt-2">
        {yourIntrested && <YourIntrested />}
        {teamIntrested && <TeamIntrested />}
      </div>
    </div>
  );
}

export default OfferDetails;
