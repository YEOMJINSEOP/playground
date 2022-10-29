import React from 'react';
import {FaTrashAlt} from 'react-icons/fa';

function Todo({todo, onUpdate, onDelete}) {
  
  const handleChange = (e) => {
    const status = e.target.checked? 'completed' : 'active';
    onUpdate({...todo, status: status});
  }

  const handleDelete = () => {
    console.log('click');
    onDelete(todo);
  }

  return (
    <li>
      <input 
      type='checkbox' 
      id='checkbox' 
      checked={todo.status === 'completed'}
      onChange={handleChange}/>
      <label htmlFor='checkbox'>{todo.text}</label>
      <button onClick={handleDelete}><FaTrashAlt/></button>
    </li>
  );
}

export default Todo;