import React, { useState } from 'react';
import { 
  ProductStatsCards, 
  ProductQuickActions, 
  ProductFilters, 
  ProductsGrid, 
  ProductActivity 
} from '@/Components/pagesComponent/products';
import AddEditProductModal from '../../Components/pagesComponent/products/AddEditProductModal';
import DeleteProductModal from '../../Components/pagesComponent/products/DeleteProductModal';
import { productsListData } from '../../Constants/productsData';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBy, setFilterBy] = useState('all');
  const [products, setProducts] = useState(productsListData);
  const [isModalOpen, setModalOpen] = useState(true);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filter) => {
    setFilterBy(filter);
  };

  const handleOpenModal = (product = null) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };

  const handleSaveProduct = (formData) => {
    if (selectedProduct) {
      setProducts(
        products.map((p) =>
          p.id === selectedProduct.id ? { ...p, ...formData } : p
        )
      );
    } else {
      const newProduct = {
        ...formData,
        id: `PROD-${Date.now()}`,
        // Add other default fields if necessary
      };
      setProducts([...products, newProduct]);
    }
  };

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    setProducts(
      products.filter((p) => p.id !== selectedProduct.id)
    );
    setDeleteModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Page Header with Enhanced Design */}
        <div className="mb-6 sm:mb-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-arabic text-right">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                إدارة المنتجات
              </h1>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                إضافة وتحرير ومتابعة جميع المنتجات والمخزون
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => handleOpenModal()}
                className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                إضافة منتج جديد
              </button>
              <button className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300 text-sm sm:text-base">
                تصدير البيانات
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Cards with Animation */}
        <div className="mb-6 sm:mb-8 fade-in">
          <ProductStatsCards />
        </div>

        {/* Quick Actions with Better Spacing */}
        <div className="mb-6 sm:mb-8 slide-up">
          <ProductQuickActions />
        </div>

        {/* Main Content Grid with Improved Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {/* Products Management Section - Takes more space */}
          <div className="lg:col-span-3 xl:col-span-4 space-y-4 sm:space-y-6">
            {/* Filters with Enhanced Design */}
            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <ProductFilters 
                onSearchChange={handleSearchChange}
                onFilterChange={handleFilterChange}
              />
            </div>

            {/* Products Grid with Loading State */}
            <div className="fade-in" style={{ animationDelay: '0.3s' }}>
              <ProductsGrid 
                searchQuery={searchQuery}
                filterBy={filterBy}
                onEdit={handleOpenModal}
                onDelete={handleDeleteClick}
              />
            </div>
          </div>

          {/* Sidebar with Sticky Position */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-4 sm:space-y-6">
              <div className="fade-in" style={{ animationDelay: '0.4s' }}>
                <ProductActivity />
              </div>
              
              {/* Additional Quick Stats Widget */}
              <div className="dashboard-card fade-in p-4 sm:p-6" style={{ animationDelay: '0.5s' }}>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 text-arabic text-right">
                  إحصائيات سريعة
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="text-right text-arabic">
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">منتجات متاحة</div>
                      <div className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">1,987</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="text-right text-arabic">
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">مخزون منخفض</div>
                      <div className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">23</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="text-right text-arabic">
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">نفد المخزون</div>
                      <div className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">45</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions Widget */}
              <div className="dashboard-card fade-in p-4 sm:p-6" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 text-arabic text-right">
                  إجراءات سريعة
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <button className="w-full text-right text-arabic bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 p-2.5 sm:p-3 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-sm sm:text-base">
                    تحديث المخزون
                  </button>
                  <button className="w-full text-right text-arabic bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-2.5 sm:p-3 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors text-sm sm:text-base">
                    تقرير المبيعات
                  </button>
                  <button className="w-full text-right text-arabic bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 p-2.5 sm:p-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors text-sm sm:text-base">
                    إدارة الفئات
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Summary */}
        <div className="mt-8 sm:mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-700 fade-in">
          <div className="text-center text-arabic">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              آخر تحديث: اليوم في {new Date().toLocaleTimeString('ar-SA')}
            </p>
          </div>
        </div>
      </div>
      <AddEditProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveProduct}
        product={selectedProduct}
      />
      {selectedProduct && (
        <DeleteProductModal
          isOpen={isDeleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onDelete={handleDeleteConfirm}
          productName={selectedProduct.name}
        />
      )}
    </div>
  );
};

export default Products;