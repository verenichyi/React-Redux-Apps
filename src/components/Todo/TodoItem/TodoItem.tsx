import React, {ReactChild} from 'react';
import {useDispatch} from 'react-redux';

import styles from './todo-item.module.scss'

import {toggleCheck} from '../../../redux/actionCreators';
import deleteTodo from '../../asyncActions/deleteTodo';

type TodoProps = {
	children: ReactChild,
	id: number,
	checked: boolean
}

const TodoItem = ({children, id, checked}: TodoProps) => {
	const dispatch = useDispatch();

	const handleClick = () => dispatch(deleteTodo(id));
	const handleToggle = (): void => dispatch(toggleCheck(id));

	return (
		<li className={styles.todo}>
			<span>
				<input onChange={handleToggle} checked={checked} id={`checkbox${id}`} className={styles.checkbox}
							 type="checkbox"/>
				<label htmlFor={`checkbox${id}`} className={styles.title}>{children}</label>
			</span>
			<span onClick={handleClick} className={styles.deleteButton}>&times;</span>
		</li>
	);
};

export default TodoItem;