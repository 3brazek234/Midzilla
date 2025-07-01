import Modal from "../../ui/Modal";
import { FaUser, FaEnvelope, FaPhone, FaShieldAlt } from "react-icons/fa";

const AdminDetailsModal = ({ isOpen, onClose, admin }) => {
  if (!admin) return null;

  const statusColor =
    admin.status === "نشط"
      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="تفاصيل المدير">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <img
            src={admin.avatar}
            alt={admin.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 dark:border-gray-600"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {admin.name}
            </h2>
            <p className="text-gray-500 dark:text-gray-400">{admin.role}</p>
            <span
              className={`mt-2 inline-block px-3 py-1 text-sm font-semibold leading-5 rounded-full ${statusColor}`}
            >
              {admin.status}
            </span>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <InfoRow icon={<FaEnvelope />} label="البريد الإلكتروني" value={admin.email} />
          <InfoRow icon={<FaPhone />} label="رقم الهاتف" value={admin.phone || "غير متوفر"} />
          <InfoRow
            icon={<FaShieldAlt />}
            label="آخر تسجيل دخول"
            value={new Date(admin.lastLogin).toLocaleString("ar-EG")}
          />
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
            الصلاحيات الممنوحة
          </h3>
          <div className="flex flex-wrap gap-2">
            {admin.permissions.map((permission, index) => (
              <span
                key={index}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-semibold px-3 py-1.5 rounded-full"
              >
                {permission}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <button
            onClick={onClose}
            className="py-2 px-6 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            إغلاق
          </button>
        </div>
      </div>
    </Modal>
  );
};

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 py-2">
    <div className="text-blue-500 dark:text-blue-400">{icon}</div>
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
      <p className="font-semibold text-gray-800 dark:text-white">{value}</p>
    </div>
  </div>
);

export default AdminDetailsModal; 