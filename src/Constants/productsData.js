import { 
  FaBoxOpen, 
  FaPlus, 
  FaEdit, 
  FaTrash,
  FaEye,
  FaDollarSign,
  FaChartLine,
  FaBoxes,
  FaExclamationTriangle,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaLaptop,
  FaMobile,
  FaTshirt,
  FaHome,
  FaGamepad,
  FaBook,
  FaCar,
  FaUtensils,
  FaCamera,
  FaHeadphones
} from 'react-icons/fa';

// Product Status Configuration
export const productStatuses = [
  { 
    value: 'active', 
    label: 'نشط', 
    labelEn: 'Active', 
    color: 'green', 
    bgColor: 'bg-green-100 dark:bg-green-900/20', 
    textColor: 'text-green-800 dark:text-green-300',
    icon: FaCheckCircle
  },
  { 
    value: 'inactive', 
    label: 'غير نشط', 
    labelEn: 'Inactive', 
    color: 'red', 
    bgColor: 'bg-red-100 dark:bg-red-900/20', 
    textColor: 'text-red-800 dark:text-red-300',
    icon: FaTimesCircle
  },
  { 
    value: 'draft', 
    label: 'مسودة', 
    labelEn: 'Draft', 
    color: 'gray', 
    bgColor: 'bg-gray-100 dark:bg-gray-900/20', 
    textColor: 'text-gray-800 dark:text-gray-300',
    icon: FaClock
  },
  { 
    value: 'out_of_stock', 
    label: 'نفد المخزون', 
    labelEn: 'Out of Stock', 
    color: 'yellow', 
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/20', 
    textColor: 'text-yellow-800 dark:text-yellow-300',
    icon: FaExclamationTriangle
  }
];

// Product Categories with Icons
export const productCategories = {
  electronics: { name: 'الإلكترونيات', icon: FaLaptop, color: '#3B82F6' },
  phones: { name: 'الهواتف', icon: FaMobile, color: '#10B981' },
  clothing: { name: 'الملابس', icon: FaTshirt, color: '#F59E0B' },
  home: { name: 'المنزل', icon: FaHome, color: '#8B5CF6' },
  gaming: { name: 'الألعاب', icon: FaGamepad, color: '#EF4444' },
  books: { name: 'الكتب', icon: FaBook, color: '#06B6D4' },
  automotive: { name: 'السيارات', icon: FaCar, color: '#84CC16' },
  food: { name: 'الطعام', icon: FaUtensils, color: '#F97316' },
  cameras: { name: 'الكاميرات', icon: FaCamera, color: '#EC4899' },
  audio: { name: 'الصوتيات', icon: FaHeadphones, color: '#6366F1' }
};

