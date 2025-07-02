import RoleRow from "./RoleRow";

const RolesTable = ({ roles, onEditRole, onDeleteRole }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                الدور والوصف
              </th>
              <th scope="col" className="py-3 px-6">
                الصلاحيات
              </th>
              <th scope="col" className="py-3 px-6">
                الإجراءات
              </th>
            </tr>
          </thead>
          <tbody>
            {roles?.length > 0 ? (
              roles.map((role) => (
                <RoleRow
                  key={role.id}
                  role={role}
                  onEdit={() => onEditRole(role)}
                  onDelete={() => onDeleteRole(role)}
                />
              ))
            ) : (
              <tr>
                <td colSpan="3" className="py-4 px-6 text-center">
                  لا يوجد أدوار
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RolesTable; 