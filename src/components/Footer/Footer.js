import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="icon">
          <img
            style={{ color: "whitesmoke" }}
            src="https://cdn-icons-png.flaticon.com/128/860/860158.png"
            alt="Icon"
          />
        </div>
        <div>Terms and Privacy Notice</div>
        <div>Send Us Feedback</div>
        <div>Help</div>
        <div>&#169; 1996-2023,MovieOMDB Inc. or its Affliates</div>
      </div>
    </>
  );
};

export default Footer;
