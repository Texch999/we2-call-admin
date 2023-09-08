import { IoMdCloseCircleOutline } from "react-icons/io";
import { Images } from "../../images";

function PackageAvailablePopup(props) {
  const { handlePackageAvailable } = props;
  return (
    <div className="package-popover p-2 w-25">
      <h5
        className="d-flex justify-content-end mb-0 package-close"
        onClick={handlePackageAvailable}
      >
        <IoMdCloseCircleOutline />
      </h5>
      <div className="d-flex align-items-center justify-content-between">
        <span className="rounded-pill p-1 monthly-btn small-font">Monthly</span>
        <span className="rounded-pill p-1 monthly-btn small-font">Yearly</span>
      </div>
      <div className="d-flex align-items-center justify-content-around">
        <span>2</span>
        <span>
          <img src={Images.GoldSmallImg} alt="Gold" />
        </span>
        <span>2</span>
      </div>
    </div>
  );
}

export default PackageAvailablePopup;
