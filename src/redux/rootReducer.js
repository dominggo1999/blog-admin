import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import sidebarReducers from './sidebar/sidebarReducer';

export default combineReducers({
  user: userReducer,
  sidebar: sidebarReducers,
});
