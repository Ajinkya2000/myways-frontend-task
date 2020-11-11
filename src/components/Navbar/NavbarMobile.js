import React from "react";
import { connect } from "react-redux";
import { renderNavbar } from "../../actions";

// Image Imports
import downArrow from "../../images/down-arrow.svg";
import thunderSign from "../../images/thunder-sign.png";

const NavbarMobile = ({ showNavbar, renderNavbar }) => {
  const styleToShow = showNavbar ? "show" : "hide";

  return (
    <div className={`navbar-mobile-wrapper ${styleToShow}`}>
      <div className="navbar-mobile">
        <div className="navbar-mobile-inner">
          <li className="for-you-mobile">
            <a href="/">For You</a>
            <img src={downArrow} alt="donw-arrow" />
            <ul className="dropdown-mobile">
              <a href="/">Find matching internships</a>
              <a href="/">Hire right talent</a>
              <a href="/">Work from Home</a>
            </ul>
          </li>
          <li className="instant-apply-mobile">
            <img src={thunderSign} alt="thunder-sign" />
            <a href="/">Instant Apply</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
        </div>
        <div className="cross navbar-cross" onClick={() => renderNavbar()}>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ showNavbar }) => {
  return {
    showNavbar,
  };
};

export default connect(mapStateToProps, { renderNavbar })(NavbarMobile);
