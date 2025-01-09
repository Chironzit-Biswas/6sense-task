import React from "react";

function EmptyState({ message }) {
    return (
        <div className="flex flex-col items-center justify-center h-64">
            {/*<img
                //src="https://via.placeholder.com/150"
                alt="No tasks"
                className="mb-4"
            />*/}
            <p className="text-gray-500">{message}</p>
        </div>
    );
}

export default EmptyState;
