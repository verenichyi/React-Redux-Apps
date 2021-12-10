import {handleActions} from 'redux-actions';

import {
	setButtonStatus, setHours, setHoursInputValue, setMinutes, setMinutesInputValue, setSeconds, setSecondsInputValue,
	setTimerId,
} from '../actionCreators';

const initialState = {
	timerId: null,
	buttonStatus: 'Start',
	hours: '00',
	minutes: '00',
	seconds: '00',
	hoursInputValue: '',
	minutesInputValue: '',
	secondsInputValue: '',
};

const timerReducer = handleActions({
	[setTimerId]: (state, {payload}) =>  ({...state, timerId: payload}),
	[setButtonStatus]: (state, {payload}) =>  ({...state, buttonStatus: payload}),
	[setHours]: (state, {payload}) =>  ({...state, hours: payload}),
	[setMinutes]: (state, {payload}) =>  ({...state, minutes: payload}),
	[setSeconds]: (state, {payload}) =>  ({...state, seconds: payload}),
	[setHoursInputValue]: (state, {payload}) =>  ({...state, hoursInputValue: payload}),
	[setMinutesInputValue]: (state, {payload}) =>  ({...state, minutesInputValue: payload}),
	[setSecondsInputValue]: (state, {payload}) =>  ({...state, secondsInputValue: payload}),
}, initialState);

export default timerReducer;