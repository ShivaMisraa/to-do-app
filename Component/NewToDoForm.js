import React, { useState } from 'react';
import { useTodoContext } from '../Context/Todocontext';

const NewToDoForm = () => {
    const { addTodo: contextAddToDo } = useTodoContext();
    const [todo, setTodo] = useState({ title: '', desc: '', date: '' });

    const addNewToDo = () => {
        contextAddToDo(todo);  // Add the todo to the global state context
        setTodo({ title: '', desc: '', date: '' });
    }

    const onChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    }

    return (
        <div className="container">
            <h1>To-Do List</h1>
            <form onSubmit={(e) => e.preventDefault()}>
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
                <button onClick={addNewToDo}>Add ToDo</button>
            </form>
        </div>
    );
};

export default NewToDoForm;
