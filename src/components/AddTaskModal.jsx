import React, { useState } from "react";

function AddTaskModal({ onClose, onSave }) {
    const [title, setTitle] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("Low");
    const [status, setStatus] = useState("Pending");
    const [assignee, setAssignee] = useState("");

    const handleSave = () => {
        onSave({ title, dueDate, priority, status, assignee });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 w-96">
                <h2 className="text-lg font-bold mb-4">Add New Task</h2>
                <input
                    type="text"
                    placeholder="Task Title"
                    className="border rounded-lg w-full p-2 mb-4"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="date"
                    className="border rounded-lg w-full p-2 mb-4"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
                <select
                    className="border rounded-lg w-full p-2 mb-4"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
                <select
                    className="border rounded-lg w-full p-2 mb-4"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                </select>
                <input
                    type="text"
                    placeholder="Assignee"
                    className="border rounded-lg w-full p-2 mb-4"
                    value={assignee}
                    onChange={(e) => setAssignee(e.target.value)}
                />
                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddTaskModal;
