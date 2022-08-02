import React from 'react';
import { Form, Formik } from 'formik';
import { SCHEMA_SIGN_UP } from '../../../utils/schemaValidation';
import Input from '../Input';
import RadioButtonBlock from '../RadioButtonBlock/index';
import Submit from '../Submit';
import styles from './SignUpForm.module.scss';
import CONTSTANTS from './../../../constants';
const { BUYER, SELLER } = CONTSTANTS.RADIO_BUTTON;
const initialValues = { firstName: '', lastName: '', displayName: '', email: '', password: '', passwordConfirm: '' };

const SignUpForm = () => {
  const onSubmit = (values, formikBag) => {
    formikBag.resetForm();
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SCHEMA_SIGN_UP}
      onSubmit={onSubmit}>
      {
        (formikProps) => {
          return (
            <Form className={styles.form}>
              <div className={styles.inputsWrap}>
                <Input className={styles.form__input} name="firstName" placeholder="First Name" />
                <Input className={styles.form__input} name="lastName" placeholder="Last Name" />
                <Input className={styles.form__input} name="displayName" placeholder="Display Name" />
                <Input className={styles.form__input} name="email" placeholder="Email Address" />
                <Input className={styles.form__input} type='password' name="password" placeholder="Password" />
                <Input className={styles.form__input} type='password' name="passwordConfirm" placeholder="Password Confirm" />
              </div>
              <RadioButtonBlock
                className={styles.radioButton}
                value={BUYER}
                title='Join As a Buyer'
                description='I am looking for a Name, Logo or Tagline for my business, brand or product.' />
              <RadioButtonBlock
                className={styles.radioButton}
                value={SELLER}
                title='Join As a Creative or Marketplace Seller'
                description='I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.' />
              <Submit className={styles.submit} name='Create account' />
            </Form>
          );
        }
      }
    </Formik>
  );
}

export default SignUpForm;
