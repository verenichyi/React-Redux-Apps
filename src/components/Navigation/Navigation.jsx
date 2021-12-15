import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './navigation.module.scss';

const Navigation = () => {
	return (
		<nav className={styles.nav}>
			<NavLink className={({ isActive }) => styles.navLink + (isActive ? ` ${styles.activated}` : "")} to={'/'}>Home</NavLink>
			<NavLink className={({ isActive }) => styles.navLink + (isActive ? ` ${styles.activated}` : "")} to={'/timer'}>Timer</NavLink>
			<NavLink className={({ isActive }) => styles.navLink + (isActive ? ` ${styles.activated}` : "")} to={'/progress-bar'}>Progress bar</NavLink>
			<NavLink className={({ isActive }) => styles.navLink + (isActive ? ` ${styles.activated}` : "")} to={'/search'}>Search</NavLink>
		</nav>
	)
};

export default Navigation;