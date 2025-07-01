import React, { useState } from 'react';
import { FaFileExcel, FaFilePdf, FaWhatsapp, FaEnvelope, FaChartLine, FaChartBar, FaChartPie } from 'react-icons/fa';
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const BillsStats = ({ bills }) => {
  const [timeFilter, setTimeFilter] = useState('week'); // day, week, month, custom
  const [statusFilter, setStatusFilter] = useState('all'); // all, paid, unpaid, manual, automatic

  // Calculate statistics
  const calculateStats = () => {
    const currentMonth = new Date().getMonth();
    const lastMonth = currentMonth - 1;

    const currentMonthTotal = bills
      .filter(bill => new Date(bill.date).getMonth() === currentMonth)
      .reduce((sum, bill) => sum + bill.totalPrice || bill.amount, 0);

    const lastMonthTotal = bills
      .filter(bill => new Date(bill.date).getMonth() === lastMonth)
      .reduce((sum, bill) => sum + bill.totalPrice || bill.amount, 0);

    const percentageChange = lastMonthTotal ? ((currentMonthTotal - lastMonthTotal) / lastMonthTotal) * 100 : 0;

    const unpaidBills = bills.filter(bill => bill.status === 'غير مدفوعة');
    const unpaidTotal = unpaidBills.reduce((sum, bill) => sum + (bill.totalPrice || bill.amount), 0);

    return {
      currentMonthTotal,
      percentageChange,
      unpaidTotal,
      unpaidCount: unpaidBills.length,
      totalBills: bills.length
    };
  };

  // Prepare chart data
  const prepareChartData = () => {
    // Monthly revenue chart data
    const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'];
    const revenueData = months.map(() => Math.floor(Math.random() * 50000) + 10000);

    // Payment status pie chart
    const paidCount = bills.filter(bill => bill.status === 'مدفوعة').length;
    const unpaidCount = bills.filter(bill => bill.status === 'غير مدفوعة').length;

    return {
      lineData: {
        labels: months,
        datasets: [
          {
            label: 'الإيرادات الشهرية',
            data: revenueData,
            borderColor: 'rgb(59, 130, 246)',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            tension: 0.1,
          },
        ],
      },
      pieData: {
        labels: ['مدفوعة', 'غير مدفوعة'],
        datasets: [
          {
            data: [paidCount, unpaidCount],
            backgroundColor: ['#10b981', '#ef4444'],
            borderWidth: 0,
          },
        ],
      },
    };
  };

  const stats = calculateStats();
  const chartData = prepareChartData();

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
    },
  };

  return (
    <div className="space-y-6">
      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Monthly Revenue */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300">
                إجمالي المدفوع خلال الشهر الحالي
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-3xl font-bold text-blue-900 dark:text-blue-100">
                  {stats.currentMonthTotal.toLocaleString('ar-SA')} ر.س
                </span>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  stats.percentageChange >= 0 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {stats.percentageChange >= 0 ? '+' : ''}{stats.percentageChange.toFixed(1)}%
                </span>
              </div>
            </div>
            <FaChartLine className="text-4xl text-blue-600 dark:text-blue-400" />
          </div>
        </div>

        {/* Bills Count with Filter */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-300">
                عدد الفواتير المحصلة في مدة محددة
              </h3>
              <select
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                className="mt-2 px-3 py-2 bg-white dark:bg-gray-800 border border-green-300 dark:border-green-600 rounded-lg text-sm text-green-800 dark:text-green-200"
              >
                <option value="day">اليوم</option>
                <option value="week">الأسبوع</option>
                <option value="month">الشهر</option>
                <option value="custom">مخصص</option>
              </select>
            </div>
            <FaChartBar className="text-4xl text-green-600 dark:text-green-400" />
          </div>
          <div className="text-3xl font-bold text-green-900 dark:text-green-100">
            {stats.totalBills} فاتورة
          </div>
        </div>

        {/* Unpaid Bills */}
        <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-red-800 dark:text-red-300">
                إجمالي الفواتير غير المدفوعة
              </h3>
              <div className="mt-2">
                <div className="text-3xl font-bold text-red-900 dark:text-red-100">
                  ليس رقم ر.س
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm text-red-700 dark:text-red-300">
                    {stats.unpaidCount} فواتير غير مدفوعة
                  </span>
                  <div className="flex gap-2">
                    <button
                      title="إرسال تذكير عبر البريد"
                      className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                    >
                      <FaEnvelope />
                    </button>
                    <button
                      title="إرسال تذكير عبر الواتساب"
                      className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
                    >
                      <FaWhatsapp />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            اتجاه الإيرادات الشهرية
          </h3>
          <div className="h-64">
            <Line data={chartData.lineData} options={chartOptions} />
          </div>
        </div>

        {/* Payment Status Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            توزيع حالة الدفع
          </h3>
          <div className="h-64">
            <Pie data={chartData.pieData} options={pieOptions} />
          </div>
        </div>
      </div>

      {/* Filters and Export Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          {/* Status Filter */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              فلترة حسب الحالة
            </h4>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="all">الكل</option>
              <option value="paid">مدفوعة</option>
              <option value="unpaid">غير مدفوعة</option>
              <option value="automatic">أوتوماتيكية</option>
              <option value="manual">يدوية</option>
            </select>
          </div>

          {/* Export Buttons */}
          <div className="flex gap-3">
            <button
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center gap-2 font-medium"
              title="تصدير إلى Excel"
            >
              <FaFileExcel className="text-lg" />
              <span>Excel</span>
            </button>
            <button
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center gap-2 font-medium"
              title="تصدير إلى PDF"
            >
              <FaFilePdf className="text-lg" />
              <span>PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillsStats; 