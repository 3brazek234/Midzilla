import { useState, useEffect } from "react";
import Modal from "../../ui/Modal";

const AddEditProductModal = ({ isOpen, onClose, onSave, product }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        category: product.category || "",
        price: product.price || "",
        stock: product.stock || "",
        description: product.description || "",
      });
    } else {
      setFormData({
        name: "",
        category: "",
        price: "",
        stock: "",
        description: "",
      });
    }
  }, [product]);

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
      title={product ? "تعديل المنتج" : "إضافة منتج جديد"}
    >
      <form onSubmit={handleSubmit} className="space-y-4" dir="rtl">
        <InputField
          label="اسم المنتج"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <InputField
          label="الفئة"
          id="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="السعر"
            id="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <InputField
            label="المخزون"
            id="stock"
            type="number"
            value={formData.stock}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            الوصف
          </label>
          <textarea
            id="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
          ></textarea>
        </div>
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

export default AddEditProductModal; 