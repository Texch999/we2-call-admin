import React, { useEffect, useState } from "react";
import "./styles.css";
import { PRIVACY_POLICY } from "../../config/endpoints";
import { call } from "../../config/axios";
function PrivacyPolicy() {
  const [privacyPolicyData, setPrivacyPolicyData] = useState("");
  const getPrivacyPolicy = async () => {
    await call(PRIVACY_POLICY, { register_id: "company" })
      .then((res) => {
        setPrivacyPolicyData(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPrivacyPolicy();
  }, []);

  return (
    <div className="p-3">
      <div className="d-flex justify-content-center flex-column content-container w-100">
        <div className="d-flex justify-content-center pimage-container w-100">
          <img
            src={process.env.PUBLIC_URL + "./assets/banner_bg.png"}
            className="w-75"
          ></img>
        </div>
        <div className="p-3">
          <h6 className="meetings-heading mb-3">
            Privacy Policy and Terms & Condition
          </h6>
          {privacyPolicyData &&
            privacyPolicyData?.map((policy) => (
              <p className="small-font">{policy?.policy_description}</p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
