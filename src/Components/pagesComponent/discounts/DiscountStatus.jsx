const DiscountStatus = ({ status }) => {
  const statusStyles = {
    نشط: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "منتهي الصلاحية":
      "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    مجدول:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  };

  return (
    <span
      className={`px-3 py-1 text-xs font-semibold leading-5 rounded-full ${
        statusStyles[status] || "bg-gray-100 text-gray-800"
      }`}
    >
      {status}
    </span>
  );
};

export default DiscountStatus; 