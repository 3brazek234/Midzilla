import { 
  FaShoppingCart, 
  FaClipboardList, 
  FaTruck, 
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
  FaTimesCircle,
  FaUser,
  FaDollarSign,
  FaCalendarAlt
} from 'react-icons/fa';

// Order Status Configuration
export const orderStatuses = [
  { 
    value: 'pending', 
    label: 'قيد المعالجة', 
    labelEn: 'Pending', 
    color: 'yellow', 
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/20', 
    textColor: 'text-yellow-800 dark:text-yellow-300',
    icon: FaClock
  },
  { 
    value: 'confirmed', 
    label: 'مؤكد', 
    labelEn: 'Confirmed', 
    color: 'blue', 
    bgColor: 'bg-blue-100 dark:bg-blue-900/20', 
    textColor: 'text-blue-800 dark:text-blue-300',
    icon: FaClipboardList
  },
  { 
    value: 'processing', 
    label: 'قيد التحضير', 
    labelEn: 'Processing', 
    color: 'purple', 
    bgColor: 'bg-purple-100 dark:bg-purple-900/20', 
    textColor: 'text-purple-800 dark:text-purple-300',
    icon: FaShoppingCart
  },
  { 
    value: 'shipped', 
    label: 'تم الشحن', 
    labelEn: 'Shipped', 
    color: 'indigo', 
    bgColor: 'bg-indigo-100 dark:bg-indigo-900/20', 
    textColor: 'text-indigo-800 dark:text-indigo-300',
    icon: FaTruck
  },
  { 
    value: 'delivered', 
    label: 'تم التسليم', 
    labelEn: 'Delivered', 
    color: 'green', 
    bgColor: 'bg-green-100 dark:bg-green-900/20', 
    textColor: 'text-green-800 dark:text-green-300',
    icon: FaCheckCircle
  },
  { 
    value: 'cancelled', 
    label: 'ملغي', 
    labelEn: 'Cancelled', 
    color: 'red', 
    bgColor: 'bg-red-100 dark:bg-red-900/20', 
    textColor: 'text-red-800 dark:text-red-300',
    icon: FaTimesCircle
  },
  { 
    value: 'returned', 
    label: 'مرتجع', 
    labelEn: 'Returned', 
    color: 'gray', 
    bgColor: 'bg-gray-100 dark:bg-gray-900/20', 
    textColor: 'text-gray-800 dark:text-gray-300',
    icon: FaExclamationTriangle
  }
];

