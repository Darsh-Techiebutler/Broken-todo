import * as React from "react";
import { TodoForm } from "./components/todo-form";
import { TodoList } from "./components/todo-list";
import { TodoResults } from "./components/todo-results";
import { TodosContext } from "./todo-context";
import "./index.scss";

const todosTemplate = [
  {
    id: 0,
    label: "Fix an ability to display all tasks",
    checked: true,
  },
  {
    id: 1,
    label: "Fix a layout, checkboxes should be listed in a column",
    checked: true,
  },
  {
    id: 2,
    label: "Fix an ability to add a new task",
    checked: true,
  },
  {
    id: 3,
    label: "Fix an ability to toggle a task",
    checked: false,
  },
  {
    id: 4,
    label: "Fix an ability to delete a task",
    checked: true,
  },
  {
    id: 5,
    label: "Fix an ability to count completed tasks",
    checked: false,
  },
];

export const App = () => {
  const [todos, setTodos] = React.useState([]);

  return (
    <div className="root">
      <TodosContext.Provider value={{ todos, setTodos }}>
        {/* Props passing in the Todo From for the set add the data for*/}
        <TodoForm setTodos={setTodos} />
        <TodoResults />
        <TodoList />
      </TodosContext.Provider>
    </div>
  );
};
