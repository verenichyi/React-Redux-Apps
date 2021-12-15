import {handleActions} from 'redux-actions';

import {
	setMode,
	setSearchValue,
	setSearchInputValue
} from '../actionCreators';

const initialState = {
	searchValue: '',
	mode: 'IMMEDIATE',
	searchInputValue: ''
};

const searchReducer = handleActions({
	[setSearchValue]: (state, {payload}) => ({...state, searchValue: payload}),
	[setMode]: (state, {payload}) => ({...state, mode: payload}),
	[setSearchInputValue]: (state, {payload}) => ({...state, searchInputValue: payload}),
}, initialState);

export default searchReducer;