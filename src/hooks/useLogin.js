import { useMutation } from "@tanstack/react-query";
import { login } from "../services/login/login";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
      toast.success("تم تسجيل الدخول بنجاح");
    },
    onError: (error) => {
      console.log(error);
      toast.error("خطأ في تسجيل الدخول");
    },
  });
};
