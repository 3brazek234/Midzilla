import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { statsData } from '../../../Constants/dashboardData';

const StatisticsCards = () => {
  return (
    <div className="space-y-6 slide-up">
      {/* Statistics Cards Grid */}
      <div className="dashboard-grid">
        {statsData.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className={`dashboard-stat-card ${stat.isPending ? 'border-red-300 dark:border-red-600' : ''}`}>
              <div className="between mb-4">
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                  <IconComponent className={stat.iconColor} size={24} />
                </div>
                <div className={stat.isPositive ? 'growth-positive' : 'growth-negative'}>
                  {stat.isPositive ? <FaArrowUp className="inline mr-1" /> : <FaArrowDown className="inline mr-1" />}
                  {stat.growth}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{stat.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{stat.titleEn}</p>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="stat-number">{stat.value}</p>
                  {stat.weeklyValue && (
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      ({stat.weeklyValue} أسبوعياً)
                    </span>
                  )}
                </div>
                {stat.isPending && (
                  <div className="mt-2 p-2 bg-red-50 dark:bg-red-900/20 rounded-md">
                    <p className="text-xs text-red-600 dark:text-red-400">🚨 يحتاج لمعالجة عاجلة</p>
                  </div>
                )}
              </div>
              {/* Description tooltip on hover */}
              <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatisticsCards; 