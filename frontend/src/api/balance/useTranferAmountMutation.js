import { useMutation, useQueryClient } from "@tanstack/react-query";
import { transferBalance } from "./transferAmountApi";
import toast from "react-hot-toast";

export const useTransferAmountMutation = () => {
  const queryClient = useQueryClient();
  const transferMutation = useMutation({
    mutationFn: transferBalance,
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
