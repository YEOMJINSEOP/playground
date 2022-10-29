import React, { useState } from 'react';

function AddTodo(props) {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  }
  return (
    <form action="">
      <input 
        type='text'
        placeholder='Add Todo'
        value={text}
        onChange={handleChange}
         />
    </form>
  );
}

export default AddTodo;