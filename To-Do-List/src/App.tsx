import { useState, useEffect } from 'react';
import type { Todo } from './types';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';
import "./App.css";

type Filter = "all" | "active" | "completed";

const STORAGE_KEY = "todos";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

const [filter, setFilter] = useState<Filter>("all");

useEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}, [todos]);

function addTodo(text: string) {
  const newTodo: Todo = {
    id: crypto.randomUUID(),
    text,
    completed: false,
  };
  setTodos([...todos, newTodo]);
}

function toggleTodo(id: string) {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  )
}

function deleteTodo(id: string) {
  setTodos(todos.filter((todo) => todo.id !== id));
}

const filteredTodos = todos.filter((todo) => {
  if (filter === "active") return !todo.completed;
  if (filter === "completed") return todo.completed;
  return true;
});

const activeCount = todos.filter((t) => !t.completed).length;

return (
  <div className="app">
    <h1>To-Do List</h1>

    <ToDoInput onAdd={addTodo} />
    <div className="filters">
      {(["all", "active", "completed"] as Filter[]).map((f) => (
        <button
          key={f}
          className={filter === f ? "active-filter" : ""}
          onClick={() => setFilter(f)}
        >
          {f === "all" ? "All" : f === "active" ? "Active" : "Completed"}
        </button>
      ))}
    </div>

    <ToDoList
      todos={filteredTodos}
      onToggle={toggleTodo}
      onDelete={deleteTodo}
    />

    <p className="counter">{activeCount} Active tasks</p>
  </div>
);
}