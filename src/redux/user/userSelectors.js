import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectRegSignIn = createSelector(
  [selectUser],
  (user) => user.regSignIn,
);
