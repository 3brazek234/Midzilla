import { FaEdit, FaTrash } from "react-icons/fa";

const DiscountActions = ({ onEdit, onDelete }) => {
  return (
    <div className="flex items-center justify-end gap-4">
      <button
        onClick={onEdit}
        className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
        aria-label="Edit discount"
      >
        <FaEdit size={18} />
      </button>
      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-200"
        aria-label="Delete discount"
      >
        <FaTrash size={18} />
      </button>
    </div>
  );
};

export default DiscountActions; 