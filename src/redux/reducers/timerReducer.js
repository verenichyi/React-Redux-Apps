import {handleActions} from 'redux-actions';

import {
	startTimer
} from '../actionCreators';

const initialState = {
	time: ''
};

const timerReducer = handleActions({
	[startTimer]: (state, {payload}) => {
		return {
			...state,
		};
	},
}, initialState);

export default timerReducer;