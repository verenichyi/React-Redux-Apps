import {handleActions} from 'redux-actions';

import {ITodo, ITodosState} from '../../interfaces';
import {addTodo, addTodos, removeTodo, setTodoInputValue, toggleCheck} from '../actionCreators';

const initialState: ITodosState = {
	todos: [],
	inputValue: ''
};

const todosReducer = handleActions({
	[addTodo]: (state: ITodosState, {payload}: { payload: ITodo }) => {
		return {
			...state,
			todos: [...state.todos, payload],
			inputValue: ''
		}
	},
	[removeTodo]: (state: ITodosState, {payload}: { payload: number }) => {
		return {
			...state,
			todos: [...state.todos.filter((todo) => todo.id !== payload)]
		}
	},
	[toggleCheck]: (state: ITodosState, {payload}: { payload: number }) => {
		return {
			...state,
			todos: [...state.todos.map((todo) => {
				if (todo.id === payload) todo.completed = !todo.completed;

				return todo;
			})]
		}
	},
	[setTodoInputValue]: (state: ITodosState, {payload}: { payload: string }) => ({...state, inputValue: payload}),
	[addTodos]: (state: ITodosState, {payload}: { payload: ITodo[] }) => ({...state, todos: [...payload]}),
}, initialState);

export default todosReducer;