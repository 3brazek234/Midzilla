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
      if (data.admin) {
        localStorage.setItem("admin", JSON.stringify(data.admin));
      }
      toast.success("تم تسجيل الدخول بنجاح");
      navigate("/dashboard");
    },
    onError: (error) => {
      console.error("Login error:", error);
      toast.error(error.message || "خطأ في تسجيل الدخول");
    },
  });
};
