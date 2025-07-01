import { useState, useEffect } from "react";
import Modal from "../../ui/Modal";

const AddEditDiscountModal = ({ isOpen, onClose, onSave, discount }) => {
  const [formData, setFormData] = useState({
    code: "",
    description: "",
    type: "percentage",
    value: "",
    startDate: "",
    endDate: "",
    usageLimit: "",
  });

  useEffect(() => {
    if (discount) {
      setFormData({
        ...discount,
        startDate: discount.startDate
          ? new Date(discount.startDate).toISOString().split("T")[0]
          : "",
        endDate: discount.endDate
          ? new Date(discount.endDate).toISOString().split("T")[0]
          : "",
      });
    } else {
      setFormData({
        code: "",
        description: "",
        type: "percentage",
        value: "",
        startDate: "",
        endDate: "",
        usageLimit: "",
      });
    }
  }, [discount]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={discount ? "تعديل الخصم" : "إضافة خصم جديد"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="كود الخصم"
          id="code"
          value={formData.code}
          onChange={handleChange}
          required
        />
        <InputField
          label="الوصف"
          id="description"
          value={formData.description}
          onChange={handleChange}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="type"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              نوع الخصم
            </label>
            <select
              id="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="percentage">نسبة مئوية (%)</option>
              <option value="fixed">مبلغ ثابت ($)</option>
            </select>
          </div>
          <InputField
            label="قيمة الخصم"
            id="value"
            type="number"
            value={formData.value}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="تاريخ البدء"
            id="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleChange}
          />
          <InputField
            label="تاريخ الانتهاء (اختياري)"
            id="endDate"
            type="date"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>
        <InputField
          label="حد الاستخدام"
          id="usageLimit"
          type="number"
          value={formData.usageLimit}
          onChange={handleChange}
        />
        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="py-2 px-5 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300"
          >
            إلغاء
          </button>
          <button
            type="submit"
            className="py-2 px-5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            حفظ
          </button>
        </div>
      </form>
    </Modal>
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
      className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
      {...props}
    />
  </div>
);

export default AddEditDiscountModal; 