import { api } from "../../utils/api";

export const createPermission = async (data) => {
  const response = await api.post("/admin/permissions", {
    name: data.name,
    description: data.description,
  });
  return response.data;
};
