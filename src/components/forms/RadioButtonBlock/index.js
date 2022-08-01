import React from 'react';
import cx from 'classnames';
import { Field } from 'formik';
import styles from './RadioButtonBlock.module.scss';

const RadioButtonBlock = (props) => {
  const { title, description, className, value } = props;
  const allStyles = cx(styles.wrapper, className);
  return (
    <div className={allStyles}>
      <Field type="radio" name='join' value={value} />
      <label className={styles.label}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{description}</p>
      </label>
    </div>
  );
}

export default RadioButtonBlock;
