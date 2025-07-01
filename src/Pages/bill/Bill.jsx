import BillsTable from '../../Components/pagesComponent/bills/BillsTable';

const Bill = () => {
  return (
    <div className="p-6 space-y-6 fade-in">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="section-title text-2xl">
            📄  الفواتير
          </h1>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Invoices Management
          </span>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">📋</span>
            <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-300">
              لوحة إدارة الفواتير الشاملة
            </h2>
          </div>
          <p className="text-blue-700 dark:text-blue-400 text-sm leading-relaxed">
            توفير لوحة شاملة لمتابعة الفواتير المقدمة للعملاء بطريقة منتظمة وواضحة، 
            وتسهيل عمليات إنشاء الفواتير الجديدة وإدارة الفواتير الموجودة مع إمكانية التصدير إلى PDF وExcel.
          </p>
        </div>
      </div>

      {/* Bills Table */}
      <div>
        <BillsTable />
      </div>
    </div>
  );
};

export default Bill;