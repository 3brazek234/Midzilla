import React, { useState } from "react";
import {
  FaPhone,
  FaTimes,
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaShoppingCart,
  FaStickyNote,
  FaCircle,
} from "react-icons/fa";

const DisplayUser = ({ user, setIsModalUserOpen }) => {
  const [activeTab, setActiveTab] = useState("تفاصيل العميل");
  const tabs = ["تفاصيل العميل", "المشتريات", "المدفوعات", "المحادثات"];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("ar-SA", {
      style: "currency",
      currency: "SAR",
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("ar-SA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "تفاصيل العميل":
        return (
          <div className="space-y-6 p-4">
            {/* User Header Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-3xl font-bold">
                {user.name.charAt(0)}
              </div>
              <div className="flex-1 text-center md:text-right">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {user.name}
                </h2>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="px-3 py-1 rounded-full text-sm font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                    {user.contactType}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium inline-flex items-center ${
                      user.status === "نشط"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : user.status === "معلق"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    }`}
                  >
                    <FaCircle className="w-2 h-2 mr-2" />
                    {user.status}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {formatCurrency(user.totalPurchases)}
                </div>
                <span className="text-sm text-gray-500">إجمالي المشتريات</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contact Information */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">معلومات التواصل</h3>
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900">
                      <FaEnvelope className="text-blue-500 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">
                        البريد الإلكتروني
                      </div>
                      <div className="font-medium text-gray-900 dark:text-white">{user.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100 dark:bg-green-900">
                      <FaPhone className="text-green-500 dark:text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">رقم الهاتف</div>
                      <div className="font-medium text-gray-900 dark:text-white">{user.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-100 dark:bg-red-900">
                      <FaMapMarkerAlt className="text-red-500 dark:text-red-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">العنوان</div>
                      <div className="font-medium text-gray-900 dark:text-white">{user.address}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">معلومات إضافية</h3>
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-100 dark:bg-purple-900">
                      <FaCalendarAlt className="text-purple-500 dark:text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">تاريخ التسجيل</div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {formatDate(user.registrationDate)}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-100 dark:bg-orange-900">
                      <FaShoppingCart className="text-orange-500 dark:text-orange-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">
                        آخر عملية شراء
                      </div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {formatDate(user.lastPurchase)}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-100 dark:bg-yellow-900">
                      <FaStickyNote className="text-yellow-500 dark:text-yellow-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">ملاحظات</div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {user.notes || "لا توجد ملاحظات"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "المشتريات":
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="p-12 text-center">
              <FaShoppingCart className="mx-auto text-4xl text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                سجل المشتريات
              </h3>
              <p className="text-gray-500">سيتم إضافة سجل المشتريات قريباً</p>
            </div>
          </div>
        );
      case "المدفوعات":
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="p-12 text-center">
              <FaShoppingCart className="mx-auto text-4xl text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                سجل المدفوعات
              </h3>
              <p className="text-gray-500">سيتم إضافة سجل المدفوعات قريباً</p>
            </div>
          </div>
        );
      case "المحادثات":
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="p-12 text-center">
              <FaShoppingCart className="mx-auto text-4xl text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                سجل المحادثات
              </h3>
              <p className="text-gray-500">سيتم إضافة سجل المحادثات قريباً</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden animate-[modalIn_0.2s_ease-out]">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">تفاصيل العميل</h1>
          <button 
            onClick={() => setIsModalUserOpen(false)}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        <div className="relative">
          <div className="border-b border-gray-200 dark:border-gray-700 px-6">
            <nav className="flex space-x-8 rtl:space-x-reverse" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors relative -mb-[2px] ${
                    activeTab === tab
                      ? "text-blue-600 dark:text-blue-400 border-blue-500"
                      : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 border-transparent hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="overflow-y-auto max-h-[calc(90vh-200px)] scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayUser;
