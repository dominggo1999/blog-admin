import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="logo">
          <span className="logo-icon" />
        </div>
      </div>
      <ul className="sidebar__items">
        <li><NavLink activeClassName="active" to="/create-blog">Create Blog</NavLink></li>
        <li><NavLink activeClassName="active" to="/posts">Posts</NavLink></li>
        <li><NavLink activeClassName="active" to="/profile">Profile</NavLink></li>
        <li><NavLink activeClassName="active" to="/settings">Settings</NavLink></li>
        <li><NavLink activeClassName="active" to="/teams">Team</NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;
