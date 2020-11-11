import {
  SHOW_LOGIN,
  HIDE_LOGIN,
  RENDER_SIGNUP,
  RENDER_NAVBAR,
  RENDER_THANKS_SCREEN,
} from "./types";

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

export const renderNavbar = () => (dispatch) => {
  dispatch({
    type: RENDER_NAVBAR,
  });
};

export const renderThanksScreen = () => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: RENDER_THANKS_SCREEN,
    });
  }, 2000);
};
