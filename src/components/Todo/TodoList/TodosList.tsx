import React from 'react';

import styles from './TodoList.module.scss';

import {ITodo} from 'src/interfaces';
import TodoItem from 'src/components/Todo/TodoItem/TodoItem';

type ListProps = {
	todos: ITodo[]
}

const TodosList = ({todos}: ListProps) => {
	const todoItems = todos.map((todo: ITodo) =>
		<TodoItem key={todo.id} checked={todo.completed} id={todo.id}>{todo.title}</TodoItem>)

	return <ul className={styles.list}>{todoItems}</ul>;
};

export default TodosList;