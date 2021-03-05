import { sidebarActionTypes } from './sidebarActionTypes';

// Action Type Destructuring
const { TOGGLE_SIDEBAR } = sidebarActionTypes;

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR,
});
