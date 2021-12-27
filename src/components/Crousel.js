import React from "react";
import catagories from "../images/catagory_1.svg";
import catagories1 from "../images/catagory_2.svg";
import catagories2 from "../images/catagory_3.svg";
import catagories3 from "../images/catagory_4.svg";
import "../App.css";
const Crousel = () => {
  return (
    <div
      style={{ backgroundColor: "#d1cfc9", padding: " 20px 80px 30px 80px" }}
    >
      <div style={{ backgroundColor: "#fff", padding: "80px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: "50px",
          }}
        >
          <p>catagories</p>
          <button class="view-button">View All</button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              position: "relative",
              color: "white",
              textAlign: "center",
            }}
          >
            <img src={catagories} style={{ width: "250px" }} />
            <div
              style={{
                position: "absolute",
                top: "85%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "black",
                padding: "7px 25px",
              }}
            >
              MENSWEAR
            </div>
          </div>

          <div
            style={{
              position: "relative",
              color: "white",
              textAlign: "center",
            }}
          >
            <img src={catagories1} style={{ width: "250px" }} />
            <div
              style={{
                position: "absolute",
                top: "85%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "black",
                padding: "7px 25px",
              }}
            >
              WOMENSWEAR
            </div>
          </div>

          <div
            style={{
              position: "relative",
              color: "white",
              textAlign: "center",
            }}
          >
            <img src={catagories2} style={{ width: "250px" }} />
            <div
              style={{
                position: "absolute",
                top: "85%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "black",
                padding: "7px 25px",
              }}
            >
              WOMENSWEAR
            </div>
          </div>

          <div
            style={{
              position: "relative",
              color: "white",
              textAlign: "center",
            }}
          >
            <img src={catagories3} style={{ width: "250px" }} />
            <div
              style={{
                position: "absolute",
                top: "85%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "black",
                padding: "7px 25px",
              }}
            >
              MENSWATCHES
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crousel;
