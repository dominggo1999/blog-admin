import { sidebarActionTypes } from './sidebarActionTypes';

// Action Type Destructuring
const { TOGGLE_SIDEBAR } = sidebarActionTypes;

const INITIAL_STATE = {
  displaySidebar: false,
};

const sidebarReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        displaySidebar: !state.displaySidebar,
      };

    default:
      return state;
  }
};

export default sidebarReducers;
