import React, { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import ToDoForm from './components/ToDoForm';
import ToDoStatus from './components/ToDoStatus';

const App = () => {
  const [allTodos, setAllTodos] = useState(todoArray);

  const handleCompletion = (id) => {
    const todoItems = allTodos.concat();

    todoItems.forEach((todo) => {
      if (todo.id === id) {
        return (todo.complete = !todo.complete);
      }
    });

    setAllTodos(todoItems);
  };

  const handleDelete = (id) => {
    const deleteTodo = allTodos.filter((todo) => {
      return todo.id !== id;
    });

    setAllTodos(deleteTodo);
  };

  const addNewTodo = (e) => {



    const newTodo = {
      id: uuidv4(),
      name: e,
      complete: false,
    };

    setAllTodos(allTodos.concat(newTodo));
  }



  return (
    <div className='appWrapper'>
      <h2>To-Do list</h2>
      <ToDoForm addNewTodo={addNewTodo} />
      {allTodos.map((todo) => (
        <ToDoStatus
          key={todo.id}
          todo={todo}
          handleCompletion={handleCompletion}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

const todoArray = [
  { id: uuidv4(), name: 'Go to the supermarket', complete: false },
  { id: uuidv4(), name: 'Call Alice', complete: false },
  { id: uuidv4(), name: 'Ask Alice to call Bob', complete: false },
  { id: uuidv4(), name: 'Do the dishes', complete: false },
  { id: uuidv4(), name: 'Change car tyres', complete: false },
];

export default App;
