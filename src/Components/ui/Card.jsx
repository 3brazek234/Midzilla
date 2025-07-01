const Card = ({ title, children, footer }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          {title}
        </h3>
        {children}
      </div>
      {footer && (
        <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 text-right">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card; 