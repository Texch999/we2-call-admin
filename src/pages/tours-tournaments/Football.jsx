import React from "react";
import { Images } from "../../images";
import { HiThumbUp } from "react-icons/hi";
import { useHistory } from "react-router";
import { useState } from "react";
import ToursListPopup from "./ToursListPopup";

function Football(props) {
  const { tours } = props;
  const history = useHistory();
  const [openToursPopup, setOpenToursPopup] = useState(false)
  const [filteredTours, setFilteredTours] = useState([])
  const [clicked, setClicked] = useState(false)
  const handleIntrestButton = (tourName) => {
    setFilteredTours(tours && tours.length>0 && tours
      .filter((tour)=>tour.tour_name===tourName)
      .filter((tour)=>tour.status==="active")
      .filter((tour)=>{
        const publishStartDate = new Date(tour.publish_from)
        const publishStartTimestamp = publishStartDate.getTime()
        const publishEndDate = new Date(tour.publish_upto)
        const publishEndTimestamp = publishEndDate.getTime()
        const currentTimestamp = Date.now()
        if(currentTimestamp>publishStartTimestamp&&currentTimestamp<publishEndTimestamp){
          return tour
        }
      })
    )
    setOpenToursPopup(true);
    setClicked(true)
  };

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
            <h3 className="meetings-heading mt-3">Sports Tours</h3>
            <div className="d-flex align-items-center">
              <div
                className="click-button p-1 me-1"
                onClick={() => history.push("/offers/3.Sports Tour")}
              >
                Book Now
              </div>
              <h6 className="meetings-heading mt-3 d-inline">For Details</h6>
            </div>
            <span className="medium-font meetings-heading">
              Click on interest buttons to get a changce to a part of our tour
            </span>
            <div
              className="ww-60 intrested meetings-heading mt-1"
              id="black-background"
              onClick={()=>{handleIntrestButton("3.Sports Tour")}}
            >
              I’m Interested
            </div>
            {/* <div className="small-font meetings-heading mt-2">
              Tour Starting Date
            </div> */}
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-8">
        <div className="w-100 h-100per casino-tournie row d-flex align-items-center">
          <div className="col-5 p-3">
            <h3 className="meetings-heading mt-3">Casino Tournaments</h3>
            <div className="d-flex align-items-center">
              <div
                className="click-button p-1 me-1"
                onClick={() => history.push("/offers/4.Casino Tour")}
              >
                Book Now
              </div>
              <h6 className="meetings-heading mt-3 d-inline">For Details</h6>
            </div>
            <h4 className="large-font meetings-heading">
              Play and get a chance to join with tour
            </h4>
            <div className="w-90 like-button mt-2 d-flex">
              <div className="w-60 intrested meetings-heading"
                    onClick={()=>{handleIntrestButton("4.Casino Tour")}}
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
            {/* <div className="small-font meetings-heading mt-3">
              Tour Start Date: 2nd Aug, 2023
            </div> */}
          </div>
          <div className="col-6 d-flex align-items-center">
            <img className="banner" src={Images.CasinoBanner}></img>
          </div>
        </div>
      </div>
      <ToursListPopup openToursPopup={openToursPopup} 
                      setOpenToursPopup={setOpenToursPopup}
                      toursList={filteredTours}              
      />
    </div>
  );
}

export default Football;
