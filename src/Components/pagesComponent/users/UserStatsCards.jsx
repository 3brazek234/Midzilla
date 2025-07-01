import React from "react";
import { FaUsers, FaUserCheck, FaUserTimes, FaBuilding } from "react-icons/fa";
import { userStats } from "@/Constants/usersData";

const UserStatsCards = () => {
  const stats = [
    {
      title: "إجمالي العملاء",
      value: userStats.total.toLocaleString("ar-SA"),
      icon: <FaUsers className="text-blue-500" size={24} />,
      change: userStats.growth.total,
      changeType: "increase",
    },
    {
      title: "العملاء النشطين",
      value: userStats.active.toLocaleString("ar-SA"),
      icon: <FaUserCheck className="text-green-500" size={24} />,
      change: userStats.growth.active,
      changeType: "increase",
    },
    {
      title: "العملاء غير النشطين",
      value: userStats.inactive.toLocaleString("ar-SA"),
      icon: <FaUserTimes className="text-red-500" size={24} />,
      change: userStats.growth.inactive,
      changeType: "decrease",
    },
    {
      title: "عملاء الشركات",
      value: userStats.companies.toLocaleString("ar-SA"),
      icon: <FaBuilding className="text-purple-500" size={24} />,
      change: userStats.growth.companies,
      changeType: "increase",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="dashboard-card p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
              {stat.icon}
            </div>
            <div
              className={`text-sm font-medium ${
                stat.changeType === "increase"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {stat.change}
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-right mb-1">
            {stat.value}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-right">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserStatsCards;
