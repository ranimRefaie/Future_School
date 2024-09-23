import { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.svg";
import MobileNav from "../MobileNav/MobileNav";
import { IoClose } from "react-icons/io5";
import { FiAlignJustify } from "react-icons/fi";

const NavBar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav-bar ${isFixed ? "fixed" : ""}`}>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="desktop-nav container flex between">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
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

        <a href="/Future-School/signIn" className="btn-1">
          SIGN IN
        </a>

        <button className="menu-btn" onClick={toggleMenu}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "1.8rem" }}
          >
            <FiAlignJustify />
          </span>
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
