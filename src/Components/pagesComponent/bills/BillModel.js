/**
 * @typedef {Object} Bill
 * @property {number} id - Unique identifier for the bill
 * @property {string} invoiceNumber - Unique invoice number (e.g., INV-2024-001)
 * @property {string} customerName - Name of the customer
 * @property {string} phoneNumber - Customer's phone number (optional)
 * @property {string} email - Customer's email address (optional)
 * @property {string} paymentMethod - Method of payment (e.g., "بطاقة ائتمان", "تحويل بنكي")
 * @property {string} date - Date of the bill (YYYY-MM-DD format)
 * @property {string} time - Time of the bill (HH:mm format)
 * @property {number} amount - Total amount of the bill
 * @property {('مدفوعة'|'غير مدفوعة')} status - Payment status
 */

/**
 * Creates a new Bill object with the provided data
 * @param {Object} data - The bill data
 * @returns {Bill} A new Bill object
 */
export const createBill = (data) => {
  return {
    id: data.id,
    invoiceNumber: data.invoiceNumber,
    customerName: data.customerName,
    phoneNumber: data.phoneNumber,
    email: data.email,
    paymentMethod: data.paymentMethod,
    date: data.date,
    time: data.time,
    amount: data.amount,
    status: data.status,
  };
};

/**
 * Sample bills data
 * @type {Bill[]}
 */
export const sampleBills = [
  {
    id: 1,
    invoiceNumber: "INV-2024-001",
    customerName: "أحمد محمد",
    phoneNumber: "+966 50 123 4567",
    email: "ahmed@example.com",
    paymentMethod: "بطاقة ائتمان",
    date: "2024-03-15",
    time: "14:30",
    amount: 1500.00,
    status: "مدفوعة",
  },
  {
    id: 2,
    invoiceNumber: "INV-2024-002",
    customerName: "سارة أحمد",
    phoneNumber: "+966 55 987 6543",
    email: "sara@example.com",
    paymentMethod: "تحويل بنكي",
    date: "2024-03-14",
    time: "10:15",
    amount: 2300.00,
    status: "غير مدفوعة",
  },
]; 