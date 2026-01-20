import React from "react";
import { useNavigate } from "react-router-dom";
import "./Todo.css";

const Todo = ({ todo, setTodo, editId, loading, error, handleSubmit }) => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    handleSubmit(e);

    if (todo.trim() && !loading) {
      navigate("/todos");
    }
  };

  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <h2 className="todo-title">{editId ? "Edit Todo" : "Add Todo"}</h2>

      {error && <div className="todo-error">{error}</div>}

      <div className="todo-field">
        <label className="todo-label">Todo</label>
        <input
          type="text"
          className="todo-input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          disabled={loading}
          placeholder="Enter your todo..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`todo-btn ${editId ? "edit" : ""}`}
      >
        {loading ? "Saving..." : editId ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
};

export default Todo;
