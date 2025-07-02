import { useState } from "react";
import PermissionsHeader from "../../Components/pagesComponent/permissions/PermissionsHeader";
import RolePermissions from "../../Components/pagesComponent/permissions/RolePermissions";
import { useGetPermission } from "../../hooks/useGetPermission";
import CreatePermissionModal from "../../Components/pagesComponent/permissions/CreatePermissionModal";
import PermissionsTable from "../../Components/pagesComponent/permissions/PermissionsTable";
import Pagination from "../../Components/ui/Pagination";

const Permissions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;
  const { data: permissionsData, isLoading, error } = useGetPermission(currentPage * perPage);

  const [expandedRole, setExpandedRole] = useState(null);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [view, setView] = useState("table"); // "table" or "roles"

  // Calculate total pages based on total permissions
  const totalPages = permissionsData?.data?.pagination?.total 
    ? Math.ceil(permissionsData.data.pagination.total / perPage) 
    : 1;

  // Get current page permissions
  const getCurrentPagePermissions = () => {
    if (!permissionsData?.data?.permissions) return [];
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    return permissionsData.data.permissions.slice(startIndex, endIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Safely process permissions data with null checks
  const groupedPermissions = permissionsData?.data?.permissions?.reduce((acc, permission) => {
    if (!permission?.name) return acc;
    
    const parts = permission.name.split('_');
    const category = parts.length > 1 ? parts[1] : 'other';
    
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(permission);
    return acc;
  }, {}) || {};

  // Safely process roles with null checks
  const roles = permissionsData?.data?.permissions?.reduce((acc, permission) => {
    if (!permission?.roles) return acc;
    
    permission.roles.forEach(role => {
      if (role?.id && !acc.find(r => r.id === role.id)) {
        acc.push(role);
      }
    });
    return acc;
  }, []) || [];

  const toggleRole = (roleId) => {
    setExpandedRole(expandedRole === roleId ? null : roleId);
  };

  if (isLoading) {
    return (
      <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center" dir="rtl">
        جاري التحميل...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center" dir="rtl">
        <div className="text-red-600 dark:text-red-400">
          حدث خطأ أثناء تحميل الصلاحيات. الرجاء المحاولة مرة أخرى.
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen" dir="rtl">
      <div className="mb-6 flex justify-between items-center">
        <div className="flex gap-4">
          <button
            onClick={() => setView("table")}
            className={`px-4 py-2 rounded-lg ${
              view === "table"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            }`}
          >
            عرض الجدول
          </button>
          <button
            onClick={() => setView("roles")}
            className={`px-4 py-2 rounded-lg ${
              view === "roles"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            }`}
          >
            عرض حسب الأدوار
          </button>
        </div>
        <button
          onClick={() => setCreateModalOpen(true)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          إضافة صلاحية جديدة
        </button>
      </div>

      {view === "table" ? (
        <>
          <PermissionsTable permissions={getCurrentPagePermissions()} />
          <div className="mt-6">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      ) : (
        <div className="space-y-4">
          {roles.map((role) => (
            <RolePermissions
              key={role.id}
              role={role}
              categories={groupedPermissions}
              allPermissions={permissionsData?.data?.permissions || []}
              isExpanded={expandedRole === role.id}
              onToggle={() => toggleRole(role.id)}
            />
          ))}
        </div>
      )}

      <CreatePermissionModal
        isOpen={isCreateModalOpen}
        onClose={() => setCreateModalOpen(false)}
      />
    </div>
  );
};

export default Permissions;