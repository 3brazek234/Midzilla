import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaStickyNote,
  FaTimes,
  FaCircle,
} from "react-icons/fa";

const AddUserForm = ({ onClose, user = null, isEdit = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
    status: "نشط",
    contactType: "تواصل فقط",
  });

  useEffect(() => {
    if (isEdit && user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
        notes: user.notes || "",
        status: user.status || "نشط",
        contactType: user.contactType || "تواصل فقط",
      });
    }
  }, [isEdit, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log(formData);
    onClose();
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const inputClasses =
    "w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-colors duration-200";


  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl max-h-[95vh] overflow-hidden animate-[modalIn_0.2s_ease-out] my-4">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center sticky top-0 bg-white dark:bg-gray-800 z-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {isEdit ? "تعديل بيانات العميل" : "إضافة عميل جديد"}
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="overflow-y-auto max-h-[calc(95vh-8rem)] scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent"
        >
          <div className="space-y-6 p-6">
            {/* User Header Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-3xl font-bold">
                {formData.name ? formData.name.charAt(0) : "?"}
              </div>
              <div className="flex-1 text-center md:text-right">
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    <div className="w-5 h-5 flex items-center justify-center text-gray-400">
                      <FaUser />
                    </div>
                    <span>الاسم</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="ادخل اسم العميل"
                    required
                  />
                </div>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <select
                    id="contactType"
                    name="contactType"
                    value={formData.contactType}
                    onChange={handleChange}
                    className="px-3 py-1 rounded-full text-sm font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-transparent"
                  >
                    <option value="تواصل فقط">تواصل فقط</option>
                    <option value="مشترك بالموقع">مشترك بالموقع</option>
                    <option value="مشترك في تطبيق الهاتف">
                      مشترك في تطبيق الهاتف
                    </option>
                  </select>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className={`px-3 py-1 rounded-full text-sm font-medium inline-flex items-center ${
                      formData.status === "نشط"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : formData.status === "معلق"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    }`}
                  >
                    <option value="نشط">نشط</option>
                    <option value="معلق">معلق</option>
                    <option value="غير نشط">غير نشط</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contact Information */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    معلومات التواصل
                  </h3>
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900">
                      <FaEnvelope className="text-blue-500 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">
                        البريد الإلكتروني
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`${inputClasses} !bg-transparent`}
                        placeholder="example@domain.com"
                        required
                        dir="ltr"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100 dark:bg-green-900">
                      <FaPhone className="text-green-500 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">
                        رقم الهاتف
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`${inputClasses} !bg-transparent`}
                        placeholder="+966 5X XXX XXXX"
                        required
                        dir="ltr"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-100 dark:bg-red-900">
                      <FaMapMarkerAlt className="text-red-500 dark:text-red-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">العنوان</div>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className={`${inputClasses} !bg-transparent`}
                        placeholder="ادخل عنوان العميل"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    معلومات إضافية
                  </h3>
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-100 dark:bg-yellow-900">
                      <FaStickyNote className="text-yellow-500 dark:text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">ملاحظات</div>
                      <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        className={`${inputClasses} !bg-transparent min-h-[100px] resize-y`}
                        placeholder="اضف ملاحظات إضافية..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row gap-3 justify-end pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 rounded-lg font-medium text-sm flex items-center justify-center transition-colors duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:active:bg-gray-500 w-full sm:w-auto"
              >
                إلغاء
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg font-medium text-sm flex items-center justify-center transition-colors duration-200 bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 dark:active:bg-blue-700 w-full sm:w-auto"
              >
                {isEdit ? "حفظ التغييرات" : "إضافة العميل"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserForm;
