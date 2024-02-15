import { useQuery } from "@tanstack/react-query";
import { GetUserDetailsApi } from "./GetUserDetailsApi";

export const useGetUserDetailsQuery = () => {
  const getAllUsers = useQuery({
    queryKey: ["userDetails"],
    queryFn: GetUserDetailsApi,
  });
  return getAllUsers;
};
