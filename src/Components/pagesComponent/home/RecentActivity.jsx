import { recentActivitiesData } from '../../../Constants/dashboardData';

const RecentActivity = () => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return 'border-l-red-500 bg-red-50 dark:bg-red-900/20';
      case 'high': return 'border-l-orange-500 bg-orange-50 dark:bg-orange-900/20';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
      default: return 'border-l-green-500 bg-green-50 dark:bg-green-900/20';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'message': return '💬';
      case 'order': return '📦';
      case 'whatsapp': return '📱';
      case 'alert': return '🚨';
      case 'success': return '✅';
      default: return '📝';
    }
  };

  return (
    <div className="dashboard-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          تنبيه لرسائل أو إشعارات من العملاء
        </h3>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Customer Notifications
        </span>
      </div>
      
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {recentActivitiesData.map((activity) => (
          <div 
            key={activity.id} 
            className={`flex items-start space-x-3 p-3 rounded-lg border-l-4 transition-all hover:shadow-md ${getPriorityColor(activity.priority)}`}
          >
            <div className="flex-shrink-0 text-lg">
              {getTypeIcon(activity.type)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {activity.message}
                </p>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  activity.priority === 'urgent' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                  activity.priority === 'high' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                  activity.priority === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                  'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                }`}>
                  {activity.priority}
                </span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 mb-1">
                {activity.messageEn}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {activity.time} • {activity.timeEn}
                </p>
                <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                  عرض التفاصيل
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600 dark:text-gray-400">
            إجمالي الإشعارات: {recentActivitiesData.length}
          </span>
          <button className="text-blue-600 dark:text-blue-400 hover:underline">
            عرض جميع الإشعارات
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity; 