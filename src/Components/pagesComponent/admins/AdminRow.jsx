import AdminActions from "./AdminActions";

const AdminRow = ({ admin, onDetails, onEdit, onDelete }) => {
  const statusColor =
    admin.status === "active"
      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";

  return (
    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
      <td className="py-3 px-6">
        <div className="flex items-center gap-3">
      
          <div>
            <div className="font-bold text-gray-800 dark:text-white">
              {admin.name}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {admin.email}
            </div>
          </div>
        </div>
      </td>
      <td className="py-3 px-6">
        <div className="font-medium text-gray-800 dark:text-white">
          {admin.roles[0].name}
        </div>
      </td>
      <td className="py-3 px-6">
        <span
          className={`px-2.5 py-1 text-xs font-semibold leading-5 rounded-full ${statusColor}`}
        >
          {admin.status}
        </span>
      </td>
      <td className="py-3 px-6 text-left">
        <AdminActions
          onDetails={() => onDetails(admin)}
          onEdit={() => onEdit(admin)}
          onDelete={() => onDelete(admin)}
        />
      </td>
    </tr>
  );
};

export default AdminRow; 