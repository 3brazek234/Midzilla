import React, { useState } from 'react';
import { FaEye, FaEdit, FaTrash, FaPlus, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { categoriesListData, categoryIcons, categoryStatuses } from '../../../Constants/categoriesData';

const CategoriesGrid = ({ searchQuery, filterBy }) => {
  const [categories, setCategories] = useState(categoriesListData);
  const [expandedCategories, setExpandedCategories] = useState([]);

  // Filter categories based on search and filter criteria
  const filteredCategories = categories.filter(category => {
    const matchesSearch = searchQuery ? 
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const matchesFilter = filterBy === 'all' ? true : 
      filterBy === 'active' ? category.isActive :
      filterBy === 'inactive' ? !category.isActive :
      filterBy === 'today' ? new Date(category.createdDate).toDateString() === new Date().toDateString() :
      filterBy === 'week' ? isWithinLastWeek(category.createdDate) :
      filterBy === 'month' ? isWithinLastMonth(category.createdDate) :
      filterBy === 'high_sales' ? category.totalSales > 50000 :
      true;

    return matchesSearch && matchesFilter;
  });

  const isWithinLastWeek = (dateString) => {
    const date = new Date(dateString);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return date >= weekAgo;
  };


  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleAction = (action, categoryId) => {
    console.log(`${action} action for category ${categoryId}`);
    // Implement action logic here
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ar-SA', {
      style: 'currency',
      currency: 'SAR'
    }).format(amount);
  };

  const getStatusConfig = (isActive) => {
    return isActive ? categoryStatuses[0] : categoryStatuses[1];
  };
  const isWithinLastMonth = (dateString) => {
    const date = new Date(dateString);
    const monthAgo = new Date();
    monthAgo.setMonth(monthAgo.getMonth() - 1);
    return date >= monthAgo;
  };

  return (
    <div className="space-y-6">
      {/* Grid Header */}
      <div className="flex items-center justify-between">
        <h2 className="section-title text-arabic text-right">التصنيفات</h2>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          عرض {filteredCategories.length} من أصل {categories.length} تصنيف
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCategories.map((category) => {
          const IconComponent = categoryIcons[category.icon] || categoryIcons.default;
          const statusConfig = getStatusConfig(category.isActive);
          const isExpanded = expandedCategories.includes(category.id);
          
          return (
            <div 
              key={category.id}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 group p-6"
            >
              {/* Category Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div 
                    className="p-4 rounded-xl shadow-lg"
                    style={{ backgroundColor: `${category.color}15`, color: category.color }}
                  >
                    <IconComponent className="text-2xl" />
                  </div>
                  <div className="text-arabic text-right">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-lg">
                      {category.name}
                    </h3>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs ${statusConfig.bgColor} ${statusConfig.textColor}`}>
                      {statusConfig.label}
                    </div>
                  </div>
                </div>
                
                {/* Actions Menu */}
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    onClick={() => handleAction('view', category.id)}
                    className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                    title="عرض"
                  >
                    <FaEye className="text-sm" />
                  </button>
                  <button
                    onClick={() => handleAction('edit', category.id)}
                    className="p-2 text-yellow-600 hover:bg-yellow-100 dark:hover:bg-yellow-900/20 rounded-lg transition-colors"
                    title="تعديل"
                  >
                    <FaEdit className="text-sm" />
                  </button>
                  <button
                    onClick={() => handleAction('delete', category.id)}
                    className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    title="حذف"
                  >
                    <FaTrash className="text-sm" />
                  </button>
                </div>
              </div>

              {/* Category Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 text-arabic text-right leading-relaxed">
                {category.description}
              </p>

              {/* Category Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {category.productsCount}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 text-arabic">
                    منتج
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {formatCurrency(category.totalSales)}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 text-arabic">
                    المبيعات
                  </div>
                </div>
              </div>

              {/* Subcategories Section */}
              {category.subcategories && category.subcategories.length > 0 && (
                <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <span className="text-arabic">
                      التصنيفات الفرعية ({category.subcategories.length})
                    </span>
                    {isExpanded ? (
                      <FaChevronUp className="text-xs" />
                    ) : (
                      <FaChevronDown className="text-xs" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="mt-4 space-y-3 fade-in">
                      {category.subcategories.map((subcategory) => (
                        <div 
                          key={subcategory.id}
                          className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
                        >
                          <div className="text-arabic text-right">
                            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                              {subcategory.name}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {subcategory.productsCount} منتج • {formatCurrency(subcategory.totalSales)}
                            </div>
                          </div>
                          <button
                            onClick={() => handleAction('add_product', subcategory.id)}
                            className="p-2 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-lg transition-colors"
                            title="إضافة منتج"
                          >
                            <FaPlus className="text-xs" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 dark:text-gray-500 mb-4">
            <IconComponent className="text-6xl mx-auto mb-4 opacity-50" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 text-arabic">
            لا توجد تصنيفات
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-arabic">
            لم يتم العثور على تصنيفات تطابق المعايير المحددة
          </p>
        </div>
      )}

  
    </div>
  );
};

export default CategoriesGrid; 