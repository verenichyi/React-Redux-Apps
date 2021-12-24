import React from 'react';
import Todo from '../Todo/Todo';

interface ITodo {
	'userId': number,
	'id': number,
	'title': string,
	'completed': boolean
}

type TodosProps = {
	todos: ITodo[]
}

const Todos = ({todos}: TodosProps) => {

	const todoItems = todos.map((todo: ITodo) => <Todo key={todo.id}>{todo.title}</Todo>)

	return (
		<ul style={{maxWidth: '80%'}}>{todoItems}</ul>
	);
};

export default Todos;