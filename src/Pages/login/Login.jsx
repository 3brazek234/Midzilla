import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  HiOutlineChartBar,
  HiOutlineEye,
  HiOutlineEyeOff,
} from "react-icons/hi";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const [showpassword, setShowpassword] = useState(false);
  const { mutate: login } = useLogin();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("البريد الإلكتروني غير صحيح")
      .required("البريد الإلكتروني مطلوب"),
    password: yup.string().required("كلمة المرور مطلوبة"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    login({ data });
  };

  const togglepasswordVisibility = () => {
    setShowpassword(!showpassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <HiOutlineChartBar className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            مرحباً بك
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            سجل دخولك للوصول إلى لوحة التحكم
          </p>
        </div>

        {/* Login Form Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-right"
              >
                البريد الإلكتروني
              </label>
              <div className="relative">
                <input
                  {...register("email")}
                  className={`w-full px-4 py-3 border rounded-xl text-right transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.email
                      ? "border-red-300 bg-red-50 dark:bg-red-900/20"
                      : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white"
                  }`}
                  placeholder="أدخل بريدك الإلكتروني"
                  dir="rtl"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 text-right">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-right"
              >
                كلمة المرور
              </label>
              <div className="relative">
                <input
                  type={showpassword ? "text" : "password"}
                  {...register("password")}
                  className={`w-full px-4 py-3 pr-12 border rounded-xl text-right transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.password
                      ? "border-red-300 bg-red-50 dark:bg-red-900/20"
                      : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white"
                  }`}
                  placeholder="أدخل كلمة المرور"
                  dir="rtl"
                />
                <button
                  type="button"
                  onClick={togglepasswordVisibility}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  {showpassword ? (
                    <HiOutlineEyeOff className="w-5 h-5" />
                  ) : (
                    <HiOutlineEye className="w-5 h-5" />
                  )}
                </button>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 text-right">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            {/* Forgot password */}
            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
              >
                نسيت كلمة المرور؟
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
            >
              تسجيل الدخول
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 لوحة التحكم. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </div>
  );
}
