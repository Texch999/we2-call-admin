import { FaCheck, FaChevronDown, FaRegUser } from "react-icons/fa6";
import { BiSolidCloudUpload } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { AiTwotoneSave } from "react-icons/ai";
import { GET_ALL_PAYMENT_GATEWAYS } from "../../config/endpoints";
import { call } from "../../config/axios";
import { useEffect, useState } from "react";

function PaymentDetails(props) {
  const { handleBookingComplete } = props;
  const [allPayments, setAllPayments] = useState([])
  const [dropdownOption, setDropdownOption] = useState('')
  console.log(dropdownOption,'.....dropdown')
  if(dropdownOption=='neft'){
    const accountDetails = {
      name: Name,
      accountnumber: A/C-No,
      bank:Bank,
      ifsccode: IFSC-Code
    }
  }else{
    const accountDetails = {
      upiId: UPI-Id,
      mobilenumber: MobileNumber
    }
  }

  const getCompanyAllowedPayments = async () => {
    const payload = {
      register_id: "company",
    };
    await call(GET_ALL_PAYMENT_GATEWAYS, payload)
      .then((res) => setAllPayments(res?.data?.data))
      .catch((error) => console.log(error));
  };

  console.log(allPayments,'.....allpayments')

  useEffect(() => {
    getCompanyAllowedPayments();
  }, []);

  const uniquePaymentDropdown = [...new Set(allPayments.map((item)=>(item.pg_upi)))]
  const filteredPayments = allPayments.filter((item)=>{
    return item.pg_upi === dropdownOption
  })
  console.log(filteredPayments,'.....filteredpayments')
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
                  onChange={(e)=>setDropdownOption(e.target.value)}
          >
            <option selected>Select Payment Mode</option>
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
                        <div>Name: Jayanta Pal</div>
                        <input type="checkbox" className="yellow-clr"></input>
                      </div>
                      <div>A/C No: 34311236216</div>
                      <div>Bank: SBI</div>
                      <div>IFSC Code: SBIN001111</div>
                    </div>
                  )
                  :(
                    <div>
                      <div className="d-flex justify-content-between">
                        <div>Name: Jayanta Pal</div>
                        <input type="checkbox" className="yellow-clr"></input>
                      </div>
                      <div>A/C No: 34311236216</div>
                      <div>Bank: SBI</div>
                      <div>IFSC Code: SBIN001111</div>
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
          <div className="d-flex justify-content-between neft-div mt-2 p-2">
            <div className="font-10">
              Upload Screenshot
              <input type="file" className="display-none" />
            </div>
            <BiSolidCloudUpload className="type-file font-25" />
          </div>
        </div>
      </div>
      <div className="login-btn mt-2" onClick={() => handleBookingComplete()}>
        Pay
      </div>
    </div>
  );
}

export default PaymentDetails;
