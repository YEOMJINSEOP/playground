import React, { useState } from 'react';

function AddTodo(props) {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        placeholder='Add Todo'
        value={text}
        onChange={handleChange}
         />
      <button>Add</button>
    </form>
  );
}

export default AddTodo;