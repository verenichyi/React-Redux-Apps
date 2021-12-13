import {createAction} from 'redux-actions';

export const setTimerId = createAction('SET_TIMER_ID');
export const setButtonStatus = createAction('SET_BUTTON_STATUS');
export const setTimerValues = createAction('SET_TIMER_VALUES');
export const resetTimerValues = createAction('RESET_TIMER_VALUES');
export const setHours = createAction('SET_HOURS');
export const setMinutes = createAction('SET_MINUTES');
export const setSeconds = createAction('SET_SECONDS');
export const setInputValues = createAction('SET_INPUT_VALUES');
export const resetInputValues = createAction('RESET_INPUT_VALUES');
export const setHoursInputValue = createAction('SET_HOURS_INPUT_VALUE');
export const setMinutesInputValue = createAction('SET_MINUTES_INPUT_VALUE');
export const setSecondsInputValue = createAction('SET_SECONDS_INPUT_VALUE');