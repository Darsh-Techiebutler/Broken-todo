import * as React from "react";
import { TodosContext } from "../../todo-context";
import "./todo-form.scss";

export const TodoForm = ({ setTodos }) => {
  // const { todos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState("");
  const handleAddTodo = () => {
    if (task == "") {
      alert("Todo is requir");
      return;
    }
    setTodos((todo) => [...todo, { id: Math.random(), label: task }]);
    setTask("");
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };
  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
