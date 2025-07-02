import { api } from "../../utils/api";

export const addAdmin = async (data) => {
  const response = await api.post("/admin/admins", data);
  return response.data;
};