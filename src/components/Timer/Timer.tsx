import React, { MouseEvent, ChangeEvent, useEffect} from 'react';

import styles from './timer.module.scss';

import {
	resetInputValues,
	resetTimerValues,
	setButtonStatus,
	setInputValues,
	setPercentage,
	setTimerId,
	setTimerValues
} from '../../redux/actionCreators';
import getDatesDifference from '../../dates/timer';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { RootStateOrAny } from 'react-redux';

const Timer = () => {
	const dispatch = useAppDispatch();

	const timer = useAppSelector((state: RootStateOrAny) => state.timerReducer);
	const timerValues = useAppSelector((state: RootStateOrAny) => state.timerReducer.timerValues);
	const inputValues = useAppSelector((state: RootStateOrAny) => state.timerReducer.timerInputsValues);

	const formatNumbers = (num: number | string) => num < 10 ? '0' + num : num;

	const countdownTimer = (diff: number) => {
		const startValue = diff;

		return () => {
			diff -= 1000;

			const percentage = ((startValue / 1000 - diff / 1000)) * 100 / (startValue / 1000);

			if (diff <= 0) dispatch(setButtonStatus('Cancel'));

			const hours = diff > 0 ? formatNumbers(Math.floor(diff / 1000 / 60 / 60) % 24) : 0;
			const minutes = diff > 0 ? formatNumbers(Math.floor(diff / 1000 / 60) % 60) : 0;
			const seconds = diff > 0 ? formatNumbers(Math.floor(diff / 1000) % 60) : 0;

			dispatch(setPercentage(percentage));
			dispatch(setTimerValues({hours, minutes, seconds}));
		}
	}

	const handleStart = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();

		const timeDifference = getDatesDifference(inputValues.hours, inputValues.minutes, inputValues.seconds);

		if (!timeDifference) return;

		const counter = countdownTimer(timeDifference);

		dispatch(setTimerId(setInterval(counter, 1000)));
		dispatch(resetInputValues(''));
		dispatch(setButtonStatus('Cancel'));
	}

	const handleCancel = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();

		clearInterval(timer.timerId);

		dispatch(resetTimerValues('00'));
		dispatch(setButtonStatus('Start'));
		dispatch(setPercentage(0));
	}

	const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		const name = event.target.name;

		switch (name) {
			case 'hours':
				if (+value >= 0 && +value <= 23)
					dispatch(setInputValues({value, name}));
				break;
			case 'minutes':
				if (+value >= 0 && +value <= 59)
					dispatch(setInputValues({value, name}));
				break;
			case 'seconds':
				if (+value >= 0 && +value <= 59)
					dispatch(setInputValues({value, name}));
		}
	}

	useEffect(() => {
		if (timer.percentage === 100) {
			dispatch(resetTimerValues('00'));
			clearInterval(timer.timerId);
		}
	}, [timer.percentage])

	const timerItems = Object.keys(timerValues).map((item, index) =>
		<div key={index} className={styles.timerItem}>{timerValues[item]}</div>);

	const timerInputs = Object.entries(inputValues).map(([key, value]: any, index) => {
		return <input key={index} value={value} onChange={handleInput} className={styles.timerInput}
									placeholder={`${key[0].toUpperCase()}${key.slice(1)}`} name={`${key}`} type={'number'}/>
	});

	return (
		<div className={styles.timer}>
			<div className={styles.timerItems}>{timerItems}</div>
			<form>
				<div className={styles.inputs}>{timerInputs}</div>
				<button className={styles.button}
								onClick={timer.buttonStatus === 'Start' ? handleStart : handleCancel}>{timer.buttonStatus}</button>
			</form>
		</div>
	)
}

export default Timer;