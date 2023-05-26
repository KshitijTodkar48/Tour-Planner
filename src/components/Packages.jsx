import React from "react";
import "./package.css";
import image1 from "../Images/trawell-logo.jpg" ;
import image2 from "../Images/yatra.jpg" ;
import image3 from "../Images/MakemyTrip.jpg" ;

const Packages = () => {
  return (
    <section className="menu">
      <div className="container">
        <h2 className="text-center">Tour Packages</h2>

        <div className="menu-box">
          <div className="menu-img">
            <img
              src={image3}
              alt=""
              className="img-responsive img-curve"
              width="150"
              height="170"
            />
          </div>

          <div className="menu-desc">
            <h4>Make my trip</h4>
            <p className="package-price">Price: 16000-20000</p>
            <p className="detail">
              Holistay at Four Points-Sheraton Hotel & Service Apartments
            </p>
            <br />

            <a href="https://www.makemytrip.com/holidays-india/pune-travel-packages.html">
              Visit Site
            </a>
          </div>
        </div>

        <div className="menu-box">
          <div className="menu-img">
            <img
              src={image1}
              alt=""
              width="120"
              height="180"
            />
          </div>

          <div className="menu-desc">
            <h4>Trawell.in</h4>
            <p className="food-price">Price: 16000-25000</p>
            <p className="detail">Pune vacation packages at best price online</p>
            <br />

            <a href="https://www.trawell.in/tour-packages/pune" className="btn btn-primary">
              Visit Site
            </a>
          </div>
        </div>

        <div className="menu-box">
          <div className="menu-img">
            <img src={image2} alt="" width="150" height="160" />
          </div>

          <div className="menu-desc">
            <h4>Yatra.com</h4>
            <p className="price">Price: 20000-30000</p>
            <p className="detail">Pune vacation packages at best price online</p>
            <br />

            <a href="https://www.yatra.com/india-tour-packages/holidays-in-pune" className="btn btn-primary">
              Visit site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
