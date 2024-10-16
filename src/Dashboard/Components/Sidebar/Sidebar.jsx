import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../../assets/logo.svg";
import { CiLogin } from "react-icons/ci";
export const Sidebar = () => {
  const Item_Sidebar = [
    {
      id: 1,
      path: "/students",
      name: "Students",
      icon: "",
    },
    {
      id: 2,
      path: "/absence",
      name: "Absence",
    },
    {
      id: 3,
      path: "/quizzes",
      name: "Quizzes",
    },
    {
      id: 4,
      path: "/tests",
      name: "Tests",
    },
    {
      id: 5,
      path: "/behavioral",
      name: "Behavioral Notes",
    },
    {
      id: 6,
      path: "/latest-news",
      name: "Latest news",
    },
    {
      id: 7,
      path: "/signIn",
      name: "Logout",
      icon: <CiLogin />,
    },
  ];
  return (
    <div className="countiner-sidebar">
      <nav>
        <div className="logo">
          <img src={logo} className="" alt="" />
        </div>

        <ul>
          {Item_Sidebar.map((link) => (
            <NavLink key={link.id} to={link.path} className="">
              <span>{link.icon}</span>
              <span className="">{link.name}</span>
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};
