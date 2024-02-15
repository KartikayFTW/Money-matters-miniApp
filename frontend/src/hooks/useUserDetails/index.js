import { useGetUserDetailsQuery } from "../../api/auth/useGetUserDetailsQuery";

const useUserDetails = () => {
  const { data: userData, isLoading, isError } = useGetUserDetailsQuery();

  return { userData, isLoading, isError };
};

export default useUserDetails;
