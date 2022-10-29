import React from 'react';
import {FaTrashAlt} from 'react-icons/fa';

function Todo({todo, onUpdate, onDelete}) {
  const {text, status} = todo;
  const handleChange = (e) => {
    const status = e.target.checked? 'completed' : 'active';
    onUpdate({...todo, status: status});
  }
  return (
    <li>
      <input 
      type='checkbox' 
      id='checkbox' 
      checked={todo.status === 'completed'}
      onChange={handleChange}/>
      <label htmlFor='checkbox'>{todo.text}</label>
      <button><FaTrashAlt/></button>
    </li>
  );
}

export default Todo;