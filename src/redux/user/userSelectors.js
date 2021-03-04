import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectregSignIn = createSelector(
  [selectUser],
  (user) => user.regSignIn,
);
