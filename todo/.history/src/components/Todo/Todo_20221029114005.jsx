import React from 'react';
import {FaTrashAlt} from 'react-icons/fa';

function Todo(props) {
  return (
    <li>
      <input type='checkbox' />
      <label htmlFor='checkbox'>{props.todo.text}</label>
      <button><FaTrashAlt/></button>
    </li>
  );
}

export default Todo;