import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPermission } from "../services/permissions/createPermission";
import { toast } from "react-toastify";

export const useCreatePermission = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => createPermission(data),
    onSuccess: (data) => {
      queryClient.setQueryData(["permissions"]);
      toast.success("تم إنشاء الصلاحية بنجاح");
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "حدث خطأ أثناء إنشاء الصلاحية"
      );
    },
  });
};
