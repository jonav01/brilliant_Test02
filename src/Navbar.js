import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar__logo">
        <img
          src="https://lever-client-logos.s3-us-west-2.amazonaws.com/b3943d3b-d47e-4ac8-873d-0b6502f03bf2-1587418670025.png"
          alt="logo"
        />
      </div>
      <div className="navbar__heading">
        <ul className="navbar__headingList">
          <li>Today</li>
          <li>Courses</li>
          <li>Practice</li>
        </ul>
      </div>
      <div className="navbar__buttons">
        <button className="login_Button">Login </button>
        <button className="signUp_Button">SignUp </button>
      </div>
    </div>
  );
}

export default Navbar;
