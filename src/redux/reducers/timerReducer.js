import {handleActions} from 'redux-actions';

import {
	resetInputValues,
	resetTimerValues,
	setButtonStatus,
	setInputValues,
	setTimerId,
	setTimerValues,
	setPercentage,
} from '../actionCreators';

const initialState = {
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
	[setTimerId]: (state, {payload}) => ({...state, timerId: payload}),
	[setButtonStatus]: (state, {payload}) => ({...state, buttonStatus: payload}),
	[setTimerValues]: (state, {payload}) => ({
		...state,
		timerValues: {
			hours: payload.hours,
			minutes: payload.minutes,
			seconds: payload.seconds
		}
	}),
	[resetTimerValues]: (state, {payload}) => {
		const timerValues = Object.keys(state.timerValues).reduce((acc, curr) => {
			acc[curr] = payload;
			return acc;
		}, {});

		return {...state, timerValues: {...timerValues}}
	},
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
	},
	[setPercentage]: (state, {payload}) =>  ({...state, percentage: payload}),
}, initialState);

export default timerReducer;