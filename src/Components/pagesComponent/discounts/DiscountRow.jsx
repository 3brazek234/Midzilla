import DiscountStatus from "./DiscountStatus";
import DiscountActions from "./DiscountActions";
import { format } from "date-fns";

const DiscountRow = ({ discount, onEdit, onDelete }) => {
  const discountValue =
    discount.type === "percentage"
      ? `${discount.value}%`
      : `$${discount.value}`;

  return (
    <tr className="dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
      <td className="py-4 px-6">
        <div className="font-bold text-gray-800 dark:text-white">
          {discount.code}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {discount.description}
        </div>
      </td>
      <td className="py-4 px-6 font-mono text-lg text-blue-600 dark:text-blue-400">
        {discountValue}
      </td>
      <td className="py-4 px-6">
        <DiscountStatus status={discount.status} />
      </td>
   
      <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-300">
        {format(new Date(discount.startDate), "yyyy/MM/dd")} -{" "}
        {discount.endDate
          ? format(new Date(discount.endDate), "yyyy/MM/dd")
          : "بلا نهاية"}
      </td>
      <td className="py-4 px-6">
        <DiscountActions
          onEdit={() => onEdit(discount)}
          onDelete={() => onDelete(discount)}
        />
      </td>
    </tr>
  );
};
export default DiscountRow;