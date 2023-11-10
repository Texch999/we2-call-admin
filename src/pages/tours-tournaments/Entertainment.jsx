import React from "react";
import { Images } from "../../images";
import { HiThumbUp } from "react-icons/hi";
import ToursListPopup from "./ToursListPopup";
import { useHistory } from "react-router";
import { useState } from "react";

function Entertainment(props) {
  const { tours } = props
  const history = useHistory();
  const [openToursPopup, setOpenToursPopup] = useState(false)
  const [filteredTours, setFilteredTours] = useState([])
  const handleIntrestButton = (tourName) => {
    setFilteredTours(tours
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
  };


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
              <div className="d-flex align-items-center width-fit-content">
                <div
                  className="click-button p-1 me-1"
                  onClick={() => history.push("/offers")}
                >
                  Click Here
                </div>
                <h6 className="meetings-heading mt-3 d-inline">For Details</h6>
              </div>
              <h4 className="large-font meetings-heading">
                Play and get a chance to join with tour
              </h4>
              <div className="w-60 intrested meetings-heading"
                    onClick={()=>{handleIntrestButton("5.Entertainment Tour")}}
              >
                I’m Interested
              </div>
              <div className="count-container d-flex p-3 mt-2">
                <HiThumbUp />
                <span className="meetings-heading me-2">179.1K</span>
                <span className="small-font">are interested</span>
              </div>
              {/* <div className="small-font meetings-heading mt-3">
                Tour Start Date: 2nd Aug, 2023
              </div> */}
            </center>
          </div>
        </div>
        <div className="col-4 d-flex align-items-center">
          <img className="banner" src={Images.Emojis}></img>
        </div>
      </div>
      <ToursListPopup openToursPopup={openToursPopup} 
                      setOpenToursPopup={setOpenToursPopup}
                      toursList={filteredTours}                
      />
    </div>
  );
}

export default Entertainment;
