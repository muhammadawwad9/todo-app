import React from "react";
import "./Todo.css";
const Todo = ({ todo, setTodos }) => {
  const deleteHandler = () => {
    setTodos((prev) => prev.filter((elem) => elem.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos((prev) => {
      return prev.map((elem) => {
        if (elem.id === todo.id) {
          return {
            ...elem,
            completed: !elem.completed,
          };
        }
        return elem;
      });
    });
  };
  return (
    <div className=" todo d-flex flex-column align-items-center mx-auto mt-3 ">
      <li
        className={`list-group-item text-center w-50 ${
          todo.completed ? "completed" : ""
        }`}
      >
        {todo.text}
      </li>
      <div className="delete-edit-btn d-flex justify-content-center mt-2">
        <button className="btn btn-danger m-1" onClick={deleteHandler}>
          Delete
        </button>
        <button className="btn btn-success m-1" onClick={completeHandler}>
          Complete
        </button>
      </div>
    </div>
  );
};

export default Todo;
