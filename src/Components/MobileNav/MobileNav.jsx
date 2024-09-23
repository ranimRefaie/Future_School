import "./MobileNav.css";
import logo from "../../assets/logo.svg";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-coontainer">
          <img src={logo} alt="" />
          <ul className="nav-items flex">
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

          <a href="" className="btn-1">
            SIGN IN
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
