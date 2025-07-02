import { useState } from "react";
import RolesHeader from "../../Components/pagesComponent/roles/RolesHeader";
import RolesTable from "../../Components/pagesComponent/roles/RolesTable";
import AddRoleModal from "../../Components/pagesComponent/roles/AddRoleModal";
import EditRoleModal from "../../Components/pagesComponent/roles/EditRoleModal";
import DeleteRoleModal from "../../Components/pagesComponent/roles/DeleteRoleModal";
import { useGetRoles } from "../../hooks/useGetRoles";
import LoadingSpinner from "../../Components/ui/loadingSpinner";

const Roles = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const { data: rolesData, isLoading } = useGetRoles();

  const handleUpdateRole = (updatedRole) => {
    setEditModalOpen(false);
    setSelectedRole(null);
  };

  const handleDeleteRole = () => {
    setDeleteModalOpen(false);
    setSelectedRole(null);
  };

  const openEditModal = (role) => {
    setSelectedRole(role);
    setEditModalOpen(true);
  };

  const openDeleteModal = (role) => {
    setSelectedRole(role);
    setDeleteModalOpen(true);
  };

  if (isLoading) {
    return <LoadingSpinner size="xl" color="white" />;
  }

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen" dir="rtl">
      <RolesHeader onAddRoleClick={() => setAddModalOpen(true)} />
      <RolesTable
        roles={rolesData?.data?.roles || []}
        onEditRole={openEditModal}
        onDeleteRole={openDeleteModal}
      />
      <AddRoleModal
        isOpen={isAddModalOpen}
        onClose={() => setAddModalOpen(false)}
      />
      {selectedRole && (
        <EditRoleModal
          isOpen={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
          onUpdateRole={handleUpdateRole}
          role={selectedRole}
        />
      )}
      {selectedRole && (
        <DeleteRoleModal
          isOpen={isDeleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onDelete={handleDeleteRole}
          roleName={selectedRole.name}
        />
      )}
    </div>
  );
};

export default Roles;