import React from 'react';
import {FaTrashAlt} from 'react-icons/fa';

function Todo(props) {
  const handleChange = (e) => {
    const status = e.target.checked? 'completed' : 'active';
    onUpdate({...props.todo, props.todo.status:status });
  }
  return (
    <li>
      <input 
      type='checkbox' 
      id='checkbox' 
      checked={props.todo.status === 'completed'}
      onChange={handleChange}/>
      <label htmlFor='checkbox'>{props.todo.text}</label>
      <button><FaTrashAlt/></button>
    </li>
  );
}

export default Todo;