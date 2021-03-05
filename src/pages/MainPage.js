import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';

const MainPage = () => {
  return (
    <Row>
      <Sidebar />
    </Row>
  );
};

export default MainPage;
