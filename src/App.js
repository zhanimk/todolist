import React from 'react';
import TodoList from './TodoList';
import UserList from './UserList'; 
import './App.css'; 

const App = () => {
  return (
    <div className="container">
      <TodoList />
      <UserList />
    </div>
  );
};

export default App;