import { FaPlus } from "react-icons/fa";

const AdminsHeader = ({ onAddAdminClick }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        إدارة المديرين
      </h1>
      <button
        onClick={onAddAdminClick}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors duration-200"
      >
        <FaPlus />
        <span>إضافة مدير جديد</span>
      </button>
    </div>
  );
};

export default AdminsHeader; 