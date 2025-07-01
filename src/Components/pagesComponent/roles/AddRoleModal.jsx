import { useState } from "react";
import Modal from "../../ui/Modal";

const AddRoleModal = ({ isOpen, onClose, onAddRole }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [permissions, setPermissions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) return;
    const newRole = {
      id: Date.now(),
      name,
      description,
      permissions: permissions
        .split(",")
        .map((p) => p.trim())
        .filter((p) => p),
    };
    onAddRole(newRole);
    setName("");
    setDescription("");
    setPermissions("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="إضافة دور جديد">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="roleName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            اسم الدور
          </label>
          <input
            type="text"
            id="roleName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="مثال: مدير المنتجات"
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
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="وصف مختصر للدور وصلاحياته"
            required
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="permissions"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            الصلاحيات (مفصولة بفاصلة)
          </label>
          <input
            type="text"
            id="permissions"
            value={permissions}
            onChange={(e) => setPermissions(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="إدارة المنتجات, إدارة الطلبات, ..."
          />
        </div>
        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="py-2 px-5 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            إلغاء
          </button>
          <button
            type="submit"
            className="py-2 px-5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            إضافة الدور
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddRoleModal; 