import { FaTimes } from "react-icons/fa";
import { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md m-auto p-6 relative transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
        dir="rtl"
      >
        <div className="flex justify-between items-center border-b pb-4 mb-4 border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 p-1 rounded-full"
          >
            <FaTimes size={22} />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal; 