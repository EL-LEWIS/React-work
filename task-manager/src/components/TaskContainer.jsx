import React, { useState } from 'react';
import Task from './Task';

function TaskContainer() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Dark sous 1', description: 'Muito bom 1' },
    { id: 2, title: 'dark souls 2', description: 'irado 2' },
  ]);

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: `Dark souls ${tasks.length + 1}`,
      description: `muito massa ${tasks.length + 1}`,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} title={task.title} description={task.description} />
      ))}
      <button onClick={addTask}>Adicionar Tarefa</button>
    </div>
  );
}

export default TaskContainer;
