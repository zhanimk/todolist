import React, { useState } from 'react';
import './App.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleTodoCompletion = (index) => {
    const newTodos = todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Добавьте новую задачу"
      />
      <button onClick={handleAddTodo}>Добавить</button>
      <ul>
        {todos.map((todo, index) => (
          <li 
            key={index} 
            className={todo.completed ? 'completed' : ''} 
            onClick={() => toggleTodoCompletion(index)}
          >
            {todo.text}
            <button onClick={(e) => { e.stopPropagation(); handleDeleteTodo(index); }}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;