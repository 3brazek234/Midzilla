import { quickActionsData } from '../../../Constants/dashboardData';

const QuickActions = () => {
  return (
    <>
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">نظرة عامة على الأدوات</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActionsData.map((action) => {
          const IconComponent = action.icon;
          return (
            <button
              key={action.id}
              className={`p-4 ${action.bgColor} ${action.textColor} rounded-lg ${action.hoverColor} transition-all duration-200 hover:scale-105`}
            >
              <IconComponent className="mx-auto mb-2" size={20} />
              <span className="text-sm font-medium">{action.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default QuickActions; 