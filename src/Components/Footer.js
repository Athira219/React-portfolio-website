import React from "react";
import "./Footer.css";
import { FaHome, FaPhone, FaMailBulk,FaLinkedin,FaGithub,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Kattukulam,Palakkad</p>
              <p>Kerala</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}/>
    
              +918921407510
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              athirasomaraj070@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
        <h4>About the developer </h4>
        <p>
          Iam Athia V.S,an ambitious developer I bring more than 1year experience in javascript,React.js </p>
        <div className="social">
        <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
         <FaInstagram
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
        <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />

        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
