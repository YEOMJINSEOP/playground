import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

function TodoList(props) {
  const [todos, setTodos] = useState([
    {id: '123', text: '장보기', status:'active'},
    {id: '124', text: '공부하기', status: 'active'},
  ]);
  
  const handleAdd = (todo) => {
    setTodos([...todos, todo])
  }

  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => (todo.id === updated.id? updated: todo)))
  }
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <Todo 
          key={item.id} 
          todo={item} 
          onUpdate={handleUpdate} 
          onDelete={handelDelete}/>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd}/>
    </div>
  );
}

export default TodoList;