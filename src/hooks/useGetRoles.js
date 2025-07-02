import { useQuery } from "@tanstack/react-query";
import { getRoles } from "../services/roles/getRoles";

export const useGetRoles = () => {
  return useQuery({
    queryKey: ["roles"],
    queryFn: getRoles,
  });
};
