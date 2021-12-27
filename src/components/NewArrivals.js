import React from "react";
import "../App.css";
import newarrivals from "../images/new_arrival.png";
const NewArrivals = () => {
  return (
    <div className=" new-arrivals">
      <div className="arrival-img">
        <img src={newarrivals} />
      </div>
      <div className="arrival-text">
        <h2 className="arrivals-h2">50% OFF</h2>
        <h2 className="arrival-heading">NEW ARRIVALS</h2>
        <button className="arrival-btn">shop Now</button>
      </div>
    </div>
  );
};

export default NewArrivals;
