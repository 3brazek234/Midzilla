import { useMutation } from "@tanstack/react-query";
import { addAdmin } from "../services/admin/addAdmin";

export const useAddAdmin = () => {
  return useMutation({
    mutationFn: addAdmin,
    onSuccess: () => {
      toast.success("تم إضافة المدير بنجاح");
    },
    onError: () => {
      toast.error("خطأ في إضافة المدير");
    },
  });
};