// Orders List Data
export const ordersListData = [
  {
    id: 'ORD-001',
    orderNumber: 'ORD-2024-001',
    customerName: 'أحمد محمد العلي',
    customerEmail: 'ahmed.ali@example.com',
    customerPhone: '+966501234567',
    orderDate: '2024-01-15',
    orderDateArabic: '15 يناير 2024',
    deliveryDate: '2024-01-17',
    deliveryDateArabic: '17 يناير 2024',
    status: 'delivered',
    total: 1250.00,
    items: [
      { id: 1, name: 'لابتوب HP', quantity: 1, price: 800.00, image: '/api/placeholder/50/50' },
      { id: 2, name: 'ماوس لاسلكي', quantity: 2, price: 225.00, image: '/api/placeholder/50/50' }
    ],
    shippingAddress: {
      street: 'شارع الملك فهد',
      city: 'الرياض',
      region: 'منطقة الرياض',
      postalCode: '12345',
      country: 'المملكة العربية السعودية'
    },
    paymentMethod: 'بطاقة ائتمانية',
    paymentStatus: 'paid',
    trackingNumber: 'TRK-001-2024'
  },
  {
    id: 'ORD-002',
    orderNumber: 'ORD-2024-002',
    customerName: 'فاطمة أحمد السالم',
    customerEmail: 'fatima.salem@example.com',
    customerPhone: '+966501234568',
    orderDate: '2024-01-16',
    orderDateArabic: '16 يناير 2024',
    deliveryDate: '2024-01-19',
    deliveryDateArabic: '19 يناير 2024',
    status: 'shipped',
    total: 875.50,
    items: [
      { id: 3, name: 'هاتف ذكي Samsung', quantity: 1, price: 650.00, image: '/api/placeholder/50/50' },
      { id: 4, name: 'حافظة حماية', quantity: 1, price: 225.50, image: '/api/placeholder/50/50' }
    ],
    shippingAddress: {
      street: 'شارع العليا',
      city: 'جدة',
      region: 'منطقة مكة المكرمة',
      postalCode: '23456',
      country: 'المملكة العربية السعودية'
    },
    paymentMethod: 'تحويل بنكي',
    paymentStatus: 'paid',
    trackingNumber: 'TRK-002-2024'
  },
  {
    id: 'ORD-003',
    orderNumber: 'ORD-2024-003',
    customerName: 'محمد صالح الأحمد',
    customerEmail: 'mohamed.ahmed@example.com',
    customerPhone: '+966501234569',
    orderDate: '2024-01-17',
    orderDateArabic: '17 يناير 2024',
    deliveryDate: '2024-01-20',
    deliveryDateArabic: '20 يناير 2024',
    status: 'processing',
    total: 2100.75,
    items: [
      { id: 5, name: 'جهاز تابلت iPad', quantity: 1, price: 1500.00, image: '/api/placeholder/50/50' },
      { id: 6, name: 'قلم رقمي', quantity: 1, price: 350.00, image: '/api/placeholder/50/50' },
      { id: 7, name: 'حامل تابلت', quantity: 1, price: 250.75, image: '/api/placeholder/50/50' }
    ],
    shippingAddress: {
      street: 'شارع الأمير محمد بن فهد',
      city: 'الدمام',
      region: 'المنطقة الشرقية',
      postalCode: '34567',
      country: 'المملكة العربية السعودية'
    },
    paymentMethod: 'محفظة رقمية',
    paymentStatus: 'pending',
    trackingNumber: 'TRK-003-2024'
  },
  {
    id: 'ORD-004',
    orderNumber: 'ORD-2024-004',
    customerName: 'سارة خالد المطيري',
    customerEmail: 'sara.almutairi@example.com',
    customerPhone: '+966501234570',
    orderDate: '2024-01-18',
    orderDateArabic: '18 يناير 2024',
    deliveryDate: '2024-01-21',
    deliveryDateArabic: '21 يناير 2024',
    status: 'confirmed',
    total: 560.25,
    items: [
      { id: 8, name: 'ساعة ذكية Apple Watch', quantity: 1, price: 450.00, image: '/api/placeholder/50/50' },
      { id: 9, name: 'سوار إضافي', quantity: 1, price: 110.25, image: '/api/placeholder/50/50' }
    ],
    shippingAddress: {
      street: 'شارع التحلية',
      city: 'الرياض',
      region: 'منطقة الرياض',
      postalCode: '11234',
      country: 'المملكة العربية السعودية'
    },
    paymentMethod: 'نقداً عند الاستلام',
    paymentStatus: 'pending',
    trackingNumber: 'TRK-004-2024'
  },
  {
    id: 'ORD-005',
    orderNumber: 'ORD-2024-005',
    customerName: 'عبدالله ناصر العتيبي',
    customerEmail: 'abdullah.alotaibi@example.com',
    customerPhone: '+966501234571',
    orderDate: '2024-01-19',
    orderDateArabic: '19 يناير 2024',
    deliveryDate: '2024-01-22',
    deliveryDateArabic: '22 يناير 2024',
    status: 'pending',
    total: 3200.00,
    items: [
      { id: 10, name: 'كمبيوتر مكتبي Dell', quantity: 1, price: 2500.00, image: '/api/placeholder/50/50' },
      { id: 11, name: 'شاشة 24 بوصة', quantity: 1, price: 450.00, image: '/api/placeholder/50/50' },
      { id: 12, name: 'لوحة مفاتيح وماوس', quantity: 1, price: 250.00, image: '/api/placeholder/50/50' }
    ],
    shippingAddress: {
      street: 'شارع الملك عبدالعزيز',
      city: 'المدينة المنورة',
      region: 'منطقة المدينة المنورة',
      postalCode: '45678',
      country: 'المملكة العربية السعودية'
    },
    paymentMethod: 'بطاقة ائتمانية',
    paymentStatus: 'failed',
    trackingNumber: null
  },
  {
    id: 'ORD-006',
    orderNumber: 'ORD-2024-006',
    customerName: 'نورا سعد الغامدي',
    customerEmail: 'nora.alghamdi@example.com',
    customerPhone: '+966501234572',
    orderDate: '2024-01-20',
    orderDateArabic: '20 يناير 2024',
    deliveryDate: null,
    deliveryDateArabic: null,
    status: 'cancelled',
    total: 890.50,
    items: [
      { id: 13, name: 'جهاز PlayStation 5', quantity: 1, price: 890.50, image: '/api/placeholder/50/50' }
    ],
    shippingAddress: {
      street: 'شارع الأندلس',
      city: 'جدة',
      region: 'منطقة مكة المكرمة',
      postalCode: '21234',
      country: 'المملكة العربية السعودية'
    },
    paymentMethod: 'تحويل بنكي',
    paymentStatus: 'refunded',
    trackingNumber: null
  }
];

