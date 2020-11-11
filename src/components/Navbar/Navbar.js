import React from "react";
import { connect } from "react-redux";

// Image Imports
import myWaysLogo from "../../images/myways-logo.png";

// Component Imports
import NavLinks from "./NavLinks";
import NavbarMobile from "./NavbarMobile";

// Action Imports
import { renderNavbar } from "../../actions";

const Navbar = ({ renderNavbar }) => {
  return (
    <>
      <NavbarMobile />
      <div className="navbar-wrapper">
        <nav className="navbar">
          <div className="hamburger" onClick={() => renderNavbar()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="brand">
            <img src={myWaysLogo} alt="brand" />
          </div>
          <NavLinks />
        </nav>
      </div>
    </>
  );
};

export default connect(null, { renderNavbar })(Navbar);
