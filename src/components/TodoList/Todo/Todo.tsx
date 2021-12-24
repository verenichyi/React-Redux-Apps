import React, {ReactChild} from 'react';

import styles from './todo.module.scss'

type TodoProps = {
	children: ReactChild
}

const Todo = ({children}: TodoProps) => {
	return (
		<li className={styles.todo}>{children}</li>
	);
};

export default Todo;