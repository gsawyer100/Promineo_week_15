
    // Addtask
    // deletetask
    // modifytask
    // Addlist
    // Deletelist
    // Modifylist
    // getread



import React from "react";

export const List = (props) => {
  const { list, updatedList } = props;

  const addTask = (task) => {
    const updatedTasks = [...list.tasks, task];
    const updated = { ...list, tasks: updatedTasks };
    updatedList(updated);
  };

  const deleteTask = (task) => {
    const updatedTasks = list.tasks.filter((t) => t !== task);
    const updated = { ...list, tasks: updatedTasks };
    updatedList(updated);
  };

  const modifyTask = (oldTask, newTask) => {
    const updatedTasks = list.tasks.map((t) => (t === oldTask ? newTask : t));
    const updated = { ...list, tasks: updatedTasks };
    updatedList(updated);
  };

  const addList = (newList) => {
    updatedList(newList);
  };

  const deleteList = () => {
    // assuming updatedList() takes care of removing the list
    updatedList(null);
  };

  const modifyList = (newList) => {
    updatedList(newList);
  };

  const getRead = (task) => {
    // assuming this function does something with the task
    console.log(`Reading task: ${task}`);
  };

  return (
    <div>
      <h2>{list.name}</h2>
      <ul>
        {list.tasks.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <button onClick={() => deleteTask(task)}>Delete</button>{" "}
            <button onClick={() => getRead(task)}>Read</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTask("New Task")}>Add Task</button>{" "}
      <button onClick={deleteList}>Delete List</button>{" "}
      <button onClick={() => modifyTask(list.tasks[0], "Modified Task")}>
        Modify Task
      </button>{" "}
      <button onClick={() => addList({ name: "New List", tasks: [] })}>
        Add List
      </button>{" "}
      <button onClick={() => modifyList({ ...list, name: "Modified List" })}>
        Modify List
      </button>
    </div>
  );
};