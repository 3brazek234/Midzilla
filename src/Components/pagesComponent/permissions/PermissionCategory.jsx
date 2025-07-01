import PermissionToggle from "./PermissionToggle";

const PermissionCategory = ({
  category,
  permissions,
  onPermissionChange,
  onSelectAll,
}) => {
  const allEnabled =
    Object.keys(category.actions).length === permissions.length;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {category.name}
        </h3>
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={allEnabled}
            onChange={(e) => onSelectAll(e.target.checked)}
            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <span className="mr-2 text-sm font-medium text-gray-600 dark:text-gray-300">
            تحديد الكل
          </span>
        </label>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {Object.entries(category.actions).map(([action, label]) => (
          <PermissionToggle
            key={action}
            label={label}
            enabled={permissions.includes(action)}
            onChange={() => onPermissionChange(action)}
          />
        ))}
      </div>
    </div>
  );
};

export default PermissionCategory; 