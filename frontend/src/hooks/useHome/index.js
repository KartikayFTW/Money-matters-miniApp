import { useForm } from "react-hook-form";

import { useGetBalance } from "../../api/balance/useGetBalanceQuery";
import { useTransferAmountMutation } from "../../api/balance/useTranferAmountMutation";
import { useGetAllUsersQuery } from "../../api/auth/useGetAllUsersQuery";

const useHome = (userQuery) => {
  const { data: balanceData, isLoading: isBalanceLoading } = useGetBalance();
  const {
    data: allUsersData,
    isLoading: isUsersLoading,
    failureReason,
  } = useGetAllUsersQuery(userQuery);
  const { mutateAsync, isSuccess, error } = useTransferAmountMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    getValues,
    setValues,
  } = useForm({
    defaultValues: {
      to: "",
      amount: "",
    },
  });

  return {
    balanceData,
    isBalanceLoading,
    allUsersData,
    isUsersLoading,
    mutateAsync,
    isSuccess,
    register,
    handleSubmit,
    getValues,
    setValues,
    watch,
    error,
    failureReason,
  };
};
export default useHome;
