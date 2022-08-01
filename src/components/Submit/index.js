import React from 'react';
import cx from 'classnames';
import styles from './Submit.module.scss';

const Submit = (props) => {
  const { name, className } = props;
  const allStyles = cx(styles.submit, className)
  return (
    <input className={allStyles} type="submit" value={name} />
  );
}

export default Submit;
