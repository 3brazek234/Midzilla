import { FaPlus } from "react-icons/fa";

const RolesHeader = ({ onAddRoleClick }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        إدارة الأدوار
      </h1>
      <button
        onClick={onAddRoleClick}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors duration-200"
      >
        <FaPlus />
        <span>إضافة دور جديد</span>
      </button>
    </div>
  );
};

export default RolesHeader; 