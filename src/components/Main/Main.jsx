import React from 'react';
import {Route, Routes} from 'react-router-dom';

import styles from './main.module.scss';

import CircularProgressBar from '../Circular-progress-bar/CircularProgressBar';
import Timer from '../Timer/Timer';
import Home from '../Home/Home';
import SearchInput from '../SearchInput/SearchInput';

const Main = () => {
	return (
		<main className={styles.main}>
			<Routes>
				<Route path={'/'} element={<Home/>}/>
				<Route path={'/timer'} element={<Timer/>}/>
				<Route path={'/progress-bar'} element={<CircularProgressBar/>}/>
				<Route path={'/search-input'} element={<SearchInput/>}/>
			</Routes>
		</main>
	)
};

export default Main;