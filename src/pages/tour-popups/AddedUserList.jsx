import { FaCheck, FaChevronDown, FaRegUser } from "react-icons/fa6";
import { BiSolidCloudUpload } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { AiTwotoneSave } from "react-icons/ai";
import Table from "../home-page/Table";

function AddedUserList(props) {
  const { handleFillDetails, handleAddedUserList } = props;

  const addedUsersColumns = [
    { header: "Sno", field: "s_no" },
    { header: "Place", field: "place" },
    { header: "Tour", field: "tour" },
    { header: "Strength", field: "strength" },
    { header: "Amount", field: "amount" },
  ];

  const addedUsersData = [
    {
      s_no: "1",
      place: "Goa",
      tour: "Cricket",
      strength: "5",
      amount: "300000",
    },
    {
      s_no: "2",
      place: "Dubai",
      tour: "Casino",
      strength: "10",
      amount: "500000",
    },
  ];

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
        <div className="middle-line-clr"></div>
        <div className="flex-center payment-icon  font-25">
          <MdOutlinePayment />
        </div>
        <div className="middle-line-clr"></div>
        <div className="flex-center payment-icon font-25">
          <FaCheck />
        </div>
      </div>
      <hr className="hr-line mt-2" />
      <div className="flex-center font-16 fw-600 mt-1">Added Users Details</div>
      <div className="p-2">
        <Table data={addedUsersData} columns={addedUsersColumns} />
        <div className="row mt-1">
          <div className="col-12">
            <div className="d-flex justify-content-between font-10 package-amount-text p-2 mt-2">
              <div>Total Amount to Pay</div>
              <div className="yellow-clr">2,00000000</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-between">
        <div className="login-btn mt-2 w-45" onClick={handleFillDetails}>
          + Buy More
        </div>
        <div className="login-btn mt-2 w-45" onClick={handleAddedUserList}>
          Proceed Pay
        </div>
      </div>
    </div>
  );
}

export default AddedUserList;
