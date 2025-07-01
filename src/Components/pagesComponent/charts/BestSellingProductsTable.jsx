import { useState } from "react";
import { bestSellingProducts } from "../../../Constants/bestSellingProductsData";

const BestSellingProductsTable = () => {
  const [filter, setFilter] = useState("الكمية");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          المنتجات الأكثر مبيعًا
        </h2>
        <div className="flex gap-2">
          {["الكمية", "القيمة", "نسبة الربح"].map((f) => (
            <button
              key={f}
              onClick={() => handleFilterChange(f)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                اسم المنتج
              </th>
              <th scope="col" className="px-6 py-3">
                عدد القطع المباعة
              </th>
              <th scope="col" className="px-6 py-3">
                نسبة المساهمة
              </th>
              <th scope="col" className="px-6 py-3">
                نسبة التغير
              </th>
              <th scope="col" className="px-6 py-3">
                إجمالي الأرباح
              </th>
            </tr>
          </thead>
          <tbody>
            {bestSellingProducts.map((product) => (
              <tr
                key={product.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-3"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-10 h-10 rounded-full"
                  />
                  {product.name}
                </th>
                <td className="px-6 py-4">{product.unitsSold}</td>
                <td className="px-6 py-4">{product.salesContribution}%</td>
                <td
                  className={`px-6 py-4 ${
                    product.changePercentage > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {product.changePercentage > 0 ? "▲" : "▼"}{" "}
                  {Math.abs(product.changePercentage)}%
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  ${product.totalProfit.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BestSellingProductsTable; 