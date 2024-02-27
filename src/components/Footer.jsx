import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-catagories">
        <div className="footer-head">CATAGORIES</div>
        <a href="#">Robotic-Automation</a>
        <a href="#">data center</a>
        <a href="#">hosting</a>
        <a href="#">web builder</a>
      </div>
      <div className="footer-contact">
        <div className="footer-head">CONTACT</div>
        <a href="#">contact</a>
        <a href="#">Privacy policy</a>
        <a href="#">terms of service</a>
        <a href="#">catagories</a>
        <a href="#">About</a>
      </div>
      <div className="footer-country">
        <select name="country" id="country">
          <option value="United state">United state</option>
          <option value="india">india</option>
          <option value="United kingdom">United kingdom </option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
