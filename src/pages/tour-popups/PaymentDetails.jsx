import { FaCheck, FaChevronDown, FaRegUser } from "react-icons/fa6";
import { BiSolidCloudUpload } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { AiTwotoneSave } from "react-icons/ai";
import { GET_TOUR_PAYMENT_GATEWAY,GENERATE_SIGNED_URL } from "../../config/endpoints";
import { call } from "../../config/axios";
import { useEffect, useState } from "react";

function PaymentDetails(props) {
  const { handleBookingComplete, userDetails } = props;
  const [allPayments, setAllPayments] = useState([])
  const [dropdownOption, setDropdownOption] = useState('')
  const [paymentdetails, setPaymentdetails] = useState({})
  console.log(paymentdetails,'.......paymsentdetails')
  console.log(userDetails,'.......userDetails')
  const country = 'India'
  const getCompanyAllowedPayments = async () => {
    const payload = {};
    await call(GET_TOUR_PAYMENT_GATEWAY, payload)
      .then((res) => setAllPayments(
        res?.data?.data?.filter((item)=>{
          return item.status === "active"
        }).filter((item)=>{
          return item.website === "www.we2call.com"
        }).filter((item)=>{
          return item.country === country;
      })))
      .catch((error) => console.log(error));
  };

  console.log(allPayments,'.....allpayments')

  useEffect(() => {
    getCompanyAllowedPayments();
  }, []);

  const uniquePaymentDropdown = [...new Set(allPayments.map((item)=>(item.paymentGateway)))]
  const filteredPayments = allPayments.filter((item)=>{
    return item.paymentGateway === dropdownOption
  })
  const handlepaymentscreenshot = async(e)=>{
    const imagefile = e.target.files[0];
    const imageId = Date.now();
    // console.log(imagefile,'......imgfile')
    const imageuploadingurl = await generatesignedurl(imageId);
    imageuploadingurl &&
      setPaymentdetails({
        ...paymentdetails,
        [e.target.name]: {
          imagefile: imagefile,
          imageregisterid: imageId,
          imageuploadingurl: imageuploadingurl,
        },
      });
  }
  const generatesignedurl = async (imageId) => {
    const payload = {
      register_id: `${imageId}`,
      event_type: "user_profile_image",
      folder_name: "tours_payment_docs",
    };
    try {
      const res = await call(GENERATE_SIGNED_URL, payload);
      const url = res?.data?.data?.result?.signed_url;
      return url;
    } catch (error) {
      console.log("error while creating the signed url", error);
      return "";
    }
  };
  const handlepaymentdetails = (e,item)=>{
    if(e.target.name==='neftclicked'){
    setPaymentdetails({
      ...paymentdetails,
      'selectedpaymentdetails':{
        name: item?.accountHolderName,
        accountNo: item?.accountNumber,
        bank:item?.bankName,
        ifscCode: item?.ifscCode
      }
    })
    }else{
      setPaymentdetails({
        ...paymentdetails,
        'selectedpaymentdetails':{
          name: item?.upiName,
          upiId: item?.upiId,
          mobileNumber:item?.mobileNumber
        }
      })
    }
  }

  return (
    <div>
      <div className="w-100 d-flex justify-content-between mt-2">
        <div className="flex-center payment-icon active-payment-icon font-25">
          <FaRegUser />
        </div>
        <div className="active-line-clr"></div>
        <div className="flex-center payment-icon active-payment-icon font-25">
          <AiTwotoneSave />
        </div>
        <div className="active-line-clr"></div>
        <div className="flex-center payment-icon active-payment-icon font-25">
          <MdOutlinePayment />
        </div>
        <div className="middle-line-clr"></div>
        <div className="flex-center payment-icon font-25">
          <FaCheck />
        </div>
      </div>
      <hr className="hr-line mt-2" />
      <div className="flex-center font-16 fw-600 mt-1">Payment Details</div>
      <div className="by-id-btn mt-1">
        <div className="font-10 d-flex justify-content-between p-1">
          <div>Select Members</div>
          <div>2</div>
        </div>
        <hr className="hr-line" />
        <div className="p-2">
          <div className="w-15 flex-center font-10 details-text p-1">
            Details
          </div>
          <div className="members-conatainer">
            <div className="row mt-2">
              <div className="col-6 flex-start">
                <FaCheck className="type-file" />
                <div className="font-10 ms-1">Member 1</div>
              </div>
              <div className="col-6 flex-start">
                <div className="font-10">Jayanta, Male, 24</div>
                <div className="font-10 ms-1 viewid-text p-1">View ID</div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6 flex-start">
                <FaCheck className="type-file" />
                <div className="font-10 ms-1">Member 1</div>
              </div>
              <div className="col-6 flex-start">
                <div className="font-10">Jayanta, Male, 24</div>
                <div className="font-10 ms-1 viewid-text p-1">View ID</div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6 flex-start">
                <FaCheck className="type-file" />
                <div className="font-10 ms-1">Member 1</div>
              </div>
              <div className="col-6 flex-start">
                <div className="font-10">Jayanta, Male, 24</div>
                <div className="font-10 ms-1 viewid-text p-1">View ID</div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6 flex-start">
                <FaCheck className="type-file" />
                <div className="font-10 ms-1">Member 1</div>
              </div>
              <div className="col-6 flex-start">
                <div className="font-10">Jayanta, Male, 24</div>
                <div className="font-10 ms-1 viewid-text p-1">View ID</div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6 flex-start">
                <FaCheck className="type-file" />
                <div className="font-10 ms-1">Member 1</div>
              </div>
              <div className="col-6 flex-start">
                <div className="font-10">Jayanta, Male, 24</div>
                <div className="font-10 ms-1 viewid-text p-1">View ID</div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6 flex-start">
                <FaCheck className="type-file" />
                <div className="font-10 ms-1">Member 1</div>
              </div>
              <div className="col-6 flex-start">
                <div className="font-10">Jayanta, Male, 24</div>
                <div className="font-10 ms-1 viewid-text p-1">View ID</div>
              </div>
            </div>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="p-1">
          <div className="row">
            <div className="col-6">
              <div className="d-flex justify-content-between font-10 package-amount-text p-1">
                <div>Package Amount</div>
                <div>1,00000000</div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex justify-content-between font-10 package-amount-text p-1">
                <div>Total Members</div>
                <div>02</div>
              </div>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-12">
              <div className="d-flex justify-content-between font-10 package-amount-text p-1">
                <div>Total Amount to Pay</div>
                <div className="yellow-clr">2,00000000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="login-btn mt-2">Confirm & Pay</div> */}
      <hr className="hr-line mt-1" />
      <div className="font-10 mt-1">Payment Mode*</div>
      <div className="row">
        <div className="col-12" span={24}>
          <select className="d-flex justify-content-between p-1 font-10 neft-div w-100 all-none"
                  name="dropdownoption"
                  value={dropdownOption}
                  onChange={(e)=>setDropdownOption(e.target.value)}
          >
            <option value={'All'} selected>Select Payment Mode</option>
            {uniquePaymentDropdown.map((item)=>(
              <option className="d-flex justify-content-between p-1 font-10 neft-div w-50 all-none" 
                      value={item}
              >
                {item}
              </option>
            ))}
            {/* <option>NEFT/RTGS</option>
            <option>NEFT/RTGS</option>
            <option>NEFT/RTGS</option> */}
            
            {/* <div>
              <FaChevronDown />
            </div> */}
          </select>
        </div>
      </div>
      <div className="members-conatainer">
        {filteredPayments.map((item)=>{
          return(
            <div className="row">
              <div className="col-12">
                <div className=" p-2 font-10 neft-div mt-1">
                  {dropdownOption==='neft'? (
                    <div>
                      <div className="d-flex justify-content-between">
                        <div>Name: {item?.accountHolderName}</div>
                        <input type="checkbox" className="yellow-clr"
                                name="neftclicked"
                          onClick={(e)=>handlepaymentdetails(e,item)}
                        ></input>
                      </div>
                      <div>A/C No: {item?.accountNumber}</div>
                      <div>Bank: {item?.bankName}</div>
                      <div>IFSC Code: {item?.ifscCode}</div>
                    </div>
                  )
                  :(
                    <div>
                      <div className="d-flex justify-content-between">
                        <div>Name: {item?.upiName}</div>
                        <input type="checkbox" className="yellow-clr"
                                name="upiclicked"
                                onClick={(e)=>handlepaymentdetails(e,item)}
                        ></input>
                      </div>
                      <div>UPI Id: {item?.upiId}</div>
                      <div>Mobile Number: {item?.mobileNumber}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="row">
        <div className="col-12">
          <label  className="d-flex justify-content-between neft-div mt-2 p-2"
                htmlFor='paymentscreenshot'
          >
            <div className="font-10">
              {paymentdetails?.paymentscreenshot?.imagefile?.name || "Upload Screenshot"}
              <input  type="file" 
                      className="display-none"
                      name="paymentscreenshot"
                      id="paymentscreenshot"
                      onChange={(e)=>handlepaymentscreenshot(e)} 

              />
            </div>
            <BiSolidCloudUpload className="type-file font-25" />
          </label>
        </div>
      </div>
      <div className="login-btn mt-2" onClick={() => handleBookingComplete()}>
        Pay
      </div>
    </div>
  );
}

export default PaymentDetails;
