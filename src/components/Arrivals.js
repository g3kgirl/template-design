import React from "react";
import arrival1 from "../images/arrival_1.svg";
import arrival2 from "../images/arrival_2.svg";
import arrival3 from "../images/arrival_3.svg";
import arrival4 from "../images/arrival_4.svg";
import brand1 from "../images/brand_1.svg";
import brand2 from "../images/brand_2.svg";
import brand3 from "../images/brand_3.svg";
import brand4 from "../images/brand_4.svg";

const Arrivals = () => {
  return (
    <div className="arivals">
      <h5 className="arrivals-heading">NEW ARRIVALS</h5>
      <div className=" arrivals-container">
        <img src={arrival1} />
        <img src={arrival2} />
        <img src={arrival3} />
        <img src={arrival4} />
      </div>

      <h5 className="arrivals-heading">SHOP BY BRAND</h5>

      <div className=" arrivals-container">
        <img src={brand1} />
        <img src={brand2} />
        <img src={brand3} />
        <img src={brand4} />
      </div>
    </div>
  );
};

export default Arrivals;
