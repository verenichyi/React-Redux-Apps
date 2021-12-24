import axios from 'axios';
import {Dispatch} from 'redux';

import {ITodo} from '../../interfaces';
import {addTodo} from '../../redux/actionCreators';

const postTodo = (payload: string) => async (dispatch: Dispatch) => {
	try {
		const response = await axios.post<ITodo[]>('https://jsonplaceholder.typicode.com/todos/',
			{
				title: payload,
				completed: false
			});

		dispatch(addTodo(response.data));
	} catch (error) {
		alert(error);
	}
};

export default postTodo;