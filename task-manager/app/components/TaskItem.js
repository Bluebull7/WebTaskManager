import { useState } from "react";
import TaskList from "./TaskList";

const TaskItem = ({ task}) => {
    const [completed, setCompleted] = useState(false);

    const handleToggleComplete = () => {
        setCompleted(!completed);
    };

    return (
        <li>
            <span style={{ textDecoration: completed ? 'line-through' : 'none'}}>
                {task.title}
            </span>

            <button> onClick={handleToggleComplete}
                {completed ? 'Undo' : 'Complete'}
            </button>
        
        </li>
    );
};

export default TaskItem;