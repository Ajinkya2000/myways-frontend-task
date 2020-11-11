import { RENDER_NAVBAR } from "../actions/types";

const showNavbar = (state = false, action) => {
  switch (action.type) {
    case RENDER_NAVBAR:
      return !state;
    default:
      return state;
  }
};

export default showNavbar;
