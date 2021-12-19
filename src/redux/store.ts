import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';

const composeEnhancers = composeWithDevTools({});

const store = createStore(rootReducer, composeEnhancers());

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;