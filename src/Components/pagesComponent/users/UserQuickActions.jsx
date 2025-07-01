import React from "react";
import { FaUserPlus, FaFileExport, FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserQuickActions = () => {
  return (
    <div className="dashboard-card p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="responsive-actions">
          <Link to="/dashboard/users/add" className="w-full sm:w-auto">
            <button className="responsive-action-btn responsive-action-btn-primary">
              <FaUserPlus />
              <span>إضافة عميل جديد</span>
            </button>
          </Link>
          <button className="responsive-action-btn responsive-action-btn-secondary">
            <FaFileExport />
            <span>تصدير العملاء</span>
          </button>
        </div>

        <div className="responsive-stats">
          <span>إجمالي العملاء:</span>
          <span className="font-semibold text-gray-900 dark:text-white">
            2,345
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserQuickActions;
