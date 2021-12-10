import React, {useState} from 'react';

import styles from './timer.module.scss';

const Timer = () => {
	const [hours, setHours] = useState('00');
	const [minutes, setMinutes] = useState('00');
	const [seconds, setSeconds] = useState('00');

	const [hoursInputValue, setHoursInputValue] = useState('');
	const [minutesInputValue, setMinutesInputValue] = useState('');
	const [secondsInputValue, setSecondsInputValue] = useState('');

	const [timerId, setTimerId] = useState(null);

	const [buttonStatus, setButtonStatus] = useState('Start');

	const countdownTimer = (diff) => {
		return () => {
			diff -= 1000;

			if (diff <= 0) {
				clearInterval(timerId);
			}

			const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
			const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
			const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

			setHours(hours < 10 ? '0' + hours : hours);
			setMinutes(minutes < 10 ? '0' + minutes : minutes);
			setSeconds(seconds < 10 ? '0' + seconds : seconds);
		}
	}

	const handleStart = (event) => {
		event.preventDefault();

		const timeDifference = Date.parse(
			new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate(),
				new Date().getHours() + +hoursInputValue,
				new Date().getMinutes() + +minutesInputValue,
				new Date().getSeconds() + +secondsInputValue,
			)
		) - Date.parse(new Date());

		if (!timeDifference) return;

		const counter = countdownTimer(timeDifference);

		setTimerId(setInterval(counter, 1000));

		setHoursInputValue('');
		setMinutesInputValue('');
		setSecondsInputValue('');
		setButtonStatus('Cancel');
	}

	const handleCancel = (event) => {
		event.preventDefault();

		clearInterval(timerId);

		setHours('00');
		setMinutes('00');
		setSeconds('00');
		setButtonStatus('Start');
	}

	const handleInput = (event) => {
		switch (event.target.name) {
			case 'hours':
				setHoursInputValue(event.target.value);
				break;
			case 'minutes':
				setMinutesInputValue(event.target.value);
				break;
			case 'seconds':
				setSecondsInputValue(event.target.value);
		}
	}

	return (
		<>
			<div className={styles.timer}>
				<div className={styles.timerItems}>
					<div className={`${styles.timerItem} timerHours`}>{hours}</div>
					<div className={`${styles.timerItem} timerMinutes`}>{minutes}</div>
					<div className={`${styles.timerItem} timerSeconds`}>{seconds}</div>
				</div>
				<form className={styles.timerForm}>
					<div className={styles.inputs}>
						<input value={hoursInputValue} onChange={handleInput} className={styles.timerInput} placeholder={'Hours'}
						       name={'hours'} type={'number'}/>
						<input value={minutesInputValue} onChange={handleInput} className={styles.timerInput}
						       placeholder={'Minutes'}
						       name={'minutes'} type={'number'}/>
						<input value={secondsInputValue} onChange={handleInput} className={styles.timerInput}
						       placeholder={'Seconds'}
						       name={'seconds'} type={'number'}/>
					</div>
					<button className={styles.button}
					        onClick={buttonStatus === 'Start' ? handleStart : handleCancel}>{buttonStatus}</button>
				</form>
			</div>
		</>
	)
}

export default Timer;