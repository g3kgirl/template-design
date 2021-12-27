import React from "react";
import image from "../images/msg_icn.svg";
import image1 from "../images/phn_icn.svg";
import searchicon from "../images/search_icn.svg";
import bannerimage from "../images/banner_img.png";
import usericon from "../images/user_icn.svg";
import checkouticon from "../images/checkout_icn.svg";

const Home = () => {
  return (
    <>
      <div className="home-main ">
        <div className="contact">
          <img src={image1} />
          <h4>+91 99935433909</h4>
          <img src={image} />
          <h4>sales@.ksolve.com</h4>
        </div>
        <hr />
        <div className="logo">
          <logo>Logo</logo>
          <div style={{ marginRight: "30px" }}>
            <img className="search-icon" src={searchicon} />
            <input className="input-section" type="text" />
            <img style={{ marginLeft: "20px" }} src={usericon} />
            <img style={{ marginLeft: "20px" }} src={checkouticon} />
          </div>
        </div>
        <div className="main-content">
          <div className="content">
            <h2 className="home-h2">50% off</h2>
            <h1 className="summer-text">Summer</h1>
            <h1 className="home-collection-h1">Collections</h1>
            <button className="home-btn">shop Now</button>
          </div>
          <div className="banner-img">
            <img src={bannerimage} />
          </div>
        </div>
        {/* <Crousel /> */}
      </div>
    </>
  );
};

export default Home;
