import { SHOW_LOGIN, HIDE_LOGIN } from "../actions/types";

const renderLogin = (state = false, action) => {
  switch (action.type) {
    case SHOW_LOGIN:
      return true;
    case HIDE_LOGIN:
      return false;
    default:
      return state;
  }
};

export default renderLogin;
