import { FaPlus, FaFilter } from "react-icons/fa";

const TicketsHeader = ({ onNewTicket }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          تذاكر الدعم الفني
        </h1>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          إدارة وتتبع تذاكر العملاء.
        </p>
      </div>
      <div className="mt-4 md:mt-0 flex gap-2">
        <button className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-semibold py-2 px-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center gap-2">
          <FaFilter />
          <span>تصفية</span>
        </button>

      </div>
    </div>
  );
};

export default TicketsHeader; 