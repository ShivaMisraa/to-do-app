import React, { useState } from "react";
import axios from "axios";

const NewToDoForm = () => {
  const [todo, setTodo] = useState({ title: '', desc: '', date: '', status: false });

  const addNewToDo = () => {
    axios.post("/api/todos", todo)
      .then((response) => {
        console.log("Todo saved:", response.data);
        setTodo({ title: '', desc: '', date: '', status: false });
      })
      .catch((error) => {
        console.error("Error saving todo:", error);
      });
  }

  const onChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <form>
        <div className="form-group">
          <label htmlFor="task">Add To Do</label>
          <input onChange={onChange} required value={todo.title} name="title" type="text" id="task" placeholder="Add a new task" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input required onChange={onChange} value={todo.desc} name="desc" type="text" id="description" placeholder="Description" />
        </div>
        <div className="form-group">
          <label htmlFor="Date">Date</label>
          <input required onChange={onChange} value={todo.date} name="date" type="date" id="date" placeholder="Date" />
        </div>
        <button type="button" onClick={addNewToDo}>Add ToDo</button>
      </form>
    </div>
  );
};

export default NewToDoForm;