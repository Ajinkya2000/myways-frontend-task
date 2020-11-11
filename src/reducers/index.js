import { combineReducers } from "redux";

import renderLogin from "./renderLogin";
import showSignup from "./renderSignup";

export default combineReducers({
  renderLogin,
  showSignup,
});
