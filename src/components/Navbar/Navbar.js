import "./Navbar.css";
import logo from "../../logo/ferrari-logo.png";

const { NavLink } = require("react-router-dom");

const Navbar = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <div className="logo--container">
        <img src={logo} alt="ferrari-logo" />
      </div>
    </nav>
  );
};

export default Navbar;
