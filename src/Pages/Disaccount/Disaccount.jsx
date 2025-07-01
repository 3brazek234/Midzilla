import { useState } from "react";
import DiscountsHeader from "../../Components/pagesComponent/discounts/DiscountsHeader";
import DiscountsTable from "../../Components/pagesComponent/discounts/DiscountsTable";
import AddEditDiscountModal from "../../Components/pagesComponent/discounts/AddEditDiscountModal";
import DeleteDiscountModal from "../../Components/pagesComponent/discounts/DeleteDiscountModal";
import { discountsData as initialDiscountsData } from "../../Constants/discountsData";

const Disaccount = () => {
  const [discounts, setDiscounts] = useState(initialDiscountsData);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedDiscount, setSelectedDiscount] = useState(null);

  const handleOpenModal = (discount = null) => {
    setSelectedDiscount(discount);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedDiscount(null);
    setModalOpen(false);
  };

  const handleSaveDiscount = (formData) => {
    if (selectedDiscount) {
      // Update existing discount
      setDiscounts(
        discounts.map((d) =>
          d.id === selectedDiscount.id ? { ...d, ...formData } : d
        )
      );
    } else {
      // Add new discount
      const newDiscount = {
        ...formData,
        id: `DISC-${Date.now()}`,
        timesUsed: 0,
        status: new Date(formData.startDate) > new Date() ? "مجدول" : "نشط",
      };
      setDiscounts([...discounts, newDiscount]);
    }
  };

  const handleDeleteClick = (discount) => {
    setSelectedDiscount(discount);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    setDiscounts(
      discounts.filter((d) => d.id !== selectedDiscount.id)
    );
    setDeleteModalOpen(false);
    setSelectedDiscount(null);
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      dir="rtl"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Header Section with enhanced styling */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <DiscountsHeader onAddDiscount={() => handleOpenModal()} />
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">إجمالي الخصومات</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{discounts.length}</p>
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">الخصومات النشطة</p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {discounts.filter(d => d.status === "نشط").length}
                  </p>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">الخصومات المجدولة</p>
                  <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                    {discounts.filter(d => d.status === "مجدول").length}
                  </p>
                </div>
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                  <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">إجمالي الاستخدامات</p>
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {discounts.reduce((sum, d) => sum + d.timesUsed, 0)}
                  </p>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl overflow-hidden">
            <div className="p-6">
              <DiscountsTable
                discounts={discounts}
                onEdit={handleOpenModal}
                onDelete={handleDeleteClick}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <AddEditDiscountModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveDiscount}
        discount={selectedDiscount}
      />
      {selectedDiscount && (
        <DeleteDiscountModal
          isOpen={isDeleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onDelete={handleDeleteConfirm}
          discountCode={selectedDiscount.code}
        />
      )}

      {/* Custom CSS for background pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .dark .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
        }
      `}</style>
    </div>
  );
};

export default Disaccount;