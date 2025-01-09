import React from "react";

function TaskDetails({ task, onClose, onEdit, onDelete }) {
    if (!task) return null; // If no task is selected, do not render anything.

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-end">
            <div className="bg-white w-1/3 h-full p-6 shadow-lg overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700 mb-4"
                >
                    Close
                </button>

                {/* Task Details */}
                <h2 className="text-2xl font-bold mb-4">{task.title}</h2>
                <p className="mb-2">
                    <strong>Description:</strong> {task.description || "No description"}
                </p>
                <p className="mb-2">
                    <strong>Priority:</strong> {task.priority}
                </p>
                <p className="mb-2">
                    <strong>Status:</strong> {task.status}
                </p>
                <p className="mb-2">
                    <strong>Deadline:</strong> {task.dueDate}
                </p>
                <p className="mb-2">
                    <strong>Assigned to:</strong> {task.assignee || "Unassigned"}
                </p>

                {/* Edit/Delete Buttons */}
                <div className="mt-6 flex gap-4">
                    <button
                        onClick={() => onEdit(task)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onDelete(task.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TaskDetails;
