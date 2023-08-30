import React from "react";
import { Images } from "../../images";
import { HiThumbUp } from "react-icons/hi";

function Football() {
  return (
    <div className="row  p-2 tour-cricket">
      <div className="col-sm-12 col-md-4">
        <div className="w-100 h-100per football-cup row d-flex align-items-center">
          <div className="col-5 d-flex align-items-center">
            <img
              className="banner"
              alt="foot-ball"
              src={Images.FootBallLeg}
            ></img>
          </div>
          <div className="col-7 p-3">
            <h3 className="meetings-heading mt-3">Football Cup Tour</h3>
            <span className="medium-font meetings-heading">
              Click on interest buttons to get a changce to a part of our tour
            </span>
            <div
              className="w-60 intrested meetings-heading mt-1"
              id="black-background"
            >
              I’m Interested
            </div>
            <div className="small-font meetings-heading mt-2">
              Tour Starting Date
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-8">
        <div className="w-100 h-100per casino-tournie row d-flex align-items-center">
          <div className="col-5 p-3">
            <h3 className="meetings-heading mt-3">Casino Tournament</h3>
            <h4 className="large-font meetings-heading">
              Play and get a chance to join with tour
            </h4>
            <div className="w-90 like-button mt-2 d-flex">
              <div className="w-60 intrested meetings-heading">
                I’m Interested
              </div>
              <div className="w-40">
                <HiThumbUp />
                <span className="meetings-heading">179.1K</span>
                <br />
                <span className="small-font">are interested</span>
              </div>
            </div>
            <div className="small-font meetings-heading mt-3">
              Tour Start Date: 2nd Aug, 2023
            </div>
          </div>
          <div className="col-6 d-flex align-items-center">
            <img className="banner" src={Images.CasinoBanner}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Football;
