import {createAction} from 'redux-actions';

export const setTimerId = createAction('SET_TIMER_ID');
export const setButtonStatus = createAction('SET_BUTTON_STATUS');
export const setHours = createAction('SET_HOURS');
export const setMinutes = createAction('SET_MINUTES');
export const setSeconds = createAction('SET_SECONDS');
export const setHoursInputValue = createAction('SET_HOURS_INPUT_VALUE');
export const setMinutesInputValue = createAction('SET_MINUTES_INPUT_VALUE');
export const setSecondsInputValue = createAction('SET_SECONDS_INPUT_VALUE');