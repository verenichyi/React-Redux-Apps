import React, {FC, MouseEvent} from 'react';
import {useDispatch} from 'react-redux';

import styles from './mode-link.module.scss';

import {setMode} from '../../../redux/actionCreators';
import { IModeLinkProps } from '../../../interfaces';

const ModeLink: FC<IModeLinkProps> = ({currentMode, mode, children}) => {
	const dispatch = useDispatch();

	const handleClick = (event: MouseEvent<HTMLElement>) => {
		event.preventDefault();

		dispatch(setMode(mode));
	}

	return (
		<a className={currentMode === mode ? styles.linkActive : styles.link} onClick={handleClick} href="#">{children}</a>
	)
};

export default ModeLink;