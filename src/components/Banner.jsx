/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img px-5" >
             <img src="/Image.jpg" alt="" height={400} ></img> 
          </div>
          <div className="banner-content">
            <h6 className="text-white">Hello, I'm Umaima Mehmood</h6>
            <h3>DevOps Engineer</h3>
            <p>The DevOps Way...
            <br />CODE, DEPLOY, THRIVE
            <br />DevOps is a collaborative approach that unifies development and operations, emphasizing automation and continous improvement.By breaking down traditional silos, DevOps accelerates software delivery, enhances efficiency,and fosters a culture of innovation.The key principles include automation,continous integration, delivery, and monitoring, enabling organizations to adapt and thrive in the fast-paced digital landscape.
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
