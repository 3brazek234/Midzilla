import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const AdminActions = ({ onDetails, onEdit, onDelete }) => {
  return (
    <div className="flex items-center justify-end gap-4">
      <button
        onClick={onDetails}
        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
        aria-label="View details"
      >
        <FaEye size={18} />
      </button>
      <button
        onClick={onEdit}
        className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
        aria-label="Edit admin"
      >
        <FaEdit size={18} />
      </button>
      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-200"
        aria-label="Delete admin"
      >
        <FaTrash size={18} />
      </button>
    </div>
  );
};

export default AdminActions; 