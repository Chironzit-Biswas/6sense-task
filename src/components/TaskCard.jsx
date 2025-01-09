import React from "react";

function TaskCard({ task }) {
    return (
        <div className="bg-white shadow rounded-lg p-4 border hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-bold">{task.title}</h2>
            <p className="text-gray-500">Due: {task.dueDate}</p>
            <p className={`text-sm mt-2 ${getPriorityColor(task.priority)}`}>
                Priority: {task.priority}
            </p>
            <p className="text-sm text-gray-500">Assigned to: {task.assignee}</p>
        </div>
    );
}

function getPriorityColor(priority) {
    switch (priority) {
        case "High":
            return "text-red-500";
        case "Medium":
            return "text-yellow-500";
        default:
            return "text-green-500";
    }
}

export default TaskCard;
