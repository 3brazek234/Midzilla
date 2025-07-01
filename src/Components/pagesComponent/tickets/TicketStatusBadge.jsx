const TicketStatusBadge = ({ status }) => {
  const statusStyles = {
    مفتوحة: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    "قيد المعالجة":
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    مغلقة: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
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

export default TicketStatusBadge; 