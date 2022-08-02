import React from 'react';
import { Form, Formik } from 'formik';
import { SCHEMA_LOGIN } from './../../../utils/schemaValidation';
import Input from './../Input';
import Submit from './../Submit';
import styles from './LoginForm.module.scss';

const initialValues = { email: '', password: '' };
const LoginForm = (props) => {
  const onSubmit = (values, formikBag) => {
    formikBag.resetForm();
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SCHEMA_LOGIN}
      onSubmit={onSubmit}>
      {
        (formikProps) => {
          return (
            <Form className={styles.form}>
              <Input className={styles.form__input} name="email" placeholder="Enter email" />
              <Input className={styles.form__input} type='password' name="password" placeholder="Enter password" />
              <Submit name='login' />
            </Form>
          );
        }
      }
    </Formik>
  );
}

export default LoginForm;