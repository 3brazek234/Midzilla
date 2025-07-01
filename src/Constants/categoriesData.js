import { 
  FaFolder, 
  FaFolderOpen, 
  FaPlus, 
  FaEdit, 
  FaTrash,
  FaEye,
  FaShoppingCart,
  FaDollarSign,
  FaChartLine,
  FaBoxOpen,
  FaLaptop,
  FaMobile,
  FaTshirt,
  FaHome,
  FaGamepad,
  FaBook,
  FaCar,
  FaUtensils
} from 'react-icons/fa';

// Category Icons Mapping
export const categoryIcons = {
  electronics: FaLaptop,
  phones: FaMobile,
  clothing: FaTshirt,
  home: FaHome,
  gaming: FaGamepad,
  books: FaBook,
  automotive: FaCar,
  food: FaUtensils,
  default: FaFolder
};

// Categories List Data
export const categoriesListData = [
  {
    id: 'CAT-001',
    name: 'الإلكترونيات',
    nameEn: 'Electronics',
    description: 'أجهزة إلكترونية ومعدات تقنية',
    descriptionEn: 'Electronic devices and tech equipment',
    icon: 'electronics',
    parentCategory: null,
    isActive: true,
    createdDate: '2024-01-10',
    createdDateArabic: '10 يناير 2024',
    productsCount: 245,
    totalSales: 125000.00,
    color: '#3B82F6',
    slug: 'electronics',
    image: '/api/placeholder/80/80',
    subcategories: [
      {
        id: 'CAT-001-1',
        name: 'أجهزة كمبيوتر',
        nameEn: 'Computers',
        productsCount: 89,
        totalSales: 75000.00
      },
      {
        id: 'CAT-001-2',
        name: 'ملحقات',
        nameEn: 'Accessories',
        productsCount: 156,
        totalSales: 50000.00
      }
    ]
  },
  {
    id: 'CAT-002',
    name: 'الهواتف الذكية',
    nameEn: 'Smartphones',
    description: 'هواتف ذكية وملحقاتها',
    descriptionEn: 'Smartphones and accessories',
    icon: 'phones',
    parentCategory: null,
    isActive: true,
    createdDate: '2024-01-12',
    createdDateArabic: '12 يناير 2024',
    productsCount: 178,
    totalSales: 89500.00,
    color: '#10B981',
    slug: 'smartphones',
    image: '/api/placeholder/80/80',
    subcategories: [
      {
        id: 'CAT-002-1',
        name: 'آيفون',
        nameEn: 'iPhone',
        productsCount: 45,
        totalSales: 45000.00
      },
      {
        id: 'CAT-002-2',
        name: 'أندرويد',
        nameEn: 'Android',
        productsCount: 89,
        totalSales: 35000.00
      },
      {
        id: 'CAT-002-3',
        name: 'إكسسوارات',
        nameEn: 'Accessories',
        productsCount: 44,
        totalSales: 9500.00
      }
    ]
  },
  {
    id: 'CAT-003',
    name: 'الأزياء والملابس',
    nameEn: 'Fashion & Clothing',
    description: 'ملابس وأزياء للرجال والنساء',
    descriptionEn: 'Clothing and fashion for men and women',
    icon: 'clothing',
    parentCategory: null,
    isActive: true,
    createdDate: '2024-01-15',
    createdDateArabic: '15 يناير 2024',
    productsCount: 567,
    totalSales: 67800.00,
    color: '#F59E0B',
    slug: 'fashion-clothing',
    image: '/api/placeholder/80/80',
    subcategories: [
      {
        id: 'CAT-003-1',
        name: 'ملابس رجالية',
        nameEn: 'Men\'s Clothing',
        productsCount: 234,
        totalSales: 35000.00
      },
      {
        id: 'CAT-003-2',
        name: 'ملابس نسائية',
        nameEn: 'Women\'s Clothing',
        productsCount: 333,
        totalSales: 32800.00
      }
    ]
  },
  {
    id: 'CAT-004',
    name: 'المنزل والحديقة',
    nameEn: 'Home & Garden',
    description: 'أدوات منزلية ومعدات حديقة',
    descriptionEn: 'Home tools and garden equipment',
    icon: 'home',
    parentCategory: null,
    isActive: true,
    createdDate: '2024-01-18',
    createdDateArabic: '18 يناير 2024',
    productsCount: 289,
    totalSales: 45600.00,
    color: '#8B5CF6',
    slug: 'home-garden',
    image: '/api/placeholder/80/80',
    subcategories: [
      {
        id: 'CAT-004-1',
        name: 'أثاث',
        nameEn: 'Furniture',
        productsCount: 125,
        totalSales: 25000.00
      },
      {
        id: 'CAT-004-2',
        name: 'ديكور',
        nameEn: 'Decoration',
        productsCount: 164,
        totalSales: 20600.00
      }
    ]
  },
  {
    id: 'CAT-005',
    name: 'الألعاب والترفيه',
    nameEn: 'Gaming & Entertainment',
    description: 'ألعاب فيديو ووسائل ترفيه',
    descriptionEn: 'Video games and entertainment',
    icon: 'gaming',
    parentCategory: null,
    isActive: false,
    createdDate: '2024-01-20',
    createdDateArabic: '20 يناير 2024',
    productsCount: 134,
    totalSales: 78900.00,
    color: '#EF4444',
    slug: 'gaming-entertainment',
    image: '/api/placeholder/80/80',
    subcategories: [
      {
        id: 'CAT-005-1',
        name: 'أجهزة ألعاب',
        nameEn: 'Gaming Consoles',
        productsCount: 45,
        totalSales: 55000.00
      },
      {
        id: 'CAT-005-2',
        name: 'ألعاب',
        nameEn: 'Games',
        productsCount: 89,
        totalSales: 23900.00
      }
    ]
  },
  {
    id: 'CAT-006',
    name: 'الكتب والقرطاسية',
    nameEn: 'Books & Stationery',
    description: 'كتب وأدوات مكتبية وقرطاسية',
    descriptionEn: 'Books, office supplies and stationery',
    icon: 'books',
    parentCategory: null,
    isActive: true,
    createdDate: '2024-01-22',
    createdDateArabic: '22 يناير 2024',
    productsCount: 456,
    totalSales: 23400.00,
    color: '#06B6D4',
    slug: 'books-stationery',
    image: '/api/placeholder/80/80',
    subcategories: [
      {
        id: 'CAT-006-1',
        name: 'كتب تعليمية',
        nameEn: 'Educational Books',
        productsCount: 234,
        totalSales: 15000.00
      },
      {
        id: 'CAT-006-2',
        name: 'قرطاسية',
        nameEn: 'Stationery',
        productsCount: 222,
        totalSales: 8400.00
      }
    ]
  }
];

