import Card from "../../ui/Card";

const ProfileForm = ({ info, onInfoChange }) => {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    onInfoChange({ ...info, [id]: value });
  };

  return (
    <Card
      title="المعلومات الشخصية"
      footer={
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
          حفظ التغييرات
        </button>
      }
    >
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="الاسم الكامل"
            id="fullName"
            value={info.fullName}
            onChange={handleInputChange}
          />
          <InputField
            label="البريد الإلكتروني"
            id="email"
            type="email"
            value={info.email}
            onChange={handleInputChange}
          />
        </div>
        <InputField
          label="رقم الهاتف"
          id="phone"
          type="tel"
          value={info.phone}
          onChange={handleInputChange}
        />
        <div>
          <label
            htmlFor="bio"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            نبذة تعريفية
          </label>
          <textarea
            id="bio"
            rows="4"
            value={info.bio}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="اكتب نبذة مختصرة عن نفسك..."
          ></textarea>
        </div>
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
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      {...props}
    />
  </div>
);

export default ProfileForm; 