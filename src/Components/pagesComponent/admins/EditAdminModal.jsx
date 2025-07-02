import Modal from "../../ui/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUpdateAdmin } from "../../../hooks/useUpdateAdmin";
import { useGetRoles } from "../../../hooks/useGetRoles";
import { useEffect } from "react";

const schema = yup.object().shape({
  name: yup.string().required("الاسم مطلوب"),
  email: yup
    .string()
    .email("البريد الإلكتروني غير صحيح")
    .required("البريد الإلكتروني مطلوب"),
  status: yup.string().required("الحالة مطلوبة"),
  roles: yup.string().required("الدور مطلوب"), // Keep as string since we convert to array on submit
});

const EditAdminModal = ({ isOpen, onClose, admin }) => {
  const { mutate: updateAdmin } = useUpdateAdmin();
  const { data: rolesData } = useGetRoles();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: admin?.name || "",
      email: admin?.email || "",
      phone: admin?.phone || "",
      status: admin?.status || "active",
      roles: admin?.roles?.[0]?.id || "", // Take the first role since we're using single selection
    },
  });

  // Reset form when admin data changes
  useEffect(() => {
    if (admin) {
      reset({
        name: admin.name || "",
        email: admin.email || "",
        phone: admin.phone || "",
        status: admin.status || "active",
        roles: admin.roles?.[0]?.id || "",
      });
    }
  }, [admin, reset]);

  const onSubmit = (formData) => {
    const data = {
      ...formData,
      roles: [formData.roles] // Convert single role to array
    };
    updateAdmin({ data, id: admin.id });
    onClose();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="تعديل بيانات المدير">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" dir="rtl">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            الاسم الكامل
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white ${
              errors.name
                ? "border-red-500 dark:border-red-400 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            البريد الإلكتروني
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white ${
              errors.email
                ? "border-red-500 dark:border-red-400 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Roles Field */}
        <div>
          <label
            htmlFor="roles"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            الدور
          </label>
          <select
            id="roles"
            {...register("roles")}
            className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white ${
              errors.roles
                ? "border-red-500 dark:border-red-400 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
            }`}
          >
            <option value="">اختر الدور</option>
            {rolesData?.data?.roles?.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
          {errors.roles && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.roles.message}
            </p>
          )}
        </div>

        {/* Status Field */}
        <div>
          <label
            htmlFor="status"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            الحالة
          </label>
          <select
            id="status"
            {...register("status")}
            className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white ${
              errors.status
                ? "border-red-500 dark:border-red-400 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
            }`}
          >
            <option value="active">نشط</option>
            <option value="inactive">غير نشط</option>
          </select>
          {errors.status && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.status.message}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={handleClose}
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

export default EditAdminModal; 