import React from 'react';

import styles from './mode-link.module.scss';

const ModeLink = ({setMode, currentMode, mode, children}) => {
	const handleClick = (event) => {
		event.preventDefault();

		setMode(mode);
	}

	return (
		<a className={currentMode === mode ? styles.linkActive : styles.link} onClick={handleClick} href="#">{children}</a>
	)
};

export default ModeLink;