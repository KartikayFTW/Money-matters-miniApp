import { useQuery } from "@tanstack/react-query";
import { GetBalanceApi } from "./getBalanceApi";

export const useGetBalance = () => {
  const balance = useQuery({
    queryKey: ["balance"],
    queryFn: GetBalanceApi,
  });
  return balance;
};
