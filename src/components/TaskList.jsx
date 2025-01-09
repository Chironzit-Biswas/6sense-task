import React from "react";
import TaskCard from "./TaskCard";

function TaskList({ tasks, onTaskClick }) {
    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tasks.map((task, index) => (
                <div key={task.id} onClick={() => onTaskClick(task)}>
                    <TaskCard task={task} />
                </div>
            ))}
        </div>
    );
}

export default TaskList;
