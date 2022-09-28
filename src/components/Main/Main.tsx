import React from 'react';
import {Route, Routes} from 'react-router-dom';

import styles from './main.module.scss';

import CircularProgressBar from '../Circular-progress-bar/CircularProgressBar';
import Timer from '../Timer/Timer';
import Home from '../Home/Home';
import Search from '../Search/Search';
import Todo from '../Todo/Todo';
import CreditCard from '../CreditCard/CreditCard';
import navLinks from '../../constants/navLinks';

const Main = () => {
	return (
		<main className={styles.main}>
			<Routes>
				<Route path={navLinks.home.path} element={<Home/>}/>
				<Route path={navLinks.timer.path} element={<Timer/>}/>
				<Route path={navLinks.progressBar.path} element={<CircularProgressBar/>}/>
				<Route path={navLinks.search.path} element={<Search/>}/>
				<Route path={navLinks.todo.path} element={<Todo/>}/>
				<Route path={navLinks.card.path} element={<CreditCard/>}/>
			</Routes>
		</main>
	)
};

export default Main;