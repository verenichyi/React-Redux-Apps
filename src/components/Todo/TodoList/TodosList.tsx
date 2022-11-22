import React from 'react';

import styles from './TodoList.module.scss';

import { ITodo } from 'src/interfaces';
import TodoItem from 'src/components/Todo/TodoItem/TodoItem';
import modes from 'src/constants/filter';

type ListProps = {
  todos: ITodo[];
  visibilityFilter: string;
};

const TodosList = ({ todos, visibilityFilter }: ListProps) => {
  const getVisibleTodos = (todos: ITodo[], filter: string) => {
    switch (filter) {
      case modes.all:
        return todos;
      case modes.completed:
        return todos.filter((todo) => todo.completed);
      case modes.active:
        return todos.filter((todo) => !todo.completed);
    }
  };

  const todoItems = getVisibleTodos(todos, visibilityFilter).map(
    (todo: ITodo) => (
      <TodoItem key={todo.id} checked={todo.completed} id={todo.id}>
        {todo.title}
      </TodoItem>
    )
  );

  return <ul className={styles.list}>{todoItems}</ul>;
};

export default TodosList;
