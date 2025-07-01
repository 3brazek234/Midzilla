export const users = [
  {
    id: 1,
    name: 'أحمد محمد علي',
    email: 'ahmed.m@example.com',
    phone: '+966 50 123 4567',
    address: 'الرياض، حي النخيل، شارع العليا',
    contactType: 'تواصل فقط',
    status: 'نشط',
    registrationDate: '2024-01-15',
    lastPurchase: '2024-02-10',
    totalPurchases: 12500,
    notes: 'عميل مميز - VIP'
  },
  {
    id: 2,
    name: 'شركة التقنية المتقدمة',
    email: 'info@techcompany.com',
    phone: '+966 55 987 6543',
    address: 'جدة، حي الصفا، شارع الأمير سلطان',
    contactType: 'مشترك بالموقع',
    status: 'نشط',
    registrationDate: '2024-01-10',
    lastPurchase: '2024-02-15',
    totalPurchases: 75000,
    notes: 'مشترك بالموقع تكنولوجيا كبيرة'
  },
  {
    id: 3,
    name: 'سارة عبدالله',
    email: 'sara.a@example.com',
    phone: '+966 54 111 2222',
    address: 'الدمام، حي الشاطئ',
    contactType: 'تواصل فقط',
    status: 'غير نشط',
    registrationDate: '2023-12-01',
    lastPurchase: '2024-01-05',
    totalPurchases: 3200,
    notes: 'تفضل التواصل عبر الواتساب'
  },
  {
    id: 4,
    name: 'مؤسسة النور للتجارة',
    email: 'contact@alnoor.com',
    phone: '+966 56 333 4444',
    address: 'مكة المكرمة، شارع الحج',
    contactType: 'مشترك بالموقع',
    status: 'نشط',
    registrationDate: '2023-11-20',
    lastPurchase: '2024-02-12',
    totalPurchases: 45000,
    notes: 'موزع معتمد'
  },
  {
    id: 5,
    name: 'خالد العمري',
    email: 'khalid.o@example.com',
    phone: '+966 57 555 6666',
    address: 'المدينة المنورة، حي القبلتين',
    contactType: 'تواصل فقط',
    status: 'نشط',
    registrationDate: '2024-01-05',
    lastPurchase: '2024-02-01',
    totalPurchases: 8900,
    notes: 'يفضل التواصل مساءً'
  },
  {
    id: 6,
    name: 'محمود محمد',
    email: 'info@modernconst.com',
    phone: '+966 58 777 8888',
    address: 'الخبر، شارع الملك فهد',
    contactType: 'مشترك بالموقع',
    status: 'معلق',
    registrationDate: '2023-12-15',
    lastPurchase: '2024-01-20',
    totalPurchases: 28000,
    notes: 'بحاجة لمتابعة الطلبات المعلقة'
  },
  {
    id: 7,
    name: 'نورة السعيد',
    email: 'noura.s@example.com',
    phone: '+966 59 999 0000',
    address: 'أبها، حي الورود',
    contactType: 'تواصل فقط',
    status: 'نشط',
    registrationDate: '2024-01-25',
    lastPurchase: '2024-02-14',
    totalPurchases: 5600,
    notes: 'عميل جديد'
  },
  {
    id: 8,
    name: 'مؤسسة الأمل الطبية',
    email: 'contact@alamalmed.com',
    phone: '+966 50 444 5555',
    address: 'تبوك، المنطقة الصناعية',
    contactType: 'شركة',
    status: 'نشط',
    registrationDate: '2023-11-01',
    lastPurchase: '2024-02-08',
    totalPurchases: 92000,
    notes: 'مستشفى خاص - طلبات شهرية'
  },
  {
    id: 9,
    name: 'فهد الشمري',
    email: 'fahad.sh@example.com',
    phone: '+966 55 666 7777',
    address: 'حائل، حي الجامعة',
    contactType: 'تواصل فقط',
    status: 'غير نشط',
    registrationDate: '2023-10-15',
    lastPurchase: '2023-12-20',
    totalPurchases: 1500,
    notes: 'آخر تواصل قبل شهرين'
  },
  {
    id: 10,
    name: 'شركة الغذاء الصحي',
    email: 'info@healthyfood.com',
    phone: '+966 54 888 9999',
    address: 'بريدة، شارع الملك عبدالله',
    contactType: 'مشترك في تطبيق الهاتف',
    status: 'نشط',
    registrationDate: '2024-01-01',
    lastPurchase: '2024-02-13',
    totalPurchases: 67000,
    notes: 'سلسلة مطاعم صحية'
  }
];

export const userType = [
  { id: 1, name: 'تواصل فقط', value: 'individual' },
  { id: 2, name: 'شركة', value: 'company' }
];

export const userStatuses = [
  { id: 1, name: 'نشط', value: 'active', color: 'green' },
  { id: 2, name: 'غير نشط', value: 'inactive', color: 'red' },
  { id: 3, name: 'معلق', value: 'pending', color: 'yellow' }
];

export const userStats = {
  total: 2345,
  active: 1987,
  inactive: 358,
  companies: 456,
  growth: {
    total: '+12%',
    active: '+8%',
    inactive: '-5%',
    companies: '+15%'
  }
}; 