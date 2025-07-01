import { useState } from "react";
import PermissionsHeader from "../../Components/pagesComponent/permissions/PermissionsHeader";
import RolePermissions from "../../Components/pagesComponent/permissions/RolePermissions";
import { permissionsData as initialData } from "../../Constants/permissionsData";

const Permissions = () => {
  const [permissions, setPermissions] = useState(initialData.roles);
  const [expandedRole, setExpandedRole] = useState(initialData.roles[0]?.id);

  const handlePermissionChange = (roleId, category, action) => {
    setPermissions((prevPermissions) =>
      prevPermissions.map((role) => {
        if (role.id === roleId) {
          const currentPermissions = role.permissions[category] || [];
          let newPermissions;

          if (Array.isArray(action)) {
            // Used for "Select All"
            newPermissions = action;
          } else {
            // Used for single toggle
            newPermissions = currentPermissions.includes(action)
              ? currentPermissions.filter((p) => p !== action)
              : [...currentPermissions, action];
          }

          return {
            ...role,
            permissions: {
              ...role.permissions,
              [category]: newPermissions,
            },
          };
        }
        return role;
      })
    );
  };

  const handleSaveChanges = () => {
    console.log("Saving permissions:", permissions);
    // Here you would typically make an API call to save the changes
    alert("تم حفظ التغييرات بنجاح!");
  };

  const toggleRole = (roleId) => {
    setExpandedRole(expandedRole === roleId ? null : roleId);
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen" dir="rtl">
      <PermissionsHeader onSave={handleSaveChanges} />
      <div className="space-y-4">
        {permissions.map((role) => (
          <RolePermissions
            key={role.id}
            role={role}
            categories={initialData.categories}
            onPermissionChange={handlePermissionChange}
            isExpanded={expandedRole === role.id}
            onToggle={() => toggleRole(role.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Permissions;