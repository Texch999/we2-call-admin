import { HiThumbUp } from "react-icons/hi";
import { Images } from "../../images";
import "./styles.css";
import { useHistory } from "react-router";
import { useState } from "react";
import ToursListPopup from "./ToursListPopup";

function TakeTour() {
  const history = useHistory();
  const [openToursPopup, setOpenToursPopup] = useState(false);
  const handleIntrestButton = () => {
    setOpenToursPopup(true);
  };
  return (
    <div className="row  p-2 tour-cricket">
      <div className="col-sm-12 col-md-7">
        <div className="w-100 h-100per take-tour row d-flex align-items-center">
          <div className="col-6 p-3">
            {/* <div className="d-inline align-items-center"> */}
            <h3 className="meetings-heading mt-3 d-inline">
              Take a Part in Our Tour
            </h3>
            <div className="d-flex align-items-center">
              <div
                className="click-button p-1 me-1"
                onClick={() => history.push("/offers")}
              >
                Click Here
              </div>
              <h6 className="meetings-heading mt-3 d-inline">For Details</h6>
            </div>
            {/* <a>Click Here</a> For Details */}
            {/* </div> */}
            <h4 className="large-font meetings-heading">
              Play and get a chance to join with tour
            </h4>
            <div className="w-90 like-button mt-2 d-flex">
              <div
                className="w-60 intrested meetings-heading"
                onClick={() => handleIntrestButton()}
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
              Goa 23-10-2023, Srilanka 29-11-2023
            </div>
          </div>
          <div className="col-4 d-flex align-items-center">
            <img className="banner" src={Images.travel_banner}></img>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-5">
        <div className="w-100 h-100per cricket-cup row d-flex align-items-center">
          <div className="col-6 d-flex align-items-center">
            <img className="banner" src={Images.BatBall}></img>
          </div>
          <div className="col-6 p-3">
            <h3 className="meetings-heading mt-3">Crieket Cup Tour</h3>
            <span className="medium-font meetings-heading">
              Click on interest buttons to get a changce to a part of our tour
            </span>
            <div className="w-60 intrested meetings-heading mt-1">
              I’m Interested
            </div>
            <div className="small-font meetings-heading mt-2">
              Tour Starting Date
            </div>
          </div>
        </div>
      </div>
      <ToursListPopup openToursPopup={openToursPopup} setOpenToursPopup={setOpenToursPopup}/>
    </div>
  );
}

export default TakeTour;
