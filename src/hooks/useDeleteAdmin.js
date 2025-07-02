import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAdmin } from "../services/admin/deleteAdmin";
import { toast } from "react-toastify";

export const useDeleteAdmin = ()=> {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn : (id) => deleteAdmin(id),
        onSuccess : ()=> {
            queryClient.invalidateQueries(['admins']),
            toast.success('تم حذف الادمن بنجاح')
        },
        onError : (error)=> console.log(error)
    })
    return mutation;
}