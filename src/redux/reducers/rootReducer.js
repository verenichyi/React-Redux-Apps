import {combineReducers} from 'redux';

import timerReducer from './timerReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
	timerReducer,
	searchReducer
});

export default rootReducer;