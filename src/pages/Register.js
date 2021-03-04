import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SignIn from '../components/SignIn';
import { toggleRegSignIn } from '../redux/user/userActions';
import { selectregSignIn } from '../redux/user/userSelectors';
import SignUp from '../components/SignUp';

const Register = ({ regSignIn, toggleRegSignIn }) => {
  return (
    <div className="register__page">
      <img
        className="bg-small-screen" src="https://images.unsplash.com/photo-1602008194020-13ac6665ebdb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1575&q=80"
        alt="Hero"
      />
      <Container>
        <Row className="register__wrapper">
          <Col
            md="6" lg="5"
            className="left"
          >
            <img src="https://images.unsplash.com/photo-1602008194020-13ac6665ebdb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1575&q=80" alt="Hero" />
          </Col>
          <Col
            md="6" lg="7"
            className="right"
          >
            <div className="logo">
              <span className="logo-icon" />
            </div>
            <h2>Welcome to <span className="brand-name">bloggrx</span></h2>
            <div className="register__message">
              {
              regSignIn
                ? (
                  <>
                    <span>Don&apos;t have any account?</span>
                    <button onClick={toggleRegSignIn}>Sign up</button>
                  </>
                )
                : (
                  <>
                    <span>Already have an account?</span>
                    <button onClick={toggleRegSignIn}>Sign in</button>
                  </>
                )
            }
            </div>
            {
              regSignIn ? <SignIn /> : <SignUp />
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  regSignIn: selectregSignIn,
});

const mapDispatchToProps = (dispatch) => ({
  toggleRegSignIn: () => dispatch(toggleRegSignIn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
