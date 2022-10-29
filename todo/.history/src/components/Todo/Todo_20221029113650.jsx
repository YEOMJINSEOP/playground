import React from 'react';

function Todo(props) {
  return (
    <li>
      <input type='checkbox' />
      <label>{props.todo.text}</label>
    </li>
  );
}

export default Todo;