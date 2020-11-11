import { SHOW_LOGIN, HIDE_LOGIN, RENDER_SIGNUP } from "./types";

export const showLogin = () => (dispatch) => {
  dispatch({
    type: SHOW_LOGIN,
  });
};

export const hideLogin = () => (dispatch) => {
  dispatch({
    type: HIDE_LOGIN,
  });
};

export const renderSignup = () => (dispatch) => {
  dispatch({
    type: RENDER_SIGNUP,
  });
};
