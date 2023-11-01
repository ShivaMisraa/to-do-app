import React, { useState } from "react";
import NewToDoForm from "../Component/NewToDoForm";

const Home = () => {
  const onAddTodo = (todo) => {
      console.log('Adding todo:', todo);
  };
return (
  <div>
    <NewToDoForm onAddTodo={onAddTodo}/>
  </div>
)
}

export default Home;
