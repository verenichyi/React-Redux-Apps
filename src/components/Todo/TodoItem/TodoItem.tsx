import React, {ReactChild} from 'react';
import {useDispatch} from 'react-redux';

import styles from './todo-item.module.scss'

import {toggleCheck} from 'src/redux/actionCreators';
import TodoAPI from 'src/asyncActions/TodoAPI';

type TodoProps = {
	children: ReactChild,
	id: number,
	checked: boolean
}

const TodoItem = ({children, id, checked}: TodoProps) => {
	const dispatch = useDispatch();

	const handleClick = () => dispatch(TodoAPI.deleteTodo(id));
	const handleToggle = () => dispatch(toggleCheck(id));

	const inputId: string = `checkbox${id}`;

	return (
		<li className={styles.todo}>
			<span>
				<input onChange={handleToggle} checked={checked} id={inputId} className={styles.checkbox} type="checkbox"/>
				<label htmlFor={inputId} className={styles.title}>{children}</label>
			</span>
			<span onClick={handleClick} className={styles.deleteButton}>&times;</span>
		</li>
	);
};

export default TodoItem;