import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ChoiceAuthBtn from '../ChoiceAuthBtn';
import styles from './Header.module.scss';
import CONTSTANTS from '../../constants';
const { HOME, LOGIN, SIGN_UP } = CONTSTANTS.URL;

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className={styles.header}>
      <Link to={HOME}>
        <img src="/static/images/logo.png" alt='logo' />
      </Link>
      {
        pathname === LOGIN ?
          <ChoiceAuthBtn to={SIGN_UP}>signup</ChoiceAuthBtn> :
          <ChoiceAuthBtn to={LOGIN}>login</ChoiceAuthBtn>
      }
    </header>
  );
}

export default Header;
