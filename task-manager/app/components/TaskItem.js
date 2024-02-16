import React, { useState } from 'react';
import styles from '../../styles/styles.module.css';

const TaskItem = ({ task}) => {
    const [completed, setCompleted] = useState(false);

    const handleToggleComplete = () => {
        setCompleted(!completed);
    };

    return (
        <li className={styles.TaskItem}>
          <span style={{ textDecoration: completed ? 'line-through' : 'none'}}
          className={styles.taskTitle}>
            {task.title}
          </span>
          <button onClick={handleToggleComplete}
          className={styles.toggleButton}>
            {completed ? 'Undo' : 'Complete'}
          </button>
        </li>
    );
};

export default TaskItem;