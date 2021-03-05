import React from 'react';
import { Field, ErrorMessage } from 'formik';

const InputField = ({
  label, name, id, type, placeholder,
}) => {
  return (
    <div className="register__input">
      <label htmlFor={id}>{label}</label>
      <Field
        name={name} id={id}
        type={type} placeholder={placeholder}
      />
      <ErrorMessage name={name}>
        {(msg) => (
          <span className="error-message">{msg}</span>
        )}
      </ErrorMessage>
    </div>
  );
};

export default InputField;
