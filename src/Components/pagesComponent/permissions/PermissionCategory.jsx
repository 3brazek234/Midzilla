import PermissionToggle from "./PermissionToggle";

const PermissionCategory = ({ category, permissions, role, hasPermission }) => {
  // Capitalize category name
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="mb-6 last:mb-0">
      <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
        {categoryName}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {permissions.map((permission) => (
          <div
            key={permission.id}
            className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <h5 className="text-sm font-medium text-gray-900 dark:text-white">
                  {permission.name.split('_').join(' ')}
                </h5>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {permission.description}
                </p>
              </div>
              <PermissionToggle
                isChecked={hasPermission(permission.id)}
                permissionId={permission.id}
                roleId={role.id}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PermissionCategory; 