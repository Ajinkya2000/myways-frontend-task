import React, { Fragment } from "react";
import { connect } from "react-redux";

// Image Imports
import downArrow from "../../images/down-arrow.svg";
import thunderSign from "../../images/thunder-sign.png";

// Action Imports
import { showLogin, renderSignup } from "../../actions";

// Component Imports
import Dropdown from "./Dropdown";

const NavLinks = ({ showLogin, renderSignup }) => {
  return (
    <Fragment>
      <ul className="nav-links-wrapper">
        <li className="for-you hide-tablet-mobile">
          <a href="/">For You</a>
          <img src={downArrow} alt="donw-arrow" />
          <Dropdown />
        </li>
        <li className="instant-apply hide-tablet-mobile">
          <img src={thunderSign} alt="thunder-sign" />
          <a href="/">Instant Apply</a>
        </li>
        <li className="hide-tablet-mobile">
          <a href="/">Pricing</a>
        </li>
        <li className="hide-tablet-mobile">
          <a href="/">About us</a>
        </li>
        <li>
          <button className="nav-signup" onClick={() => renderSignup()}>
            SIGN UP
          </button>
        </li>
        <li>
          <button className="nav-login" onClick={() => showLogin()}>
            LOGIN
          </button>
        </li>
      </ul>
    </Fragment>
  );
};

export default connect(null, { showLogin, renderSignup })(NavLinks);
