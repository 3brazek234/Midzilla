import { 
  FaChartLine, 
  FaChartBar, 
  FaChartPie, 
  FaChartArea,
  FaUsers,
  FaDollarSign,
  FaShoppingCart,
  FaEye
} from 'react-icons/fa';

// Line Chart Data - المبيعات والإيرادات
export const salesLineChartData = {
  labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  datasets: [
    {
      label: 'المبيعات',
      data: [65000, 59000, 80000, 81000, 56000, 55000, 78000, 92000, 68000, 75000, 85000, 95000],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4,
      fill: true,
    },
    {
      label: 'الإيرادات',
      data: [48000, 58000, 70000, 69000, 46000, 47000, 68000, 82000, 58000, 65000, 75000, 85000],
      borderColor: 'rgb(16, 185, 129)',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      tension: 0.4,
      fill: true,
    },
  ],
};

// Bar Chart Data - الأداء حسب الفئة
export const categoryBarChartData = {
  labels: ['المنتجات', 'الخدمات', 'الرقمية', 'الاستشارات', 'التدريب', 'الصيانة'],
  datasets: [
    {
      label: 'الإيرادات بالريال',
      data: [120000, 190000, 75000, 85000, 65000, 45000],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(245, 101, 101, 0.8)',
        'rgba(251, 191, 36, 0.8)',
        'rgba(139, 92, 246, 0.8)',
        'rgba(236, 72, 153, 0.8)',
      ],
      borderColor: [
        'rgb(59, 130, 246)',
        'rgb(16, 185, 129)',
        'rgb(245, 101, 101)',
        'rgb(251, 191, 36)',
        'rgb(139, 92, 246)',
        'rgb(236, 72, 153)',
      ],
      borderWidth: 1,
    },
  ],
};

// Pie Chart Data - توزيع العملاء
export const customerDistributionData = {
  labels: ['عملاء جدد', 'عملاء دائمون', 'عملاء مؤقتون', 'عملاء VIP'],
  datasets: [
    {
      data: [35, 45, 15, 5],
      backgroundColor: [
        'rgb(59, 130, 246)',
        'rgb(16, 185, 129)',
        'rgb(245, 101, 101)',
        'rgb(251, 191, 36)',
      ],
      borderColor: [
        'rgb(59, 130, 246)',
        'rgb(16, 185, 129)',
        'rgb(245, 101, 101)',
        'rgb(251, 191, 36)',
      ],
      borderWidth: 2,
    },
  ],
};

// Doughnut Chart Data - منصات التسويق
export const marketingChannelsData = {
  labels: ['مباشر', 'جوجل', 'فيسبوك', 'إنستغرام', 'واتساب', 'أخرى'],
  datasets: [
    {
      data: [8000, 15000, 7000, 4000, 2000, 2500],
      backgroundColor: [
        'rgb(59, 130, 246)',
        'rgb(16, 185, 129)',
        'rgb(245, 101, 101)',
        'rgb(251, 191, 36)',
        'rgb(139, 92, 246)',
        'rgb(107, 114, 128)',
      ],
      borderColor: [
        'rgb(59, 130, 246)',
        'rgb(16, 185, 129)',
        'rgb(245, 101, 101)',
        'rgb(251, 191, 36)',
        'rgb(139, 92, 246)',
        'rgb(107, 114, 128)',
      ],
      borderWidth: 2,
    },
  ],
};

// Area Chart Data - نمو المستخدمين
export const userGrowthData = {
  labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
  datasets: [
    {
      label: 'المستخدمون النشطون',
      data: [2100, 2300, 2800, 3200, 3800, 4200],
      borderColor: 'rgb(139, 92, 246)',
      backgroundColor: 'rgba(139, 92, 246, 0.3)',
      fill: 'origin',
      tension: 0.4,
    },
    {
      label: 'مستخدمون جدد',
      data: [1200, 1500, 1800, 2100, 2400, 2700],
      borderColor: 'rgb(236, 72, 153)',
      backgroundColor: 'rgba(236, 72, 153, 0.3)',
      fill: '-1',
      tension: 0.4,
    },
  ],
};

