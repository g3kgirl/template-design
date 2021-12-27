import React from "react";
import product1 from "../images/trend_product_1.svg";
import product2 from "../images/trend_product_2.svg";
import product3 from "../images/trend_product_3.svg";
import product4 from "../images/trend_product_4.svg";
import hearticn from "../images/heart_icn.svg";
const TrandingProduct = () => {
  return (
    <div className="t-products">
      <div className="top-section">
        <h3 className="trend-h3">TRENDING PRODUCTS</h3>
        <button className="view-button-2">VIEW ALL</button>
      </div>

      <div className="products">
        <div>
          <img src={product1} />

          <img className="heart-icn" src={hearticn} />

          <h2 className="trend-h2">T-SHIRTS</h2>
          <p>Lorem Ipsum has been the industry's</p>
          <button className="view-button">VIEW ALL</button>
        </div>
        <div>
          <img src={product2} />
          <img className="heart-icn" src={hearticn} />
          <h2 className="trend-h2">SHIRTS</h2>
          <p>Lorem Ipsum has been the industry's</p>
          <button className="view-button">VIEW ALL</button>
        </div>
        <div>
          <img src={product3} />
          <img className="heart-icn" src={hearticn} />
          <h2 className="trend-h2">SHOES</h2>
          <p>Lorem Ipsum has been the industry's</p>
          <button className="view-button">VIEW ALL</button>
        </div>

        <div>
          <img src={product4} />
          <img className="heart-icn" src={hearticn} />

          <h2 className="trend-h2">TROUSERS</h2>
          <p>Lorem Ipsum has been the industry's</p>
          <button className="view-button">VIEW ALL</button>
        </div>
      </div>
    </div>
  );
};

export default TrandingProduct;
