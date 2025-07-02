import { api } from "../../utils/api"

export const getPermission = async (per_page = 10)=>{
    const response = await api.get(`/admin/permissions?per_page=${per_page}`)
    return response.data
}