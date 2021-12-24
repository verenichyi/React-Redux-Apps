import React, {ChangeEvent, FormEvent, useState} from 'react';

import styles from './todo-list.module.scss';

const TodoList = () => {
	const [value, setValue] = useState('');

	const handleSubmit = (event: FormEvent): void => {
		event.preventDefault();

	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => setValue(event.target.value);

	return (
		<div className={styles.list}>
			<form onSubmit={handleSubmit}>
				<input value={value} onChange={handleChange} className={styles.addTodoInput} placeholder={'Add todo...'} type="text"/>
			</form>
		</div>
	)
};

export default TodoList;