// Mixed Chart Data - تحليل شامل
export const mixedAnalysisData = {
  labels: ['الأسبوع 1', 'الأسبوع 2', 'الأسبوع 3', 'الأسبوع 4'],
  datasets: [
    {
      type: 'line',
      label: 'معدل التحويل (%)',
      data: [2.5, 3.2, 2.8, 4.1],
      borderColor: 'rgb(245, 101, 101)',
      backgroundColor: 'rgba(245, 101, 101, 0.1)',
      yAxisID: 'y1',
    },
    {
      type: 'bar',
      label: 'عدد الزيارات',
      data: [8500, 9200, 7800, 10500],
      backgroundColor: 'rgba(59, 130, 246, 0.7)',
      yAxisID: 'y',
    },
  ],
};

// Chart Statistics Cards
export const chartStatsCards = [
  {
    title: 'إجمالي المبيعات',
    value: '892,450',
    unit: 'ريال',
    growth: '+12.5%',
    isPositive: true,
    icon: FaDollarSign,
    iconColor: 'text-green-600',
    bgGradient: 'from-green-50 to-green-100',
    period: 'هذا الشهر',
  },
  {
    title: 'عدد الطلبات',
    value: '1,234',
    unit: 'طلب',
    growth: '+8.2%',
    isPositive: true,
    icon: FaShoppingCart,
    iconColor: 'text-blue-600',
    bgGradient: 'from-blue-50 to-blue-100',
    period: 'هذا الأسبوع',
  },
  {
    title: 'عدد الزوار',
    value: '45,678',
    unit: 'زائر',
    growth: '-2.1%',
    isPositive: false,
    icon: FaEye,
    iconColor: 'text-purple-600',
    bgGradient: 'from-purple-50 to-purple-100',
    period: 'آخر 30 يوم',
  },
  {
    title: 'عدد العملاء',
    value: '2,567',
    unit: 'عميل',
    growth: '+15.3%',
    isPositive: true,
    icon: FaUsers,
    iconColor: 'text-orange-600',
    bgGradient: 'from-orange-50 to-orange-100',
    period: 'إجمالي',
  },
];

// Chart Types Configuration
export const chartTypes = [
  {
    id: 'line',
    name: 'خط بياني',
    nameEn: 'Line Chart',
    icon: FaChartLine,
    description: 'لعرض الاتجاهات عبر الوقت',
    color: 'blue',
  },
  {
    id: 'bar',
    name: 'عمود بياني',
    nameEn: 'Bar Chart',
    icon: FaChartBar,
    description: 'لمقارنة القيم بين الفئات',
    color: 'green',
  },
  {
    id: 'pie',
    name: 'دائري',
    nameEn: 'Pie Chart',
    icon: FaChartPie,
    description: 'لعرض التوزيع النسبي',
    color: 'purple',
  },
  {
    id: 'area',
    name: 'منطقة',
    nameEn: 'Area Chart',
    icon: FaChartArea,
    description: 'لعرض التراكم عبر الوقت',
    color: 'orange',
  },
];

// Chart Options Configuration
export const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        usePointStyle: true,
        padding: 20,
        font: {
          family: 'Cairo, sans-serif',
        },
      },
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: 'white',
      bodyColor: 'white',
      borderColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: 1,
      cornerRadius: 8,
      displayColors: true,
      usePointStyle: true,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
        drawBorder: false,
      },
      ticks: {
        font: {
          family: 'Cairo, sans-serif',
        },
      },
    },
    x: {
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
        drawBorder: false,
      },
      ticks: {
        font: {
          family: 'Cairo, sans-serif',
        },
      },
    },
  },
};

// Real-time data simulation
export const generateRealTimeData = () => {
  return {
    labels: ['الآن', '-1 دقيقة', '-2 دقيقة', '-3 دقيقة', '-4 دقيقة'],
    datasets: [
      {
        label: 'المبيعات المباشرة',
        data: [
          Math.floor(Math.random() * 1000) + 500,
          Math.floor(Math.random() * 1000) + 500,
          Math.floor(Math.random() * 1000) + 500,
          Math.floor(Math.random() * 1000) + 500,
          Math.floor(Math.random() * 1000) + 500,
        ],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };
};

// Chart filters
export const chartFilters = [
  { value: 'today', label: 'اليوم', labelEn: 'Today' },
  { value: 'week', label: 'هذا الأسبوع', labelEn: 'This Week' },
  { value: 'month', label: 'هذا الشهر', labelEn: 'This Month' },
  { value: 'quarter', label: 'هذا الربع', labelEn: 'This Quarter' },
  { value: 'year', label: 'هذا العام', labelEn: 'This Year' },
  { value: 'custom', label: 'مخصص', labelEn: 'Custom' },
]; 