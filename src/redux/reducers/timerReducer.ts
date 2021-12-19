import {handleActions} from 'redux-actions';
import {ITimerState} from '../../interfaces';

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

type StringPayload = {
	payload: string
}

type NumberPayload = {
	payload: number
}

type TimerValues = {
	payload: {
		hours: string,
		minutes: string,
		seconds: string,
	}
}
const timerReducer = handleActions({
	[setTimerId]: (state: ITimerState, {payload}: NumberPayload) => ({...state, timerId: payload}),
	[setButtonStatus]: (state: ITimerState, {payload}: StringPayload) => ({...state, buttonStatus: payload}),
	[setTimerValues]: (state: ITimerState, {payload}: TimerValues) => ({
		...state,
		timerValues: {
			hours: payload.hours,
			minutes: payload.minutes,
			seconds: payload.seconds
		}
	}),
	[resetTimerValues]: (state: ITimerState, {payload}: StringPayload) => {
		const timerValues = Object.keys(state.timerValues).reduce((acc: any, curr: string) => {
			acc[curr] = payload;
			return acc;
		}, {});

		return {...state, timerValues: {...timerValues}}
	},
	[setInputValues]: (state: ITimerState, {payload}: any) => ({
		...state,
		timerInputsValues: {...state.timerInputsValues, [payload.name]: payload.value}
	}),
	[resetInputValues]: (state: ITimerState, {payload}: TimerValues) => {
		const timerInputsValues = Object.keys(state.timerInputsValues).reduce((acc: any, curr: string) => {
			acc[curr] = payload;
			return acc;
		}, {});

		return {...state, timerInputsValues: {...timerInputsValues}}
	},
	[setPercentage]: (state: ITimerState, {payload}: NumberPayload) => ({...state, percentage: payload}),
}, initialState);

export default timerReducer;