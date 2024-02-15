import { useQuery } from "@tanstack/react-query";
import { GetAllUsersApi } from "./GetAllUsersApi";

export const useGetAllUsersQuery = (query) => {
  const getAllUsers = useQuery({
    queryKey: ["allUsers", query],
    queryFn: () => GetAllUsersApi(query),
  });
  return getAllUsers;
};
