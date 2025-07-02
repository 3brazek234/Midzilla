import { useQuery } from "@tanstack/react-query";
import { getAdmins } from "../services/admin/getAdmins";

export const useAdmins = () => {
  return useQuery({
    queryKey: ["admins"],
    queryFn: getAdmins,
  });
};
