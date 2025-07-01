import React from "react";
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";

const ChartStatsCards = ({ statsData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statsData.map((stat, index) => {
        const IconComponent = stat.icon;

        return (
          <div
            key={index}
            className={`relative overflow-hidden rounded-xl p-6 
              border border-gray-200 dark:border-gray-700 
              shadow-lg hover:shadow-xl transition-all duration-300 
              transform hover:-translate-y-1`}
          >
            {/* Background Pattern */}

            <div className="relative">
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/20 ${stat.iconColor} mb-4`}
              >
                <IconComponent className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                {stat.title}
              </h3>

              {/* Value */}
              <div className="flex items-baseline space-x-2 rtl:space-x-reverse mb-2">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.unit}
                </span>
              </div>

              {/* Growth Indicator */}
              <div className="flex items-center justify-between">
                <div
                  className={`flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium ${
                    stat.isPositive
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {stat.isPositive ? (
                    <BiTrendingUp className="w-3 h-3" />
                  ) : (
                    <BiTrendingDown className="w-3 h-3" />
                  )}
                  <span>{stat.growth}</span>
                </div>

                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.period}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChartStatsCards;
