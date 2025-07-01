import DiscountRow from "./DiscountRow";


const DiscountsTable = ({ discounts, onEdit, onDelete }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                كود الخصم
              </th>
              <th scope="col" className="py-3 px-6">
                القيمة
              </th>
              <th scope="col" className="py-3 px-6">
                الحالة
              </th>
              <th scope="col" className="py-3 px-6">
                فترة الصلاحية
              </th>
              <th scope="col" className="py-3 px-6 text-left">
                الإجراءات
              </th>
            </tr>
          </thead>
          <tbody>
            {discounts.map((discount) => (
              <DiscountRow
                key={discount.id}
                discount={discount}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiscountsTable; 