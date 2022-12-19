import React from "react";
import { NavLink } from "react-router-dom";
const Authnav = () => {
  return (
    <>
      <ul className="nav" style={{ display: "flex" }}>
        <li className="nav-item">
          <NavLink to="/Editor">
            <a className="nav-link active">Create Post</a>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Resetpassword">
            <a className="nav-link active">Reset Password</a>
          </NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link active">New Update</a>
        </li>
      </ul>
    </>
  );
};

export default Authnav;
