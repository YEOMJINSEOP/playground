import React, { useState } from 'react';

function AddTodo(props) {
  const [text, setText] = useState('');
  return (
    <form action="">
      <input 
        type='text'
        placeholder='Add Todo'
        value={props.text}
        onChange={props.handleChange}
         />
    </form>
  );
}

export default AddTodo;