import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAdmin } from "../services/admin/updateAdmin";
import { toast } from "react-toastify";

export const useUpdateAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data, id }) => updateAdmin(data, id),
    onSuccess: () => {
      queryClient.invalidateQueries(["admins"]);
      toast.success("تم تحديث بيانات المدير بنجاح");
    },
    onError: (error) => {
      toast.error(error.message || "حدث خطأ أثناء تحديث بيانات المدير");
    },
  });
}; 