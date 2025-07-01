import { FaUsers, FaShoppingCart, FaDollarSign, FaChartLine } from 'react-icons/fa';

// Sample data for charts
export const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4,
    },
    {
      label: 'Revenue',
      data: [28, 48, 40, 19, 86, 27],
      borderColor: 'rgb(16, 185, 129)',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      tension: 0.4,
    },
  ],
};

export const barData = {
  labels: ['Products', 'Services', 'Digital', 'Consulting'],
  datasets: [
    {
      label: 'Revenue by Category',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(245, 101, 101, 0.8)',
        'rgba(251, 191, 36, 0.8)',
      ],
      borderColor: [
        'rgb(59, 130, 246)',
        'rgb(16, 185, 129)',
        'rgb(245, 101, 101)',
        'rgb(251, 191, 36)',
      ],
      borderWidth: 1,
    },
  ],
};

export const doughnutData = {
  labels: ['Desktop', 'Mobile', 'Tablet'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(59, 130, 246)',
        'rgb(16, 185, 129)',
        'rgb(245, 101, 101)',
      ],
      borderColor: [
        'rgb(59, 130, 246)',
        'rgb(16, 185, 129)',
        'rgb(245, 101, 101)',
      ],
      borderWidth: 2,
    },
  ],
};

// Statistics data - Main Dashboard Overview
export const statsData = [
  {
    title: 'عدد الزوار اليوم/الأسبوع',
    titleEn: 'Daily/Weekly Visitors',
    value: '2,345',
    weeklyValue: '15,678',
    growth: '+12%',
    isPositive: true,
    icon: FaUsers,
    iconColor: 'text-blue-600 dark:text-blue-400',
    description: 'عدد الزوار الذين دخلوا الموقع خلال آخر 24 ساعة وآخر 7 أيام، مع مقارنة بنسبة الزيادة أو النقص',
  },
  {
    title: 'عدد الطلبات الأخيرة',
    titleEn: 'Recent Orders',
    value: '1,234',
    growth: '+8%',
    isPositive: true,
    icon: FaShoppingCart,
    iconColor: 'text-green-600 dark:text-green-400',
    description: 'عدد الطلبات التي تم تسجيلها اليوم/هذا الأسبوع مع إشارة بلون مختلف للحالات',
  },
  {
    title: 'الإيرادات اليومية/الأسبوعية',
    titleEn: 'Daily/Weekly Revenue',
    value: '$45,678',
    growth: '+15%',
    isPositive: true,
    icon: FaDollarSign,
    iconColor: 'text-yellow-600 dark:text-yellow-400',
    description: 'رسم بياني صغير يعرض إجمالي المبيعات اليوم / هذا الأسبوع، مع نسبة الزيادة أو النقص',
  },
  {
    title: 'طلبات لم تعالج (Pending)',
    titleEn: 'Pending Orders',
    value: '23',
    growth: '-2%',
    isPositive: false,
    icon: FaChartLine,
    iconColor: 'text-red-600 dark:text-red-400',
    description: 'إشعار يظهر إذا كان هناك طلبات بحالة "قيد المعالجة" أو لم يتم تحديث حالتها منذ أكثر من X ساعة',
    isPending: true,
  },
];

// Recent activity data - Customer Notifications
export const recentActivitiesData = [
  {
    id: 1,
    message: 'رسالة جديدة من العميل أحمد محمد',
    messageEn: 'New message from customer Ahmed Mohamed',
    time: 'منذ دقيقتين',
    timeEn: '2 minutes ago',
    color: 'bg-blue-500',
    type: 'message',
    priority: 'high',
  },
  {
    id: 2,
    message: 'طلب جديد يحتاج للمراجعة',
    messageEn: 'New order needs review',
    time: 'منذ 5 دقائق',
    timeEn: '5 minutes ago',
    color: 'bg-orange-500',
    type: 'order',
    priority: 'medium',
  },
  {
    id: 3,
    message: 'إشعار من WhatsApp - استفسار عن المنتج',
    messageEn: 'WhatsApp notification - Product inquiry',
    time: 'منذ 10 دقائق',
    timeEn: '10 minutes ago',
    color: 'bg-green-500',
    type: 'whatsapp',
    priority: 'low',
  },
  {
    id: 4,
    message: 'تم معالجة طلب رقم #1234',
    messageEn: 'Order #1234 has been processed',
    time: 'منذ 15 دقيقة',
    timeEn: '15 minutes ago',
    color: 'bg-green-500',
    type: 'success',
    priority: 'low',
  },
  {
    id: 5,
    message: 'تنبيه: طلب معلق منذ أكثر من 6 ساعات',
    messageEn: 'Alert: Order pending for more than 6 hours',
    time: 'منذ ساعة',
    timeEn: '1 hour ago',
    color: 'bg-red-500',
    type: 'alert',
    priority: 'urgent',
  },
];

