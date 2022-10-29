import React from 'react';
import {FaBsFillTrashFill} from 'react-icons/fa';

function Todo(props) {
  return (
    <li>
      <input type='checkbox' />
      <label htmlFor='checkbox'>{props.todo.text}</label>
      <button><FaBsFillTrashFill/></button>
    </li>
  );
}

export default Todo;