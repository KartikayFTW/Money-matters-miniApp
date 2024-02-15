import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { TransferAmountApi } from "./transferAmountApi";

export const useTransferAmountMutation = () => {
  const queryClient = useQueryClient();
  const transferMutation = useMutation({
    mutationFn: TransferAmountApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["balance"]);
      toast.success(data.msg);
    },
    onError: (error) => {
      console.error("transfer error:", error);
      toast.error(error.message);
    },
  });
  return transferMutation;
};
