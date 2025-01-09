import React, { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTaskModal from "./components/AddTaskModal";
import TaskDetails from "./components/TaskDetails";
import Pagination from "./components/Pagination";
import EmptyState from "./components/EmptyState";

function App() {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filter, setFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const tasksPerPage = 5;

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: `task-${tasks.length + 1}` }]);
    };

    const handleTaskClick = (task) => {
        setSelectedTask(task);
    };

    const handleTaskDelete = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
        setSelectedTask(null);
    };

    const handleTaskEdit = (task) => {
        alert(`Edit Task: ${task.title}`);
    };

    const filteredTasks = tasks.filter((task) => {
        const matchesFilter = filter === "All" || task.status === filter;
        const matchesSearch =
            task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (task.description || "").toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const startIdx = (currentPage - 1) * tasksPerPage;
    const currentTasks = filteredTasks.slice(startIdx, startIdx + tasksPerPage);
    const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);

    return (
        <div className="min-h-screen bg-gray-100">
            <Header
                onAddTask={() => setIsModalOpen(true)}
                onFilterChange={setFilter}
                currentFilter={filter}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
            />
            {filteredTasks.length > 0 ? (
                <>
                    <TaskList tasks={currentTasks} onTaskClick={handleTaskClick} />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </>
            ) : (
                <EmptyState message="No tasks found" />
            )}
            {isModalOpen && (
                <AddTaskModal
                    onClose={() => setIsModalOpen(false)}
                    onSave={addTask}
                />
            )}
            {selectedTask && (
                <TaskDetails
                    task={selectedTask}
                    onClose={() => setSelectedTask(null)}
                    onEdit={handleTaskEdit}
                    onDelete={handleTaskDelete}
                />
            )}
        </div>
    );
}

export default App;
