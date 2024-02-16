import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

const TaskList = () => {
    const [tasks, setTasks] = useState([
        
        {id: 1, title: 'Complete Next.js project' },
        {id: 2, title: 'Write documentation' },
        {id: 3, title: 'Review code' },        
    ]);

const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
};

return (
    <div>
        <h2>Task List</h2>
        <u1>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
    ))}
    </u1>
    <TaskForm addTask={addTask} />
    </div>
);
};
export default TaskList;
