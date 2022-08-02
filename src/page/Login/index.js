import React from 'react';
import LoginForm from './../../components/forms/LoginForm';
import Title from './../../components/Title';
import styles from './Login.module.scss';

const Login = () => {
  return (
      <article className={styles.login}>
        <Title className={styles.login__title}>
          Login to your account
        </Title>
        <LoginForm />
      </article>
  );
}

export default Login;
