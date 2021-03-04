import { userActionsTypes } from './userActionTypes';

// Action Type Destructuring
const { TOGGLE_REG_SIGNIN } = userActionsTypes;

const INITIAL_STATE = {
  regSignIn: true,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_REG_SIGNIN:
      return {
        ...state,
        regSignIn: !state.regSignIn,
      };

    default:
      return state;
  }
};

export default userReducer;
