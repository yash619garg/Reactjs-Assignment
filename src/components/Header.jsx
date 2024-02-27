import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { GoInfo } from "react-icons/go";

const Header = () => {
  return (
    <div className="header">
      <div className="header-heading">best website builders in the US</div>
      <div className="header-details">
        <div className="header-details-text">
          <div>
            <span>
              <CiCircleCheck />
            </span>
            <span>last update : february 21,2020</span>
          </div>
          <div>
            <span>
              <GoInfo />
            </span>
            <span>advertising disclosure</span>
          </div>
        </div>
        {/* <select name="" className="header-details-select">
          <option value="">Top Relevant</option>
          <option value="">option-2</option>
          <option value="">option-3</option>
        </select> */}
      </div>
    </div>
  );
};

export default Header;
