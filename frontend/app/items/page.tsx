// app/items/page.tsx

'use client'; // Add this directive to mark this component as a Client Component

import axios from 'axios';
import { useState } from 'react';
import Link from 'next/link';

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  completed: boolean;
}

const ItemsPage = async () => {
  // Fetch data on the server side
  // const res = await axios.get('http://localhost:8000/api/items/');
  // console.log(res);
  // const items: Item[] = res.data;

  const [newItem, setNewItem] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newPrice, setNewPrice] = useState(0);
  const [todos, setTodos] = useState([{}]);
  axios.get('http://localhost:8000/api/items/').then(res=>{
    console.log(res);
    
  })
  

  // Add a new to-do item
  const addItem =  () => {
    const response = axios.post('http://localhost:8000/api/items/create/', {
      name: newItem,
      description: newDescription,
      price: newPrice,
      completed: false,
    });
    setTodos([...todos, response.data]);
    setNewItem('');
    setNewDescription('');
    setNewPrice(0);
  };

  // Update the completion status of a to-do item
  const updateItem = async (id: number) => {
    const updatedItem = todos.find((todo) => todo.id === id);
    if (updatedItem) {
      const response = await axios.put(`http://localhost:8000/api/items/update/${id}/`, {
        ...updatedItem,
        completed: !updatedItem.completed,
      });
      setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
    }
  };

  // Delete a to-do item
  const deleteItem = async (id: number) => {
    await axios.delete(`http://localhost:8000/api/items/delete/${id}/`);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>To-Do List</h1>

      {/* Add Task Section */}
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Task name"
        />
        <textarea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Task description"
        />
        <input
          type="number"
          value={newPrice}
          onChange={(e) => setNewPrice(Number(e.target.value))}
          placeholder="Price"
        />
        <button onClick={addItem}>Add Task</button>
      </div>

      {/* List all tasks */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.name}</h3>
            <p>{todo.description}</p>
            <p>Price: ${todo.price}</p>
            <button onClick={() => updateItem(todo.id)}>
              {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <button onClick={() => deleteItem(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Navigation Links */}
      <div>
        <Link href="/">Go to Home</Link>
      </div>
    </div>
  );
};

export default ItemsPage;
