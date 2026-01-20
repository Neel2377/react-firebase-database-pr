import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import { createTodo, getAllTodo, deleteTodo, updateTodo } from "./features/todo/todoSlice";
import Todo from './components/Todo';
import ViewTodo from './components/ViewTodo';
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todos);

  const [todo, setTodo] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    dispatch(getAllTodo());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;

    if (editId) {
      dispatch(updateTodo({ id: editId, title: todo }));
      setEditId(null);
    } else {
      dispatch(createTodo({ title: todo }));
    }
    setTodo("");
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setTodo(item.title);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo App</h1>

        <nav className="nav">
          <Link to="/" className="nav-link primary">
            Add Todo
          </Link>

          <Link to="/todos" className="nav-link dark">
            View Todos
          </Link>
        </nav>
      </header>
      
      <main className="app-content">
        <Routes>
          <Route
            path="/"
            element={
              <div className="card">
                <Todo
                  todo={todo}
                  setTodo={setTodo}
                  editId={editId}
                  loading={loading}
                  error={error}
                  handleSubmit={handleSubmit}
                />
              </div>
            }
          />

          <Route
            path="/todos"
            element={
              <div className="card">
                <ViewTodo
                  todos={todos}
                  loading={loading}
                  error={error}
                  onDelete={(id) => dispatch(deleteTodo(id))}
                  onEdit={handleEdit}
                />
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
