import { combineReducers } from "redux";

import renderLogin from "./renderLogin";
import showSignup from "./renderSignup";
import showNavbar from "./renderNavbar";

export default combineReducers({
  renderLogin,
  showSignup,
  showNavbar,
});
