import { topRatedUsers } from "../../Constants/topRatedUsersData";

const TopRatedUser = () => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-right">
          العملاء الأكثر شراءً
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  العميل
                </th>
                <th scope="col" className="px-6 py-3">
                  إجمالي الإنفاق
                </th>
                <th scope="col" className="px-6 py-3">
                  آخر عملية شراء
                </th>
                <th scope="col" className="px-6 py-3">
                  الفئة المفضلة
                </th>
                <th scope="col" className="px-6 py-3">
                  إجمالي الطلبات
                </th>
              </tr>
            </thead>
            <tbody>
              {topRatedUsers.map((user) => (
                <tr
                  key={user.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-3"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user.avatar}
                      alt={`${user.name} avatar`}
                    />
                    {user.name}
                  </th>
                  <td className="px-6 py-4 text-green-500 font-bold">
                    ${user.totalSpent.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">{user.lastPurchase}</td>
                  <td className="px-6 py-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                      {user.favoriteCategory}
                    </span>
                  </td>
                  <td className="px-6 py-4">{user.totalOrders}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopRatedUser;