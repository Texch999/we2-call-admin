import React, { useEffect, useState } from "react";
import { HiThumbUp } from "react-icons/hi";

function MyTours(props) {
  const { tourname } = props;
  const [dynamicTourDetails, setDynamicTourDetails] = useState();
  const [upcomingTours, setUpcomingTours] = useState(true);
  const [completedTours, setCompletedTours] = useState(false);

  const handleUpcomingTours = () => {
    setUpcomingTours(true);
    setCompletedTours(false);
  };
  const handleCompletedTours = () => {
    setCompletedTours(true);
    setUpcomingTours(false);
  };

  const gettingSpecificTournameFromParams = () => {
    switch (tourname) {
      case "1.Take Part in Our Tour":
        setDynamicTourDetails({
          tourName: tourname,
          quotation: "Play and get a chance to join with tour",
          imgSrc: "../assets/travel_banner.png",
          tourCardClass:
            "w-100 d-flex justify-content-between align-items-center take-tour-div h-55vh",
        });
        break;
      case "2.Cricket Tour":
        setDynamicTourDetails({
          tourName: tourname,
          quotation: "Play and get a chance to join with tour",
          imgSrc: "../assets/bat_ball.png",
          tourCardClass:
            "w-100 d-flex justify-content-between align-items-center cricket-tour-div h-55vh",
        });
        break;
      case "3.Sports Tour":
        setDynamicTourDetails({
          tourName: tourname,
          quotation: "Play and get a chance to join with tour",
          imgSrc: "../assets/football_leg.png",
          tourCardClass:
            "w-100 d-flex justify-content-between align-items-center football-tour-div h-55vh",
        });
        break;
      case "4.Casino Tour":
        setDynamicTourDetails({
          tourName: tourname,
          quotation: "Play and get a chance to join with tour",
          imgSrc: "../assets/casino_banner.png",
          tourCardClass:
            "w-100 d-flex justify-content-between align-items-center casino-tour-div h-55vh",
        });
        break;
      case "5.Entertainment Tour":
        setDynamicTourDetails({
          tourName: tourname,
          quotation: "Play and get a chance to join with tour",
          imgSrc: "../assets/man_suitcase.png",
          tourCardClass:
            "w-100 d-flex justify-content-between align-items-center ent-tour-div h-55vh",
        });
        break;
      default:
        setDynamicTourDetails({});
        break;
    }
  };

  useEffect(() => {
    gettingSpecificTournameFromParams();
  }, []);
  return (
    <div className="p-1">
      {/* <NoOffer /> */}
      <div className="p-1">
        <div className="row">
          <div className={dynamicTourDetails?.tourCardClass}>
            <div className="w-45 tour-content">
              <div className="font-clr-white tour-heading-text">
                {dynamicTourDetails?.tourName}
              </div>
              <div className="w-75 fw-600 font-clr-white font-14 mt-1">
                {dynamicTourDetails?.quotation}
              </div>
              <div className="w-40 flex-center intrested-container mt-1">
                <div className="font-clr-white flex-center font-14 fw-600">
                  <HiThumbUp className="font-clr-white thumbsup-icon mr-5 font-14 fw-600" />
                  179.5 K are interested
                </div>
              </div>
              {/* <div className="font-clr-white font-14 mt-1">
                Tour Start Date:<b> 2nd Aug, 2023</b>
              </div> */}
            </div>
            <div className="w-45 flex-center suitcase-img-div">
              <img
                className="h-300px suitcase-image mr-40per"
                src={dynamicTourDetails?.imgSrc}
                alt="Suitcase_Img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-40 d-flex justify-content-between p-1 mt-2">
        <div className={upcomingTours ? "hilight-button  font-14" : "normal-button w-40 font-14"}
              onClick={()=>handleUpcomingTours()}
        >Upcoming Tours</div>
        <div className={completedTours ? "hilight-button  font-14" : "normal-button w-40 font-14"}
              onClick={()=>handleCompletedTours()}
        >Completed Tours</div>
      </div>
      <hr className="hr-line mt-2" />
      {upcomingTours && (
        <div>
          <div className="p-1 font-14 fw-600 title-color">Your upcoming tours will be displayed here</div>
          <div className="p-1 font-12">
        This company established under the laws of Costa Rica, with
        registered address at Costa Rica and having its gaming sublicence No.
        1669/KAV issued by Costa Rica e-Gaming and all rights to operate the
        gaming software. Freestyle is a company established under the laws of
        Cyprus, with registered address at Flamoudiou, 13, Strovolos 2036,
        Nicosia, Cyprus. These Terms & Conditions apply to you, and are binding
        upon you, if you Participate at T EXCHANGE. By Participating, you agree
        that you have read and understood these Terms & Conditions and you
        acknowledge that these Terms & Conditions shall apply to you.
      </div>
        </div>
      )}
      {completedTours && (
        <div>
          <div className="p-1 font-14 fw-600 title-color">Your completed tours will be displayed here</div>
          <div className="p-1 font-12">
        This company established under the laws of Costa Rica, with
        registered address at Costa Rica and having its gaming sublicence No.
        1669/KAV issued by Costa Rica e-Gaming and all rights to operate the
        gaming software. Freestyle is a company established under the laws of
        Cyprus, with registered address at Flamoudiou, 13, Strovolos 2036,
        Nicosia, Cyprus. These Terms & Conditions apply to you, and are binding
        upon you, if you Participate at T EXCHANGE. By Participating, you agree
        that you have read and understood these Terms & Conditions and you
        acknowledge that these Terms & Conditions shall apply to you.
      </div>
        </div>
      )}
    </div>
  );
}

export default MyTours;