// Order Statistics
export const orderStats = [
  {
    title: 'إجمالي الطلبات',
    titleEn: 'Total Orders',
    value: '1,234',
    growth: '+12.5%',
    isPositive: true,
    icon: FaShoppingCart,
    iconColor: 'text-blue-600 dark:text-blue-400',
    bgGradient: 'from-blue-50 to-blue-100',
    period: 'هذا الشهر',
    description: 'العدد الإجمالي للطلبات المسجلة'
  },
  {
    title: 'طلبات قيد المعالجة',
    titleEn: 'Pending Orders',
    value: '89',
    growth: '+8.2%',
    isPositive: true,
    icon: FaClock,
    iconColor: 'text-yellow-600 dark:text-yellow-400',
    bgGradient: 'from-yellow-50 to-yellow-100',
    period: 'الآن',
    description: 'طلبات تحتاج للمراجعة والمعالجة'
  },
  {
    title: 'الطلبات المكتملة',
    titleEn: 'Completed Orders',
    value: '1,045',
    growth: '+15.3%',
    isPositive: true,
    icon: FaCheckCircle,
    iconColor: 'text-green-600 dark:text-green-400',
    bgGradient: 'from-green-50 to-green-100',
    period: 'هذا الشهر',
    description: 'طلبات تم تسليمها بنجاح'
  },
  {
    title: 'قيمة المبيعات',
    titleEn: 'Sales Value',
    value: '2.4M',
    unit: 'ريال',
    growth: '+22.1%',
    isPositive: true,
    icon: FaDollarSign,
    iconColor: 'text-purple-600 dark:text-purple-400',
    bgGradient: 'from-purple-50 to-purple-100',
    period: 'هذا الشهر',
    description: 'إجمالي قيمة الطلبات'
  }
];

// Payment Methods
export const paymentMethods = [
  { value: 'credit_card', label: 'بطاقة ائتمانية', labelEn: 'Credit Card', icon: '💳' },
  { value: 'bank_transfer', label: 'تحويل بنكي', labelEn: 'Bank Transfer', icon: '🏦' },
  { value: 'digital_wallet', label: 'محفظة رقمية', labelEn: 'Digital Wallet', icon: '📱' },
  { value: 'cash_on_delivery', label: 'نقداً عند الاستلام', labelEn: 'Cash on Delivery', icon: '💵' }
];

// Quick Actions Data
export const orderQuickActions = [
  {
    id: 1,
    title: 'إنشاء طلب جديد',
    titleEn: 'Create New Order',
    icon: FaShoppingCart,
    color: 'blue',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    textColor: 'text-blue-600 dark:text-blue-400',
    hoverColor: 'hover:bg-blue-100 dark:hover:bg-blue-900/30',
  },
  {
    id: 2,
    title: 'مراجعة الطلبات المعلقة',
    titleEn: 'Review Pending Orders',
    icon: FaClock,
    color: 'yellow',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
    textColor: 'text-yellow-600 dark:text-yellow-400',
    hoverColor: 'hover:bg-yellow-100 dark:hover:bg-yellow-900/30',
  },
  {
    id: 3,
    title: 'تتبع الشحنات',
    titleEn: 'Track Shipments',
    icon: FaTruck,
    color: 'green',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    textColor: 'text-green-600 dark:text-green-400',
    hoverColor: 'hover:bg-green-100 dark:hover:bg-green-900/30',
  },
  {
    id: 4,
    title: 'تقارير المبيعات',
    titleEn: 'Sales Reports',
    icon: FaClipboardList,
    color: 'purple',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    textColor: 'text-purple-600 dark:text-purple-400',
    hoverColor: 'hover:bg-purple-100 dark:hover:bg-purple-900/30',
  }
];

// Order Filters
export const orderFilters = [
  { value: 'all', label: 'جميع الطلبات', labelEn: 'All Orders' },
  { value: 'today', label: 'اليوم', labelEn: 'Today' },
  { value: 'week', label: 'هذا الأسبوع', labelEn: 'This Week' },
  { value: 'month', label: 'هذا الشهر', labelEn: 'This Month' },
  { value: 'pending', label: 'قيد المعالجة', labelEn: 'Pending' },
  { value: 'confirmed', label: 'مؤكد', labelEn: 'Confirmed' },
  { value: 'delivered', label: 'مكتمل', labelEn: 'Delivered' }
];

// Recent Activities for Orders
export const orderActivities = [
  {
    id: 1,
    message: 'طلب جديد من العميل أحمد محمد',
    messageEn: 'New order from customer Ahmed Mohamed',
    orderNumber: 'ORD-2024-007',
    time: 'منذ 5 دقائق',
    timeEn: '5 minutes ago',
    type: 'new_order',
    priority: 'high',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    message: 'تم تأكيد الطلب ORD-2024-006',
    messageEn: 'Order ORD-2024-006 confirmed',
    orderNumber: 'ORD-2024-006',
    time: 'منذ 15 دقيقة',
    timeEn: '15 minutes ago',
    type: 'order_confirmed',
    priority: 'medium',
    color: 'bg-green-500'
  },
  {
    id: 3,
    message: 'تم شحن الطلب ORD-2024-005',
    messageEn: 'Order ORD-2024-005 shipped',
    orderNumber: 'ORD-2024-005',
    time: 'منذ 30 دقيقة',
    timeEn: '30 minutes ago',
    type: 'order_shipped',
    priority: 'medium',
    color: 'bg-indigo-500'
  },
  {
    id: 4,
    message: 'مشكلة في الدفع للطلب ORD-2024-004',
    messageEn: 'Payment issue for order ORD-2024-004',
    orderNumber: 'ORD-2024-004',
    time: 'منذ ساعة',
    timeEn: '1 hour ago',
    type: 'payment_issue',
    priority: 'urgent',
    color: 'bg-red-500'
  }
]; 