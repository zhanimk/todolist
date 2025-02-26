import React, { useState } from 'react';
import './App.css'; 
const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };
  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-list">
      <h1>To Do List</h1>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Введите задачу"
      />
      <button onClick={handleAddTask}>Добавить</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span>{task}</span>
            <button onClick={() => handleDeleteTask(index)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;