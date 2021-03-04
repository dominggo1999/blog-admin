import React from 'react';
import {
  Formik, Field, ErrorMessage, Form,
} from 'formik';
import * as Yup from 'yup';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid').required('Required'),
  password: Yup.string().min(8, 'Passwords must contain at least eight characters').required('Required'),

});

const handleSignInSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema} onSubmit={handleSignInSubmit}
    >
      <Form className="register__form sign-in">
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
        <button className="register-button" type="submit">Sign In </button>
      </Form>
    </Formik>
  );
};

export default SignIn;
