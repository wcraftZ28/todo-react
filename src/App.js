import { useState } from 'react';
import initialTodos from './todos.js';
import TodoList from './TodoList.js';

export default function App() {
  const [todos, setTodos] = useState(initialTodos);
  const setDone = (key) => {
    const newTodos = [...todos];
    const deep = newTodos.find(current => current.key === key);
    if (deep) {
      deep.done = true;
    }
    setTodos(newTodos);
  };
  const del = (key) => {
    const newTodos = todos.filter(current => current.key !== key);
    setTodos(newTodos);
  };
  return (
    <div className="container">
      <nav className="navbar is-light">
        <div className="navbar-brand">
          <span className="navbar-item is-uppercase">
            Todos
          </span>
        </div>
      </nav>
      <main className="content px-6 py-6">
        <TodoList list={todos} setDone={setDone} del={del} />
      </main>
    </div>
  );
}
