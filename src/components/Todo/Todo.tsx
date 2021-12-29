import React, {ChangeEvent, FormEvent, Suspense, useEffect} from 'react';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';

import styles from './todo.module.scss';

import {setTodoInputValue} from 'src/redux/actionCreators';
import {ITodo} from 'src/interfaces';
import TodoAPI from 'src/asyncActions/TodoAPI';

const TodosList = React.lazy(() => import('./TodoList/TodosList'));

const Todo = () => {
	const dispatch = useDispatch();

	const todos: ITodo[] = useSelector((state: RootStateOrAny) => state.todosReducer.todos);
	const inputValue: string = useSelector((state: RootStateOrAny) => state.todosReducer.inputValue);

	const handleSubmit = (event: FormEvent): void => {
		event.preventDefault();

		if (inputValue.trim()) dispatch(TodoAPI.postTodo(inputValue));
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => dispatch(setTodoInputValue(event.target.value));

	useEffect(() => {
		dispatch(TodoAPI.getTodos());
	}, [])

	return (
		<div className={styles.list}>
			<form onSubmit={handleSubmit}>
				<input value={inputValue} onChange={handleChange} className={styles.addTodoInput} placeholder={'Add todo...'}
							 type="text"/>
			</form>
			{todos.length ?
				<Suspense fallback={'Loading...'}>
					<TodosList todos={todos}/>
				</Suspense> :
				<p>No Todos!</p>}
		</div>
	)
};

export default Todo;