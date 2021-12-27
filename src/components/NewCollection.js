import React from "react";
import "../App.css";
import collection from "../images/catagory_collection.svg";
const NewCollection = () => {
  return (
    <>
      <div className="new-collection">
        <div style={{ marginTop: "5%" }}>
          <img src={collection} />
        </div>
        <div className="collection-text">
          <h2 className="collection-h2">New Collections</h2>
          <span className="nwecol-span">
            Lorem Ipsum has been the industry's
          </span>
          <button className="home-btn">Shop Now</button>
        </div>
      </div>
    </>
  );
};

export default NewCollection;
