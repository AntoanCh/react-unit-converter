import React from "react";
import { Link, NavLink } from "react-router-dom";
import AutorenewIcon from "@material-ui/icons/Autorenew";

// const linkStyles = ({ isActive }) => {
//   return {
//     textDecoration: "none",
//     margin: "0px 20px",
//     color: "black",
//   };
// };
const linkStyles = {
  textDecoration: "none",
  margin: "0px 20px",
  color: "#ccc",
};
const NavBar = () => {
  return (
    <div>
      <nav
        style={{
          background: "#333",
          padding: "15px",
          textAlign: "center",
        }}
      >
        <NavLink style={linkStyles} to="/weight">
          Weight
        </NavLink>
        <Link style={linkStyles} to="/length">
          Length
        </Link>
        <Link style={linkStyles} to="/temperature">
          Temperature
        </Link>
        <Link style={linkStyles} to="/area">
          Area
        </Link>
        <Link style={linkStyles} to="/volume">
          Volume
        </Link>
        <Link style={linkStyles} to="/speed">
          Speed
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
