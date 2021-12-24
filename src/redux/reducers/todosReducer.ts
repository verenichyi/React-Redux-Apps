import {handleActions} from 'redux-actions';


import {ITodosState} from '../../interfaces';
import {addTodo, setTodoInputValue} from '../actionCreators';

const initialState: ITodosState = {
	todos: [
		{
			'userId': 1,
			'id': 1,
			'title': 'delectus aut autem',
			'completed': false
		},
		{
			'userId': 1,
			'id': 2,
			'title': 'quis ut nam facilis et officia qui',
			'completed': false
		},
		{
			'userId': 1,
			'id': 3,
			'title': 'fugiat veniam minus',
			'completed': false
		},
	],
	inputValue: ''
};

const todosReducer = handleActions({
	[addTodo]: (state: ITodosState, {payload}: any) => ({...state}),
	[setTodoInputValue]: (state: ITodosState, {payload}: { payload: string }) => ({...state, inputValue: payload}),
}, initialState);

export default todosReducer;