// Products List Data
export const productsListData = [
  {
    id: 'PRD-001',
    name: 'لابتوب HP Pavilion 15',
    nameEn: 'HP Pavilion 15 Laptop',
    description: 'لابتوب عالي الأداء مع معالج Intel Core i7 وذاكرة 16GB',
    descriptionEn: 'High-performance laptop with Intel Core i7 and 16GB RAM',
    category: 'electronics',
    price: 2500.00,
    salePrice: 2250.00,
    cost: 1800.00,
    sku: 'HP-PAV-15-001',
    barcode: '1234567890123',
    stock: 45,
    minStock: 10,
    maxStock: 100,
    weight: 2.1,
    dimensions: '35.8 x 24.2 x 1.99 cm',
    status: 'active',
    featured: true,
    createdDate: '2024-01-10',
    createdDateArabic: '10 يناير 2024',
    updatedDate: '2024-01-20',
    updatedDateArabic: '20 يناير 2024',
    rating: 4.5,
    reviewsCount: 128,
    salesCount: 89,
    viewsCount: 1250,
    images: [
      '/api/placeholder/300/300',
      '/api/placeholder/300/300',
      '/api/placeholder/300/300'
    ],
    tags: ['لابتوب', 'HP', 'Intel', 'Gaming'],
    variants: [
      { id: 1, name: 'أسود', value: 'black', price: 2250.00, stock: 25 },
      { id: 2, name: 'فضي', value: 'silver', price: 2250.00, stock: 20 }
    ],
    specifications: {
      processor: 'Intel Core i7-11370H',
      memory: '16GB DDR4',
      storage: '512GB SSD',
      graphics: 'Intel Iris Xe',
      display: '15.6" Full HD',
      battery: '3-cell 41WHr'
    }
  },
  {
    id: 'PRD-002',
    name: 'هاتف iPhone 15 Pro',
    nameEn: 'iPhone 15 Pro',
    description: 'أحدث هاتف من Apple مع كاميرا متطورة ومعالج A17 Pro',
    descriptionEn: 'Latest Apple phone with advanced camera and A17 Pro chip',
    category: 'phones',
    price: 4500.00,
    salePrice: null,
    cost: 3200.00,
    sku: 'APL-IP15-PRO-001',
    barcode: '1234567890124',
    stock: 23,
    minStock: 5,
    maxStock: 50,
    weight: 0.187,
    dimensions: '14.69 x 7.08 x 0.83 cm',
    status: 'active',
    featured: true,
    createdDate: '2024-01-12',
    createdDateArabic: '12 يناير 2024',
    updatedDate: '2024-01-22',
    updatedDateArabic: '22 يناير 2024',
    rating: 4.8,
    reviewsCount: 256,
    salesCount: 156,
    viewsCount: 3450,
    images: [
      '/api/placeholder/300/300',
      '/api/placeholder/300/300'
    ],
    tags: ['iPhone', 'Apple', 'Pro', '5G'],
    variants: [
      { id: 1, name: 'تيتانيوم طبيعي', value: 'natural', price: 4500.00, stock: 8 },
      { id: 2, name: 'تيتانيوم أسود', value: 'black', price: 4500.00, stock: 15 }
    ],
    specifications: {
      processor: 'A17 Pro chip',
      memory: '8GB',
      storage: '256GB',
      camera: '48MP Main + 12MP Ultra Wide + 12MP Telephoto',
      display: '6.1" Super Retina XDR',
      battery: 'Up to 23 hours video playback'
    }
  },
  {
    id: 'PRD-003',
    name: 'قميص قطني رجالي',
    nameEn: 'Men\'s Cotton Shirt',
    description: 'قميص قطني عالي الجودة مناسب للعمل والمناسبات',
    descriptionEn: 'High-quality cotton shirt suitable for work and occasions',
    category: 'clothing',
    price: 120.00,
    salePrice: 89.00,
    cost: 45.00,
    sku: 'CLT-SHT-MEN-001',
    barcode: '1234567890125',
    stock: 78,
    minStock: 20,
    maxStock: 200,
    weight: 0.3,
    dimensions: 'متاح بأحجام مختلفة',
    status: 'active',
    featured: false,
    createdDate: '2024-01-15',
    createdDateArabic: '15 يناير 2024',
    updatedDate: '2024-01-18',
    updatedDateArabic: '18 يناير 2024',
    rating: 4.2,
    reviewsCount: 67,
    salesCount: 234,
    viewsCount: 890,
    images: [
      '/api/placeholder/300/300'
    ],
    tags: ['قميص', 'رجالي', 'قطن', 'عمل'],
    variants: [
      { id: 1, name: 'صغير', value: 'S', price: 89.00, stock: 20 },
      { id: 2, name: 'متوسط', value: 'M', price: 89.00, stock: 25 },
      { id: 3, name: 'كبير', value: 'L', price: 89.00, stock: 20 },
      { id: 4, name: 'كبير جداً', value: 'XL', price: 89.00, stock: 13 }
    ],
    specifications: {
      material: '100% قطن',
      color: 'أبيض',
      care: 'يغسل بالماء البارد',
      origin: 'مصر'
    }
  },
  {
    id: 'PRD-004',
    name: 'كرسي مكتبي مريح',
    nameEn: 'Ergonomic Office Chair',
    description: 'كرسي مكتبي مريح مع دعم قطني ومسند رأس قابل للتعديل',
    descriptionEn: 'Comfortable office chair with lumbar support and adjustable headrest',
    category: 'home',
    price: 850.00,
    salePrice: 720.00,
    cost: 400.00,
    sku: 'HOM-CHR-OFF-001',
    barcode: '1234567890126',
    stock: 12,
    minStock: 5,
    maxStock: 30,
    weight: 18.5,
    dimensions: '68 x 68 x 120 cm',
    status: 'active',
    featured: true,
    createdDate: '2024-01-18',
    createdDateArabic: '18 يناير 2024',
    updatedDate: '2024-01-25',
    updatedDateArabic: '25 يناير 2024',
    rating: 4.6,
    reviewsCount: 45,
    salesCount: 67,
    viewsCount: 567,
    images: [
      '/api/placeholder/300/300',
      '/api/placeholder/300/300'
    ],
    tags: ['كرسي', 'مكتب', 'مريح', 'أثاث'],
    variants: [
      { id: 1, name: 'أسود', value: 'black', price: 720.00, stock: 8 },
      { id: 2, name: 'رمادي', value: 'gray', price: 720.00, stock: 4 }
    ],
    specifications: {
      material: 'جلد صناعي + قماش شبكي',
      height: 'قابل للتعديل 110-120 cm',
      weight_capacity: '120 kg',
      wheels: '5 عجلات دوارة'
    }
  },
  {
    id: 'PRD-005',
    name: 'لعبة PlayStation 5',
    nameEn: 'PlayStation 5 Console',
    description: 'جهاز ألعاب سوني الأحدث مع تقنية الجيل القادم',
    descriptionEn: 'Sony\'s latest gaming console with next-gen technology',
    category: 'gaming',
    price: 2200.00,
    salePrice: null,
    cost: 1650.00,
    sku: 'GAM-PS5-STD-001',
    barcode: '1234567890127',
    stock: 3,
    minStock: 2,
    maxStock: 15,
    weight: 4.5,
    dimensions: '39 x 26 x 10.4 cm',
    status: 'out_of_stock',
    featured: true,
    createdDate: '2024-01-20',
    createdDateArabic: '20 يناير 2024',
    updatedDate: '2024-01-28',
    updatedDateArabic: '28 يناير 2024',
    rating: 4.9,
    reviewsCount: 189,
    salesCount: 234,
    viewsCount: 5670,
    images: [
      '/api/placeholder/300/300'
    ],
    tags: ['PlayStation', 'ألعاب', 'سوني', 'جديد'],
    variants: [
      { id: 1, name: 'قياسي', value: 'standard', price: 2200.00, stock: 3 }
    ],
    specifications: {
      cpu: 'AMD Zen 2',
      gpu: 'AMD RDNA 2',
      memory: '16GB GDDR6',
      storage: '825GB SSD',
      resolution: 'Up to 4K',
      audio: '3D Audio'
    }
  },
  {
    id: 'PRD-006',
    name: 'كتاب تعلم البرمجة',
    nameEn: 'Programming Learning Book',
    description: 'دليل شامل لتعلم البرمجة للمبتدئين',
    descriptionEn: 'Comprehensive guide to learning programming for beginners',
    category: 'books',
    price: 95.00,
    salePrice: 75.00,
    cost: 35.00,
    sku: 'BOK-PRG-BEG-001',
    barcode: '1234567890128',
    stock: 156,
    minStock: 50,
    maxStock: 300,
    weight: 0.8,
    dimensions: '24 x 17 x 3 cm',
    status: 'active',
    featured: false,
    createdDate: '2024-01-22',
    createdDateArabic: '22 يناير 2024',
    updatedDate: '2024-01-22',
    updatedDateArabic: '22 يناير 2024',
    rating: 4.3,
    reviewsCount: 92,
    salesCount: 345,
    viewsCount: 1890,
    images: [
      '/api/placeholder/300/300'
    ],
    tags: ['كتاب', 'برمجة', 'تعليم', 'مبتدئين'],
    variants: [
      { id: 1, name: 'نسخة ورقية', value: 'paperback', price: 75.00, stock: 156 }
    ],
    specifications: {
      pages: '450 صفحة',
      language: 'العربية',
      publisher: 'دار التقنية',
      isbn: '978-1234567890'
    }
  }
];

