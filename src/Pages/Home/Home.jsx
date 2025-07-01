import StatisticsCards from "../../Components/pagesComponent/home/StatisticsCards";
import RecentActivity from "../../Components/pagesComponent/home/RecentActivity";
import QuickActions from "../../Components/pagesComponent/home/QuickActions";
import { FaUsers, FaShoppingBag, FaChartLine, FaBell } from "react-icons/fa";

const Home = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header - Main Dashboard Overview */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-2xl">🎮</span>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              الواجهة الرئيسية
            </h1>
          </div>
    
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Visitors Count Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <FaUsers className="text-blue-500 text-xl" />
              <h3 className="font-semibold text-gray-900 dark:text-white">
                عدد الزوار اليوم/الأسبوع
              </h3>
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            1,234
          </div>
          <div className="flex items-center text-sm text-green-600 dark:text-green-400">
            <span>↑ 12%</span>
            <span className="text-gray-500 dark:text-gray-400 mr-2">
              مقارنة بالأسبوع السابق
            </span>
          </div>
        </div>

        {/* Recent Orders Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <FaShoppingBag className="text-purple-500 text-xl" />
              <h3 className="font-semibold text-gray-900 dark:text-white">
                عدد الطلبات الأخيرة
              </h3>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">
                تم التنفيذ
              </span>
              <span className="text-green-600 dark:text-green-400">45</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">
                قيد التنفيذ
              </span>
              <span className="text-yellow-600 dark:text-yellow-400">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">ملغاة</span>
              <span className="text-red-600 dark:text-red-400">3</span>
            </div>
          </div>
        </div>

        {/* Daily/Weekly Revenue Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <FaChartLine className="text-green-500 text-xl" />
              <h3 className="font-semibold text-gray-900 dark:text-white">
                الإيرادات اليومية/الأسبوعية
              </h3>
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            $12,345
          </div>
          <div className="flex items-center text-sm text-green-600 dark:text-green-400">
            <span>↑ 8%</span>
            <span className="text-gray-500 dark:text-gray-400 mr-2">
              مقارنة بالفترة السابقة
            </span>
          </div>
        </div>
      </div>

      {/* Recent Activity and Quick Actions */}
      <div>
      <div className="bg-white dark:bg-gray-800 p-6 my-6">
          <QuickActions />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <RecentActivity />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
