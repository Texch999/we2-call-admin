import { FaCheck, FaChevronDown, FaRegUser } from "react-icons/fa6";
import { BiSolidCloudUpload } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { AiTwotoneSave } from "react-icons/ai";
import Table from "../home-page/Table";
import { useEffect, useState } from "react";

function AddedUserList(props) {
  const {
    handleFillDetails,
    handleAddedUserList,
    packageCount,
    packMembers,
    individualPackageMembersCount,
    eachPackageTotalamount,
    tour,
  } = props;
  // const [packageCount, setPackageCount] = useState({});
  // const [packMembers, setPackMembers] = useState({});
  // const [individualPackageMembersCount, setIndividualPackageMembersCount] = useState({})
  // const [eachPackageTotalamount, setEachPackageTotalamount] = useState({})
  // console.log(usersDetails,'....usersdetails')
  const [normalTour, setNormalTour] = useState(false);
  useEffect(() => {
    if (tour[0]?.tour_name !== "4.Casino Tour") {
      setNormalTour(true);
    }
  }, []);
  
  const addedUsersColumns = [
    { header: "Sno", field: "s_no" },
    { header: "SelectedPackages", field: "selectedpackages" },
    { header: "PackageCount", field: "packagecount" },
    { header: "Strength", field: "strength" },
    normalTour
      ? { header: "Amount", field: "minamount" }
      :
       { header: "Min Amount", field: "minamount" },
      { header: "Max Amount", field: "maxamount" }
  ];

  const addedUsersData = [
    {
      s_no: "1",
      selectedpackages: "Regular Pack",
      packagecount: packageCount.regularpack,
      strength: individualPackageMembersCount.regularpackmemberscount,
      ...(normalTour
        ? { minamount: eachPackageTotalamount.regularpack.min }
        : { minamount: eachPackageTotalamount.regularpack.min,
            maxamount: eachPackageTotalamount.regularpack.max })
    },
    {
      s_no: "2",
      selectedpackages: "Premium Pack",
      packagecount: packageCount.premiumpack,
      strength: individualPackageMembersCount.premiumpackmemberscount,
      ...(normalTour
        ? { minamount: eachPackageTotalamount.premiumpack.min }
        : { minamount: eachPackageTotalamount.premiumpack.min, 
            maxamount: eachPackageTotalamount.premiumpack.max }
      ),
    },
    {
      s_no: "3",
      selectedpackages: "Luxury Pack",
      packagecount: packageCount.luxurypack,
      strength: individualPackageMembersCount.luxurypackmemberscount,
      ...(normalTour
        ? { minamount: eachPackageTotalamount.luxurypack.min }
        : { minamount: eachPackageTotalamount.luxurypack.min, 
            maxamount: eachPackageTotalamount.luxurypack.max }
      ),
    },
    {
      s_no: "4",
      selectedpackages: "Vip Pack",
      packagecount: packageCount.vippack,
      strength: individualPackageMembersCount.vippackmemberscount,
      ...(normalTour
        ? { minamount: eachPackageTotalamount.vippack.min }
        : { minamount: eachPackageTotalamount.vippack.min, 
            maxamount: eachPackageTotalamount.vippack.max }
      ),
    },
    {
      s_no: "5",
      selectedpackages: "Vvip Pack",
      packagecount: packageCount.vvippack,
      strength: individualPackageMembersCount.vvippackmemberscount,
      ...(normalTour
        ? { minamount: eachPackageTotalamount.vvippack.min }
        : { minamount: eachPackageTotalamount.vvippack.min, 
            maxamount: eachPackageTotalamount.vvippack.max }
      ),
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
              <div className="yellow-clr">
                {eachPackageTotalamount.regularpacktotalamount +
                  eachPackageTotalamount.premiumpacktotalamount +
                  eachPackageTotalamount.luxurypacktotalamount +
                  eachPackageTotalamount.vippacktotalamount +
                  eachPackageTotalamount.vvippacktotalamount}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-between">
        <div className="login-btn mt-2 w-45" onClick={handleFillDetails}>
          + Buy More
        </div>
        <div
          className="login-btn mt-2 w-45"
          onClick={() => handleAddedUserList()}
        >
          Proceed Pay
        </div>
      </div>
    </div>
  );
}

export default AddedUserList;
