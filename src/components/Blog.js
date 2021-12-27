import React from "react";
import blog1 from "../images/blog_1.svg";

const Blog = () => {
  return (
    <>
      <div className="main-div">
        <div className="blog-top-section">
          <h5 className="blog-h5">BLOGS</h5>
          <button className="blog-view-button">View All</button>
        </div>
        <div className="Blog">
          <div className="blog-card">
            <img src={blog1} />
            <p>July 18,2020</p>
            <h2 className=" blog-heading">LOREM IPSUM SIMPLY</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <button className="blog-button">Read More</button>
          </div>
          <div className="blog-card">
            <img src={blog1} />
            <p>July 18,2020</p>
            <h2 className=" blog-heading">LOREM IPSUM SIMPLY</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <button className="blog-button">Read More</button>
          </div>
          <div className="blog-card">
            <img src={blog1} />
            <p>July 18,2020</p>
            <h2 className=" blog-heading">LOREM IPSUM SIMPLY</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <button className="blog-button">Read More</button>
          </div>
        </div>
        <div className="lower-section">
          <div className="input-field">
            <h2>SIGN UP FOR OUR NEWSLETTERS</h2>
            <text>Be the first to know about new project </text>
          </div>
          <div>
            <input
              className="input"
              type="text"
              placeholder="ENTER YOUR EMAIL"
            />
            <button className="singup-button">SING UP</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
