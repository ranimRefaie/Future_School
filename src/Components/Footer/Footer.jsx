import logo from "../../assets/logo.svg";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="con-footer container flex between">
        <div className="logo">
          <img src={logo} alt="" />
          <div class="social-media flex item-center">
            <a href="">
              {" "}
              <FaFacebook className="icon" />
            </a>
            <a href="">
              <FaWhatsapp className="icon" />
            </a>
            <a href="">
              {" "}
              <FaTelegram className="icon" />
            </a>
          </div>
        </div>

        <div className="links">
          <h3>Quick Linkes</h3>
          <ul className="nav-items">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Calendar</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="links">
          <h3>Help lorem</h3>
          <ul className="nav-items">
            <li>
              <a href="">Register</a>
            </li>
            <li>
              <a href="">Sign In</a>
            </li>
            <li>
              <a href="">Job Application</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="links">
          <h3>Get In Touch</h3>

          <div className="nav-items">
            <p>Syria - Damascus</p>
            <p>info@mydomain.com</p>
            <p>123-456-789</p>
          </div>
        </div>
      </div>
    </div>
  );
};
