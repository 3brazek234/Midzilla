export const permissionsData = {
  roles: [
    {
      id: "role-1",
      name: "المدير العام",
      permissions: {
        products: ["create", "read", "update", "delete"],
        orders: ["create", "read", "update", "delete"],
        users: ["create", "read", "update", "delete"],
        reports: ["read"],
      },
    },
    {
      id: "role-2",
      name: "مدير المنتجات",
      permissions: {
        products: ["create", "read", "update"],
        orders: ["read"],
        users: [],
        reports: [],
      },
    },
    {
      id: "role-3",
      name: "مدير الطلبات",
      permissions: {
        products: ["read"],
        orders: ["create", "read", "update"],
        users: ["read"],
        reports: [],
      },
    },
    {
      id: "role-4",
      name: "مشرف",
      permissions: {
        products: ["read", "update"],
        orders: ["read", "update"],
        users: ["read", "update"],
        reports: [],
      },
    },
  ],
  categories: {
    products: {
      name: "إدارة المنتجات",
      actions: {
        create: "إنشاء",
        read: "قراءة",
        update: "تحديث",
        delete: "حذف",
      },
    },
    orders: {
      name: "إدارة الطلبات",
      actions: {
        create: "إنشاء",
        read: "قراءة",
        update: "تحديث",
        delete: "حذف",
      },
    },
    users: {
      name: "إدارة العملاء",
      actions: {
        create: "إنشاء",
        read: "قراءة",
        update: "تحديث",
        delete: "حذف",
      },
    },
    reports: {
      name: "إدارة التقارير",
      actions: {
        read: "قراءة",
      },
    },
  },
}; 