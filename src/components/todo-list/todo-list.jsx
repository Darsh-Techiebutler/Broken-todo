import * as React from "react";
import { Checkbox } from "../checkbox";
import { TodosContext } from "../../todo-context";
import "./todo-list.scss";

export const TodoList = () => {
  const { todos, setTodos } = React.useContext(TodosContext);

  const handleDelete = (id) => {
    // Fix an ability to delete task
    console.log(id);

    // setTodos((todos) => {
    //   const index = todos.findIndex((todo) => todo.id === id);
    //   if (index !== -1) {
    //     const newTodos = [...todos];
    //     newTodos.splice(index-1, 1);
    //   }
    // });

    setTodos((data) => {
      const index = data.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        return newTodos;
      }
      return data;
    });
    // console.log(todos);
  };

  const toggleCheck = (id) => {
    // Fix an ability to toggle task
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
    console.log(todos);
  };

  const editTodo = (id) => {
    const editlog = todos.find((todo) => todo.id === id);
    const newLabel = prompt("Edit Todo", editlog.label);
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, label: newLabel } : todo
      )
    );
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <div key={todoItem.id} className="todo-item">
              <Checkbox
                label={todoItem.label}
                checked={todoItem.checked}
                onClick={() => toggleCheck(todoItem.id)}
                onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
                onDelete={() => handleDelete(todoItem.id)}
                onEdit={() => editTodo(todoItem.id)}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  );
};
