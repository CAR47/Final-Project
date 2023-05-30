import React from 'react';
import userSchema from '../Scema/validation';
import { Form, Field, Formik, ErrorMessage } from "formik";
import { Formik, Form, Field, ErrorMessage } from 'formik';


export default function SignUP() {
  const initialData = {
    Name: "", 
    Email: "", 
    Password: ""
  };

const HandleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div className="container">
      <h2 className="text-center my-5">Register</h2>
      <Formik
        initialValues={initialData}
        onSubmit={HandleSubmit}
        validationSchema={userSchema}>
        <Form>
          <div className="form-group">
            <label>Name</label>
            <Field type="text" name="Name" className="form-control"/>
            <ErrorMessage name='Name' component="div" className="text-danger"/>
          </div>
          <div className="form-group">
            <label>Email</label>
            <Field type="email" name="Email" className="form-control"/>
            <ErrorMessage name='Email' component="div" className="text-danger"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <Field type="password" name="Password" className="form-control"/>
            <ErrorMessage name='Password' component="div" className="text-danger"/>
          </div>
          <button className='btn btn-primary mt-3' type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
