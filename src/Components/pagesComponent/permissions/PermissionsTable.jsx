const PermissionsTable = ({ permissions }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                اسم الصلاحية
              </th>
              <th scope="col" className="py-3 px-6">
                الوصف
              </th>
              <th scope="col" className="py-3 px-6">
                عدد الأدوار
              </th>
            </tr>
          </thead>
          <tbody>
            {permissions?.length > 0 ? (
              permissions.map((permission) => (
                <tr
                  key={permission.id}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                    {permission.name}
                  </td>
                  <td className="py-4 px-6">{permission.description}</td>
                  <td className="py-4 px-6">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                      {permission.roles?.length || 0}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="py-4 px-6 text-center">
                  لا توجد صلاحيات
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PermissionsTable; 