import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import styles from './timer.module.scss';
import {
	setButtonStatus,
	setHours,
	setHoursInputValue,
	setMinutes, setMinutesInputValue, setPercentage,
	setSeconds, setSecondsInputValue,
	setTimerId
} from '../../redux/actionCreators';

const Timer = () => {
	const dispatch = useDispatch();

	const timer = useSelector((state) => state.timerReducer);

	const countdownTimer = (diff) => {
		const startValue = diff;

		return () => {
			diff -= 1000;

			const percentage = ((startValue / 1000 - diff / 1000)) * 100 / (startValue / 1000);

			if (diff <= 0) dispatch(setButtonStatus('Cancel'));

			const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
			const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
			const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

			dispatch(setPercentage(percentage));
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
				new Date().getHours() + +timer.hoursInputValue,
				new Date().getMinutes() + +timer.minutesInputValue,
				new Date().getSeconds() + +timer.secondsInputValue,
			)
		) - Date.parse(new Date());

		if (!timeDifference) return;

		const counter = countdownTimer(timeDifference);

		dispatch(setTimerId(setInterval(counter, 1000)));
		dispatch(setHoursInputValue(''));
		dispatch(setMinutesInputValue(''));
		dispatch(setSecondsInputValue(''));
		dispatch(setButtonStatus('Cancel'));
	}

	const handleCancel = (event) => {
		event.preventDefault();

		clearInterval(timer.timerId);

		dispatch(setHours('00'));
		dispatch(setMinutes('00'));
		dispatch(setSeconds('00'));
		dispatch(setButtonStatus('Start'));
		dispatch(setPercentage(0));
	}

	const handleInput = (event) => {
		const value = event.target.value;

		switch (event.target.name) {
			case 'hours':
				if (value >= 0 && value <= 23)
					dispatch(setHoursInputValue(event.target.value));
				break;
			case 'minutes':
				if (value >= 0 && value <= 59)
					dispatch(setMinutesInputValue(event.target.value));
				break;
			case 'seconds':
				if (value >= 0 && value <= 59)
					dispatch(setSecondsInputValue(event.target.value));
		}
	}

	useEffect(() => {
		if (timer.percentage === 100) {
			clearInterval(timer.timerId);
		}
	}, [timer])

	return (
		<div className={styles.timer}>
			<div className={styles.timerItems}>
				<div className={`${styles.timerItem} timerHours`}>{timer.hours}</div>
				<div className={`${styles.timerItem} timerMinutes`}>{timer.minutes}</div>
				<div className={`${styles.timerItem} timerSeconds`}>{timer.seconds}</div>
			</div>
			<form className={styles.timerForm}>
				<div className={styles.inputs}>
					<input value={timer.hoursInputValue} onChange={handleInput} className={styles.timerInput}
					       placeholder={'Hours'}
					       name={'hours'} type={'number'}/>
					<input value={timer.minutesInputValue} onChange={handleInput} className={styles.timerInput}
					       placeholder={'Minutes'}
					       name={'minutes'} type={'number'}/>
					<input value={timer.secondsInputValue} onChange={handleInput} className={styles.timerInput}
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