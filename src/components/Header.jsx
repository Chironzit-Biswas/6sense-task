import React from "react";



function Header({ onAddTask, onFilterChange, currentFilter, searchQuery, onSearchChange }) {
    return (
        <header className="bg-white shadow p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Task Management</h1>
            <div className="flex items-center gap-4">
                {/* Search Bar */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search tasks…"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="border rounded-lg px-4 py-2 w-64"
                    />
                    <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400">
                     🔍
                    </span>

                </div>


                {/* Filter Dropdown */}
                <select
                    className="border rounded-lg px-4 py-2"
                    value={currentFilter}
                    onChange={(e) => onFilterChange(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>

                {/* Add Task Button */}
                <button
                    onClick={onAddTask}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                    + Add Task
                </button>
            </div>
        </header>
    );
}

export default Header;
