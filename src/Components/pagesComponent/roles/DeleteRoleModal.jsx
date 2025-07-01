import Modal from "../../ui/Modal";
import { FaExclamationTriangle } from "react-icons/fa";

const DeleteRoleModal = ({ isOpen, onClose, onDelete, roleName }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="تأكيد الحذف">
      <div className="text-center">
        <div className="flex justify-center items-center mb-4">
          <FaExclamationTriangle
            className="text-red-500 dark:text-red-400"
            size={48}
          />
        </div>
        <p className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          هل أنت متأكد من رغبتك في حذف الدور؟
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          سيتم حذف الدور{" "}
          <span className="font-bold text-red-600 dark:text-red-400">
            "{roleName}"
          </span>{" "}
          بشكل نهائي. لا يمكن التراجع عن هذا الإجراء.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="py-2.5 px-6 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            إلغاء
          </button>
          <button
            onClick={onDelete}
            className="py-2.5 px-6 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800"
          >
            نعم، أنا متأكد
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteRoleModal; 