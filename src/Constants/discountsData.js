export const discountsData = [
  {
    id: "DISC-001",
    code: "SUMMER25",
    type: "percentage", // percentage or fixed
    value: 25,
    status: "نشط", // نشط, منتهي الصلاحية, مجدول
    startDate: "2024-06-01",
    endDate: "2024-08-31",
    usageLimit: 100,
    timesUsed: 45,
    description: "خصم الصيف على جميع المنتجات.",
  },
  {
    id: "DISC-002",
    code: "EID10",
    type: "fixed",
    value: 10,
    status: "منتهي الصلاحية",
    startDate: "2024-07-15",
    endDate: "2024-07-20",
    usageLimit: 200,
    timesUsed: 200,
    description: "خصم عيد الأضحى بقيمة 10 دولار.",
  },
  {
    id: "DISC-003",
    code: "NEWUSER",
    type: "percentage",
    value: 15,
    status: "نشط",
    startDate: "2024-01-01",
    endDate: null, // No end date
    usageLimit: 1,
    timesUsed: 500, // Per user, but for stats we show total
    description: "خصم 15% للعملاء الجدد على أول طلب.",
  },
  {
    id: "DISC-004",
    code: "FLASH50",
    type: "percentage",
    value: 50,
    status: "مجدول",
    startDate: "2024-09-01",
    endDate: "2024-09-01",
    usageLimit: 50,
    timesUsed: 0,
    description: "خصم فلاش ليوم واحد فقط.",
  },
]; 