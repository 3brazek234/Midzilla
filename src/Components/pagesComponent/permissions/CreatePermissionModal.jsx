import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "../../ui/Modal";
import { useCreatePermission } from "../../../hooks/useCreatePermission";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("اسم الصلاحية مطلوب")
    .min(3, "يجب أن يكون الاسم 3 أحرف على الأقل"),
  description: yup
    .string()
    .required("وصف الصلاحية مطلوب")
    .min(5, "يجب أن يكون الوصف 5 أحرف على الأقل"),
});

const CreatePermissionModal = ({ isOpen, onClose }) => {
  const { mutate: createPermission, isLoading } = useCreatePermission();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    createPermission(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="إضافة صلاحية جديدة">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" dir="rtl">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            اسم الصلاحية
          </label>
          <div className="relative">

            <input
              {...register("name")}
              className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white ${
                errors.name
                  ? "border-red-500 dark:border-red-400 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
              }`}
              
              disabled={isLoading}
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Description Field */}
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            وصف الصلاحية
          </label>
          <textarea
            id="description"
            {...register("description")}
            className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white ${
              errors.description
                ? "border-red-500 dark:border-red-400 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
            }`}
            placeholder="وصف الصلاحية وما تتيحه من إمكانيات"
            rows="3"
            disabled={isLoading}
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={() => {
              reset();
              onClose();
            }}
            className="py-2 px-5 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            disabled={isLoading}
          >
            إلغاء
          </button>
          <button
            type="submit"
            className="py-2 px-5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? "جاري الإنشاء..." : "إنشاء الصلاحية"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CreatePermissionModal;
