import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <div className="container">
      <h1>Todo List</h1>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <div className="todo-details">
              <strong className="todo-title">{todo.title}</strong>
              <p className="todo-desc">{todo.desc}</p>
              <p className="todo-date">{todo.date}</p>
            </div>
            <div className="todo-actions">
              <button className="edit-button">Edit</button>
              <button className="delete-button">Delete</button>
              <span className='tick-mark'>&#9989;</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;