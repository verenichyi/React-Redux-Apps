import axios from 'axios';
import {Dispatch} from 'redux';

import {ITodo} from '../../interfaces';
import {addTodos} from '../../redux/actionCreators';

const getTodos = () => async (dispatch: Dispatch) => {
	try {
		const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=7');

		dispatch(addTodos(response.data));
	} catch (error) {
		alert(error);
	}
};

export default getTodos;