import { useState } from "react";
import Modal from "../../ui/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useGetPermission } from "../../../hooks/useGetPermission";

const roleSchema = yup.object().shape({
  name: yup.string().required("اسم الدور مطلوب"),
  description: yup.string().required("الوصف مطلوب"),
  permissions: yup
    .array()
    .min(1, "يجب اختيار صلاحية واحدة على الأقل")
    .required("الصلاحيات مطلوبة"),
});

const AddRoleModal = ({ isOpen, onClose, onAddRole }) => {
  const { data: permissions, isLoading } = useGetPermission();
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(roleSchema),
    defaultValues: {
      name: "",
      description: "",
      permissions: [],
    },
  });

  const onSubmit = (data) => {
    const formattedData = {
      name: data.name,
      description: data.description,
      permissions: selectedPermissions,
    };
    onAddRole(formattedData);
    reset();
    setSelectedPermissions([]);
    onClose();
  };

  const handlePermissionChange = (permissionId) => {
    setSelectedPermissions((prev) =>
      prev.includes(permissionId)
        ? prev.filter((id) => id !== permissionId)
        : [...prev, permissionId]
    );
  };

  // Group permissions by category
  const groupedPermissions =
    permissions?.data?.permissions?.reduce((acc, permission) => {
      const category = permission.name.split("_")[1] || "other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(permission);
      return acc;
    }, {}) || {};

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="إضافة دور جديد">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" dir="rtl">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            اسم الدور
          </label>
          <input
            {...register("name")}
            className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white ${
              errors.name
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
            }`}
            placeholder="مثال: مدير المنتجات"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            الوصف
          </label>
          <textarea
            {...register("description")}
            className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white ${
              errors.description
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
            }`}
            placeholder="وصف مختصر للدور وصلاحياته"
            rows="3"
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">
              {errors.description.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            الصلاحيات
          </label>
          <div className="space-y-4 max-h-60 overflow-y-auto p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            {Object.entries(groupedPermissions).map(
              ([category, categoryPermissions]) => (
                <div key={category} className="space-y-2">
                  <h3 className="font-medium text-gray-700 dark:text-gray-300 capitalize">
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {categoryPermissions.map((permission) => (
                      <label
                        key={permission.id}
                        className="flex items-center space-x-3 space-x-reverse cursor-pointer p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded"
                      >
                        <input
                          type="checkbox"
                          checked={selectedPermissions.includes(permission.id)}
                          onChange={() => handlePermissionChange(permission.id)}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {permission.description || permission.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
          {errors.permissions && (
            <p className="mt-1 text-sm text-red-600">
              {errors.permissions.message}
            </p>
          )}
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={() => {
              reset();
              setSelectedPermissions([]);
              onClose();
            }}
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
