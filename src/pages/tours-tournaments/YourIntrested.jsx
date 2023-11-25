import { useEffect, useState } from "react";
import YourDetailsPopup from "./../tour-popups/YourDetailsPopup";
import { call } from "../../config/axios";
import { GET_SELECTEDMEMBERS,GET_TOUR_BY_ID } from "../../config/endpoints";

function YourIntrested(props) {
  const {tourname} = props;
  const [yourDetailsPopup, setYourDetailsPopup] = useState();
  const [selectedMembers,setSelectedMembers] = useState([])
  const [tourDetails, setTourDetails] = useState({})
  const [tour, setTour] = useState({})

  const gettingTourById = async(item)=>{
    // console.log(item.tour_id,'....item')
    const payload = {
      tour_id:item.tour_id
    }
    await call(GET_TOUR_BY_ID, payload)
            .then((res)=>setTour(res?.data?.data))
            .catch((error)=>console.log(error))
  }
  
  const handleYourDetailsPopupOpen = async(item) => {
    gettingTourById(item);
    setYourDetailsPopup(true);
  };

  const gettingSelectedTourMembers = async()=>{
    const register_id = localStorage.getItem("register_id")
    const payload = {
      register_id,
    }
    await call(GET_SELECTEDMEMBERS, payload)
            .then((res)=>setSelectedMembers(res?.data?.data))
            .catch((error)=>console.log(error))
  }
  useEffect(()=>{
    gettingSelectedTourMembers();
  },[])
  console.log(selectedMembers,'.....selectedmembers')
  const tourdetailsAddedMembers = selectedMembers && selectedMembers.length>0 && selectedMembers
                                    .filter((item)=>item.selected===true)
                                    .filter((item)=>item.tour_details!==false)
                                    .filter((item)=>item.tour_name===tourname)
                                    .filter((item)=>{
                                      const tourScheduleEnd = item.schedule_end
                                      const tourEndDate = new Date(tourScheduleEnd)
                                      const tourEndTimestamp = tourEndDate.getTime()
                                      const presentTimestamp = Date.now()
                                      if(presentTimestamp<tourEndTimestamp){
                                        return item
                                      }
                                    })
  // console.log(tourdetailsAddedMembers,'....tourdetailsaddedmembers')

  return (
    <div>
      <div className="p-1 font-14 fw-600">
          You have Interested on this tours, check details
      </div>
      {tourdetailsAddedMembers && tourdetailsAddedMembers.length>0 ? tourdetailsAddedMembers.map((item)=>{
        return (
          <div>
            <div className="p-1 font-14 fw-600 title-color">
              {item.tour_title}
            </div>
            <div className="p-1 font-12">
              {item.tour_details}
            </div>
            <div className="w-30 p-1">
              <div
                className="normal-button yellow-clr font-14"
                onClick={() => handleYourDetailsPopupOpen(item)}
              >
                Book Now
              </div>
            </div>
            <YourDetailsPopup
              yourDetailsPopup={yourDetailsPopup}
              setYourDetailsPopup={setYourDetailsPopup}
              tour={tour}
            />
        </div>
        )
      }):<div className="p-1 font-14 fw-600 title-color">YOUR TOURS ARE COMING SOON</div>}
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
  );
}

export default YourIntrested;