// Product Statistics
export const productStats = [
  {
    title: 'إجمالي المنتجات',
    titleEn: 'Total Products',
    value: '2,456',
    growth: '+12.8%',
    isPositive: true,
    icon: FaBoxOpen,
    iconColor: 'text-blue-600 dark:text-blue-400',
    bgGradient: 'from-blue-50 to-blue-100',
    period: 'هذا الشهر',
    description: 'عدد المنتجات المسجلة'
  },
  {
    title: 'المنتجات النشطة',
    titleEn: 'Active Products',
    value: '1,987',
    growth: '+8.4%',
    isPositive: true,
    icon: FaCheckCircle,
    iconColor: 'text-green-600 dark:text-green-400',
    bgGradient: 'from-green-50 to-green-100',
    period: 'الآن',
    description: 'منتجات متاحة للبيع'
  },
  {
    title: 'نفد المخزون',
    titleEn: 'Out of Stock',
    value: '45',
    growth: '-15.3%',
    isPositive: false,
    icon: FaExclamationTriangle,
    iconColor: 'text-yellow-600 dark:text-yellow-400',
    bgGradient: 'from-yellow-50 to-yellow-100',
    period: 'الآن',
    description: 'منتجات تحتاج إعادة تموين'
  },
  {
    title: 'قيمة المخزون',
    titleEn: 'Inventory Value',
    value: '1.2M',
    unit: 'ريال',
    growth: '+18.7%',
    isPositive: true,
    icon: FaDollarSign,
    iconColor: 'text-purple-600 dark:text-purple-400',
    bgGradient: 'from-purple-50 to-purple-100',
    period: 'المجموع',
    description: 'إجمالي قيمة المخزون'
  }
];

