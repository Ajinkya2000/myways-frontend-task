import React from "react";
import { connect } from "react-redux";

// Action Imports
import { hideLogin } from "../../actions";

const Login = ({ renderLogin, hideLogin }) => {
  const renderClass = renderLogin ? "show" : "hide";

  return (
    <div className={`login-wrapper ${renderClass}`}>
      <div className="login-left" onClick={() => hideLogin()}></div>
      <div className="login-inner">
        <div className="login">
          <div className="login-heading">
            <h3>Login</h3>
            <div className="cross" onClick={() => hideLogin()}>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="login-form-wrapper">
            <div className="login-form">
              <div className="form-heading">
                <h3>Student</h3>
              </div>
              <form>
                <input type="email" required placeholder="Email" />
                <input type="password" required placeholder="Password" />
                <a className="forgot-pwd" href="/">
                  Forgot Password?
                </a>
                <button className="login-submit" type="submit">
                  Login
                </button>
              </form>
              <p className="to-signup">
                New to MyWays? Sign Up <a href="/">here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ renderLogin }) => {
  return {
    renderLogin,
  };
};

export default connect(mapStateToProps, { hideLogin })(Login);
