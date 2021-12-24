import React from 'react';

import {ITodo} from '../../../interfaces';
import TodoItem from '../TodoItem/TodoItem';

const TodosList = ({todos}: { todos: ITodo[] }) => {
	const todoItems = todos.map((todo: ITodo) =>
		<TodoItem key={todo.id} checked={todo.completed} id={todo.id}>{todo.title}</TodoItem>)

	return <ul style={{width: '70vmax'}}>{todoItems}</ul>;
};

export default TodosList;