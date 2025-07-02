import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAdmin } from "../services/admin/addAdmin";
import { toast } from "react-toastify";

export const useAddAdmin = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: addAdmin,
    onSuccess: (data) => {
      // Update the cache with the new admin data
      queryClient.setQueryData(["admins"], (oldData) => {
        if (!oldData?.data?.admins) return oldData;
        return {
          ...oldData,
          data: {
            ...oldData.data,
            admins: [...oldData.data.admins, data.data]
          }
        };
      });
      
      toast.success("تم إضافة المدير بنجاح");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "حدث خطأ أثناء إضافة المدير");
    },
  });
};
