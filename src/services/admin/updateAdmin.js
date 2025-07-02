import { api } from "../../utils/api";

export const updateAdmin = async (data, id) => {
  const response = await api.put(`/admin/admins/${id}`, data);
  return response.data;
}; 