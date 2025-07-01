import { api } from "../../utils/api";

export const addAdmin = (data) => {
  const response = api.post("/admin/admins", data);
  return response.data;
};