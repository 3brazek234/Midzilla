import React from 'react';
import {
    FaUserAlt,
    FaTachometerAlt,
    FaCog,
    FaUsers,
    FaChartBar,
    FaPrint,
    FaSitemap,
    FaBullhorn,
    FaSearch,
    FaShoppingCart,
    FaCalendarAlt,
    FaBriefcase,
    FaCalculator,
    FaMapMarkerAlt,
    FaFileAlt,
    FaFileInvoice,
    FaBars,
    FaBox,
    FaChevronDown,
    FaSignOutAlt,
    FaShieldAlt,
    FaUserTag,
    FaTicketAlt,
    FaPercentage,
  } from "react-icons/fa";

export const navItems = [
    {
      title: "لوحة التحكم",
      icon: <FaTachometerAlt size={20} />,
      path: "/dashboard",
    },
    {
      title: "مراجعة البيانات",
      icon: <FaChartBar size={20} />,
      path: "/dashboard/charts",
    },
    {
      title: "الفواتير",
      icon: <FaFileInvoice size={20} />,
      path: "/dashboard/bills",
    },
    {
      title: "الطلبات",
      icon: <FaShoppingCart size={20} />,
      path: "/dashboard/orders",
    },
    {
      title: "التذاكر",
      icon: <FaTicketAlt size={20} />,
      path: "/dashboard/tickets",
    },
    {
      title: "الخصومات",
      icon: <FaPercentage size={20} />,
      path: "/dashboard/disaccount",
    },
    {
      title: "التصنيفات",
      icon: <FaSitemap size={20} />,
      path: "/dashboard/categories",
    },
    {
      title: "المنتجات",
      icon: <FaBox size={20} />,
      path: "/dashboard/products",
    },
    {
      title: "الموظفين",
      icon: <FaUsers size={20} />,
      children: [
        {
          title: "المديرين",
          icon: <FaUserAlt size={18} />,
          path: "/dashboard/admin",
        },
        {
          title: "الأدوار",
          icon: <FaBriefcase size={18} />,
          path: "/dashboard/roles",
        },
        {
          title: "الصلاحيات",
          icon: <FaShieldAlt size={18} />,
          path: "/dashboard/permissions",
        },
      ],
    },
    {
      title: "العملاء",
      icon: <FaUsers size={20} />,
      path: "/dashboard/users",
      children: [
        {
          title: "اجمالي العملاء",
          icon: <FaUsers size={18} />,
          path: "/dashboard/users",
        },
        {
          title: "العملاء الاكثر شراء",
          icon: <FaUserTag size={18} />,
          path: "/dashboard/top-buyers",
        },
      ],
    },
    {
      title: "الملف الشخصي",
      icon: <FaUserAlt size={20} />,
      path: "/dashboard/profile-setting",
    },
  ];