// Quick actions data
export const quickActionsData = [
  {
    id: 1,
    title: 'Manage Users',
    icon: FaUsers,
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    textColor: 'text-blue-600 dark:text-blue-400',
    hoverColor: 'hover:bg-blue-100 dark:hover:bg-blue-900/30',
  },
  {
    id: 2,
    title: 'View Orders',
    icon: FaShoppingCart,
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    textColor: 'text-green-600 dark:text-green-400',
    hoverColor: 'hover:bg-green-100 dark:hover:bg-green-900/30',
  },
  {
    id: 3,
    title: 'Financial Report',
    icon: FaDollarSign,
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
    textColor: 'text-yellow-600 dark:text-yellow-400',
    hoverColor: 'hover:bg-yellow-100 dark:hover:bg-yellow-900/30',
  },
  {
    id: 4,
    title: 'Analytics',
    icon: FaChartLine,
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    textColor: 'text-purple-600 dark:text-purple-400',
    hoverColor: 'hover:bg-purple-100 dark:hover:bg-purple-900/30',
  },
];

// Bills/Invoices data - صفحة الفواتير
export const billsData = {
  // أهداف الصفحة
  pageObjectives: [
    "توفير لوحة شاملة لمتابعة الفواتير المقدمة للعملاء بطريقة منتظمة وواضحة",
    "تسهيل عمليات إنشاء الفواتير الجديدة وإدارة الفواتير الموجودة"
  ],

  // قائمة الفواتير
  invoicesList: [
    {
      id: "INV-001",
      customerName: "أحمد محمد علي",
      customerNameEn: "Ahmed Mohamed Ali",
      invoiceNumber: "INV-2024-001",
      date: "2024-01-15",
      dateArabic: "15 يناير 2024",
      amount: 1250.00,
      status: "paid",
      statusArabic: "مدفوعة",
      paymentMethod: "بطاقة ائتمانية",
      paymentMethodEn: "Credit Card",
      dueDate: "2024-02-15",
      dueDateArabic: "15 فبراير 2024",
      items: [
        { name: "منتج أ", quantity: 2, price: 500.00 },
        { name: "منتج ب", quantity: 1, price: 250.00 }
      ]
    },
    {
      id: "INV-002", 
      customerName: "فاطمة أحمد",
      customerNameEn: "Fatima Ahmed",
      invoiceNumber: "INV-2024-002",
      date: "2024-01-16",
      dateArabic: "16 يناير 2024",
      amount: 750.00,
      status: "pending",
      statusArabic: "معلقة",
      paymentMethod: "تحويل بنكي",
      paymentMethodEn: "Bank Transfer",
      dueDate: "2024-02-16",
      dueDateArabic: "16 فبراير 2024",
      items: [
        { name: "خدمة استشارية", quantity: 1, price: 750.00 }
      ]
    },
    {
      id: "INV-003",
      customerName: "محمد صالح",
      customerNameEn: "Mohamed Saleh", 
      invoiceNumber: "INV-2024-003",
      date: "2024-01-17",
      dateArabic: "17 يناير 2024",
      amount: 2100.00,
      status: "overdue",
      statusArabic: "متأخرة",
      paymentMethod: "نقداً",
      paymentMethodEn: "Cash",
      dueDate: "2024-01-20",
      dueDateArabic: "20 يناير 2024",
      items: [
        { name: "منتج ج", quantity: 3, price: 700.00 }
      ]
    },
    {
      id: "INV-004",
      customerName: "سارة خالد",
      customerNameEn: "Sara Khaled",
      invoiceNumber: "INV-2024-004", 
      date: "2024-01-18",
      dateArabic: "18 يناير 2024",
      amount: 890.00,
      status: "sent",
      statusArabic: "مرسلة",
      paymentMethod: "محفظة رقمية",
      paymentMethodEn: "Digital Wallet",
      dueDate: "2024-02-18",
      dueDateArabic: "18 فبراير 2024",
      items: [
        { name: "استشارة تقنية", quantity: 2, price: 445.00 }
      ]
    }
  ],

  // إحصائيات الفواتير
  billsStats: [
    {
      title: "إجمالي الفواتير",
      titleEn: "Total Invoices",
      value: "156",
      icon: "📄",
      color: "blue",
      description: "العدد الإجمالي للفواتير المصدرة"
    },
    {
      title: "الفواتير المدفوعة",
      titleEn: "Paid Invoices", 
      value: "142",
      icon: "✅",
      color: "green",
      description: "عدد الفواتير المدفوعة بالكامل"
    },
    {
      title: "الفواتير المعلقة",
      titleEn: "Pending Invoices",
      value: "12",
      icon: "⏳",
      color: "yellow", 
      description: "فواتير في انتظار الدفع"
    },
    {
      title: "الفواتير المتأخرة",
      titleEn: "Overdue Invoices",
      value: "2",
      icon: "🚨",
      color: "red",
      description: "فواتير متأخرة عن موعد الاستحقاق"
    }
  ],

  // قائمة العملاء للاختيار
  customersList: [
    { id: 1, name: "أحمد محمد علي", email: "ahmed@example.com", phone: "+966501234567" },
    { id: 2, name: "فاطمة أحمد", email: "fatima@example.com", phone: "+966501234568" },
    { id: 3, name: "محمد صالح", email: "mohamed@example.com", phone: "+966501234569" },
    { id: 4, name: "سارة خالد", email: "sara@example.com", phone: "+966501234570" },
    { id: 5, name: "عبدالله العتيبي", email: "abdullah@example.com", phone: "+966501234571" }
  ],

  // خيارات طرق الدفع
  paymentMethods: [
    { value: "cash", label: "نقداً", labelEn: "Cash", icon: "💵" },
    { value: "credit_card", label: "بطاقة ائتمانية", labelEn: "Credit Card", icon: "💳" },
    { value: "bank_transfer", label: "تحويل بنكي", labelEn: "Bank Transfer", icon: "🏦" },
    { value: "digital_wallet", label: "محفظة رقمية", labelEn: "Digital Wallet", icon: "📱" }
  ],

  // حالات الفواتير
  invoiceStatuses: [
    { value: "draft", label: "مسودة", labelEn: "Draft", color: "gray", bgColor: "bg-gray-100", textColor: "text-gray-800" },
    { value: "sent", label: "مرسلة", labelEn: "Sent", color: "blue", bgColor: "bg-blue-100", textColor: "text-blue-800" },
    { value: "paid", label: "مدفوعة", labelEn: "Paid", color: "green", bgColor: "bg-green-100", textColor: "text-green-800" },
    { value: "pending", label: "معلقة", labelEn: "Pending", color: "yellow", bgColor: "bg-yellow-100", textColor: "text-yellow-800" },
    { value: "overdue", label: "متأخرة", labelEn: "Overdue", color: "red", bgColor: "bg-red-100", textColor: "text-red-800" },
    { value: "cancelled", label: "ملغاة", labelEn: "Cancelled", color: "gray", bgColor: "bg-gray-100", textColor: "text-gray-800" }
  ],

  // عناصر الفاتورة الافتراضية
  defaultInvoiceItems: [
    { name: "منتج أو خدمة", quantity: 1, price: 0.00, description: "وصف المنتج أو الخدمة" }
  ]
}; 