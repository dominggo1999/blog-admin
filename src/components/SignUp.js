import React from 'react';
import {
  Formik, Field, ErrorMessage, Form,
} from 'formik';
import * as Yup from 'yup';
import InputField from './InputField';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'At least 3 characters,').required('Required'),
  email: Yup.string().email('Email is invalid').required('Required'),
  password: Yup.string().min(8, 'At least 8 characters').required('Required'),
  confirmPassword: Yup.string()
    .required('Required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const handleSignUpSubmit = (values) => {
  console.log(values);
};

const SignUp = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema} onSubmit={handleSignUpSubmit}
    >
      <Form className="register__form sign-up">
        <InputField
          label="Name"
          name="name"
          id="name"
          type="text"
          placeholder="Ex: John Doe"
        />
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
        <InputField
          label="Confirm Password"
          name="confirmPassword"
          id="confirmPassword"
          type="password"
        />
        <button type="submit" className="register-button">Sign Up </button>
      </Form>
    </Formik>
  );
};

export default SignUp;
