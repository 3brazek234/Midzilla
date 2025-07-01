import Modal from "../../ui/Modal";
import { FaExclamationTriangle } from "react-icons/fa";

const DeleteProductModal = ({ isOpen, onClose, onDelete, productName }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="تأكيد حذف المنتج">
      <div className="text-center">
        <div className="flex justify-center items-center mb-4">
          <FaExclamationTriangle
            className="text-red-500 dark:text-red-400"
            size={48}
          />
        </div>
        <p className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          هل أنت متأكد من رغبتك في حذف هذا المنتج؟
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          سيتم حذف المنتج{" "}
          <span className="font-bold text-red-600 dark:text-red-400">
            "{productName}"
          </span>{" "}
          بشكل نهائي.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="py-2.5 px-6 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300"
          >
            إلغاء
          </button>
          <button
            onClick={onDelete}
            className="py-2.5 px-6 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700"
          >
            نعم، حذف
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteProductModal; 