import { NavLink } from "react-router-dom";
import React from "react";
import { createPopper } from "@popperjs/core";

function NavBar() {
  const navStyling = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        BadBank
      </NavLink>
      <div className="navbar-collapse">
        <ul className="navbar-nav">
          <li
            className="nav-item"
            data-toggle="tooltip"
            data-placement="top"
            title="Go Home"
          >
            <NavLink to="/" style={navStyling} className="nav-link">
              Home
            </NavLink>
          </li>

          <li
            className="nav-item"
            data-toggle="tooltip"
            data-placement="top"
            title="Create a new account"
          >
            <NavLink
              to="/createaccount/"
              style={navStyling}
              className="nav-link"
            >
              Create Account
            </NavLink>
          </li>

          <li
            className="nav-item"
            data-toggle="tooltip"
            data-placement="top"
            title="Make a deposit"
          >
            <NavLink to="/deposit/" style={navStyling} className="nav-link">
              Deposit
            </NavLink>
          </li>

          <li
            className="nav-item"
            data-toggle="tooltip"
            data-placement="top"
            title="Make a withdrawal"
          >
            <NavLink to="/withdraw/" className="nav-link" style={navStyling}>
              Withdraw
            </NavLink>
          </li>

          <li
            className="nav-item"
            data-toggle="tooltip"
            data-placement="top"
            title="See all user data"
          >
            <NavLink to="/alldata/" style={navStyling} className="nav-link">
              All Data
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
