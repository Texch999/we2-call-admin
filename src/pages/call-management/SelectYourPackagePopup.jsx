import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";

function SelectYourPackagePopup(props) {
  const {
    error,
    selectYourPackagePopup,
    setSelectYourPackagePopup,
    adminSubscription,
    handleSubmitButton = () => {},
  } = props;

  const handleCancel = () => {
    setSelectYourPackagePopup(false);
  };
  const handleSubmitButtonTwo = () => {
    console.log("UPDATE");
    handleSubmitButton();
    setSelectYourPackagePopup(false);
  };

  return (
    <Modal
      className="select-your-package z-index"
      centered
      show={selectYourPackagePopup}
    >
      <Modal.Header className="d-flex justify-content-end">
        <IoCloseSharp onClick={() => handleCancel()} />
      </Modal.Header>
      <Modal.Body>
        <div className="px-3">
          <center>
            <h5 className="meetings-heading">Select Your Package</h5>
          </center>
          <div className="p-3">
            <div className="row select-package-heading p-1 d-flex align-items-center justify-content-center">
              <div className="col d-flex align-items-center justify-content-center">
                Name
              </div>
              <div className="col d-flex align-items-center justify-content-center">
                Rem.Hours
              </div>
              <div className="col d-flex align-items-center justify-content-center">
                User Limit
              </div>
              <div className="col d-flex align-items-center justify-content-center">
                Select
              </div>
            </div>
            {adminSubscription?.length > 0 &&
              adminSubscription?.map((item, index) => (
                <div
                  key={index}
                  className="row select-package-body p-1 d-flex align-items-center justify-content-center"
                >
                  <div className="col d-flex align-items-center justify-content-center">
                    {item?.package_name}
                  </div>
                  <div className="col d-flex align-items-center justify-content-center">
                    {item?.package_limits?.uiDuration ||
                      item?.package_limits?.duration}{" "}
                    H
                  </div>
                  <div className="col d-flex align-items-center justify-content-center">
                    {item?.package_limits?.members}
                  </div>
                  <div className="col d-flex align-items-center justify-content-center">
                    <input
                      type="checkbox"
                      onChange={() => props.handlePackageSelection(item)}
                    />
                  </div>
                </div>
              ))}
          </div>
          {error && (
            <div className="red-color text-center medium-font">{error}</div>
          )}
          <button
            className="w-100 login-button mt-3 medium-font py-2"
            onClick={() => handleSubmitButtonTwo()}
          >
            Submit
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default SelectYourPackagePopup;
