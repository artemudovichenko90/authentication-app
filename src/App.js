import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './page/Home';
import Login from './page/Login';
import SignUp from './page/SignUp';
import styles from './App.module.scss';
import CONTSTANTS from './constants';
const { HOME, LOGIN, SIGN_UP } = CONTSTANTS.URL;

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Header />
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={LOGIN} element={<Login />} />
          <Route path={SIGN_UP} element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
