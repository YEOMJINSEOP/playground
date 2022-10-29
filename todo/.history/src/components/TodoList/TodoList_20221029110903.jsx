import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';

function TodoList(props) {
  const [todos, setTodos] = useState([
    {id: '123', text: '장보기', status:'active'},
    {id: '124', text: '공부하기', status: 'active'},
  ]);
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <AddTodo/>
    </div>
  );
}

export default TodoList;