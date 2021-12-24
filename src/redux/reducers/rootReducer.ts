import {combineReducers} from 'redux';

import timerReducer from './timerReducer';
import searchReducer from './searchReducer';
import todosReducer from './todosReducer';

const rootReducer = combineReducers({
	timerReducer,
	searchReducer,
	todosReducer
});

export default rootReducer;