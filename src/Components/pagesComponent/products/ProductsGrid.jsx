import React, { useState } from 'react';
import { FaEye, FaEdit, FaTrash, FaHeart, FaRegHeart, FaShoppingCart, FaTag } from 'react-icons/fa';
import { productsListData, productCategories, productStatuses } from '../../../Constants/productsData';
import { renderStarRating, formatCurrency } from '../../../utils/helpers.jsx';

const ProductsGrid = ({ searchQuery, filterBy, onEdit, onDelete }) => {
  const [products, setProducts] = useState(productsListData);
  const [favorites, setFavorites] = useState([]);

  // Filter products based on search and filter criteria
  const filteredProducts = products.filter(product => {
    const matchesSearch = searchQuery ? 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const matchesFilter = filterBy === 'all' ? true : 
      filterBy === 'active' ? product.status === 'active' :
      filterBy === 'inactive' ? product.status === 'inactive' :
      filterBy === 'out_of_stock' ? product.status === 'out_of_stock' || product.stock === 0 :
      filterBy === 'featured' ? product.featured :
      filterBy === 'on_sale' ? product.salePrice :
      filterBy === 'low_stock' ? product.stock <= product.minStock :
      true;

    return matchesSearch && matchesFilter;
  });

  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAction = (action, product) => {
    if (action === 'edit') {
      onEdit(product);
    } else if (action === 'delete') {
      onDelete(product);
    } else {
      console.log(`${action} action for product ${product.id}`);
    }
  };

  const getStatusConfig = (status) => {
    return productStatuses.find(s => s.value === status) || productStatuses[0];
  };

  const getCategoryInfo = (categoryKey) => {
    return productCategories[categoryKey] || productCategories.electronics;
  };

  const getStockStatus = (product) => {
    if (product.stock === 0) return { label: 'نفد المخزون', color: 'text-red-600', bgColor: 'bg-red-100' };
    if (product.stock <= product.minStock) return { label: 'مخزون منخفض', color: 'text-yellow-600', bgColor: 'bg-yellow-100' };
    return { label: 'متوفر', color: 'text-green-600', bgColor: 'bg-green-100' };
  };

  return (
    <div className="space-y-6">
      {/* Grid Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="text-arabic text-right sm:text-left mb-2 sm:mb-0">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">المنتجات</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            إدارة وعرض جميع المنتجات المتاحة
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
            عرض {filteredProducts.length} من أصل {products.length} منتج
          </div>
          <div className="flex gap-2">
            <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" title="عرض شبكي">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
              </svg>
            </button>
            <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" title="عرض قائمة">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => {
          const categoryInfo = getCategoryInfo(product.category);
          const CategoryIcon = categoryInfo.icon;
          const statusConfig = getStatusConfig(product.status);
          const stockStatus = getStockStatus(product);
          const isFavorite = favorites.includes(product.id);
          const isOnSale = product.salePrice && product.salePrice < product.price;
          const discount = isOnSale ? Math.round(((product.price - product.salePrice) / product.price) * 100) : 0;
          
          return (
            <div 
              key={product.id}
              className="dashboard-card hover:shadow-2xl transition-all duration-300 group relative overflow-hidden border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-700 transform hover:-translate-y-2"
            >
              {/* Product Badges */}
              <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                {product.featured && (
                  <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                    مميز
                  </span>
                )}
                {isOnSale && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    خصم {discount}%
                  </span>
                )}
              </div>

              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-3 left-3 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
              >
                {isFavorite ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart className="text-gray-400" />
                )}
              </button>

              {/* Product Image */}
              <div className="relative h-48 bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                {/* Category */}
                <div className="flex items-center justify-end gap-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400 text-arabic">
                    {categoryInfo.name}
                  </span>
                  <CategoryIcon 
                    className="text-sm" 
                    style={{ color: categoryInfo.color }}
                  />
                </div>

                {/* Product Name */}
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-arabic text-right line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center justify-end gap-2">
                  <span className="text-xs text-gray-500">({product.reviewsCount})</span>
                  <div className="flex items-center gap-1">
                    {renderStarRating(product.rating)}
                  </div>
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>

                {/* Price */}
                <div className="text-right">
                  {isOnSale ? (
                    <div className="space-y-1">
                      <div className="text-lg font-bold text-red-600">
                        {formatCurrency(product.salePrice)}
                      </div>
                      <div className="text-sm text-gray-500 line-through">
                        {formatCurrency(product.price)}
                      </div>
                    </div>
                  ) : (
                    <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
                      {formatCurrency(product.price)}
                    </div>
                  )}
                </div>

                {/* Stock Info */}
                <div className="flex items-center justify-between">
                  <div className={`text-xs px-2 py-1 rounded-full ${stockStatus.bgColor} ${stockStatus.color}`}>
                    {stockStatus.label}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 text-arabic">
                    المخزون: {product.stock}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-3">
                  <button
                    onClick={() => handleAction('edit', product)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors"
                  >
                    تعديل
                  </button>
                  <button
                    onClick={() => handleAction('view', product)}
                    className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                    title="عرض"
                  >
                    <FaEye className="text-sm" />
                  </button>
                  <button
                    onClick={() => handleAction('delete', product)}
                    className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    title="حذف"
                  >
                    <FaTrash className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Enhanced Empty State */}
      {filteredProducts.length === 0 && (
        <div className="dashboard-card text-center py-16">
          <div className="text-gray-400 dark:text-gray-500 mb-6">
            <FaTag className="text-8xl mx-auto mb-6 opacity-30" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 text-arabic">
            لا توجد منتجات
          </h3>
          <p className="text-lg text-gray-500 dark:text-gray-400 text-arabic mb-8">
            لم يتم العثور على منتجات تطابق المعايير المحددة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105">
              إضافة منتج جديد
            </button>
            <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
              إعادة تعيين الفلاتر
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsGrid; 