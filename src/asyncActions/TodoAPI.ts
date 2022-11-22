import { Dispatch } from 'redux';
import axios from 'axios';

import { ITodo } from 'src/interfaces';
import { addTodo, addTodos, removeTodo } from 'src/redux/actionCreators';

export default {
  url: 'https://jsonplaceholder.typicode.com/todos',
  getTodos() {
    return async (dispatch: Dispatch) => {
      try {
        const response = await axios.get<ITodo[]>(`${this.url}?_limit=7`);

        dispatch(addTodos(response.data));
      } catch (error) {
        console.log(error);
      }
    };
  },
  postTodo(payload: string) {
    return async (dispatch: Dispatch) => {
      try {
        const response = await axios.post<ITodo[]>(this.url, {
          title: payload,
          completed: false,
        });

        dispatch(addTodo(response.data));
      } catch (error) {
        console.log(error);
      }
    };
  },
  deleteTodo(payload: number) {
    return async (dispatch: Dispatch) => {
      try {
        await axios.delete(`${this.url}/${payload}`);

        dispatch(removeTodo(payload));
      } catch (error) {
        console.log(error);
      }
    };
  },
};
