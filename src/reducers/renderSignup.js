import { RENDER_SIGNUP, RENDER_THANKS_SCREEN } from "../actions/types";

const showSignup = (state = false, action) => {
  switch (action.type) {
    case RENDER_SIGNUP:
      return !state;
    case RENDER_THANKS_SCREEN:
      return false;
    default:
      return state;
  }
};

export default showSignup;
