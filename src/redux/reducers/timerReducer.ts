import {handleActions} from 'redux-actions';
import {ITimerInputsPayload, ITimerState, ITimerValues} from '../../interfaces';

import {
    resetInputValues,
    resetTimerValues,
    setButtonStatus,
    setInputValues,
    setTimerId,
    setTimerValues,
    setPercentage,
} from '../actionCreators';

const initialState: ITimerState = {
    timerId: null,
    buttonStatus: 'Start',
    timerValues: {
        hours: '00',
        minutes: '00',
        seconds: '00',
    },
    timerInputsValues: {
        hours: '',
        minutes: '',
        seconds: '',
    },
    percentage: 0
};

const timerReducer = handleActions({
    [setTimerId]: (state: ITimerState, {payload}: { payload: number }) => ({...state, timerId: payload}),
    [setButtonStatus]: (state: ITimerState, {payload}: { payload: string }) => ({...state, buttonStatus: payload}),
    [setTimerValues]: (state: ITimerState, {payload}: { payload: ITimerValues }) => ({
        ...state,
        timerValues: {
            hours: payload.hours,
            minutes: payload.minutes,
            seconds: payload.seconds
        }
    }),
    [resetTimerValues]: (state: ITimerState, {payload}: { payload: string }) => {
        const timerValues = Object.keys(state.timerValues).reduce((acc: any, curr: string) => {
            acc[curr] = payload;
            return acc;
        }, {});

        return {...state, timerValues: {...timerValues}}
    },
    [setInputValues]: (state: ITimerState, {payload}: { payload: ITimerInputsPayload }) => ({
        ...state,
        timerInputsValues: {...state.timerInputsValues, [payload.name]: payload.value}
    }),
    [resetInputValues]: (state: ITimerState, {payload}: { payload: string }) => {
        const timerInputsValues = Object.keys(state.timerInputsValues).reduce((acc: any, curr: string) => {
            acc[curr] = payload;
            return acc;
        }, {});

        return {...state, timerInputsValues: {...timerInputsValues}}
    },
    [setPercentage]: (state: ITimerState, {payload}: { payload: number }) => ({...state, percentage: payload}),
}, initialState);

export default timerReducer;