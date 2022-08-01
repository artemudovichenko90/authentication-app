import React from 'react';
import cx from 'classnames';
import styles from './Title.module.scss';

const Title = (props) => {
  const { children, className } = props;
  const titleStyles = cx(styles.title, className);
  return (
    <h2 className={titleStyles}>
      {children}
    </h2>
  );
}

export default Title;
