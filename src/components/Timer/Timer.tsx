import React, {MouseEvent, ChangeEvent, useEffect, ReactElement} from 'react';

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
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';

const Timer = () => {
    const dispatch = useDispatch();

    const timer = useSelector((state: RootStateOrAny) => state.timerReducer);
    const timerValues = useSelector((state: RootStateOrAny) => state.timerReducer.timerValues);
    const inputValues = useSelector((state: RootStateOrAny) => state.timerReducer.timerInputsValues);

    const formatNumbers = (num: number): string => num < 10 ? '0' + num : num.toString();

    const countdownTimer = (diff: number): Function => {
        const startValue = diff;

        return () => {
            diff -= 1000;

            const percentage: number = parseFloat((((startValue / 1000 - diff / 1000)) * 100 / (startValue / 1000)).toFixed(0));
            console.log(percentage)
            if (diff <= 0) {
                clearInterval(timer.timerId);
                dispatch(setButtonStatus('Cancel'));
            }

            const hours: string = diff > 0 ? formatNumbers(Math.floor(diff / 1000 / 60 / 60) % 24) : '00';
            const minutes: string = diff > 0 ? formatNumbers(Math.floor(diff / 1000 / 60) % 60) : '00';
            const seconds: string = diff > 0 ? formatNumbers(Math.floor(diff / 1000) % 60) : '00';

            dispatch(setPercentage(percentage));
            dispatch(setTimerValues({hours, minutes, seconds}));
        }
    }

    const handleStart = (event: MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();

        const timeDifference: number = getDatesDifference(+inputValues.hours, +inputValues.minutes, +inputValues.seconds);

        if (!timeDifference) return;

        const counter: Function = countdownTimer(timeDifference);

        dispatch(setTimerId(setInterval(counter, 1000)));
        dispatch(resetInputValues(''));
        dispatch(setButtonStatus('Cancel'));
    }

    const handleCancel = (event: MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();

        clearInterval(timer.timerId);

        dispatch(setTimerId(null));
        dispatch(resetTimerValues('00'));
        dispatch(setButtonStatus('Start'));
        dispatch(setPercentage(0));
    }

    const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const value: string = event.target.value;
        const name: string = event.target.name;

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
        if (timer.percentage >= 100) {
            clearInterval(timer.timerId);
        }
    }, [timer.percentage])

    const timerItems = Object.keys(timerValues).map((item: string, index: number): ReactElement =>
        <div key={index} className={styles.timerItem}>{timerValues[item]}</div>);

    const timerInputs = Object.entries(inputValues).map(([key, value]: [string, string], index: number): ReactElement => {
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