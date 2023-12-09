import React, { useState, useEffect } from "react";
import { MdModeEditOutline } from "react-icons/md";
import AddPaymentModePopup from "../popups/AddPaymentMode";
import { GET_ALL_PAYMENT_GATEWAYS } from "../../config/endpoints";
import { call } from "../../config/axios";

function PaymentGatewayList() {
  const [paymentGatewayPopup, setPaymentGatewayPopup] = useState(false);
  const [allPaymentGateway, setAllPaymentGateway] = useState([]);
  const [selectedGateway, setSelectedGateway] = useState({});
  const [status, setStatus] = useState(false);

  const handleOpenPaymentGateway = (argument) => {
    setPaymentGatewayPopup(true);
    setSelectedGateway(argument);
  };

  const register_id = localStorage.getItem("register_id");

  const getAllPaymentData = async () => {
    const payload = {
      register_id,
    };
    try {
      const res = await call(GET_ALL_PAYMENT_GATEWAYS, payload);
      if (res.status) {
        setAllPaymentGateway(res?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPaymentData();
  }, [status]);

  const findPaymentData = (type) => {
    return allPaymentGateway?.find((obj) => obj.pg_upi === type);
  };

  const neftPaymentData = findPaymentData("neft");
  const phonePayData = findPaymentData("phonepe");
  const paytmPaymentData = findPaymentData("paytm");
  const gPayPaymentData = findPaymentData("gpay");
  const qrCodePaymentInfo = findPaymentData("qr_code");

  return (
    <div className="p-3">
      <h5 className="meetings-heading mb-3">Payment Gateway List</h5>
      <div>
        <table className="w-100 match-position-table small-font">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                TYPE
              </th>
              <th scope="col" className="text-center">
                DETAILS
              </th>
              <th scope="col" className="text-center">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody className="small-font">
            {neftPaymentData && (
              <tr key="neft">
                <td className="text-center">NEFT/RTGS</td>
                <td className="text-center ">
                  <div>
                    <div>Name: {neftPaymentData.account_holder_name}</div>
                    <div>Ac.No: {neftPaymentData.account_number}</div>
                    <div>IFSC: {neftPaymentData.ifsc_code}</div>
                    <div>Bank: {neftPaymentData.bank_name}</div>
                  </div>
                </td>
                <td className="text-center">
                  <MdModeEditOutline
                    className="custom-icon"
                    onClick={() => handleOpenPaymentGateway(neftPaymentData)}
                  />
                </td>
              </tr>
            )}
            {phonePayData && (
              <tr key="phonepe">
                <td className="text-center">Phone Pe</td>
                <td className="text-center ">
                  <div>
                    <div>Name: {phonePayData.pg_name}</div>
                    <div>Mobile No: {phonePayData.mobile_number}</div>
                  </div>
                </td>
                <td className="text-center">
                  <MdModeEditOutline
                    className="custom-icon"
                    onClick={() => handleOpenPaymentGateway(phonePayData)}
                  />
                </td>
              </tr>
            )}
            {paytmPaymentData && (
              <tr key="paytm">
                <td className="text-center">Paytm</td>
                <td className="text-center ">
                  <div>
                    <div>Name: {paytmPaymentData.pg_name}</div>
                    <div>Mobile No: {paytmPaymentData.mobile_number}</div>
                  </div>
                </td>
                <td className="text-center">
                  <MdModeEditOutline
                    className="custom-icon"
                    onClick={() => handleOpenPaymentGateway(paytmPaymentData)}
                  />
                </td>
              </tr>
            )}
            {gPayPaymentData && (
              <tr key="gpay">
                <td className="text-center">G Pay</td>
                <td className="text-center ">
                  <div>
                    <div>Name: {gPayPaymentData.pg_name}</div>
                    <div>Mobile No: {gPayPaymentData.mobile_number}</div>
                  </div>
                </td>
                <td className="text-center">
                  <MdModeEditOutline
                    className="custom-icon"
                    onClick={() => handleOpenPaymentGateway(gPayPaymentData)}
                  />
                </td>
              </tr>
            )}
            {qrCodePaymentInfo && (
              <tr key="qrcode">
                <td className="text-center">QR Code</td>
                <td className="text-center ">
                  <div>
                    <div>Name: {qrCodePaymentInfo.pg_upi}</div>
                    <img
                      className="qr-code-img"
                      src={qrCodePaymentInfo.url}
                      alt="QR_Code"
                    />
                  </div>
                </td>
                <td className="text-center">
                  <MdModeEditOutline
                    className="custom-icon"
                    onClick={() => handleOpenPaymentGateway(qrCodePaymentInfo)}
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <AddPaymentModePopup
        state={paymentGatewayPopup}
        setState={setPaymentGatewayPopup}
        selectedGateway={selectedGateway}
        apiResponse={(e) => setStatus(e)}
      />
    </div>
  );
}

export default PaymentGatewayList;