// Category Statistics
export const categoryStats = [
  {
    title: 'إجمالي التصنيفات',
    titleEn: 'Total Categories',
    value: '24',
    growth: '+8.3%',
    isPositive: true,
    icon: FaFolder,
    iconColor: 'text-blue-600 dark:text-blue-400',
    bgGradient: 'from-blue-50 to-blue-100',
    period: 'هذا الشهر',
    description: 'عدد التصنيفات النشطة'
  },
  {
    title: 'المنتجات المصنفة',
    titleEn: 'Categorized Products',
    value: '1,869',
    growth: '+15.2%',
    isPositive: true,
    icon: FaBoxOpen,
    iconColor: 'text-green-600 dark:text-green-400',
    bgGradient: 'from-green-50 to-green-100',
    period: 'المجموع',
    description: 'عدد المنتجات في التصنيفات'
  },
  {
    title: 'إجمالي المبيعات',
    titleEn: 'Total Sales',
    value: '430K',
    unit: 'ريال',
    growth: '+22.4%',
    isPositive: true,
    icon: FaDollarSign,
    iconColor: 'text-purple-600 dark:text-purple-400',
    bgGradient: 'from-purple-50 to-purple-100',
    period: 'هذا الشهر',
    description: 'مبيعات جميع التصنيفات'
  },
  {
    title: 'متوسط الأداء',
    titleEn: 'Average Performance',
    value: '89%',
    growth: '+5.7%',
    isPositive: true,
    icon: FaChartLine,
    iconColor: 'text-yellow-600 dark:text-yellow-400',
    bgGradient: 'from-yellow-50 to-yellow-100',
    period: 'هذا الشهر',
    description: 'متوسط أداء التصنيفات'
  }
];

