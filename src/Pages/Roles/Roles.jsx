import { useState } from "react";
import RolesHeader from "../../Components/pagesComponent/roles/RolesHeader";
import RolesTable from "../../Components/pagesComponent/roles/RolesTable";
import { rolesData as initialRolesData } from "../../Constants/rolesData";
import AddRoleModal from "../../Components/pagesComponent/roles/AddRoleModal";
import EditRoleModal from "../../Components/pagesComponent/roles/EditRoleModal";
import DeleteRoleModal from "../../Components/pagesComponent/roles/DeleteRoleModal";

const Roles = () => {
  const [rolesData, setRolesData] = useState(initialRolesData);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleAddRole = (newRole) => {
    setRolesData([...rolesData, newRole]);
  };

  const handleUpdateRole = (updatedRole) => {
    setRolesData(
      rolesData.map((role) =>
        role.id === updatedRole.id ? updatedRole : role
      )
    );
  };

  const handleDeleteRole = () => {
    setRolesData(rolesData.filter((role) => role.id !== selectedRole.id));
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

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen" dir="rtl">
      <RolesHeader onAddRoleClick={() => setAddModalOpen(true)} />
      <RolesTable
        roles={rolesData}
        onEditRole={openEditModal}
        onDeleteRole={openDeleteModal}
      />
      <AddRoleModal
        isOpen={isAddModalOpen}
        onClose={() => setAddModalOpen(false)}
        onAddRole={handleAddRole}
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