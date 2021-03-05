import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFilePost, BsPencilSquare } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { RiTeamLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDisplaySidebar } from '../redux/sidebar/sidebarSelectors';
import { toggleSidebar } from '../redux/sidebar/sidebarActions';

const Sidebar = ({ displaySidebar, toggleSidebar }) => {
  return (
    <div className={`sidebar ${displaySidebar ? 'display' : ''}`}>
      <div
        className="sidebar__hamburger" role="button"
        onClick={toggleSidebar}
      >
        {
          !displaySidebar
            ? <GiHamburgerMenu />
            : <ImCross />
          }
      </div>
      <div className="sidebar__header">
        <div className="logo">
          <span className="logo-icon" />
        </div>
      </div>
      <ul className="sidebar__items">
        <li>
          <NavLink activeClassName="active" to="/create-blog">
            <BsPencilSquare />
            <span>Create Blog</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/posts">
            <BsFilePost />
            <span>Posts</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/profile">
            <CgProfile />
            <span>Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/settings">
            <FiSettings />
            <span>Settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/team">
            <RiTeamLine />
            <span>Team</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  displaySidebar: selectDisplaySidebar,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSidebar: () => dispatch(toggleSidebar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
