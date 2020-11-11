import { RENDER_SIGNUP } from "../actions/types";

const showSignup = (state = false, action) => {
  switch (action.type) {
    case RENDER_SIGNUP:
      return !state;
    default:
      return state;
  }
};

export default showSignup;
