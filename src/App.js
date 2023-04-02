import React from 'react';

import './App.css';
import ToDoList from './ToDoList';

function App() {
  return (
    <div className='App'>
      <ToDoList/>
      <NewTodoForm/>
    </div>
  );
}

export default App;
