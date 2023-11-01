import React from 'react';
import axios from 'axios';

const TodoList = ({ todos }) => {
  const handleCheckboxChange = (todo) => {
    // Toggle the status (true to false, false to true)
    const updatedStatus = !todo.status;
  
    // Ensure todo._id is valid
    if (todo._id) {
      console.log(todo._id)
      // Send a PUT request to update the status in MongoDB
      axios.put(`/api/todos/${todo._id}`, { status: updatedStatus })
        .then((response) => {
          console.log("Status updated:", response.data);
          // You can refresh the to-do list if needed
        })
        .catch((error) => {
          console.error("Error updating status:", error);
        });
    }
  };
  
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
              <input
                type="checkbox"
                name="task-status"
                value="completed"
                checked={todo.status}
                onClick={() => handleCheckboxChange(todo)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;