import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <div className="flex justify-center items-center gap-4 mt-6">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:bg-gray-100"
            >
                Previous
            </button>
            <span>
        Page {currentPage} of {totalPages}
      </span>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:bg-gray-100"
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
