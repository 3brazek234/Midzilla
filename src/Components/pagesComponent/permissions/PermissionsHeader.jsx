import { FaSave } from "react-icons/fa";

const PermissionsHeader = ({ onSave }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        إدارة الصلاحيات
      </h1>
      <button
        onClick={onSave}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg flex items-center gap-2 transition-all duration-200 transform hover:scale-105"
      >
        <FaSave />
        <span>حفظ التغييرات</span>
      </button>
    </div>
  );
};

export default PermissionsHeader; 