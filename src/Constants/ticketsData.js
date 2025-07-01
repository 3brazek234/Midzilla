export const ticketsData = [
  {
    id: "TKT-001",
    subject: "مشكلة في تسجيل الدخول",
    user: {
      name: "علياء محمد",
      avatar: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    status: "مفتوحة", // مفتوحة, قيد المعالجة, مغلقة
    priority: "عالية", // عالية, متوسطة, منخفضة
    createdAt: "2024-07-22T10:00:00Z",
    updatedAt: "2024-07-22T12:30:00Z",
    conversation: [
      {
        sender: "user",
        message: "لا يمكنني تسجيل الدخول إلى حسابي. تظهر رسالة خطأ.",
        timestamp: "2024-07-22T10:00:00Z",
      },
      {
        sender: "support",
        name: "أحمد حمدي",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        message: "مرحباً علياء، هل يمكنكِ تزويدي بلقطة شاشة للخطأ؟",
        timestamp: "2024-07-22T10:05:00Z",
      },
    ],
  },
  {
    id: "TKT-002",
    subject: "استفسار عن حالة الطلب #12345",
    user: {
      name: "خالد يوسف",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    status: "قيد المعالجة",
    priority: "متوسطة",
    createdAt: "2024-07-21T15:20:00Z",
    updatedAt: "2024-07-22T09:00:00Z",
    conversation: [
      {
        sender: "user",
        message: "أريد أن أعرف متى سيصل طلبي رقم #12345.",
        timestamp: "2024-07-21T15:20:00Z",
      },
      {
        sender: "support",
        name: "فاطمة علي",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        message:
          "أهلاً بك خالد، طلبك قيد الشحن حالياً ومن المتوقع أن يصل خلال يومي عمل.",
        timestamp: "2024-07-22T09:00:00Z",
      },
    ],
  },
  {
    id: "TKT-003",
    subject: "المنتج وصل تالفاً",
    user: {
      name: "نورة عبد الله",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    status: "مغلقة",
    priority: "عالية",
    createdAt: "2024-07-19T11:00:00Z",
    updatedAt: "2024-07-20T14:00:00Z",
    conversation: [
      {
        sender: "user",
        message:
          "لقد استلمت المنتج اليوم وهو مكسور. كيف يمكنني إرجاعه؟",
        timestamp: "2024-07-19T11:00:00Z",
      },
      {
        sender: "support",
        name: "أحمد حمدي",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        message:
          "نعتذر جداً عن ذلك. لقد بدأنا عملية إرجاع المنتج وسيتواصل معك فريق التوصيل.",
        timestamp: "2024-07-19T11:15:00Z",
      },
      {
        sender: "user",
        message: "شكراً جزيلاً لكم.",
        timestamp: "2024-07-19T11:20:00Z",
      },
    ],
  },
]; 