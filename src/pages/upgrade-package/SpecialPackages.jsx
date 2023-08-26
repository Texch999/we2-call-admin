import React from "react";

function SpecialPackages() {
  return (
    <div>
      <div className="w-25 d-flex align-items-center justify-content-between form-check form-switch">
        <div>Monthly</div>
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <div>Yearly</div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="standard-package-div">
            <div className="row p-3">
              <div className="col-8 d-flex flex-column">
                <div className="d-flex">
                  <div className="d-flex flex-column align-items-center justify-content-center rounded-circle amount-border p-1">
                    <div className="fw-semibold">Rs</div>
                    <h5 className="fw-bold">5000</h5>
                  </div>
                  <h5 className="fw-bold d-flex align-items-end p-2 px-4">
                    Standard
                    <br />
                    Package
                  </h5>
                </div>
                <div className="row">
                  <div className="col">Join call with 10 users</div>
                  <div className="col">Monthly 10 meetings</div>
                </div>
              </div>
              <div className="col-4"></div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="standard-package-div"></div>
        </div>
      </div>
    </div>
  );
}

export default SpecialPackages;
