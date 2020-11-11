import React from "react";
import { connect } from "react-redux";

// Action Imports
import { renderSignup } from "../../actions";

const Hero = ({ renderSignup }) => {
  return (
    <div className="content-wrapper">
      <div className="content">
        <h2 className="heading">Apply and hear back every time</h2>
        <p className="content-detail">
          Exploring internships or jobs? Say good-bye to the typical job portals
          and use the power of Artificial Intelligence to become successful,
          faster.
        </p>
        <button className="content-cta" onClick={renderSignup}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default connect(null, { renderSignup })(Hero);
