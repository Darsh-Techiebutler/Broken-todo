import * as React from "react";
import "./todo-results.scss";
import { TodosContext } from "../../todo-context";

export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);
  // const [count, setCount] = React.useState(0);

  const calculateChecked = () => {
    let count = 0;
    todos.forEach((todo) => {
      if (todo.checked === true) {
        count++;
      }
    });
    return count;
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
