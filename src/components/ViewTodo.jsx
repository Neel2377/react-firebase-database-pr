import React from "react";
import { useNavigate } from "react-router-dom";
import "./ViewTodo.css";

const ViewTodo = ({ todos, loading, error, onDelete, onEdit }) => {
  const navigate = useNavigate();

  const handleEditClick = (item) => {
    onEdit(item);
    navigate("/");
  };

  return (
    <div className="todo-table-wrapper">
      <table className="todo-table">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Todo</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {loading && (
            <tr>
              <td colSpan="3" className="status loading">
                Loading todos...
              </td>
            </tr>
          )}

          {!loading &&
            !error &&
            todos.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td className="todo-title">{item.title}</td>
                <td>
                  <button
                    onClick={() => handleEditClick(item)}
                    className="btn edit"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(item.id)}
                    disabled={loading}
                    className="btn delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

          {!loading && !error && todos.length === 0 && (
            <tr>
              <td colSpan="3" className="status empty">
                No todos found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTodo;
