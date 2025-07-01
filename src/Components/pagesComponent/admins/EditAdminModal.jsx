import { useState, useEffect } from "react";
import Modal from "../../ui/Modal";
import { rolesData } from "../../../Constants/rolesData";

const EditAdminModal = ({ isOpen, onClose, onUpdateAdmin, admin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("نشط");

  useEffect(() => {
    if (admin) {
      setName(admin.name);
      setEmail(admin.email);
      setPhone(admin.phone || "");
      setRole(admin.role);
      setStatus(admin.status);
    }
  }, [admin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !role) return;

    const updatedAdmin = {
      ...admin,
      name,
      email,
      phone,
      role,
      status,
      permissions: rolesData.find((r) => r.name === role)?.permissions || [],
    };

    onUpdateAdmin(updatedAdmin);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="تعديل بيانات المدير">
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="الاسم الكامل"
          id="adminName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <InputField
          label="البريد الإلكتروني"
          id="adminEmail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          label="رقم الهاتف"
          id="adminPhone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="adminRole"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              الدور
            </label>
            <select
              id="adminRole"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              {rolesData.map((r) => (
                <option key={r.id} value={r.name}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="adminStatus"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              الحالة
            </label>
            <select
              id="adminStatus"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="نشط">نشط</option>
              <option value="غير نشط">غير نشط</option>
            </select>
          </div>
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
            حفظ التغييرات
          </button>
        </div>
      </form>
    </Modal>
  );
};

const InputField = ({
  label,
  id,
  value,
  onChange,
  type = "text",
  required = false,
}) => (
  <div>
    <label
      htmlFor={id}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      required={required}
    />
  </div>
);

export default EditAdminModal; 