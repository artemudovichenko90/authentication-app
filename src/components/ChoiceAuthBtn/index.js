import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ChoiceAuthBtn.module.scss';

const ChoiceAuthBtn = (props) => {
  const { children, to } = props;
  return (
    <Link to={to} className={styles.btn}>
      {children}
    </Link>
  );
}

export default ChoiceAuthBtn;
