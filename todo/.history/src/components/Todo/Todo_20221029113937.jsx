import React from 'react';
import {BsFillTrashFill} from 'react-icons/fa';

function Todo(props) {
  return (
    <li>
      <input type='checkbox' />
      <label htmlFor='checkbox'>{props.todo.text}</label>
      <button><BsFillTrashFill/></button>
    </li>
  );
}

export default Todo;