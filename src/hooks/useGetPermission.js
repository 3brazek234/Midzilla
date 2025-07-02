import { useQuery } from "@tanstack/react-query";
import { getPermission } from "../services/permission/getPermission";

export const useGetPermission = (per_page = 10) => {
  return useQuery({
    queryKey: ["permissions", per_page],
    queryFn: () => getPermission(per_page),
  });
};
