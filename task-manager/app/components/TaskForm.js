import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
    const [newTask, setNewTask] = useState('');

    const handeSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim() !== '') {
            addTask({id: Date.now(), title: newTask});
            setNewTask('');
        }
    };

    return (
        <form onSubmit={handeSubmit}> 
            <label>
                New Task:
                <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                />
            </label>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;