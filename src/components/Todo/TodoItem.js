import React from 'react';
import {MdDelete, MdDone} from "react-icons/md";

import './scss/TodoItem.scss';

const TodoItem = ({ item }) => {

  const { title, done } = item;

  return (
    <li className='todo-list-item'>
      <div className={`check-circle ${done ? 'active' : undefined}`}>
        {done && <MdDone/>}
      </div>
      <span className={`text ${done ? 'finish' : undefined}`}>{title}</span>
      <div className='remove'>
        <MdDelete/>
      </div>
    </li>
  );
};

export default TodoItem;