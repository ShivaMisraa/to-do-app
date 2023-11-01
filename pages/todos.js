import React, { useState, useEffect } from 'react';
import TodoList from '../Component/TodoList';
import axios from 'axios';
import { MongoClient, ServerApiVersion } from "mongodb";

export default function Todos({ todos }) {
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
}

export async function getStaticProps() {
  const client = new MongoClient(
    "mongodb+srv://shivam18557:Shivam@cluster0.njwclar.mongodb.net/meetups?retryWrites=true&w=majority",
    {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    }
  );

  await client.connect();

  const db = client.db("your-todos-database");

  const todoCollection = db.collection("todos");

  const todos = await todoCollection.find().toArray();
  const serializedTodos = todos.map((todo) => {
    const { _id, ...rest } = todo;
    return rest;
  });

  client.close();

  return {
    props: {
      todos: serializedTodos,
    },
    revalidate: 10,
  };
}

