import { userActionsTypes } from './userActionTypes';

// Action Type Destructuring
const { TOGGLE_REG_SIGNIN } = userActionsTypes;

export const toggleRegSignIn = () => ({
  type: TOGGLE_REG_SIGNIN,
});
