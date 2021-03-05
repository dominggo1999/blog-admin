import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useQuill } from 'react-quilljs';
import InputField from '../components/InputField';
import 'quill/dist/quill.snow.css'; // Add css for snow theme

const initialValues = {
  title: '',
  image: '',
  category: '',
  tag: '',
};

const validationSchema = Yup.object().shape({
  title: Yup.string().max(80, 'Must be less 80').required('Required'),
  image: Yup.mixed()
    .required('You need to provide a file')
    .test('fileSize', 'The file is too large', (value) => {
      return value && value[0] <= 2000000;
    })
    .test('type', 'File type not supported', (value) => {
      return value && (
        value[0].type === 'image/jpeg'
          || value[0].type === 'image/png'
      );
    }),
  category: Yup.string().max(80, 'Must be less 80').required('Required'),
  tag: Yup.string().max(80, 'Must be less 80').required('Required'),
});

const onSubmit = (values) => {
  console.log(values);
};

const CreateBlog = () => {
  const { quill, quillRef } = useQuill();

  return (
    <div className="create-blog">
      <div className="create-blog__header">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <InputField
              label="Blog title"
              name="title"
              id="title"
              type="text"
              placeholder="Everything is gonna be daijoubu"
            />
            <div className="content-editor">
              <div style={{ width: 700, height: 300 }}>
                <div ref={quillRef} />
              </div>
            </div>
            <InputField
              label="Image"
              name="file"
              id="image"
              type="file"
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CreateBlog;
