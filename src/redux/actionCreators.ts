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
export const addTodos = createAction('ADD_TODOS');
export const removeTodo = createAction('REMOVE_TODO');
export const toggleCheck = createAction('TOGGLE_CHECK');
export const setTodoInputValue = createAction('SET_TODO_INPUT_VALUE');

export const setCreditCardNum = createAction('SET_CREDIT_CARD_NUM');
export const setCardType = createAction('SET_CARD_TYPE');
export const setCardTypeImage = createAction('SET_CARD_TYPE_IMAGE');
export const setCardHolder = createAction('SET_CARD_HOLDER');
export const setExpireMonth = createAction('SET_EXPIRE_MONTH');
export const setExpireYear = createAction('SET_EXPIRE_YEAR');
export const setCVV = createAction('SET_CVV');