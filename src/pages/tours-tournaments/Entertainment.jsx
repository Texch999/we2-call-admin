import React, { useState } from "react";
import { Images } from "../../images";
import { HiThumbUp } from "react-icons/hi";
import { call } from "../../config/axios";
import { ADD_INTERESTED } from "../../config/endpoints";

function Entertainment(props) {
  // console.log(props,'......props')
  const { data } = props;
  // console.log(data, ".....data");
  const [interested, setInterested] = useState(false);

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

  return (
    <div>
      {data.map((item) => {
        return (
          <div className="row  p-3 tour-cricket">
            <div className="row entertain-ment">
              <div className="col-4 d-flex align-items-center">
                <img className="banner" src={Images.ManSuitCase}></img>
              </div>
              <div className="col-4 p-3 d-felx align-items-center ">
                <div className="mid-div">
                  <center className="mt-3">
                    <h3 className="meetings-heading mt-3">{item.tour_name}</h3>
                    <h4 className="large-font meetings-heading">
                      {item.poster_title}
                    </h4>
                    <div
                      className={
                        interested
                          ? "afterintrested w-60 intrested meetings-heading"
                          : "w-60 intrested meetings-heading"
                      }
                      onClick={() => handleClick(item.tour_id)}
                    >
                      I’m Interested
                    </div>
                    <div className="count-container d-flex p-3 mt-2">
                      <HiThumbUp />
                      <span className="meetings-heading me-2">179.1K</span>
                      <span className="small-font">are interested</span>
                    </div>
                    <div className="small-font meetings-heading mt-3">
                      Tour Start Date: {item.scheduled_date}
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
      })}
    </div>
  );
}

export default Entertainment;
