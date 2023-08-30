import React from "react";
import { Images } from "../../images";
import { HiThumbUp } from "react-icons/hi";

function Entertainment() {
  return (
    <div className="row  p-3 tour-cricket">
      <div className="row entertain-ment">
        <div className="col-4 d-flex align-items-center">
          <img className="banner" src={Images.ManSuitCase}></img>
        </div>
        <div className="col-4 p-3 d-felx align-items-center ">
          <div className="mid-div">
            <center className="mt-3">
              <h3 className="meetings-heading mt-3">Entertainment Tour</h3>
              <h4 className="large-font meetings-heading">
                Play and get a chance to join with tour
              </h4>
              <div className="w-60 intrested meetings-heading">
                I’m Interested
              </div>
              <div className="count-container d-flex p-3 mt-2">
                <HiThumbUp />
                <span className="meetings-heading me-2">179.1K</span>
                <span className="small-font">are interested</span>
              </div>
              <div className="small-font meetings-heading mt-3">
                Tour Start Date: 2nd Aug, 2023
              </div>
            </center>
          </div>
        </div>
        <div className="col-4 d-flex align-items-center">
          <img className="banner" src={Images.Emojis}></img>
        </div>
      </div>
    </div>
  );
}

export default Entertainment;
