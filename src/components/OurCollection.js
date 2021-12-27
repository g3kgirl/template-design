import React from "react";
import OurCollection1 from "../images/collection_1.svg";
import OurCollection2 from "../images/collection_2.svg";
import dbcollection1 from "../images/dbl_collection_1.svg";
import dbcollection2 from "../images/dbl_collection_2.svg";
import dbcollection3 from "../images/dbl_collection_3.svg";
import dbcollection4 from "../images/dbl_collection_4.svg";
const OurCollection = () => {
  return (
    <>
      <div>
        <p style={{ alignItems: "center", fontSize: "30px", margin: "40px" }}>
          OUR COLLECTION
        </p>
        <div className="our-collection">
          <div className="dbcollection">
            <div>
              <img src={OurCollection1} />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "30px",
              }}
            >
              <img src={dbcollection1} />
              <img src={dbcollection2} />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "30px",
              }}
            >
              <img src={dbcollection3} />
              <img src={dbcollection4} />
            </div>

            <div>
              <img src={OurCollection2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCollection;
