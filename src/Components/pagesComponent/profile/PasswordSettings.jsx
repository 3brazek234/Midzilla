import Card from "../../ui/Card";

const PasswordSettings = () => {
  return (
    <Card
      title="تغيير كلمة المرور"
      footer={
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
          تحديث كلمة المرور
        </button>
      }
    >
      <form className="space-y-4">
        <InputField
          label="كلمة المرور الحالية"
          id="currentPassword"
          type="password"
        />
        <InputField
          label="كلمة المرور الجديدة"
          id="newPassword"
          type="password"
        />
        <InputField
          label="تأكيد كلمة المرور الجديدة"
          id="confirmPassword"
          type="password"
        />
      </form>
    </Card>
  );
};

const InputField = ({ label, id, ...props }) => (
  <div>
    <label
      htmlFor={id}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      {label}
    </label>
    <input
      id={id}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
      {...props}
    />
  </div>
);

export default PasswordSettings; 