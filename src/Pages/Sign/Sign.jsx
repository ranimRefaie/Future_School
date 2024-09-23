import "./Sign.css";
import logo from "../../assets/Rectangle 3.svg";

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

          <a href="">Sign In</a>
        </form>
      </div>
    </div>
  );
};

export default Sign;
