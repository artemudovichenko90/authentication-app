import React from 'react';
import { ErrorMessage, Field } from 'formik';
import cx from 'classnames';
import styles from './Input.module.scss';

const Input = (props) => {
  const { name, className, ...rest } = props;
  return (
    <label className={styles.label}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const inputStyles = cx(styles.input, className, { [styles.invalid]: meta.error });
          return <input {...field}{...rest} className={inputStyles} />
        }}
      </Field>
      <ErrorMessage name={name} component="div" className={styles.error} />
    </label>
  );
}

export default Input;