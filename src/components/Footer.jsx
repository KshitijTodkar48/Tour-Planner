import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
            <div className="footer-col">
              <div className="footer-content">
              <h4>Team</h4>
              <ul>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kshitij-todkar-95b59b267/">
                    Lead Developer
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/govardhan-yadav-576753229/">
                    UI Developer
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/aditya-tighare-763731262/">
                    Data Processor
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/abhijit-kulkarni-926627250/">
                    Documentation
                  </a>
                </li>
              </ul>
              </div>
            </div>

            <div className="footer-col">
            <div className="footer-content">
              <h4>Contact Us</h4>
              <ul>
                <li>Email : tour_planner48@gmail.com</li>
                <li>Phone no : +91 9561031701</li>
                <li>
                  Address : JSPM Rajarshi Shahu College of Engineering,
                  Tathawade, Service Rd, Ashok Nagar, Tathawade,
                  Pimpri-Chinchwad, Maharashtra 411033.
                </li>
              </ul>
              </div>
            </div>

            <div className="footer-col">
            <div className="footer-content">
              <h4>Follow us</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.twitter.com/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              </div>
            </div>
      </footer>
      <h3
        style={{
          color: "#919191",
          textAlign: "center",
          padding: "40px",
          fontFamily: "sans-serif",
          fontWeight: "lighter",
          backgroundColor: "#03072e"
        }}
      >
        Developed by Kshitij Todkar
      </h3>
      <h5
        style={{
          color: "#989898",
          padding: "20px",
          textAlign: "center",
          fontSize: "14px",
          backgroundColor: "#03072e"
        }}
      >
        © Tour Planner-2023. All rights reserved. The material and content on
        this site may not be reproduced, distributed, transmitted, cached, or
        otherwise used, except with the prior written permission.
      </h5>
    </div>
  );
};

export default Footer;
