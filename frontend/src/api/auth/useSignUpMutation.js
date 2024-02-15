import { useMutation } from "@tanstack/react-query";
import { SignUpApi } from "./SignUpApi";
import { useAuth } from "../../context/authContext";
import toast from "react-hot-toast";

export const useSignUpMutation = () => {
  const { login } = useAuth();

  const mutation = useMutation({
    mutationFn: SignUpApi,
    onSuccess: (data) => {
      login(data.token);
      toast.success(data.msg);
    },
    onError: (error) => {
      console.error("Sign up error:", error);
      toast.error(error.message);
    },
  });

  return mutation;
};
