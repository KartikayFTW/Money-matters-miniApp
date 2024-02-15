import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { UpdateUserApi } from "./updateuserApi";

export const useUpdateUserMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: UpdateUserApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["userDetails"]);
      toast.success(data.msg);
    },
    onError: (error) => {
      console.error("Sign in error:", error);
      toast.error(error.message);
    },
  });

  return mutation;
};
