import React from 'react';
import { Route, Routes } from 'react-router-dom';

import styles from './main.module.scss';

import Timer from '../Timer/Timer';
import Search from '../Search/Search';
import Todo from '../Todo/Todo';
import navLinks from '../../constants/navLinks';

const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path={navLinks.timer.path} element={<Timer />} />
        <Route path={navLinks.search.path} element={<Search />} />
        <Route path={navLinks.todo.path} element={<Todo />} />
      </Routes>
    </main>
  );
};

export default Main;
