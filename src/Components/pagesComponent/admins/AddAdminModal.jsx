import { useState } from "react";
import Modal from "../../ui/Modal";
import { rolesData } from "../../../Constants/rolesData";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAddAdmin } from "../../../hooks/useAddAdmin";

const AddAdminModal = ({ isOpen, onClose, onAddAdmin }) => {
  const schema = yup.object().shape({
    name: yup.string().required("الاسم مطلوب"),
    email: yup
      .string()
      .email("البريد الإلكتروني غير صحيح")
      .required("البريد الإلكتروني مطلوب"),
    password: yup
      .string()
      .min(8, "كلمة المرور يجب أن تكون 8 أحرف على الأقل")
      .required("كلمة المرور مطلوبة"),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password")], "كلمة المرور غير متطابقة")
      .required("تأكيد كلمة المرور مطلوب"),
    roles: yup.array().min(1, "يجب اختيار دور واحد على الأقل"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      status: "active",
      roles: [2],
    },
  });
  const { mutate: addAdmin } = useAddAdmin();
  const onSubmit = (data) => {
    addAdmin(data);
    };

   
    onClose();
    reset();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="إضافة مدير جديد">
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
            placeholder="مثال: أحمد علي"
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
            placeholder="example@domain.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            كلمة المرور
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white ${
              errors.password
                ? "border-red-500 dark:border-red-400 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
            }`}
            placeholder="••••••••"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Password Confirmation Field */}
        <div>
          <label
            htmlFor="password_confirmation"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            تأكيد كلمة المرور
          </label>
          <input
            type="password"
            id="password_confirmation"
            {...register("password_confirmation")}
            className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white ${
              errors.password_confirmation
                ? "border-red-500 dark:border-red-400 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
            }`}
            placeholder="••••••••"
          />
          {errors.password_confirmation && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.password_confirmation.message}
            </p>
          )}
        </div>

        {/* Role Selection */}
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
            {rolesData.map((role) => (
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

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={() => {
              onClose();
              reset();
            }}
            className="py-2 px-5 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            إلغاء
          </button>
          <button
            type="submit"
            className="py-2 px-5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            إضافة المدير
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddAdminModal; 