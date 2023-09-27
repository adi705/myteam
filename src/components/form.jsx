import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  name: Yup.string().required('Name is required'),
  companyName: Yup.string().required('Company Name is required'),
});

const initialValues = {
  email: '',
  name: '',
  companyName: '',
};

const onSubmit = (values) => {
  toast.success('submitted successfully');
  console.log(values);
};

const MyForm = () => {
  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className='formContainer'>
          <div className="form-row">
            
            <Field type="email" id="email" name="email" placeholder="Email Address" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
          <div className="form-row">
            
            <Field type="text" id="name" name="name"  placeholder="Name"/>
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>
          <div className="form-row">
           
            <Field type="text" id="companyName" name="companyName" placeholder="Compay Name" />
            <ErrorMessage name="companyName" component="div" className="error-message" />
          </div>
          <div className="form-row">
            
            <Field as="textarea" id="message" name="message" placeholder="Message" />
            <ErrorMessage name="message" component="div" className="error-message" />
          </div>
          <div className="form-row">
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};






/*const MyForm = () => {


    return (
        <>
          <div className='introContainerrr'>
            <h1>myform</h1>
           </div>
           
          

            
        </>
      )


}*/

export default MyForm;