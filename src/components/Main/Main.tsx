import React, {FC} from 'react';
import {Route, Routes} from 'react-router-dom';

import styles from './main.module.scss';

import CircularProgressBar from '../Circular-progress-bar/CircularProgressBar';
import Timer from '../Timer/Timer';
import Home from '../Home/Home';
import Search from '../Search/Search';

const Main: FC = () => {
	return (
		<main className={styles.main}>
			<Routes>
				<Route path={'/'} element={<Home/>}/>
				<Route path={'/timer'} element={<Timer/>}/>
				<Route path={'/progress-bar'} element={<CircularProgressBar/>}/>
				<Route path={'/search'} element={<Search/>}/>
			</Routes>
		</main>
	)
};

export default Main;