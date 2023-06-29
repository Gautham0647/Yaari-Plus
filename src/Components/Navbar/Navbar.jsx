//import logo from "../Collection/logo-color.png";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div >
          <NavLink to="/" className="Navlink">
        <h1  className="logo-name">
          Yaari +
        </h1>
          </NavLink>
      </div>
    </div>
  );
};
