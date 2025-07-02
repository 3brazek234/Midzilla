import { api } from "../../utils/api"

export const deleteAdmin = async (id)=> {
    const response = await api.delete(`/admin/admins/${id}`);
    return response;
}




    