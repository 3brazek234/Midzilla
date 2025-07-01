import {
  FaEllipsisV,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaShoppingCart,
  FaStickyNote,
  FaUser,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { formatCurrency, formatDate } from "../../../utils/helpers";
import DisplayUser from "./usersDetails/DisplayUser";
import AddUserForm from "./usersDetails/AddUserForm";
import { useState } from "react";

const UserItem = ({ user }) => {
  const [isModalUserOpen, setIsModalUserOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <>
      <tr
        className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <td className="table-cell">
          <div className="font-medium text-gray-900 dark:text-white">
            {user.name}
          </div>
        </td>
        <td className="table-cell">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-gray-400" size={14} />
              <span className="text-sm">{user.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-gray-400" size={14} />
              <span className="text-sm">{user.phone}</span>
            </div>
          </div>
        </td>
        <td className="table-cell">
          <div className="flex items-center gap-2">
            {user.contactType === "مشترك بالموقع" && (
              <FaMapMarkerAlt className="text-gray-400" size={14} />
            )}
            {user.contactType === "مشترك في تطبيق الهاتف" && (
              <FaPhone className="text-gray-400" size={14} />
            )}
            {user.contactType === "تواصل فقط" && (
              <FaUser className="text-gray-400" size={14} />
            )}
            <span className="text-sm">{user.contactType}</span>
          </div>
        </td>
        <td className="table-cell">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-400" size={14} />
            <span>{user.address}</span>
          </div>
        </td>

        <td className="table-cell">
          <span
            className={`status-badge ${
              user.status === "نشط"
                ? "bg-green-100 text-green-800"
                : user.status === "معلق"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {user.status}
          </span>
        </td>
        <td className="table-cell">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <FaShoppingCart className="text-gray-400" size={14} />
              <span className="text-sm">
                {formatCurrency(user.totalPurchases)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-gray-400" size={14} />
              <span className="text-sm">
                آخر شراء: {formatDate(user.lastPurchase)}
              </span>
            </div>
          </div>
        </td>

        <td className="table-cell">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsModalUserOpen(true)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <FaEye size={14} />
            </button>
            <button
              onClick={() => setShowEditModal(true)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <FaEdit size={14} />
            </button>
            <button
              onClick={() => {/* TODO: Handle delete */}}
              className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
            >
              <FaTrash size={14} />
            </button>
          </div>
        </td>
      </tr>
      {isModalUserOpen && (
        <td colSpan="7" className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsModalUserOpen(false)} />
          <DisplayUser user={user} setIsModalUserOpen={setIsModalUserOpen} />
        </td>
      )}
      {showEditModal && (
        <td colSpan="7" className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={handleCloseEditModal} />
          <AddUserForm
            user={user}
            isEdit={true}
            onClose={handleCloseEditModal}
          />
        </td>
      )}
    </>
  );
};

export default UserItem;
