import React, { createContext, useReducer, useContext } from 'react';

const TodoContext = createContext();

export const useTodoContext = () => {
  return useContext(TodoContext);
};

const initialState = {
  todos: [],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (todo) => {
    dispatch({ type: 'ADD_TODO', payload: todo });
  };

  return (
    <TodoContext.Provider value={{ state, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
