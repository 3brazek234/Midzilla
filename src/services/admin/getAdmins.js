import { api } from "../../utils/api";
export const getAdmins = async () => {
  const response = await api.get("/admin/admins");
  return response.data.admins;
};