import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { CREATE_REFFERAL } from "../../config/endpoints";
import { call } from "../../config/axios";

function CreateReferral(props) {
  const { showCreateRefer, setShowCreateRefer, setRefStatus } = props;

  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  let account_role = localStorage?.getItem("account_role");
  const [refferalName, setRefferalName] = useState("");
  const [phn, setPhn] = useState("");
  const [location, setLocation] = useState("");
  const [err, setErr] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleAddRefferal = async () => {
    if (refferalName === "" || !refferalName) {
      return setErr("Please enter ref name");
    }
    setErr("");
    setIsProcessing(true);
    await call(CREATE_REFFERAL, {
      register_id,
      referral_name: refferalName,
      phone_no: phn,
      location: location,
    })
      .then((res) => {
        // console.log(res.data);
        setIsProcessing(false);
        if (res.data.status === 200) {
          setErr("");
          setIsProcessing(false);
          setRefStatus((prev) => !prev);
          setShowCreateRefer(false);
          setLocation("");
          setPhn("");
          setRefferalName("");
        } else {
          setErr(
            res?.data?.message ? res?.data?.message : `something wen't wrong`
          );
        }
      })
      .catch((err) => {
        setIsProcessing(false);
        setErr(err?.message ? err?.message : `something wen't wrong`);
      });
  };

  const mx = 10;

  return (
    <Modal className="match-declaration-modal" centered show={showCreateRefer}>
      <Modal.Header className="d-flex justify-content-end">
        <IoCloseSharp onClick={() => setShowCreateRefer(false)} />
      </Modal.Header>
      <Modal.Body>
        <div className="p-3 ">
          <center>
            <h5 className="meetings-heading">Create New Refer</h5>
            <span className="font-11">Enter Referal Details</span>
          </center>
          <div className="d-flex align-items-center login-input p-1 mt-2">
            <input placeholder="Name" />
          </div>
          <div className="d-flex align-items-center login-input p-1 mt-2">
            <input placeholder="Phone" type="number" />
          </div>
          <div className="d-flex align-items-center login-input p-1 mt-2">
            <input placeholder="Location" />
          </div>
          <button
            className="login-button p-1 mt-3 medium-font"
            disabled={isProcessing}
            onClick={() => handleAddRefferal()}
          >
            {isProcessing ? "Proccessing..." : "Add"}
          </button>
          {err && <text className="clr-red">{err}</text>}
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CreateReferral;
