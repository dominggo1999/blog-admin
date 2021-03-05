import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import CreateBlog from './CreateBlog';
import Posts from './Posts';
import Profile from './Profile';
import Settings from './Settings';
import Team from './Team';

const MainPage = () => {
  return (
    <div className="main-page">
      <Sidebar />
      <Switch>
        <Route path="/create-blog" component={CreateBlog} />
        <Route path="/posts" component={Posts} />
        <Route path="/profile" component={Profile} />
        <Route path="/settings" component={Settings} />
        <Route path="/team" component={Team} />
      </Switch>
    </div>
  );
};

export default MainPage;
