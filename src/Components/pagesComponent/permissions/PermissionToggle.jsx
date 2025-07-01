const PermissionToggle = ({ label, enabled, onChange }) => {
  return (
    <label className="flex items-center cursor-pointer select-none">
      <div className="relative">
        <input
          type="checkbox"
          checked={enabled}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`box block h-7 w-12 rounded-full transition-colors duration-200 ${
            enabled ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"
          }`}
        ></div>
        <div
          className={`dot absolute left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white transition-transform duration-200 ${
            enabled ? "translate-x-full" : ""
          }`}
        ></div>
      </div>
      <div className="mr-3 text-gray-700 dark:text-gray-200 font-medium">
        {label}
      </div>
    </label>
  );
};

export default PermissionToggle; 