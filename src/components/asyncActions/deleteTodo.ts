import axios from 'axios';
import {Dispatch} from 'redux';

import { removeTodo } from '../../redux/actionCreators';

const deleteTodo = (payload: number) => async (dispatch: Dispatch) => {
	try {
		await axios.delete(`https://jsonplaceholder.typicode.com/todos/${payload}`);

		dispatch(removeTodo(payload));
	} catch (error) {
		alert(error);
	}
};

export default deleteTodo;