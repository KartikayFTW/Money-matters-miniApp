import { useMutation } from "@tanstack/react-query";

import { useAuth } from "../../context/authContext";

import toast from "react-hot-toast";
import { SignInApi } from "./SignInApi";

export const useSignInMutation = () => {
  const { login } = useAuth();
  const mutation = useMutation({
    mutationFn: SignInApi,
    onSuccess: (data) => {
      toast.success(data.msg);

      login(data.token);
    },
    onError: (error) => {
      console.error("Sign in error:", error);
      toast.error(error.message);
    },
  });

  return mutation;
};
