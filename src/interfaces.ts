export interface ITimerState {
	timerId: number | null,
	buttonStatus: string,
	percentage: number,
	timerValues: ITimerValues,
	timerInputsValues: ITimerValues,
}

export interface ITimerValues {
	hours: string,
	minutes: string,
	seconds: string,
}

export interface ITimerInputsPayload {
	name: string,
	value: string
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

export interface IModes {
	immediate: IMode,
	enterPressed: IMode,
	stopTyping: IMode
}

export interface IMode {
	title: string,
	name: string,
}

export interface IPost {
	id: string,
	text: string
}

export interface ITodo {
	userId?: number,
	id: number,
	title: string,
	completed: boolean
}

export interface ITodosState {
	todos: ITodo[],
	inputValue: string
}