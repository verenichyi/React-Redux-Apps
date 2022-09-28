import {combineReducers} from 'redux';

import timerReducer from './timerReducer';
import searchReducer from './searchReducer';
import todosReducer from './todosReducer';
import cardReducer from "./cardReducer";

const rootReducer = combineReducers({
	timerReducer,
	searchReducer,
	todosReducer,
	cardReducer
});

export default rootReducer;