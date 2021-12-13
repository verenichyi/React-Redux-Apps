import {handleActions} from 'redux-actions';

import {
	resetInputValues, resetTimerValues,
	setButtonStatus,
	setHours,
	setHoursInputValue,
	setInputValues,
	setMinutes,
	setMinutesInputValue,
	setSeconds,
	setSecondsInputValue,
	setTimerId,
	setTimerValues,
} from '../actionCreators';

const initialState = {
	timerId: null,
	buttonStatus: 'Start',
	timerValues: {
		hours: '00',
		minutes: '00',
		seconds: '00',
	},
	hours: '00',
	minutes: '00',
	seconds: '00',
	timerInputsValues: {
		hours: '',
		minutes: '',
		seconds: '',
	},
};

const timerReducer = handleActions({
	[setTimerId]: (state, {payload}) => ({...state, timerId: payload}),
	[setButtonStatus]: (state, {payload}) => ({...state, buttonStatus: payload}),
	// [setTimerValues]: (state, {payload}) => ({
	// 	...state,
	// 	timerValues: {...state.timerValues, [payload.name]: payload.value}
	// }),
	[resetTimerValues]: (state, {payload}) => {
		const timerValues = Object.keys(state.timerValues).reduce((acc, curr) => {
			acc[curr] = payload;
			return acc;
		}, {});

		return {...state, timerValues: {...timerValues}}
	},
	[setHours]: (state, {payload}) => ({...state, hours: payload}),
	[setMinutes]: (state, {payload}) => ({...state, minutes: payload}),
	[setSeconds]: (state, {payload}) => ({...state, seconds: payload}),
	[setInputValues]: (state, {payload}) => ({
		...state,
		timerInputsValues: {...state.timerInputsValues, [payload.name]: payload.value}
	}),
	[resetInputValues]: (state, {payload}) => {
		const timerInputsValues = Object.keys(state.timerInputsValues).reduce((acc, curr) => {
			acc[curr] = payload;
			return acc;
		}, {});

		return {...state, timerInputsValues: {...timerInputsValues}}
	}
}, initialState);

export default timerReducer;