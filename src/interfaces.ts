export interface ITimerState {
	timerId: null | number,
	buttonStatus: string,
	percentage: number,
	timerValues: ITimerValues,
	timerInputsValues: ITimerValues,
}

export interface ITimerValues {
	hours: string | number,
	minutes: string | number,
	seconds: string | number,
}

export interface IModeLinkProps {
	currentMode: string,
	mode: string,
}

export interface ISearchState {
	searchValue: string,
	mode: string,
	searchInputValue: string
}