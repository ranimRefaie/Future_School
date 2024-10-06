import "./Sign.css";
import logo from "../../assets/Rectangle 3.svg";
import { Link } from "react-router-dom";

const Sign = () => {
  return (
    <div className="sign-page">
      <div className="container-form flex">
        <div className="logo-form">
          <img src={logo} alt="" />
        </div>
        <form>
          <h2>Sign In</h2>
          <label>Username</label>
          <input type="text" />

          <label>Password</label>
          <input type="text" />
          <Link to="/dashboard">Sign In</Link>
        </form>
      </div>
    </div>
  );
};

export default Sign;
