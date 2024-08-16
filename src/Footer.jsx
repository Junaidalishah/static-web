import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./footer.css";

function Footer() {
  let currentyeaar = new Date().getFullYear();
  return (
    <div className="footerr">
      <div className="footer-conatiner">
        <div className="footer">
          <div className="icon">
            <FacebookIcon className="fb" /> <XIcon />
            <InstagramIcon className="insta" />
          </div>
          <div className="copyRight">
            <p>Copyright©{currentyeaar}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
