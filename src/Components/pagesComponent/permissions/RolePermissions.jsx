import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import PermissionCategory from "./PermissionCategory";

const RolePermissions = ({
  role,
  categories,
  onPermissionChange,
  isExpanded,
  onToggle,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-4 transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full p-5 text-right flex justify-between items-center bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none"
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          {role.name}
        </h2>
        <FaChevronDown
          className={`transform transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="p-6">
          {Object.entries(categories).map(([categoryKey, categoryData]) => (
            <PermissionCategory
              key={categoryKey}
              category={categoryData}
              permissions={role.permissions[categoryKey] || []}
              onPermissionChange={(action) =>
                onPermissionChange(role.id, categoryKey, action)
              }
              onSelectAll={(selectAll) => {
                const allActions = Object.keys(categoryData.actions);
                const newPermissions = selectAll ? allActions : [];
                onPermissionChange(role.id, categoryKey, newPermissions);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RolePermissions; 