import React from 'react';
import SignUpForm from './../../components/forms/SignUpForm';
import Title from './../../components/Title';
import styles from './SignUp.module.scss';


const SignUp = () => {
  return (
    <article className={styles.signUp}>
      <Title className={styles.signUp__title}>
        Create an account
      </Title>
      <p className={styles.signUp__subTitle}>We always keep your name and email address private.</p>
      <SignUpForm />
    </article>
  );
}

export default SignUp;
