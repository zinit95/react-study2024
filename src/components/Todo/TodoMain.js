import React from 'react';

import './scss/TodoMain.scss';
import TodoItem from "./TodoItem";

const TodoMain = () => {

  const DUMMY_TODOS = [
    {id : 1, title : '리액트 공부', done : true},
    {id : 2, title : '점심먹기', done : false},
    {id : 3, title : '집에가기', done : false},
    {id : 4, title : '잠자기', done : false},
  ]

  return (
    <ul className='todo-list'>
      {
        DUMMY_TODOS.map(todo => <TodoItem key={todo.id} item={todo}/>)
      }
    </ul>
  );
};

export default TodoMain;