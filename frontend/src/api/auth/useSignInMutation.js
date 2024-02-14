import { useMutation } from "@tanstack/react-query";

import { useAuth } from "../../context/authContext";
import { signIn } from "./SignInApi";
import toast from "react-hot-toast";

export const useSignInMutation = () => {
  const { login } = useAuth();
  const mutation = useMutation({
    mutationFn: signIn,
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
