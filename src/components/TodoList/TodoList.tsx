import React, {ChangeEvent, FormEvent, ReducerState, useState} from 'react';

import styles from './todo-list.module.scss';
import Todos from './Todos/Todos';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {setTodoInputValue} from '../../redux/actionCreators';

const TodoList = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state: RootStateOrAny)=> state.todosReducer.todos);
	const inputValue = useSelector((state: RootStateOrAny)=> state.todosReducer.inputValue);

	const handleSubmit = (event: FormEvent): void => {
		event.preventDefault();

	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => dispatch(setTodoInputValue(event.target.value));

	return (
		<div className={styles.list}>
			<form onSubmit={handleSubmit}>
				<input value={inputValue} onChange={handleChange} className={styles.addTodoInput} placeholder={'Add todo...'}
							 type="text"/>
			</form>
			<Todos todos={todos}/>
		</div>
	)
};

export default TodoList;