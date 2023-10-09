import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const getTodos = async () => {
    const response = await fetch('http://localhost:8000/api/v1/todo');
    const data = await response.json();
    setTodos(data);
  };

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:8000/api/v1/todo/${id}`, {
      method: 'DELETE',
    });
    getTodos();
  };

  const addTodo = async () => {
    await fetch(`http://localhost:8000/api/v1/todo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    });
    getTodos();
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <h1>Hello, World</h1>

      <input
        type="text"
        placeholder="title"
        style={{ margin: '5px', padding: '4px', borderRadius: '5px' }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        style={{ margin: '5px', padding: '4px', borderRadius: '5px' }}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <div>
        {todos.map((todo) => (
          <div
            key={todo._id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button onClick={() => deleteTodo(todo._id)}>delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
