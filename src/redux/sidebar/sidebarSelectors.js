import { createSelector } from 'reselect';

const selectSidebar = (state) => state.sidebar;

export const selectDisplaySidebar = createSelector(
  [selectSidebar],
  (sidebar) => sidebar.displaySidebar,
);
