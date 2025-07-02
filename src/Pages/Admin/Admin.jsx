import { useState } from "react";
import AdminsHeader from "../../Components/pagesComponent/admins/AdminsHeader";
import AdminsTable from "../../Components/pagesComponent/admins/AdminsTable";
import AddAdminModal from "../../Components/pagesComponent/admins/AddAdminModal";
import EditAdminModal from "../../Components/pagesComponent/admins/EditAdminModal";
import DeleteAdminModal from "../../Components/pagesComponent/admins/DeleteAdminModal";
import AdminDetailsModal from "../../Components/pagesComponent/admins/AdminDetailsModal";
import { useAdmins } from "../../hooks/useAdmins";
import { useDeleteAdmin } from "../../hooks/useDeleteAdmin";
import LoadingSpinner from "../../Components/ui/loadingSpinner";

const Admin = () => {
  const { data: adminsData, isLoading } = useAdmins();
  const { mutate: deleteAdmin } = useDeleteAdmin();
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const handleUpdateAdmin = (updatedAdmin) => {
    setEditModalOpen(false);
    setSelectedAdmin(null);
  };

  const handleDeleteAdmin = () => {
    if (selectedAdmin) {
      deleteAdmin(selectedAdmin.id);
    }
    setDeleteModalOpen(false);
    setSelectedAdmin(null);
  };

  const openDetailsModal = (admin) => {
    setSelectedAdmin(admin);
    setDetailsModalOpen(true);
  };

  const openEditModal = (admin) => {
    setSelectedAdmin(admin);
    setEditModalOpen(true);
  };

  const openDeleteModal = (admin) => {
    setSelectedAdmin(admin);
    setDeleteModalOpen(true);
  };

  if (isLoading) {
    return <LoadingSpinner size="xl" color="white" />;
  }

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen" dir="rtl">
      <AdminsHeader onAddAdminClick={() => setAddModalOpen(true)} />
      <AdminsTable
        admins={adminsData?.data?.admins}
        onDetails={openDetailsModal}
        onEdit={openEditModal}
        onDelete={openDeleteModal}
      />
      <AddAdminModal
        isOpen={isAddModalOpen}
        onClose={() => setAddModalOpen(false)}
      />
      {selectedAdmin && (
        <EditAdminModal
          isOpen={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
          onUpdateAdmin={handleUpdateAdmin}
          admin={selectedAdmin}
        />
      )}
      {selectedAdmin && (
        <DeleteAdminModal
          isOpen={isDeleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onDelete={handleDeleteAdmin}
          adminName={selectedAdmin.name}
        />
      )}
      {selectedAdmin && (
        <AdminDetailsModal
          isOpen={isDetailsModalOpen}
          onClose={() => setDetailsModalOpen(false)}
          admin={selectedAdmin}
        />
      )}
    </div>
  );
};

export default Admin;