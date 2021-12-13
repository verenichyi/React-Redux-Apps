import React, {useState} from 'react';

import styles from './timer.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {
	resetInputValues,
	setButtonStatus,
	setHours,
	setHoursInputValue, setInputValues,
	setMinutes, setMinutesInputValue,
	setSeconds, setSecondsInputValue,
	setTimerId
} from '../../redux/actionCreators';

const Timer = () => {
	const dispatch = useDispatch();

	const timer = useSelector((state) => state.timerReducer);
	// const timerValues = useSelector((state) => state.timerReducer.timerValues);
	const inputValues = useSelector((state) => state.timerReducer.timerInputsValues);


	const countdownTimer = (diff) => {
		return () => {
			diff -= 1000;

			if (diff <= 0) {
				clearInterval(timer.timerId);
				dispatch(setButtonStatus('Start'));
			}

			const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
			const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
			const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

			dispatch(setHours(hours < 10 ? '0' + hours : hours));
			dispatch(setMinutes(minutes < 10 ? '0' + minutes : minutes));
			dispatch(setSeconds(seconds < 10 ? '0' + seconds : seconds));
		}
	}

	const handleStart = (event) => {
		event.preventDefault();

		const timeDifference = Date.parse(
			new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate(),
				new Date().getHours() + +inputValues.hours,
				new Date().getMinutes() + +inputValues.minutes,
				new Date().getSeconds() + +inputValues.seconds,
			)
		) - Date.parse(new Date());

		if (!timeDifference) return;

		const counter = countdownTimer(timeDifference);

		dispatch(setTimerId(setInterval(counter, 1000)));
		dispatch(resetInputValues(''));
		dispatch(setButtonStatus('Cancel'));
	}

	const handleCancel = (event) => {
		event.preventDefault();

		clearInterval(timer.timerId);

		dispatch(setHours('00'));
		dispatch(setMinutes('00'));
		dispatch(setSeconds('00'));
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

	// const timerItems = Object.keys(timerValues).map(item => <div className={styles.timerItem}>{timerValues[item]}</div>);


	return (
		<div className={styles.timer}>
			<div className={styles.timerItems}>
				<div className={styles.timerItem}>{timer.hours}</div>
				<div className={styles.timerItem}>{timer.minutes}</div>
				<div className={styles.timerItem}>{timer.seconds}</div>
				{/*{timerItems}*/}
			</div>
			<form className={styles.timerForm}>
				<div className={styles.inputs}>
					<input value={inputValues.hours} onChange={handleInput} className={styles.timerInput}
					       placeholder={'Hours'}
					       name={'hours'} type={'number'}/>
					<input value={inputValues.minutes} onChange={handleInput} className={styles.timerInput}
					       placeholder={'Minutes'}
					       name={'minutes'} type={'number'}/>
					<input value={inputValues.seconds} onChange={handleInput} className={styles.timerInput}
					       placeholder={'Seconds'}
					       name={'seconds'} type={'number'}/>
				</div>
				<button className={styles.button}
				        onClick={timer.buttonStatus === 'Start' ? handleStart : handleCancel}>{timer.buttonStatus}</button>
			</form>
		</div>
	)
}

export default Timer;