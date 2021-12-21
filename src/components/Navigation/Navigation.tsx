import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './navigation.module.scss';
import navLinks from '../../constants/navLinks';

const Navigation = () => {
	const navLinkItems = navLinks.map((item, index) =>
		<NavLink key={index} className={({isActive}) => styles.navLink + (isActive ? ` ${styles.activated}` : '')} to={item.path}>{item.title}</NavLink>)

	return <nav className={styles.nav}>{navLinkItems}</nav>;
};

export default Navigation;