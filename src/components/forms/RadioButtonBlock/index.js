import React from 'react';
import cx from 'classnames';
import { Field } from 'formik';
import styles from './RadioButtonBlock.module.scss';

const RadioButtonBlock = (props) => {
  const { title, description, className, name, value, ...rest } = props;
  const allStyles = cx(styles.wrapper, className);
  return (
    <div className={allStyles}>
      <label className={styles.label}>
        <Field name={name}>
          {({ field }) => {
            return <input type='radio'{...field}{...rest} value={value} checked={field.value === value} />
          }}
        </Field>
        <div className={styles.titleWrap}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{description}</p>
        </div>
      </label>
    </div>
  );
}

export default RadioButtonBlock;
