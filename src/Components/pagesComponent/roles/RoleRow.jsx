import RoleActions from "./RoleActions";

const RoleRow = ({ role, onEdit, onDelete }) => {
  return (
    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
      <td className="py-4 px-6">
        <div className="font-bold text-gray-800 dark:text-white">
          {role.name}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {role.description}
        </div>
      </td>
      <td className="py-4 px-6">
        <div className="flex flex-wrap gap-2">
          {role.permissions.map((permission) => (
            <span
              key={permission.id}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold px-2.5 py-1 rounded-full"
            >
              {permission.name}
            </span>
          ))}
        </div>
      </td>
      <td className="py-4 px-6">
        <RoleActions onEdit={() => onEdit(role)} onDelete={() => onDelete(role)} />
      </td>
    </tr>
  );
};

export default RoleRow; 