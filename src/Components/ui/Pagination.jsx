import React from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Pagination = ({ currentPage = 1, totalPages = 1, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center gap-2" dir="rtl">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center h-10 w-10 rounded-lg transition-colors duration-200 
          text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200
          bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600
          hover:bg-gray-50 dark:hover:bg-gray-700
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
          disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="الصفحة السابقة"
      >
        <FaChevronRight />
      </button>

      {getPageNumbers().map((pageNumber, index) => (
        <button
          key={index}
          onClick={() => pageNumber !== '...' && onPageChange(pageNumber)}
          disabled={pageNumber === '...'}
          className={`
            flex items-center justify-center h-10 w-10 rounded-lg transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            disabled:opacity-50 disabled:cursor-not-allowed
            ${
              pageNumber === currentPage
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
            }
            ${pageNumber === '...' ? 'cursor-default' : 'cursor-pointer'}
          `}
          aria-label={`الصفحة ${pageNumber}`}
          aria-current={pageNumber === currentPage ? 'page' : undefined}
        >
          {pageNumber}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center h-10 w-10 rounded-lg transition-colors duration-200 
          text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200
          bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600
          hover:bg-gray-50 dark:hover:bg-gray-700
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
          disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="الصفحة التالية"
      >
        <FaChevronLeft />
      </button>
    </div>
  );
};

export default Pagination;