import React from 'react';
import {
  Formik, Field, ErrorMessage, Form,
} from 'formik';
import * as Yup from 'yup';
import InputField from './InputField';

const initialValues = {
  email: '',
  password: '',
  password2: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid').required('Required'),
  password: Yup.string().min(8, 'At least 3 characters').required('Required'),
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
        <InputField
          label="Email"
          name="email"
          id="email"
          type="email"
          placeholder="Ex: johndoe@email.com"
        />
        <InputField
          label="Password"
          name="password"
          id="password"
          type="password"
        />
        <button className="register-button" type="submit">Sign In </button>
      </Form>
    </Formik>
  );
};

export default SignIn;
