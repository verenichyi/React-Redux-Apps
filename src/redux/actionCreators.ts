import {createAction} from 'redux-actions';

export const setTimerId = createAction('SET_TIMER_ID');
export const setButtonStatus = createAction('SET_BUTTON_STATUS');
export const setTimerValues = createAction('SET_TIMER_VALUES');
export const resetTimerValues = createAction('RESET_TIMER_VALUES');
export const setInputValues = createAction('SET_INPUT_VALUES');
export const resetInputValues = createAction('RESET_INPUT_VALUES');
export const setPercentage = createAction('SET_PERCENTAGE');
export const setSearchValue = createAction('SET_SEARCH_VALUE');
export const setMode = createAction('SET_MODE');
export const setSearchInputValue = createAction('SET_SEARCH_INPUT_VALUE');

export const addTodo = createAction('ADD_TODO');
export const setTodoInputValue = createAction('SET_TODO_INPUT_VALUE');