// Quick Actions for Products
export const productQuickActions = [
  {
    id: 1,
    title: 'إضافة منتج جديد',
    titleEn: 'Add New Product',
    icon: FaPlus,
    color: 'blue',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    textColor: 'text-blue-600 dark:text-blue-400',
    hoverColor: 'hover:bg-blue-100 dark:hover:bg-blue-900/30',
  },
  {
    id: 2,
    title: 'إدارة المخزون',
    titleEn: 'Manage Inventory',
    icon: FaBoxes,
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
    title: 'تحديث جماعي',
    titleEn: 'Bulk Update',
    icon: FaEdit,
    color: 'yellow',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
    textColor: 'text-yellow-600 dark:text-yellow-400',
    hoverColor: 'hover:bg-yellow-100 dark:hover:bg-yellow-900/30',
  }
];

// Product Filters
export const productFilters = [
  { value: 'all', label: 'جميع المنتجات', labelEn: 'All Products' },
  { value: 'active', label: 'نشط', labelEn: 'Active' },
  { value: 'inactive', label: 'غير نشط', labelEn: 'Inactive' },
  { value: 'out_of_stock', label: 'نفد المخزون', labelEn: 'Out of Stock' },
  { value: 'featured', label: 'مميز', labelEn: 'Featured' },
  { value: 'on_sale', label: 'عرض خاص', labelEn: 'On Sale' },
  { value: 'low_stock', label: 'مخزون منخفض', labelEn: 'Low Stock' }
];

// Recent Activities for Products
export const productActivities = [
  {
    id: 1,
    message: 'تم إضافة منتج جديد "سماعات لاسلكية"',
    messageEn: 'New product "Wireless Headphones" added',
    productId: 'PRD-007',
    time: 'منذ 5 دقائق',
    timeEn: '5 minutes ago',
    type: 'product_added',
    priority: 'medium',
    color: 'bg-green-500'
  },
  {
    id: 2,
    message: 'تم تحديث سعر "لابتوب HP Pavilion 15"',
    messageEn: 'Price updated for "HP Pavilion 15 Laptop"',
    productId: 'PRD-001',
    time: 'منذ 15 دقيقة',
    timeEn: '15 minutes ago',
    type: 'price_updated',
    priority: 'low',
    color: 'bg-blue-500'
  },
  {
    id: 3,
    message: 'تحذير: مخزون "iPhone 15 Pro" منخفض',
    messageEn: 'Warning: "iPhone 15 Pro" stock is low',
    productId: 'PRD-002',
    time: 'منذ 30 دقيقة',
    timeEn: '30 minutes ago',
    type: 'low_stock',
    priority: 'high',
    color: 'bg-yellow-500'
  },
  {
    id: 4,
    message: 'نفد مخزون "PlayStation 5"',
    messageEn: '"PlayStation 5" is out of stock',
    productId: 'PRD-005',
    time: 'منذ ساعة',
    timeEn: '1 hour ago',
    type: 'out_of_stock',
    priority: 'urgent',
    color: 'bg-red-500'
  }
];

 