import { useEffect, useState } from "react";
import "./styles.css";
import PaymentDetails from "./PaymentDetails";
import FillDetails from "./FillDetails";
import BookingCompleteMsg from "./BookingCompleteMsg";
import { Modal } from "react-bootstrap";
import AddedUserList from "./AddedUserList";
import { GET_TOUR_BY_ID } from "../../config/endpoints";
import { call } from "../../config/axios"

function YourDetailsPopup(props) {
  const { yourDetailsPopup, setYourDetailsPopup, tour } = props;
  const [fillDetails, setFillDetails] = useState(true);
  const [paymentDetails, setPaymentDetails] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [addedUsersList, setAddedUsersList] = useState(false);
  const [usersDetails, setusersDetails] = useState([]);
  const [packageCount, setPackageCount] = useState({});
  const [packMembers, setPackMembers] = useState({});
  const [individualPackageMembersCount, setIndividualPackageMembersCount] = useState({});
  const [eachPackageTotalamount, setEachPackageTotalamount] = useState({});

  const regularpacks = usersDetails.filter((item)=>{
        if(Object.keys(item)[0]?.includes('regular')){
          return item
        }
      })
  const premiumpacks = usersDetails.filter((item)=>{
        if(Object.keys(item)[0]?.includes('premium')){
          return item
        }
      })
  const luxurypacks = usersDetails.filter((item)=>{
        if(Object.keys(item)[0]?.includes('luxury')){
          return item
        }
      })
  const vippacks = usersDetails.filter((item)=>{
          if(/^vip/i.test(Object.keys(item)[0])){
            return item
          }
      })
  const vvippacks = usersDetails.filter((item)=>{
        if(/^vvip/i.test(Object.keys(item)[0])){
          return item
        }
      })
  const regularpackcount = regularpacks.length
  const premiumpackcount = premiumpacks.length
  const luxurypackcount = luxurypacks.length
  const vippackcount = vippacks.length
  const vvippackcount = vvippacks.length
  const regularpacktotalamount = ((tour[0]?.packages.regularpack.minamount)*(regularpackcount));
  const premiumpacktotalamount = ((tour[0]?.packages.premiumpack.minamount)*(premiumpackcount));
  const luxurypacktotalamount = ((tour[0]?.packages.luxurypack.minamount)*(luxurypackcount));
  const vippacktotalamount = ((tour[0]?.packages.vippack.minamount)*(vippackcount));
  const vvippacktotalamount = ((tour[0]?.packages.vvippack.minamount)*(vvippackcount));
  const regularpackmembers = []
  const premiumpackmembers = []
  const luxurypackmembers = []
  const vippackmembers = []
  const vvippackmembers = []
  for (let i of regularpacks){
    for (let j in i){
      if(j.includes('username')){
        regularpackmembers.push(i[j])
      }
    }
  }
  for (let i of premiumpacks){
    for (let j in i){
      if(j.includes('username')){
        premiumpackmembers.push(i[j])
      }
    }
  }
  for (let i of luxurypacks){
    for (let j in i){
      if(j.includes('username')){
        luxurypackmembers.push(i[j])
      }
    }
  }
  for (let i of vippacks){
    for (let j in i){
      if(j.includes('username')){
        vippackmembers.push(i[j])
      }
    }
  }
  for (let i of vvippacks){
    for (let j in i){
      if(j.includes('username')){
        vvippackmembers.push(i[j])
      }
    }
  }
  const regularpackmemberscount = regularpackmembers.length
  const premiumpackmemberscount = premiumpackmembers.length
  const luxurypackmemberscount = luxurypackmembers.length
  const vippackmemberscount = vippackmembers.length
  const vvippackmemberscount = vvippackmembers.length
  console.log(usersDetails,'.......usersdetails')
  const packagesDetailsinuseState = ()=>{
    setPackageCount({
      regularpackcount,
      premiumpackcount,
      luxurypackcount,
      vippackcount,
      vvippackcount
      })
    setPackMembers({
      regularpackmembers,
      premiumpackmembers,
      luxurypackmembers,
      vippackmembers,
      vvippackmembers
    })
    setIndividualPackageMembersCount({
      regularpackmemberscount,
      premiumpackmemberscount,
      luxurypackmemberscount,
      vippackmemberscount,
      vvippackmemberscount
    })
    setEachPackageTotalamount({
      regularpacktotalamount,
      premiumpacktotalamount,
      luxurypacktotalamount,
      vippacktotalamount,
      vvippacktotalamount
    })
  }
  
  useEffect(()=>{
    packagesDetailsinuseState()
  },[usersDetails])

  const handleFillDetails = () => {
    setFillDetails(true);
    setAddedUsersList(false);
    setPaymentDetails(false);
    setBookingComplete(false);
  };
  const handlePaymentDetails = (inputData) => {
    setAddedUsersList(true);
    setPaymentDetails(false);
    setFillDetails(false);
    setBookingComplete(false);
    setusersDetails([...usersDetails,inputData])
  };
  const handleAddedUserList = () => {
    setAddedUsersList(false);
    setPaymentDetails(true);
    setFillDetails(false);
    setBookingComplete(false);
  };

  const handleBookingComplete = () => {
    setBookingComplete(true);
    setPaymentDetails(false);
    setFillDetails(false);
  };
  const handleCancel = () => {
    setYourDetailsPopup(false);
    setBookingComplete(false);
    setFillDetails(true);
  };
  return (
    <Modal
      show={yourDetailsPopup}
      className="add-user-modal"
      footer={null}
      centered
      onCancel={() => handleCancel()}
    >
      <div className="p-3">
        {fillDetails && (
          <FillDetails handlePaymentDetails={handlePaymentDetails} tour={tour} />
        )}
        {addedUsersList && (
          <AddedUserList
            handleFillDetails={handleFillDetails}
            handleAddedUserList={handleAddedUserList}
            packageCount={packageCount}
            packMembers={packMembers}
            individualPackageMembersCount={individualPackageMembersCount}
            eachPackageTotalamount={eachPackageTotalamount}
          />
        )}

        {paymentDetails && (
          <PaymentDetails handleBookingComplete={handleBookingComplete} />
        )}
        {bookingComplete && <BookingCompleteMsg handleCancel={handleCancel} />}
      </div>
    </Modal>
  );
}
export default YourDetailsPopup;