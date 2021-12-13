import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import styles from './timer.module.scss';

import {
	resetInputValues,
	resetTimerValues,
	setButtonStatus, setInputValues,
	setTimerId,
	setTimerValues
} from '../../redux/actionCreators';
import getDatesDifference from '../../Dates/timer';

const Timer = () => {
	const dispatch = useDispatch();

	const timer = useSelector((state) => state.timerReducer);
	const timerValues = useSelector((state) => state.timerReducer.timerValues);
	const inputValues = useSelector((state) => state.timerReducer.timerInputsValues);

	const formatNumbers = (num) => num < 10 ? '0' + num : num;

	const countdownTimer = (diff) => {
		return () => {
			diff -= 1000;

			if (diff <= 0) {
				clearInterval(timer.timerId);
				dispatch(resetTimerValues('00'));
				dispatch(setButtonStatus('Start'));
			}

			const hours = diff > 0 ? formatNumbers(Math.floor(diff / 1000 / 60 / 60) % 24) : 0;
			const minutes = diff > 0 ? formatNumbers(Math.floor(diff / 1000 / 60) % 60) : 0;
			const seconds = diff > 0 ? formatNumbers(Math.floor(diff / 1000) % 60) : 0;

			dispatch(setTimerValues({hours, minutes, seconds}));
		}
	}

	const handleStart = (event) => {
		event.preventDefault();

		const timeDifference = getDatesDifference(inputValues.hours, inputValues.minutes, inputValues.seconds);

		if (!timeDifference) return;

		const counter = countdownTimer(timeDifference);

		dispatch(setTimerId(setInterval(counter, 1000)));
		dispatch(resetInputValues(''));
		dispatch(setButtonStatus('Cancel'));
	}

	const handleCancel = (event) => {
		event.preventDefault();

		clearInterval(timer.timerId);

		dispatch(resetTimerValues('00'));
		dispatch(setButtonStatus('Start'));
	}

	const handleInput = (event) => {
		const value = event.target.value;
		const name = event.target.name;

		switch (name) {
			case 'hours':
				if (value >= 0 && value <= 23)
					dispatch(setInputValues({value, name}));
				break;
			case 'minutes':
				if (value >= 0 && value <= 59)
					dispatch(setInputValues({value, name}));
				break;
			case 'seconds':
				if (value >= 0 && value <= 59)
					dispatch(setInputValues({value, name}));
		}
	}

	const timerItems = Object.keys(timerValues).map((item, index) =>
		<div key={index} className={styles.timerItem}>{timerValues[item]}</div>);

	const timerInputs = Object.entries(inputValues).map(([key,value], index) => {
		return <input key={index} value={value} onChange={handleInput} className={styles.timerInput}
		              placeholder={`${key[0].toUpperCase()}${key.slice(1)}`} name={`${key}`} type={'number'}/>
	});

	return (
		<div className={styles.timer}>
			<div className={styles.timerItems}>{timerItems}</div>
			<form className={styles.timerForm}>
				<div className={styles.inputs}>{timerInputs}</div>
				<button className={styles.button} onClick={timer.buttonStatus === 'Start' ? handleStart : handleCancel}>{timer.buttonStatus}</button>
			</form>
		</div>
	)
}

export default Timer;