import React, {useEffect, useState} from 'react';
import Button from '../Button';

import styles from './timer.module.scss';

const Timer = () => {
	const [days, setDays] = useState('00');
	const [hours, setHours] = useState('00');
	const [minutes, setMinutes] = useState('00');
	const [seconds, setSeconds] = useState('00');
	const [timerId, setTimerId] = useState(null);

	const deadline = new Date(2021, 11, 27);

	const countdownTimer = () => {
		const diff = deadline - new Date();

		if (diff <= 0) {
			clearInterval(timerId);
		}

		const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
		const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
		const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
		const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

		setDays(days < 10 ? '0' + days : days);
		setHours(hours < 10 ? '0' + hours : hours);
		setMinutes(minutes < 10 ? '0' + minutes : minutes);
		setSeconds(seconds < 10 ? '0' + seconds : seconds);
	}


	useEffect(() => {
		return () => {
			clearInterval(timerId);
		}
	}, [])

	const handleStart = ()=> {
		setTimerId(setInterval(countdownTimer, 1000));
	}

	return (
		<>
			<div className={styles.timer}>
				<div className={styles.timerItems}>
					<div className={`${styles.timerItem} timerDays`}>{days}</div>
					<div className={`${styles.timerItem} timerHours`}>{hours}</div>
					<div className={`${styles.timerItem} timerMinutes`}>{minutes}</div>
					<div className={`${styles.timerItem} timerSeconds`}>{seconds}</div>
				</div>
			</div>
			<button onClick={handleStart}>Start</button>
			{/*<button onClick={handleToggle}>Start|Pause|Resume</button>*/}
			{/*<button>Cancel</button>*/}
		</>
	)
}

export default Timer;