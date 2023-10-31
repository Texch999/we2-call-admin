import React, { useState } from "react";
import { Images } from "../../images";
import { HiThumbUp } from "react-icons/hi";
import { call } from "../../config/axios";
import { ADD_INTERESTED } from "../../config/endpoints";

function Football(props) {
  const { casinoData,footballData } = props;
  const [interested, setInterested] = useState(false)

  const handleClick = async (tour_id) => {
    setInterested(true);
    let register_id = localStorage?.getItem("register_id");
    let user_name = localStorage?.getItem("user_name");
    let account_role = localStorage?.getItem("account_role");
    const payload = {
      register_id: register_id,
      account_role: account_role,
      user_name: user_name,
      tour_id: tour_id,
      im_interested: interested,
      website: "www.we2call.com",
    };
    try {
      await call(ADD_INTERESTED, payload).then(() =>
        console.log("you clicked the interested button")
      );
    } catch (error) {
      console.log(error);
    }
  };

  return(
      <div className="row  p-2 tour-cricket">
        {footballData.map((item)=>{
          return(
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
                  <h3 className="meetings-heading mt-3">{item.tour_name}</h3>
                  <span className="medium-font meetings-heading">
                    {item.poster_title}
                  </span>
                  <div
                    className="w-60 intrested meetings-heading"
                    id={interested?"white-background":"black-background"}
                    onClick={()=>handleClick(item.tour_id)}
                  >
                    I’m Interested
                  </div>
                  <div className="small-font meetings-heading mt-2">
                    Tour Starting Date: {item.scheduled_date}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        {casinoData.map((item)=>{
          return(
            <div className="col-sm-12 col-md-8">
              <div className="w-100 h-100per casino-tournie row d-flex align-items-center">
                <div className="col-5 p-3">
                  <h3 className="meetings-heading mt-3">{item.tour_name}</h3>
                  <h4 className="large-font meetings-heading">
                    {item.poster_title}
                  </h4>
                  <div className="w-90 like-button mt-2 d-flex">
                    <div className={
                      interested
                        ? "afterintrested w-60 intrested meetings-heading"
                        : "w-60 intrested meetings-heading"
                    } 
                    onClick={()=>handleClick(item.tour_id)}
                    >
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
                    Tour Start Date: {item.scheduled_date}
                  </div>
                </div>
                <div className="col-6 d-flex align-items-center">
                  <img className="banner" src={Images.CasinoBanner}></img>
                </div>
              </div>
            </div>
          )
        })}
        
      </div>
    )
}

export default Football;
