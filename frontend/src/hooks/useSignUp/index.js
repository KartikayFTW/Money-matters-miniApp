import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignUpMutation } from "../../api/auth/useSignUpMutation";
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
  const signUpSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
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
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  const { mutateAsync } = useSignUpMutation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await mutateAsync(data);
      navigate("/");
    } catch (error) {
      console.log("useSignUpHook error", error);
    }
  };

  const submitHandler = handleSubmit(onSubmit);

  return { register, errors, submitHandler, watch };
};

export default useSignUp;
