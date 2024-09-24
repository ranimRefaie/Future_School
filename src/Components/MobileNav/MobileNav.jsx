import "./MobileNav.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const MobileNav = ({ isOpen, toggleMenu }) => {
  const links = [
    { id: 1, name: "Home", to: "" },
    { id: 2, name: "About Us", to: "" },
    { id: 3, name: "Timetable", to: "" },
    { id: 4, name: "Contact Us", to: "" },
    { id: 5, name: "", to: "" },
  ];
  return (
    <div>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-coontainer">
          <img src={logo} alt="" />
          <ul className="nav-items flex">
            {links.map((item) => (
              <li key={item.id}>
                <Link to={item.to}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <Link to="/signIn" className="btn-1">
            SING IN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
