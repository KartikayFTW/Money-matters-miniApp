import { z } from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useSignInMutation } from "../../api/auth/useSignInMutation";

const useSignIn = () => {
  const signInSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  const { mutateAsync } = useSignInMutation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const result = await mutateAsync(data);

      localStorage.setItem("token", result.token);

      navigate("/");
    } catch (error) {
      console.log("useSignUp Error", error);
    }
  };

  const submitHandler = handleSubmit(onSubmit);

  return { register, errors, submitHandler, watch };
};

export default useSignIn;
