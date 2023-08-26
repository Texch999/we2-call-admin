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
    </div>
  );
}

export default SpecialPackages;
