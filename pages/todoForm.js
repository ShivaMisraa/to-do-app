import React from 'react'
import NewToDoForm from '../Component/NewToDoForm'
import TodoList from '../Component/TodoList';

const todoForm = () => {
    const onAddTodo = (todo) => {
        console.log('Adding todo:', todo);
    };
  return (
    <div>
      <NewToDoForm onAddTodo={onAddTodo}/>
    </div>
  )
}

export default todoForm