// Quick Actions for Categories
export const categoryQuickActions = [
  {
    id: 1,
    title: 'إضافة تصنيف جديد',
    titleEn: 'Add New Category',
    icon: FaPlus,
    color: 'blue',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    textColor: 'text-blue-600 dark:text-blue-400',
    hoverColor: 'hover:bg-blue-100 dark:hover:bg-blue-900/30',
  },
  {
    id: 2,
    title: 'إدارة التصنيفات الفرعية',
    titleEn: 'Manage Subcategories',
    icon: FaFolderOpen,
    color: 'green',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    textColor: 'text-green-600 dark:text-green-400',
    hoverColor: 'hover:bg-green-100 dark:hover:bg-green-900/30',
  },
  {
    id: 3,
    title: 'تقارير المبيعات',
    titleEn: 'Sales Reports',
    icon: FaChartLine,
    color: 'purple',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    textColor: 'text-purple-600 dark:text-purple-400',
    hoverColor: 'hover:bg-purple-100 dark:hover:bg-purple-900/30',
  },
  {
    id: 4,
    title: 'ربط المنتجات',
    titleEn: 'Link Products',
    icon: FaShoppingCart,
    color: 'yellow',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
    textColor: 'text-yellow-600 dark:text-yellow-400',
    hoverColor: 'hover:bg-yellow-100 dark:hover:bg-yellow-900/30',
  }
];

// Category Filters
export const categoryFilters = [
  { value: 'all', label: 'جميع التصنيفات', labelEn: 'All Categories' },
  { value: 'active', label: 'نشط', labelEn: 'Active' },
  { value: 'inactive', label: 'غير نشط', labelEn: 'Inactive' },
  { value: 'today', label: 'اليوم', labelEn: 'Today' },
  { value: 'week', label: 'هذا الأسبوع', labelEn: 'This Week' },
  { value: 'month', label: 'هذا الشهر', labelEn: 'This Month' },
  { value: 'high_sales', label: 'مبيعات عالية', labelEn: 'High Sales' }
];

// Recent Activities for Categories
export const categoryActivities = [
  {
    id: 1,
    message: 'تم إنشاء تصنيف جديد "الرياضة واللياقة"',
    messageEn: 'New category "Sports & Fitness" created',
    time: 'منذ 10 دقائق',
    timeEn: '10 minutes ago',
    type: 'category_created',
    priority: 'medium',
    color: 'bg-green-500'
  },
  {
    id: 2,
    message: 'تم تحديث تصنيف "الإلكترونيات"',
    messageEn: 'Category "Electronics" updated',
    time: 'منذ 25 دقيقة',
    timeEn: '25 minutes ago',
    type: 'category_updated',
    priority: 'low',
    color: 'bg-blue-500'
  },
  {
    id: 3,
    message: 'تم ربط 15 منتج بتصنيف "الأزياء"',
    messageEn: '15 products linked to "Fashion" category',
    time: 'منذ 45 دقيقة',
    timeEn: '45 minutes ago',
    type: 'products_linked',
    priority: 'medium',
    color: 'bg-purple-500'
  },
  {
    id: 4,
    message: 'تحذير: تصنيف "الألعاب" غير نشط',
    messageEn: 'Warning: "Gaming" category is inactive',
    time: 'منذ ساعة',
    timeEn: '1 hour ago',
    type: 'category_warning',
    priority: 'high',
    color: 'bg-yellow-500'
  }
];

// Category Status Options
export const categoryStatuses = [
  { 
    value: 'active', 
    label: 'نشط', 
    labelEn: 'Active', 
    color: 'green',
    bgColor: 'bg-green-100 dark:bg-green-900/20',
    textColor: 'text-green-800 dark:text-green-300'
  },
  { 
    value: 'inactive', 
    label: 'غير نشط', 
    labelEn: 'Inactive', 
    color: 'red',
    bgColor: 'bg-red-100 dark:bg-red-900/20',
    textColor: 'text-red-800 dark:text-red-300'
  },
  { 
    value: 'draft', 
    label: 'مسودة', 
    labelEn: 'Draft', 
    color: 'gray',
    bgColor: 'bg-gray-100 dark:bg-gray-900/20',
    textColor: 'text-gray-800 dark:text-gray-300'
  }
]; 