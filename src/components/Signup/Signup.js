import React, { useState } from "react";
import { connect } from "react-redux";

// Action Imports
import { renderSignup, renderThanksScreen } from "../../actions";

// Image Imports
import checkCircle from "../../images/check-circle.svg";

const Signup = ({ showSignup, renderSignup, renderThanksScreen }) => {
  const [screen, setScreen] = useState(1);
  const [email, setEmail] = useState("");

  const styleToShow = showSignup ? "show" : "hide";

  const handleSubmit = (e) => {
    e.preventDefault();
    setScreen(2);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setScreen(3);
  };

  const resetScreen = () => {
    setScreen(1);
  };

  return (
    <div className={`signup-overlay-wrapper ${styleToShow}`}>
      <div className="signup-form-wrapper">
        {screen === 1 && (
          <>
            <div className="signup-form">
              <div className="signup-heading">
                <h2>Sign Up</h2>
                <p>It's quick and easy.</p>
              </div>
              <form className="signup" onSubmit={handleSubmit}>
                <div className="name-field">
                  <input required type="text" placeholder="First Name" />
                  <input required type="text" placeholder="Last Name" />
                </div>
                <input
                  required
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input required type="password" placeholder="Password" />
                <button className="signup-submit" type="submit">
                  Sign Up
                </button>
              </form>
            </div>
            <div
              className="cross signup-cross"
              onClick={() => {
                resetScreen();
                renderSignup();
              }}
            >
              <span></span>
              <span></span>
            </div>
          </>
        )}
        {screen === 2 && (
          <>
            <div className="otp-wrapper">
              <h3>OTP sent!</h3>
              <form className="otp-form" onSubmit={handleOtpSubmit}>
                <input type="number" required placeholder="Enter your OTP" />
                <p>One time Passcode sent to your email ID- {email}</p>
                <button className="otp-submit" type="submit">
                  Enter
                </button>
              </form>
            </div>
            <div
              className="cross signup-cross"
              onClick={() => {
                resetScreen();
                renderSignup();
              }}
            >
              <span></span>
              <span></span>
            </div>
          </>
        )}
        {screen === 3 && (
          <>
            {renderThanksScreen()}
            <div className="thanks-wrapper">
              <img src={checkCircle} alt="circle-check" />
              <h3>Thanks. Successful!</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ showSignup }) => {
  return {
    showSignup,
  };
};

export default connect(mapStateToProps, { renderSignup, renderThanksScreen })(
  Signup
);
