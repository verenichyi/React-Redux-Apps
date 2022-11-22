import React, { useEffect } from 'react';

import './App.scss';

import { Header } from './components/Header/Header';
import Main from './components/Main/Main';
import { useNavigate } from 'react-router';
import navLinks from './constants/navLinks';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(navLinks.timer.path);
  }, []);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};

export default App;
