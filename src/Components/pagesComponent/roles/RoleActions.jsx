import { FaEdit, FaTrash } from "react-icons/fa";

const RoleActions = ({ onEdit, onDelete }) => {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={onEdit}
        className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
        aria-label="Edit role"
      >
        <FaEdit size={18} />
      </button>
      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-200"
        aria-label="Delete role"
      >
        <FaTrash size={18} />
      </button>
    </div>
  );
};

export default RoleActions; 