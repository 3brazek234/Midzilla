import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import PermissionToggle from "./PermissionToggle";
import PermissionCategory from "./PermissionCategory";

const RolePermissions = ({
  role,
  categories,
  allPermissions,
  isExpanded,
  onToggle,
}) => {
  // Helper function to check if a permission is assigned to the role
  const hasPermission = (permissionId) => {
    const permission = allPermissions.find(p => p.id === permissionId);
    return permission?.roles.some(r => r.id === role.id) || false;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      {/* Role Header */}
      <div
        className="p-4 cursor-pointer flex items-center justify-between"
        onClick={onToggle}
      >
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {role.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {role.description}
          </p>
        </div>
        <button
          className={`transform transition-transform duration-200 ${
            isExpanded ? "rotate-180" : ""
          }`}
        >
          <svg
            className="w-6 h-6 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Permissions Categories */}
      {isExpanded && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          {Object.entries(categories).map(([category, permissions]) => (
            <PermissionCategory
              key={category}
              category={category}
              permissions={permissions}
              role={role}
              hasPermission={hasPermission}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RolePermissions; 