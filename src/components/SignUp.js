import React from 'react';
import {
  Formik, Field, ErrorMessage, Form,
} from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Passwords must contain at least three characters,').required('Required'),
  email: Yup.string().email('Email is invalid').required('Required'),
  password: Yup.string().min(8, 'Passwords must contain at least eight characters').required('Required'),
  confirmPassword: Yup.string()
    .required('Required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const handleSignInSubmit = (values) => {
  console.log(values);
};

const SignUp = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema} onSubmit={handleSignInSubmit}
    >
      <Form className="register__form sign-up">
        <div className="register__input">
          <label htmlFor="name">Name</label>
          <Field
            name="name" id="name"
            type="text" placeholder="Ex: John Doe"
          />
          <ErrorMessage name="name">
            {(msg) => (
              <span className="error-message">{msg}</span>
            )}
          </ErrorMessage>
        </div>
        <div className="register__input">
          <label htmlFor="name">Email</label>
          <Field
            name="email" id="email"
            type="email" placeholder="Ex: johndoe@email.com"
          />
          <ErrorMessage name="email">
            {(msg) => (
              <span className="error-message">{msg}</span>
            )}
          </ErrorMessage>
        </div>
        <div className="register__input">
          <label htmlFor="password">Password</label>
          <Field
            name="password" id="password"
            type="password"
          />
          <ErrorMessage name="password">
            {(msg) => (
              <span className="error-message">{msg}</span>
            )}
          </ErrorMessage>
        </div>
        <div className="register__input">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field
            name="confirmPassword" id="confirmPassword"
            type="password"
          />
          <ErrorMessage name="confirmPassword">
            {(msg) => (
              <span className="error-message">{msg}</span>
            )}
          </ErrorMessage>
        </div>
        <button type="submit" className="register-button">Sign Up </button>
      </Form>
    </Formik>
  );
};

export default SignUp;
