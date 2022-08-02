import React from 'react';
import { Form, Formik } from 'formik';
import { SCHEMA_SIGN_UP } from './../../../utils/schemaValidation';
import Input from './../Input';
import RadioButtonBlock from '../RadioButtonBlock/index';
import Submit from './../Submit';
import styles from './SignUpForm.module.scss';
import CONTSTANTS from './../../../constants';
const {
  RADIO_BUTTON: { BUYER, SELLER },
  INPUT_NAMES: { FIRST_NAME, LAST_NAME, DISPLAY_NAME, EMAIL, PASSWORD, PASSWORD_CONFIRM, JOIN_AS }
} = CONTSTANTS;
const initialValues = {
  [FIRST_NAME]: '',
  [LAST_NAME]: '',
  [DISPLAY_NAME]: '',
  [EMAIL]: '',
  [PASSWORD]: '',
  [PASSWORD_CONFIRM]: '',
  [JOIN_AS]: BUYER
};

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
                <Input className={styles.form__input} name={FIRST_NAME} placeholder="First Name" />
                <Input className={styles.form__input} name={LAST_NAME} placeholder="Last Name" />
                <Input className={styles.form__input} name={DISPLAY_NAME} placeholder="Display Name" />
                <Input className={styles.form__input} name={EMAIL} placeholder="Email Address" />
                <Input className={styles.form__input} name={PASSWORD} placeholder="Password" />
                <Input className={styles.form__input} name={PASSWORD_CONFIRM} placeholder="Password Confirm" />
              </div>
              <RadioButtonBlock
                name={JOIN_AS}
                value={BUYER}
                className={styles.radioButton}
                title='Join As a Buyer'
                description='I am looking for a Name, Logo or Tagline for my business, brand or product.' />
              <RadioButtonBlock
                name={JOIN_AS}
                value={SELLER}
                className={styles.radioButton}
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
